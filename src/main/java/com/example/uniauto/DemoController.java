package com.example.uniauto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalTime;
import java.util.Calendar;
import java.util.Date;



@RestController
public class DemoController {

    @Autowired
    private com.example.uniauto.CustomerRepository CustomerRepository;
    @Autowired
    private com.example.uniauto.VehicleRepository VehicleRepository;
    @Autowired
    private com.example.uniauto.TripRepository TripRepository;

    @PostMapping("/adduser")
    public String addUtilizador(@RequestParam String first, @RequestParam String last, @RequestParam String codigo) {
        Utilizador Utilizador = new Utilizador(first,last,codigo);
        CustomerRepository.save(Utilizador);
        return "Added new Utilizador to repo!";
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

    @PostMapping("/addvehicle")
    public String addVeiculo(@RequestParam String matricula, @RequestParam int kms, @RequestParam int ano,@RequestParam int lugares ,@RequestParam String escola,
                             @RequestParam String marca, @RequestParam String modelo) {
        Veiculo veiculo = new Veiculo(matricula,kms,ano,lugares,escola,marca,modelo);
        VehicleRepository.save(veiculo);
        return "Added new Vehicle to repo!";
    }

    @GetMapping("/listvehicle")
    public Iterable<Veiculo> getVeiculos() {
        return VehicleRepository.findAll();
    }

    @GetMapping("/findvehicle/{id}")
    public Veiculo findVeiculoById(@PathVariable Integer id) {
        return VehicleRepository.findVeiculoById(id);
    }



    //    private Time hora_inicio; private String local_de_inicio;
    //    private Time hora_fim; private Integer passageiros; private int kms_iniciais;
    //    private int kms_finais; private String ocorrencia

    @PostMapping("/addtrip")
    public String addViagem(@RequestParam String start, @RequestParam String finish, @RequestParam String local_i,
                            @RequestParam String local_f, @RequestParam int passageiros, @RequestParam int kms_i, @RequestParam int kms_f) {
        DateFormat formatter = new SimpleDateFormat("dd/MM/yyyy hh:mm:ss");
        try {
            Date s = formatter.parse(start);
            Date f = formatter.parse(finish);
            Viagem viagem = new Viagem(s,f,local_i,local_f,passageiros,kms_i,kms_f);
            TripRepository.save(viagem);
            return "Added new trip to the repo!";
        } catch (ParseException e) {
            // This can happen if you are trying to parse an invalid date, e.g., 25:19:12.
            // Here, you should log the error and decide what to do next
            e.printStackTrace();
            return "Failed to add a new trip to the repo :(";
        }
}

    @GetMapping("/listtrip")
    public Iterable<Viagem> getViagens() {
        return TripRepository.findAll();
    }

    @GetMapping("/findtrip/{id}")
    public Viagem findViagemById(@PathVariable Integer id) {
        return TripRepository.findViagemById(id);
    }



}