import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom';
import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Veiculos from "./Veiculos";
import Reservas from "./Reservas";

class UserList extends Component {
    state = {
        users: []
    };

    async componentDidMount() {
        const response = await fetch('/listuser');
        const body = await response.json();
        this.setState({users: body});
    }
    render() {
        const {users} = this.state;
        return (
            <div className="App-intro">
                <h2>Utilizadores</h2>
                {users.map(utilizador =>
                    <div key={utilizador.id}>
                        {utilizador.firstName} ({utilizador.lastName})
                    </div>
                )}
            </div>
            )
    }
}

class Home extends Component {
    constructor() {
        super();
        this.state = { showMessage: false }
    }

    _showMessage = (bool) => {
        this.setState({
            showMessage: bool
        });
    }
    render() {

        return (
        <div className="Home">
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

            <div id="user-container">
                <form action="/adduser" method="POST" id="user-form">
                    <p>Vamos adicionar um utilizador:</p>

                    <div>
                        <input name="first" id="firstName" type="text" className="form-control"
                               placeholder="Nome prórpio" aria-label="Username"
                               aria-describedby="basic-addon1"/>
                    </div>

                    <div>
                        <input name="last" id="lastName" type="text" className="form-control" placeholder="Apelido"
                               aria-label="Username"
                               aria-describedby="basic-addon1"/>
                    </div>
                    <div>
                        <input name="codigo" id="codigo" type="text" className="form-control" placeholder="Codigo"
                               aria-label="Username"
                               aria-describedby="basic-addon1"/>
                    </div>
                    <br/>
                    <div id="user-button">
                        <button type="submit" className="btn btn-outline-primary me-2">Adicionar Utilizador</button>
                    </div>
                </form>
                <div>
                    <button type="submit" className="btn btn-primary" onClick={this._showMessage.bind(null, true)}>Listar Utilizadores</button>
                    { this.state.showMessage && (<UserList/>) }
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
                    <Route path="/veiculos" element={<Veiculos/>}/>
                    <Route path="/reservas" element={<Reservas/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
