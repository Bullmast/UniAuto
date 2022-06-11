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
import Header from "./Header";

class UserList extends Component {
    state = {
        users: [],
        trips: []
    };

    async componentDidMount() {
        const response1 = await fetch('/listuser');
        const response2 = await fetch('/listtrip');
        const body1 = await response1.json();
        const body2 = await response2.json();
        this.setState({users: body1, trips: body2});
    }
    render() {
        const {users,trips} = this.state;
        return (
            <div className="App-intro">
                <h2>Utilizadores</h2>
                {users.map(utilizador =>
                    <div key={utilizador.id}>
                        {utilizador.firstName} ({utilizador.lastName})
                    </div>
                )}
                {trips.map(viagem =>
                    <div key={viagem.id}>
                        {viagem.loca_de_inicio} ({viagem.local_de_fim}) {viagem.veiculo}
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
            <Header/>
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
                <form action="/listtrip" method="GET">
                    <button>Listar viagens</button>
                </form>

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

export default  App;
