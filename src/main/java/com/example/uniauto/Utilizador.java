package com.example.uniauto;
import javax.persistence.*;

@Entity
@Table(name = "utilizador")
public class Utilizador {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String nome;
    private String apelido;
    private String codigo; // numero de funcionario
    private String email;
    private String password;

    public Utilizador(String nome, String apelido, String codigo, String email, String pw) {
        this.nome = nome;
        this.apelido = apelido;
        this.codigo = codigo;
        this.email = email;
        this.password = pw;
    }

    public Utilizador() {

    }

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

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }
    public String getCodigo() {
        return codigo;
    }

    public String toString() {
        return this.nome + " " + this.apelido;
    }

    public String getPW() { return this.password;}

}
