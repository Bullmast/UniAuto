import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import {Link} from "react-router-dom";
import Header from "./Header";

function Reservas(){
    return(
        <div className="Reservas">
           <Header/>
           <div className="reservation_container">
                <div className="col-md-7 col-lg-8">
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Faça a sua reserva</h4>
                        <form className="needs-validation" noValidate>
                            <div className="row g-3">
                                <div className="col-12">
                                    <label htmlFor="username" className="form-label">Nome de Utilizador</label>
                                    <div className="input-group has-validation">
                                        <input type="text" className="form-control" id="username" placeholder="Nome de Utilizador"
                                               required/>
                                            <div className="invalid-feedback">
                                                Insira o seu nome de Utilizador.
                                            </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Destino</label>
                                    <input type="text" className="form-control" id="address" placeholder="Rua de São Brás 12"
                                           required/>
                                        <div className="invalid-feedback">
                                            Insira a morada de Destino.
                                        </div>
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">Cidade</label>
                                    <select className="form-select" id="state" required>
                                        <option value="">Escolha...</option>
                                        <option>Braga</option>
                                        <option>Bragança</option>
                                        <option>Vila do Conde</option>
                                        <option>Viana</option>
                                        <option>Vizela</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Insira a cidade de Destino.
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="zip" className="form-label">Zip</label>
                                    <input type="text" className="form-control" id="Código Postal" placeholder="____-___" required/>
                                        <div className="invalid-feedback">
                                            Insira o código postal de Destino.
                                        </div>
                                </div>
                            </div>

                                <hr className="my-4"/>
                                        <button className="w-100 btn btn-primary btn-lg" type="submit">Validar
                                        </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Reservas;
