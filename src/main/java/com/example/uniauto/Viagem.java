package com.example.uniauto;
import javax.persistence.*;
import java.sql.Time;
import java.time.LocalDate;

@Entity
public class Viagem {

    // hora_de_inicio, local_de_inicio, nº de quilometros iniciais do carro, nº e nome de passageiros
    // hora_fim, local de_fim, nº quilometros finais do carro

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private LocalDate data;
    private Time hora_inicio; // hora do inicio da viagem
    private String local_de_inicio;
    private Time hora_fim; // hora de chegada ao destino
    private Integer passageiros; // numero de pessoas da viagem ou então uma lista com as pessoas
    private int kms_iniciais;
    private int kms_finais;
    private String ocorrencia; // feedback sobre o estado do carro ou de alguma ocorrência a registar

    public Viagem(Time start, Time finish) {
        hora_inicio = start;
        hora_fim = finish;
    }

}
