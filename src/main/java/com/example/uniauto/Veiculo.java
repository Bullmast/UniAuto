package com.example.uniauto;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

// 12 variaveis de instancia
// matricula, nº de lugares, escola a que pertence, marca, submarca, ano de vida, cor,
// tipo de combustível, tipo de carro (ver abaixo), com ou sem motorista.

@Entity
public class Veiculo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String matricula; // matricula do veiculo
    private int quilometros; // <-- a debater
    private int lugares; // capacidade maxima do veiculo
    private boolean utilizacao; // esta a ser utilizado, mediador de reserva
    private String escola; // escola a que pertence
    private String marca;
    private String modelo;
    private int ano; // ano de fabrico
    private String cor;
    private String combustivel;
    private boolean motorista; // tem ou não motorista
    private String tipo; // tipo do veiculo (carro, autocarro, ...)


    // em uso
    public Veiculo(String matricula, int quilometros, int ano, int lugares, String escola, String marca, String modelo, String t) {
        this.matricula = matricula;
        this.quilometros = quilometros;
        this.lugares = lugares;
        this.escola = escola;
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = "azul";
        this.combustivel = "gasolina 95";
        this.utilizacao = false;
        this.motorista = false;
        this.tipo = t;
    }


    public Veiculo(String matricula, Integer quilometros, Integer lugares,
                   String escola, String marca, String modelo, int ano, String cor, String combustivel, boolean motorista) {
        this.matricula = matricula;
        this.quilometros = quilometros;
        this.lugares = lugares;
        this.escola = escola;
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.combustivel = combustivel;
        this.utilizacao = false;
        this.motorista = motorista;
    }

    public Veiculo() {}

    public void setId(Integer id) {
        this.id = id;
    }

    public boolean isUtilizacao() {
        return utilizacao;
    }

    public String getEscola() {
        return escola;
    }

    public String getMarca() {
        return marca;
    }

    public String getModelo() {
        return modelo;
    }

    public int getano() {
        return ano;
    }

    public String getCor() {
        return cor;
    }

    public String getCombustivel() {
        return combustivel;
    }

    public boolean isMotorista() {
        return motorista;
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

    public void setEscola(String escola) {
        this.escola = escola;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public void setano(int ano) {
        this.ano = ano;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public void setCombustivel(String combustivel) {
        this.combustivel = combustivel;
    }

    public void setMotorista(boolean motorista) {
        this.motorista = motorista;
    }

    //falta dar bound no argumento, para que seja apenas possivel e=0, e=1 ou e=-1 // bounded argument
    public void setTipo(String t) {
        this.tipo = t;
    }

    public String getTipo() {
        return this.tipo;
    }
}