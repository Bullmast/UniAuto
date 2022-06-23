import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import Header from "./Header";

function Utilizadores(){
    return(
        <div className="Utilizadores">
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
        </div>
        </div>
    );
}

export default Utilizadores ;