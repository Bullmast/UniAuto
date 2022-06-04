import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import React, {Component} from "react";
import {Link} from "react-router-dom";

class VehicleForm extends Component {
    render() {
        return (
    <div className="bloco1">      
    <br/>
    <form action="/addvehicle" method="POST">
    <p>Vamos adicionar um veículo.</p>
    <div>
        <input name="matricula" id="mat" placeHolder="Matrícula" className="form-control"/>
    </div>
    <div>
        <input name="kms" id="quilometros" placeholder="Quilómetros" className="form-control"/>
    </div>
    <div>
        <input name="ano" id="anofabrico" placeholder="Ano de Fabríco" className="form-control"/>
    </div>
    <div>
        <input name="lugares" id="espaço" placeholder="Lugares" className="form-control"/>
    </div>
    <div>
        <input name="escola" id="escola" placeholder="Escola" className="form-control"/>
    </div>
    <div>
        <input name="marca" id="marca" placeholder="Marca" className="form-control"/>
    </div>
    <div>
        <input name="modelo" id="modelo" placeholder="Modelo" className="form-control"/>
    </div>
    <label for="tipo">Selecione o tipo de veiculo:</label>
    <select name="tipo" id="tipo" class="form-select" aria-label="Default select example">
        <option value="carro">Carro</option>
        <option value="autocarro">Autocarro</option>
        <option value="carrinha">Carrinha</option>
    </select>
    {/*
    <div>
        <input type="checkbox" id="autocarro" name="autocarro"
               checked>
        <label for="autocarro">Autocarro</label>
    </div>
    */}
    <br/>
    <div>
        <button className="btn btn-outline-primary me-2">Adicionar veículo!</button> <br/>
    </div>
</form>
<form action="/listvehicle" method="GET">
    <button id="vehicle-btn" className="btn btn-primary me-2">Listar veículos</button>
</form>
<br/>
</div>
     
        )
    }
}

function Veiculo(){

    const clickButton=(slider)=>{
            alert("Aqui será algo como escolha para a reserva do veículo");
    }

    const slides =[
        {image: "https://www.razaoautomovel.com/wp-content/uploads/2021/05/velocidade_furiosa_toyota_supra_1_925x520_acf_cropped.jpeg", title: "Toyota Supra", description: "Escreve aqui a descrição do Toyota Supra", clickEvent:clickButton},
        {image: "https://www.super-hobby.pt/zdjecia/5/4/6/981_rd.jpg", title: "Nissan Skyline", description: "Escreve aqui a descrição do Nissan Skyline", clickEvent:clickButton},
        {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ23dinVoQuKOxesf89wuVWWXhVcVgVeTMTCA&usqp=CAU", title: "Ferrari F50", description: "Escreve aqui a descrição do Ferrari F50", clickEvent:clickButton},
        {image: "https://media.1815.io/topgear/i/full/2020/03/bmw-m4-v8-biturbo-2-e1583739624279.jpg", title: "BMW M4 ", description: "Escreve aqui a descrição do BMW M4", clickEvent:clickButton},
        {image: "https://cs2.worldofmods.org/screenshots/0df24/2020-11/original/52936c8914259d674622992a341088f5408c4f1a/378915-BeamNG-drive-x64-2020-11-13-17-19-54-471.jpg", title: "Ford GT", description: "Escreve aqui a descrição do Ford GT", clickEvent:clickButton}
        ];

    const slideLeft=()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight=()=>{
        var slider = document.getElementById("slider");
        slider.scrollRight = slider.scrollRight + 500;
    }

    return (
        <div className="Veiculo">

            <header
                className="shadow-sm d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-0 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <h1 id="uni"> uni </h1>
                    <h1 id="auto">Auto </h1>
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
                    <li><Link to="/reservas" className="nav-link px-2 link-dark">Reserva</Link></li>
                    <li><Link to="/veiculos" className="nav-link px-2 link-dark">Veículos</Link></li>
                    <li><a href="#" className="nav-link px-2 link-dark">FAQs</a></li>
                    <li><a href="#" className="nav-link px-2 link-dark">Sobre</a></li>
                </ul>

                <div className="col-md-3 text-end" >
                    <button type="button" className="btn btn-outline-primary me-2">Logout</button>
                </div>
            </header>

            <div id="main-slider-container">
                <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft}/>
                <div id="slider">
                {
                    slides.map((slide,index)=>{
                        return(
                            <div className="slider-card" key={index} onClick={()=>slide.clickEvent()}>
                                <div className="slider-card-image" style={{backgroundImage:`url(${slide.image})`, backgroundSize:'cover'}}></div>
                                <p className="slider-card-title">{slide.title}</p>
                                <p className="slider-card-description">{slide.description}</p>
                            </div>
                        )
                    })
                }
                </div>
                <MdChevronRight size={40} className="slider-icon right" onClick={slideRight}/>
            </div>
            <VehicleForm />
        </div> 
    )
}

export default Veiculo;
