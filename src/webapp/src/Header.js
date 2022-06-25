import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import { Link } from "react-router-dom";

class Header extends Component {
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
                <div className="col-md-3 text-end">
                    <a href="logout">
                        <button type="button" className="btn btn-outline-primary me-2">Logout</button>
                    </a>
                </div>
            </header>
        )
    }
}

export default Header;

