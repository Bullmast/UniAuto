import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Link} from "react-router-dom";

//local final?
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

            <div className="reservation_container">
                <div className="centered">
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Faça a sua reserva</h4>
                            <div className="row g-3">
                                <form action="/addtrip" method="POST" id="trip-form">

                                    <div className="col-12">
                                        <label htmlFor="address" className="form-label">Morada Destino</label>
                                        <input name="local_i" type="text" className="form-control" id="address" placeholder="1234 Main St"
                                               required/>
                                        <div className="invalid-feedback">
                                            Por favor insira a morada de destino.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="addressfinal" className="form-label">Morada Final</label>
                                        <input name="local_f" type="text" className="form-control" id="addressfinal" placeholder="1234 Main St"
                                               required/>
                                        <div className="invalid-feedback">
                                            Por favor insira a morada final.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="dateinit" className="form-label">Data de inicio</label>
                                        <input name="start" type="text" className="form-control" id="dateinit" placeholder="dd/mm/yy hh:mm:ss"
                                               required/>
                                        <div className="invalid-feedback">
                                            Por favor insira a data.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="datefinal" className="form-label">Data de final</label>
                                        <input name="finish" type="text" className="form-control" id="datefinal" placeholder="dd/mm/yy hh:mm:ss"
                                               required/>
                                        <div className="invalid-feedback">
                                            Por favor insira a data.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="passagers" className="form-label">Passageiros</label>
                                        <input name="passageiros" type="text" className="form-control" id="passagers" placeholder="Insira o número de passageiros"
                                               required/>
                                        <div className="invalid-feedback">
                                            Número Inválido.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="kmsi" className="form-label">Kms iniciais</label>
                                        <input name="kms_i" type="text" className="form-control" id="kmsi" placeholder="Insira o número de kms inicial do veículo"
                                               required/>
                                        <div className="invalid-feedback">
                                            Por favor insira o número de quilómetros
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="kmsf" className="form-label">Kms iniciais</label>
                                        <input name="kms_f" type="text" className="form-control" id="kmsf" placeholder="Insira o número de kms final do veículo"
                                               required/>
                                        <div className="invalid-feedback">
                                            Por favor insira o número de quilómetros
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="vehicle" className="form-label">Id do veículo</label>
                                        <input name="veiculo" type="text" className="form-control" id="vehicle" placeholder="Insira o id do veículo"
                                               required/>
                                        <div className="invalid-feedback">
                                            Por favor insira o id.
                                        </div>
                                    </div>

                                    <button className="w-100 btn btn-primary btn-lg" type="submit">Validar</button>


                                </form>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Reservas;