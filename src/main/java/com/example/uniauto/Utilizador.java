package com.example.uniauto;
import javax.persistence.*;

@Entity
public class Utilizador {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String nome;
    private String apelido;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstName() {
        return nome;
    }

    public void setFirstName(String firstName) {
        this.nome = firstName;
    }

    public String getLastName() {
        return apelido;
    }

    public void setLastName(String lastName) {
        this.apelido = lastName;
    }
}
