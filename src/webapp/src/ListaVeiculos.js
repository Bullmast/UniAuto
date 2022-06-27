import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import Header from "./Header";
import {DataList} from "./DataList";

function ListaVeiculos(){
    return(
        <div className="ListaVeiculos">
        <Header/>
        <div>
            <DataList statement='veiculo'/>
        </div>
        </div>
    );
}

export default ListaVeiculos;