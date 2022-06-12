import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header
                className="shadow-sm d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-0 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <h1 id="uni"> uni </h1>
                    <h1 id="auto">Auto </h1>
                </a>

                <nav class="navbar">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Utilizadores</a>
                            <ul>
                                <li><a href="/">Adicionar Utilizador</a></li>
                                <li><a href="/listuser">Listar Utilizadores</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Reservas</a>
                            <ul>
                                <li><a href="/reservas">Adicionar Reserva</a></li>
                                <li><a href="/reservas">Listar Reservas</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Veiculos</a>
                            <ul>
                                <li><a href="/veiculos">Adicionar Veiculo</a></li>
                                <li><a href="/listvehicle">Listar Veiculos</a></li>
                            </ul>
                        </li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Sobre</a></li>
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

export default  Header;

