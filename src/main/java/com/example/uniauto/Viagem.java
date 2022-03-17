package com.example.uniauto;
import javax.persistence.*;
import java.util.Date;

@Entity
public class Viagem {

    // hora_de_inicio, local_de_inicio, nº de quilometros iniciais do carro, nº e nome de passageiros
    // hora_fim, local de_fim, nº quilometros finais do carro

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    //private LocalDate data;
    private Date hora_inicio; // hora do inicio da viagem
    private String local_de_inicio;
    private Date hora_fim; // hora de chegada ao destino
    private Integer passageiros; // numero de pessoas da viagem ou então uma lista com as pessoas
    private int kms_iniciais;
    private int kms_finais;
    //private String ocorrencia; // feedback sobre o estado do carro ou de alguma ocorrência a registar
                                // podera ser criada uma classe prórpia para aprofundar ocorrencias

    public Viagem(Date start, Date finish) {
        hora_inicio = start;
        hora_fim = finish;
        local_de_inicio = "Bragança";
        passageiros = 3;
        kms_iniciais = 120000;
        kms_finais = 120050;
    }

    public void setHora_inicio(Date hora_inicio) {
        this.hora_inicio = hora_inicio;
    }

    public void setHora_fim(Date hora_fim) {
        this.hora_fim = hora_fim;
    }

    public Date getHora_inicio() {
        return hora_inicio;
    }

    public Date getHora_fim() {
        return hora_fim;
    }

    public Viagem() {}

    public void setLocal_de_inicio(String local_de_inicio) {
        this.local_de_inicio = local_de_inicio;
    }

    public void setPassageiros(Integer passageiros) {
        this.passageiros = passageiros;
    }

    public void setKms_iniciais(int kms_iniciais) {
        this.kms_iniciais = kms_iniciais;
    }

    public void setKms_finais(int kms_finais) {
        this.kms_finais = kms_finais;
    }

    public String getLocal_de_inicio() {
        return local_de_inicio;
    }

    public Integer getPassageiros() {
        return passageiros;
    }

    public int getKms_iniciais() {
        return kms_iniciais;
    }

    public int getKms_finais() {
        return kms_finais;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }
}
