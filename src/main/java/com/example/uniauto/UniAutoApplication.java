package com.example.uniauto;

import com.example.uniauto.Veiculo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.annotation.Id;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@SpringBootApplication
@RestController
public class UniAutoApplication {

    public static void main(String[] args) {
        SpringApplication.run(UniAutoApplication.class, args);
    }

    @GetMapping("/matricula")
    public String returnVeiculo(@RequestParam(value = "myMatricula",defaultValue = "null") String matricula) {
        Veiculo v1 = new Veiculo();
        return String.format("Matricula: %s Quilometros: %d Lugares: %d Utilização: %s",v1.getMatricula(),v1.getQuilometros(),v1.getLugares(),v1.getUtilizacao() ? "true" : "false");

    }

}