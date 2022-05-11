import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

          <form action="/adduser" method="POST">
            <p>Vamos adicionar um utilizador</p>
            <div>
              <label htmlFor="firstName">Nome próprio:</label> <br/>
              <input name="first" id="firstName" defaultValue="Homer"/>
            </div>
            <div>
              <label htmlFor="lastName">Apelido:</label> <br/>
              <input name="last" id="lastName" defaultValue="Simpson"/>
            </div>
            <div>
              <label htmlFor="codigo">Número de funcionário:</label> <br/>
              <input name="codigo" id="codigo" defaultValue="F"/>
            </div>
            <div>
              <button>Adicionar Utilizador!</button>
              <br/>
            </div>
          </form>
        <form action="/listuser" method="GET">
          <button>Listar utilizador</button>
        </form>
      </header>
    </div>
  );
}

export default App;
