import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import Header from "./Header";
import {DataList} from "./DataList";

export function ListaUtilizadores(){
    return(
        <div className="ListaUtilizadores">
            <Header/>
            <div>
                <DataList statement='user'/>
            </div>
        </div>
    );
}

function Utilizadores(){
    return(
        <div className="Utilizadores">
        <Header/>
        <div id="user-container">
            <form action="/adduser" method="POST" id="user-form">
                <h1>Registo</h1>

                <div>
                    <input name="first" id="firstName" type="text" className="form-control"
                        placeholder="Nome próprio" aria-label="Username"
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
                <div>
                    <input name="email" id="email" type="text" className="form-control" placeholder="Email"
                           aria-label="Username"
                           aria-describedby="basic-addon1"/>
                </div>
                <div>
                    <input name="pw" id="password" type="password" className="form-control" placeholder="Password"
                           aria-label="Username"
                           aria-describedby="basic-addon1"/>
                </div>
                <br/>
                <div id="user-button">
                    <button type="submit" className="btn btn-outline-primary me-2">Registar conta</button>
                </div>

            </form>
        </div>
        </div>
    );
}

export default Utilizadores;