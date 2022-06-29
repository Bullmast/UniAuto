import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import { Link } from "react-router-dom";
import {DataList} from "./DataList";

export class Logout extends Component{
    render(){
        return (
            <div>
                <form action="/Logout" method="GET" id="user-form">
                    <div>
                        <h1>Obrigado pela sua visita</h1>
                        <div id="user-button">
                            <button type="submit" className="btn btn-outline-primary me-2">Voltar</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export class Login extends Component {
    render() {
        return (
            <div>
                <form action="/Login" method="GET" id="user-form">
                    <h1>Login</h1>
                    <div>
                        <input name="email" id="email" type="text" className="form-control"
                               placeholder="utilizador@email.com" aria-label="email"
                               aria-describedby="basic-addon1"/>
                    </div>
                    <div>
                        <input name="pw" id="password" type="text" className="form-control"
                               placeholder="password" aria-label="Username"
                               aria-describedby="basic-addon1"/>
                    </div>
                    <br/>
                    <div id="user-button">
                        <button type="submit" className="btn btn-outline-primary me-2">Login</button>
                    </div>
                </form>
            </div>

        )
    }
}

export default class Header extends Component{
    render(){
        return(
            <DataList statement="log"/>
        )
    }
}

