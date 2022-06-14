import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import Header from "./Header";
import {DataList} from "./DataList";

function ListaReservas(){
    return(
        <div className="ListaRervas">
        <Header/>
        <div>
            /*this.state.showMessage && */(<DataList statement='trip' />
        </div>
        </div>
    );
}

export default ListaReservas;