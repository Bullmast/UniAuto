import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Header from "./Header";

function Sobre(){

    return(
        <div className="Sobre">
            <Header/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div class="w3-row-padding w3-gray w3-padding-64 w3-container">
                <div class="w3-content">
                    <div class="w3-twothird">
                        <h1>Aplicação UniAuto desenvolvida por:</h1>
                        <br/>
                        <br/>
                        <h5 className="w3-padding-30">João Reis "84671@alunos.uminho.pt"</h5>
                        <h5 className="w3-padding-30">João Barbosa "a82044@alunos.uminho.pt"</h5>
                        <h5 className="w3-padding-30">João Marques "a84684@alunos.uminho.pt"</h5>
                        <h5 className="w3-padding-30">Nuno Machado "a68702@alunos.uminho.pt"</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sobre;

