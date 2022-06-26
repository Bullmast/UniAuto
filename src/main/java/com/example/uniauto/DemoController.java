package com.example.uniauto;

import com.example.uniauto.Exceptions.VechicleCapacityExceededException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;


import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalTime;
import java.util.*;


@RestController
public class DemoController {

    @Autowired
    private com.example.uniauto.CustomerRepository CustomerRepository;
    @Autowired
    private com.example.uniauto.VehicleRepository VehicleRepository;
    @Autowired
    private com.example.uniauto.TripRepository TripRepository;


    @PostMapping("/adduser")
    public RedirectView addUtilizador(@RequestParam String first, @RequestParam String last, @RequestParam String codigo) {
        Utilizador Utilizador = new Utilizador(first,last,codigo);
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

    // @RequestParam(defaultValue = "false") Boolean autocarro

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
    @GetMapping("/findAvailableVehicle")
    public Iterable<Veiculo> getVeiculosDisponiveis(@RequestParam (defaultValue = "01/01/01 00:00:00") String start, @RequestParam (defaultValue = "01/01/01 00:30:00") String finish,
                                                    @RequestParam (defaultValue = "UMINHO") String local_f,
                                                    @RequestParam (defaultValue = "1") String passageiros) throws ParseException {

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
            System.out.println("string veiculo: "+veiculo);
            int v = Integer.parseInt(veiculo);
            int kms = kmsInit(v);

            if(local_f.equals("Ida_e_Volta")){
                local_f = escolaOrigin(v);
            }

            String obs = " ";

            RedirectView redirectview = new RedirectView();
            redirectview.setUrl("/");

            if (checkVeiculo(v, p)) {
                Viagem viagem = new Viagem(s, f, local_i, local_f, p, kms, 0, v, 0, obs);
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


    @PutMapping("/fazerCheckout/{id}")
    public Viagem initcheckout(@PathVariable int id, @RequestParam String obs) {
        Viagem v = TripRepository.findViagemById(id);
        v.setObservacoes(obs);
        return TripRepository.save(v);
    }

    //@RequestMapping("/veiculo/{id}")
    @PutMapping("/veiculo/{id}")
    public Veiculo initcheckout2(@PathVariable int id, @RequestParam int km_finais){
        Veiculo ve = VehicleRepository.findVeiculoById(id);
        ve.setKm_finais(km_finais);
        ve.setQuilometros(km_finais);
        return VehicleRepository.save(ve);
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
