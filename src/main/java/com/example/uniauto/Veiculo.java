package com.example.uniauto;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Veiculo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String matricula; // matricula do veiculo
    private Integer quilometros; // <-- a debater
    private Integer lugares; // capacidade maxima do veiculo
    private boolean utilizacao; // esta a ser utilizado, mediador de reserva

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }

    public void setQuilometros(Integer quilometros) {
        this.quilometros = quilometros;
    }

    public void setLugares(Integer lugares) {
        this.lugares = lugares;
    }

    public void setUtilizacao(boolean utilizacao) {
        this.utilizacao = utilizacao;
    }

    public String getMatricula() {
        return this.matricula;
    }

    public Integer getQuilometros() {
        return quilometros;
    }

    public Integer getLugares() {
        return lugares;
    }

    public boolean getUtilizacao() {
        return utilizacao;
    }
}