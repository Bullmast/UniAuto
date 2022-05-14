import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

        <header
            className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <h1 id="uni"> uni </h1>
                <h1 id="auto">Auto </h1>
            </a>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
                <li><a href="#" className="nav-link px-2 link-dark">Reserva</a></li>
                <li><a href="#" className="nav-link px-2 link-dark">Veículos</a></li>
                <li><a href="#" className="nav-link px-2 link-dark">FAQs</a></li>
                <li><a href="#" className="nav-link px-2 link-dark">Sobre</a></li>
            </ul>

            <div className="col-md-3 text-end" >
                <button type="button" className="btn btn-outline-primary me-2">Login</button>
                <button type="button" className="btn btn-primary">Registro</button>
            </div>
        </header>

        <div id="container">
        <form action="/adduser" method="POST" id="user-form">
            <p>Vamos adicionar um utilizador:</p>
            <div>
                <input name="first" id="firstName" type="text" className="form-control" placeholder="Nome prórpio" aria-label="Username"
                       aria-describedby="basic-addon1"/>
            </div>
            <div>
                <input name="last" id="lastName" type="text" className="form-control" placeholder="Apelido" aria-label="Username"
                       aria-describedby="basic-addon1"/>
            </div>
            <div>
                <input name="codigo" id="codigo" type="text" className="form-control" placeholder="Codigo" aria-label="Username"
                       aria-describedby="basic-addon1"/>
            </div>
            <br/>
            <div>
                <Button type="submit" id="user-button">Adicionar Utilizador</Button>
            </div>
        </form>

        <form action="/listuser" method="GET">
            <Button type="submit">Listar utilizadores</Button>
        </form>
        </div>
    </div>
  );
}

export default App;
