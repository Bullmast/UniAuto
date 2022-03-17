package com.example.uniauto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Time;

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

    @GetMapping("/listuser")
    public Iterable<Utilizador> getUtilizadores() {
        return CustomerRepository.findAll();
    }

    @GetMapping("/finduser/{id}")
    public Utilizador findUtilizadorById(@PathVariable Integer id) {
        return CustomerRepository.findUtilizadorById(id);
    }

    @PostMapping("/addvehicle")
    public String addVeiculo(@RequestParam String matricula, @RequestParam int kms, @RequestParam int ano,@RequestParam int lugares ,@RequestParam String escola ) {
        Veiculo veiculo = new Veiculo(matricula,kms,ano,lugares,escola);
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
    @GetMapping("/addtrip")
    public String addViagem(@RequestParam Time start, @RequestParam Time finish) {
        Viagem viagem = new Viagem(start,finish);
        TripRepository.save(viagem);
        return "Added new Trip to repo!";

    }



}