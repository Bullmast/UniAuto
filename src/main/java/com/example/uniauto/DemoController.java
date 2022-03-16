package com.example.uniauto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class DemoController {

    @Autowired
    private com.example.uniauto.CustomerRepository CustomerRepository;
    @Autowired
    private com.example.uniauto.VehicleRepository VehicleRepository;

    @PostMapping("/adduser")
    public String addUtilizador(@RequestParam String first, @RequestParam String last) {
        Utilizador Utilizador = new Utilizador();
        Utilizador.setFirstName(first);
        Utilizador.setLastName(last);
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
    public String addVeiculo(@RequestParam String matricula) {
        Veiculo veiculo = new Veiculo();
        veiculo.setMatricula(matricula);
        veiculo.setLugares(7);
        veiculo.setQuilometros(0);
        veiculo.setUtilizacao(false);
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
}