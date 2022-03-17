package com.example.uniauto;

import com.example.uniauto.Viagem;
import org.springframework.data.repository.CrudRepository;

public interface TripRepository extends CrudRepository<Viagem, Integer> {

    Viagem findVeiculoById(Integer id);

}