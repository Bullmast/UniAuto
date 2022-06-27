package com.example.uniauto;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class UniAutoApplication {
    public static void main(String[] args) {
        SpringApplication.run(UniAutoApplication.class, args);

    }
}