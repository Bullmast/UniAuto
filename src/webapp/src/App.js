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
import ListaUtilizadores from "./ListaUtilizadores"
import ListaReservas from "./ListaReservas"
import AdicionaReservas from "./AdicionaReservas"
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
                  <h1>Gestão de Viaturas da Universidade de Bragança</h1>
                  <h5 class="w3-padding-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>

                  <p class="w3-text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <div class="w3-center w3-third">
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
                </Routes>
            </div>
        </Router>
    );
}

export default  App;
