import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import React, {Component} from "react";
import Header from "./Header";

class VehicleForm extends Component {
    render() {
        return (
            <div className="bloco1">
                <br/>
                <form action="/addvehicle" method="POST">
                    <p>Vamos adicionar um veículo.</p>
                    <div>
                        <input name="matricula" id="matricula" placeHolder="Matrícula" className="form-control" required/>
                    </div>
                    <div>
                        <input name="kms" id="quilometros" placeholder="Quilómetros" className="form-control" required/>
                    </div>
                    <div>
                        <input name="ano" id="anofabrico" placeholder="Ano de Fabríco" className="form-control" required/>
                    </div>
                    <div>
                        <input name="lugares" id="espaço" placeholder="Lugares" className="form-control" required/>
                    </div>
                    <div>
                        <input name="escola" id="escola" placeholder="Escola" className="form-control" required/>
                    </div>
                    <div>
                        <input name="marca" id="marca" placeholder="Marca" className="form-control" required/>
                    </div>
                    <div>
                        <input name="modelo" id="modelo" placeholder="Modelo" className="form-control" required/>
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
        {image: "https://cs2.worldofmods.org/screenshots/0df24/2020-11/original/52936c8914259d674622992a341088f5408c4f1a/378915-BeamNG-drive-x64-2020-11-13-17-19-54-471.jpg", title: "Ford GT", description: "Escreve aqui a descrição do Ford GT", clickEvent:clickButton},
        {image: "https://images-automais.autosport.pt/2020/09/koenigsegg-regera-exhibits-mind-boggling-acceleration-up-to-186-mph.jpg", title: "Koenigsegg Regera", description: "Escreva aqui a descrição", clickEvent: clickButton},
        {image: "https://www.razaoautomovel.com/wp-content/uploads/2021/08/1995_McLaren_F1-Forest-1_925x520_acf_cropped.jpg", title: "McLaren F1", description: "Escreva aqui a descrição", clickEvent: clickButton},
        {image: "https://cdn.motor1.com/images/mgl/6Lq0N/s1/4x3/bugatti-chiron-super-sport-2021.webp", title: "Bugatti Chiron", description: "Escreva aqui a descrição", clickEvent: clickButton}
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
            <Header />
            <VehicleForm />
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
        </div>
    )
}

export default Veiculo;
