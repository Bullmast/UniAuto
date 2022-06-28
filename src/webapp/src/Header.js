import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import { Link } from "react-router-dom";
import {DataList} from "./DataList";

export class Login extends Component {
    render() {
        return (
            <div>
                <form action="/Login" method="GET" id="user-form">
                    <h1>Login</h1>
                    <div>
                        <input name="email" id="email" type="text" className="form-control"
                               placeholder="utilizador@email.com" aria-label="email"
                               aria-describedby="basic-addon1"/>
                    </div>
                    <div>
                        <input name="pw" id="password" type="text" className="form-control"
                               placeholder="password" aria-label="Username"
                               aria-describedby="basic-addon1"/>
                    </div>
                    <br/>
                    <div id="user-button">
                        <button type="submit" className="btn btn-outline-primary me-2">Login</button>
                    </div>
                </form>
            </div>

        )
    }
}

export default class Header extends Component {
    render() {
        return (
            <header
                className="shadow-sm d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-0 border-bottom">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <h1 id="uni"> uni </h1>
                    <h1 id="auto">Auto </h1>
                </a>

                <nav class="navbar">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#">Utilizadores</a>
                            <ul>
                                <li><Link to="/Utilizadores" className="nav-link px-2 link-dark">Adiciona Utilizador</Link></li>
                                <li><Link to="/ListaUtilizadores" className="nav-link px-2 link-dark">Lista de Utilizadores</Link></li>
                            </ul>
                        </li>
                        <li><a href="#">Reservas</a>
                            <ul>
                                <li><Link to="/adicionaReservas" className="nav-link px-2 link-dark">Adiciona Reserva</Link></li>
                                <li><Link to="/ListaReservas" className="nav-link px-2 link-dark">Lista de Viagens</Link></li>
                                <li><Link to="/fazerCheckout" className="nav-link px-2 link-dark">Faz Checkout da Viagem</Link></li>
                            </ul>
                        </li>
                        <li><a href="#">Veiculos</a>
                            <ul>
                                <li><Link to="/veiculos" className="nav-link px-2 link-dark">Adiciona Veículo</Link></li>
                                <li><Link to="/ListaVeiculos" className="nav-link px-2 link-dark">Lista de Veículos</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/Sobre" className="nav-link px-2 link-dark">Sobre</Link></li>
                    </ul>
                </nav>
                <div>
                    <p>Olá,
                    { <DataList statement="log"/> }
                    </p>
                </div>
                <div className="col-md-3 text-end">
                    <Link to="/Login">
                        <button type="button" className="btn btn-outline-primary me-2">Login</button>
                    </Link>
                    <Link to="/Utilizadores">
                        <button type="button" className="btn btn-primary me-2">Registo</button>
                    </Link>
                </div>
            </header>
        )
    }
}



