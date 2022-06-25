import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Veiculos from "./Veiculos";
import Reservas from "./Reservas";
import Utilizadores from "./Utilizadores";
import ListaUtilizadores from "./ListaUtilizadores";
import ListaReservas from "./ListaReservas";
import AdicionaReservas from "./AdicionaReservas";
import FazerCheckout from "./FazerCheckout";
import Sobre from "./Sobre";
import ListaVeiculos from "./ListaVeiculos";
import Header from "./Header";
import {DataList} from "./DataList";


class Home extends Component {
    constructor() {
        super();
        this.state = { showMessage: false  }
    }

    _showMessage = (bool) => {
        this.setState({
            showMessage: bool
        });
    }

    render() {
        return (
            <div className="Home">
                <Header/>

                <div class="w3-row-padding w3-gray w3-padding-64 w3-container">
                    <div class="w3-content">
                        <div class="w3-twothird">
                            <h1>Gestão de Viaturas do Instituto Politécnico de Bragança</h1>
                            <h5 class="w3-padding-32">Aqui pode fazer a gestão das suas viagens de forma segura, rápida e eficiente. Pode contar com uma app fiável, completamente direcionada para todos os utilizadores autorizados.</h5>

                            <p class="w3-text-white">Com a nossa app, pode adicionar e remover utilizadores, veículos mediante autorização. Existe a possibilidade de criar/remover viagens fazendo a respetiva associação do veículo necessário.</p>
                        </div>

                        <div class="w3-center w3-third">
                            <a className="d-flex align-items-center mb-2 mb-md-0 text-dark text-decoration-none justify-content-center">
                                <h1 id="uni"> uni </h1>
                                <h1 id="auto">Auto </h1>
                            </a>
                            <a className="d-flex align-items-center mb-2 mb-md-0 text-dark text-decoration-none justify-content-center">
                                <h1 id="uni"> uni </h1>
                                <h1 id="auto">Auto </h1>
                            </a>
                            <a className="d-flex align-items-center mb-2 mb-md-0 text-dark text-decoration-none justify-content-center">
                                <h1 id="uni"> uni </h1>
                                <h1 id="auto">Auto </h1>
                            </a>
                            <a className="d-flex align-items-center mb-2 mb-md-0 text-dark text-decoration-none justify-content-center">
                                <h1 id="uni"> uni </h1>
                                <h1 id="auto">Auto </h1>
                            </a>
                            <a className="d-flex align-items-center mb-2 mb-md-0 text-dark text-decoration-none justify-content-center">
                                <h1 id="uni"> uni </h1>
                                <h1 id="auto">Auto </h1>
                            </a>
                            <a className="d-flex align-items-center mb-2 mb-md-0 text-dark text-decoration-none justify-content-center">
                                <h1 id="uni"> uni </h1>
                                <h1 id="auto">Auto </h1>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/ListaUtilizadores" element={<ListaUtilizadores/>}/>
                    <Route path="/Utilizadores" element={<Utilizadores/>}/>
                    <Route path="/veiculos" element={<Veiculos/>}/>
                    <Route path="/reservas" element={<Reservas/>}/>
                    <Route path="/AdicionaReservas" element={<AdicionaReservas/>}/>
                    <Route path="/ListaReservas" element={<ListaReservas/>}/>
                    <Route path="/fazerCheckout" element={<FazerCheckout/>}/>
                    <Route path="/Sobre" element={<Sobre/>}/>
                    <Route path="/ListaVeiculos" element={<ListaVeiculos/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default  App;
