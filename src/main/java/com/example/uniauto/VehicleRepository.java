package com.example.uniauto;

import com.example.uniauto.Veiculo;
import org.springframework.data.repository.CrudRepository;

public interface VehicleRepository extends CrudRepository<Veiculo, Integer> {

    Veiculo findVeiculoById(Integer id);

}