import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import Header from "./Header";
import {DataList} from "./DataList";

function ListaUtilizadores(){
    return(
        <div className="ListaUtilizadores">
        <Header/>
        <div>
            <DataList statement='user'/>
        </div>
        </div>
    );
}

export default ListaUtilizadores;