package com.example.uniauto;
import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "viagem")
public class Viagem {

    // hora_de_inicio, local_de_inicio, nº de quilometros iniciais do carro, nº e nome de passageiros
    // hora_fim, local de_fim, nº quilometros finais do carro

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private Date hora_inicio; // hora do inicio da viagem
    private Date hora_fim; // hora prevista de chegada ao destino
    private String local_de_inicio;
    private String local_de_fim;
    private Integer n_passageiros; // numero de pessoas da viagem ou então uma lista com as pessoas
    private String utilizadores; // lista dos id dos utilizadores
    private int condutor; // ID do utilizador condutor
    private int kms_iniciais;
    private int kms_percorridos;
    private int veiculo; // ID do veiculo utilizado
    //private String ocorrencia; // feedback sobre o estado do carro ou de alguma ocorrência a registar
                                // podera ser criada uma classe prórpia para aprofundar ocorrencias
    //private String motivo; // motivo da reserva do veiculo

    public Viagem(Date start, Date finish, String local_i, String local_f, int passageiros, int kms_i, int kms_p, int veiculo) {
        hora_inicio = start;
        hora_fim = finish;
        local_de_inicio = local_i;
        local_de_fim = local_f;
        this.n_passageiros = passageiros;
        kms_iniciais = kms_i;
        kms_percorridos = kms_p;
        this.veiculo = veiculo;
    }

    public Viagem() {}

    public String getUtilizadores() {
        return utilizadores;
    }

    public void setUtilizadores(String nomes) {
        this.utilizadores = nomes;
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

    public void setLocal_de_inicio(String local_de_inicio) {
        this.local_de_inicio = local_de_inicio;
    }

    public void setLocal_de_fim(String local_de_fim) {
        this.local_de_fim = local_de_fim;
    }

    public void setPassageiros(Integer passageiros) {
        this.n_passageiros = passageiros;
    }

    public void setKms_iniciais(int kms_iniciais) {
        this.kms_iniciais = kms_iniciais;
    }

    public void setKms_percorridos(int kms_percorridos) {
        this.kms_percorridos = kms_percorridos;
    }

    public String getLocal_de_inicio() {
        return local_de_inicio;
    }

    public String getLocal_de_fim() {return local_de_fim;}

    public Integer getPassageiros() {
        return n_passageiros;
    }

    public int getKms_iniciais() {
        return kms_iniciais;
    }

    public int getKms_percorridos(){return  kms_percorridos;}

    public int getVeiculo() {return this.veiculo;}

    public void setVeiculo(Integer v) {this.veiculo = v;}

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }
}
