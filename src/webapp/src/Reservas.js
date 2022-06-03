import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import {Link} from "react-router-dom";

function Reservas(){
    return(
        <div className="Reservas">


            <header
                className="shadow-sm d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-0 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <h1 id="uni"> uni </h1>
                    <h1 id="auto">Auto </h1>
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
                    <li><Link to="/reservas" className="nav-link px-2 link-dark">Reserva</Link></li>
                    <li><Link to="/veiculos" className="nav-link px-2 link-dark">Veículos</Link></li>
                    <li><a href="#" className="nav-link px-2 link-dark">FAQs</a></li>
                    <li><a href="#" className="nav-link px-2 link-dark">Sobre</a></li>
                </ul>

                <div className="col-md-3 text-end" >
                    <button type="button" className="btn btn-outline-primary me-2">Logout</button>
                </div>
            </header>

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
    );
}


export default Reservas;