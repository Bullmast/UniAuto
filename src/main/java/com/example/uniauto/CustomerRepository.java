package com.example.uniauto;

import com.example.uniauto.Utilizador;
import org.springframework.data.repository.CrudRepository;

public interface CustomerRepository extends CrudRepository<Utilizador, Integer> {

    Utilizador findUtilizadorById(Integer id);

}