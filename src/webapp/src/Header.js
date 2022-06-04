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

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
                    <li><Link to="/reservas" className="nav-link px-2 link-dark">Reserva</Link></li>
                    <li><Link to="/veiculos" className="nav-link px-2 link-dark">Veículos</Link></li>
                    <li><a href="#" className="nav-link px-2 link-dark">FAQs</a></li>
                    <li><a href="#" className="nav-link px-2 link-dark">Sobre</a></li>
                </ul>

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
