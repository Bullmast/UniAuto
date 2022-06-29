package com.example.uniauto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;


//@ResponseStatus(value= HttpStatus.NOT_FOUND, reason="No such Order")  // 404
@RestController
public class DemoController {

    @Autowired
    private com.example.uniauto.CustomerRepository CustomerRepository;
    @Autowired
    private com.example.uniauto.VehicleRepository VehicleRepository;
    @Autowired
    private com.example.uniauto.TripRepository TripRepository;

    public Utilizador user;

    @GetMapping("/ListaTripUtil")
    public Iterable<Viagem> listaViagemUtil(){
        Iterable<Viagem> v = this.TripRepository.findAll();
        List<Viagem> v2 = new ArrayList<Viagem>();

        for(Viagem viagem: v){
            if(viagem.getCondutor() == this.user.getId()){
                v2.add(viagem);
            }
        }

        return v2;

    }
    @GetMapping("/Login")
    public RedirectView loginUtilizador(@RequestParam String email, @RequestParam String pw) {
        RedirectView redirectview = new RedirectView();
        try {
            Utilizador u = this.CustomerRepository.findUtilizadorByEmail(email);
            if (u.getPW().equals(pw)) {
                this.user = u;
                System.out.println(this.user.toString());
                redirectview.setUrl("/");
            }
        } catch (NullPointerException e) {
            redirectview.setUrl("/loginError");
        }
        return redirectview;
    }

    @GetMapping("/Logout")
    public RedirectView logoutUtilizador() {
        this.user = new Utilizador();
        RedirectView redirectview = new RedirectView();
        redirectview.setUrl("/");
        return redirectview;
    }

    @PostMapping("/adduser")
    public RedirectView addUtilizador(@RequestParam String first, @RequestParam String last, @RequestParam String codigo,
                                      @RequestParam String email, @RequestParam String pw) {
        Utilizador Utilizador = new Utilizador(first,last,codigo,email,pw);
        CustomerRepository.save(Utilizador);
        RedirectView redirectview = new RedirectView();
        redirectview.setUrl("/");
        return redirectview;
    }

    @DeleteMapping("/deleteuser/{id}")
    public String deleteUser(@PathVariable int id) {
        this.CustomerRepository.deleteById(id);
        return "Deleted user from the repo!";
    }

    @GetMapping("/listuser")
    public Iterable<Utilizador> getUtilizadores() {
        return CustomerRepository.findAll();
    }

    @GetMapping("/finduser/{id}")
    public Utilizador findUtilizadorById(@PathVariable Integer id) {
        return CustomerRepository.findUtilizadorById(id);
    }

    @GetMapping("/stateUser")
    public Utilizador getUserAtual(){
        return this.user;
    }

    public Iterable<Viagem> getViagemVeiculo(int id){
        Iterable<Viagem> trip = TripRepository.findAll();
        List<Viagem> trips = new ArrayList<Viagem>();

        for(Viagem v: trip){
            if(v.getVeiculo()==id){
                trips.add(v);
            }
        }
        return trips;
    }
    @GetMapping("/adicionaReservas/{start}/{finish}/{passageiros}/{local_f}")
    public Iterable<Veiculo> getVeiculosDisponiveis(@PathVariable String start, @PathVariable  String finish,
                                                    @PathVariable String passageiros,
                                                    @PathVariable String local_f) throws ParseException {
        System.out.println(start);
        Iterable<Veiculo> vs1 = VehicleRepository.findAll();
        List<Veiculo> vs2 = new ArrayList<Veiculo>();
        DateFormat formatter = new SimpleDateFormat("dd/MM/yyyy hh:mm:ss");
        Date s = formatter.parse(start);
        Date f = formatter.parse(finish);
        int p = Integer.parseInt(passageiros);

        for(Veiculo v1 : vs1){
            int flag=0;
            if(v1.getEscola().equals(local_f) && v1.getLugares()>=p){
                Iterable<Viagem> trip = getViagemVeiculo(v1.getId());
                flag=1;
                for(Viagem v2: trip){
                    if(s.compareTo(v2.getHora_fim())>0 || f.compareTo(v2.getHora_inicio())<0){
                        flag=1;
                    }
                    else{
                        flag=0;
                        break;
                    }
                }
            }
            if(flag == 1){
                vs2.add(v1);
            }
        }


        return vs2;
    }
    @PostMapping("/addvehicle")
    public RedirectView addVeiculo(@RequestParam String matricula, @RequestParam int kms, @RequestParam int ano,@RequestParam int lugares ,@RequestParam String escola,
                             @RequestParam String marca, @RequestParam String modelo, @RequestParam String tipo) {
        //System.out.println("tipo: "+tipo);
        Veiculo veiculo = new Veiculo(matricula,kms,ano,lugares,escola,marca,modelo,tipo,0);
        VehicleRepository.save(veiculo);
        RedirectView redirectview = new RedirectView();
        redirectview.setUrl("/");
        return redirectview;
    }

    @GetMapping("/listvehicle")
    public Iterable<Veiculo> getVeiculos() {
        return VehicleRepository.findAll();
    }

    @GetMapping("/findvehicle/{id}")
    public Veiculo findVeiculoById(@PathVariable Integer id) {
        return VehicleRepository.findVeiculoById(id);
    }

    @DeleteMapping("/deletevehicle/{id}")
    public String deleteVehicle(@PathVariable int id) {
        this.VehicleRepository.deleteById(id);
        return "Deleted vehicle from the repo!";
    }



    //    private Time hora_inicio; private String local_de_inicio;
    //    private Time hora_fim; private Integer passageiros; private int kms_iniciais;
    //    private int kms_finais; private String ocorrencia

    public boolean checkVeiculo(int id,int passageiros) {
        Veiculo v = VehicleRepository.findVeiculoById(id);
        return passageiros <= v.getLugares();
    }

    public int kmsInit(int id){
        Veiculo v = VehicleRepository.findVeiculoById(id);
        return v.getQuilometros();
    }

    public String escolaOrigin(int id){
        Veiculo v = VehicleRepository.findVeiculoById(id);
        return v.getEscola();
    }
    @PostMapping("/addtrip")
    public RedirectView addViagem(@RequestParam String start, @RequestParam String finish, @RequestParam String local_i,
                            @RequestParam String local_f, @RequestParam String passageiros, @RequestParam String veiculo) {
        DateFormat formatter = new SimpleDateFormat("dd/MM/yy HH:mm");
        try {
            Date s = formatter.parse(start);
            Date f = formatter.parse(finish);
            int p = Integer.parseInt(passageiros);
            int v = Integer.parseInt(veiculo);
            int kms = kmsInit(v);

            if(local_f.equals("Ida_e_Volta")){
                local_f = escolaOrigin(v);
            }

            String obs = " ";

            RedirectView redirectview = new RedirectView();
            redirectview.setUrl("/");

            if (checkVeiculo(v, p)) {
                Viagem viagem = new Viagem(s, f, local_i, local_f, p, kms, 0, v, 0, obs,user.getId());
                TripRepository.save(viagem);
                return redirectview;
            }
            else {
                System.out.println("Erro: Capacidade do Veiculo excedida.");
                return redirectview;
            }


        } catch (ParseException e) {
            // This can happen if you are trying to parse an invalid date, e.g., 25:19:12.
            // Here, you should log the error and decide what to do next
            e.printStackTrace();
            RedirectView redirectview = new RedirectView();
            redirectview.setUrl("/");
            return redirectview;
        }
    }

    //@RequestMapping("/reservas/{id}")
    @PutMapping("/reservas/{id}")
    public Viagem acceptTrip(@PathVariable int id, @RequestBody String value) {
        Viagem v = TripRepository.findViagemById(id);
        StringBuilder str = new StringBuilder(value);
        str.deleteCharAt(0);
        str.deleteCharAt(value.length()-2);
        System.out.println("auth value: "+str);
        v.setAutorizacao(str.toString());
        return TripRepository.save(v);
    }


    @PostMapping("/initcheckout")
    public RedirectView initcheckout(@RequestParam String id, @RequestParam(required = false) String obs, @RequestParam String km_p) {
        int new_id = Integer.parseInt(id);
        int new_km = Integer.parseInt(km_p);
        Viagem v = TripRepository.findViagemById(new_id);
        System.out.println(v.toString());
        v.setObservacoes(obs);
        v.setKms_percorridos(new_km - v.getKms_iniciais());
        v.setAutorizacao("Terminado");
        Veiculo ve = VehicleRepository.findVeiculoById(v.getVeiculo());
        ve.setQuilometros(new_km);
        VehicleRepository.save(ve);
        TripRepository.save(v);
        RedirectView redirectview = new RedirectView();
        redirectview.setUrl("/");
        return redirectview;
    }

    @GetMapping("/listtrip")
    public Iterable<Viagem> getViagens() {
        return TripRepository.findAll();
    }

    @GetMapping("/findtrip/{id}")
    public Viagem findViagemById(@PathVariable Integer id) {
        return TripRepository.findViagemById(id);
    }

    @DeleteMapping("/reservas/{id}")
    public ResponseEntity deleteClient(@PathVariable int id) {
        TripRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
