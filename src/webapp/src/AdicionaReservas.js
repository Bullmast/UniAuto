import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component, useState} from "react";
import Header from "./Header";
import {DataList} from "./DataList";
import {Button} from "reactstrap";


class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            list:[]
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick() {
        this.setState({
            showComponent: true,
        });
    }

    render() {
        return (
            <div>
                <Button onClick={this._onButtonClick }>Procurar Veiculos</Button>
                {this.state.showComponent ?
                    <DataList statement="veiculo-av" s={this.props.s} f={this.props.f}
                    p={this.props.p} l={this.props.l}/> :
                    null
                }
            </div>
        );
    }
}

function Adiciona () {

        const [start, setStart] = useState('');
        const [finish, setFinish] = useState('');
        const [passageiros, setPassageiros] = useState('');
        const [local_f, setLocal] = useState('');
        return (
            <div className="adicionaReservas">
                <Header/>
                <br/>
                <div className="bloco1">
                    <form action="/addtrip" method="POST" id="trip-form">
                        <div>
                            <label htmlFor="address" className="form-label">Para onde deseja ir?</label>
                            <input name="local_i" type="text" className="form-control" id="local_i" placeholder="Morada"
                                   required/>
                            <div className="invalid-feedback">
                                Por favor insira a morada de destino.
                            </div>
                        </div>



                            <div>
                                <label htmlFor="dateinit" className="form-label">Data de inicio</label>
                                <div>
                                <input name="start" type="text" className="form-control" id="start"
                                       placeholder="dd/mm/yy hh:mm" value={start} onChange={e => setStart(e.target.value)}
                                       required/>
                                <p>Value -> {start}</p>
                                </div>
                                <div className="invalid-feedback">
                                    Por favor insira a data.
                                </div>
                            </div>

                            <div>
                                <label htmlFor="datefinal" className="form-label">Data de retorno</label>
                                <input name="finish" type="text" className="form-control" id="finish"
                                       placeholder="dd/mm/yy hh:mm" value={finish} onChange={e => setFinish(e.target.value)}
                                       required/>
                                <p>Value -> {finish}</p>
                                <div className="invalid-feedback">
                                    Por favor insira a data.
                                </div>
                            </div>

                            <div>
                                <label htmlFor="passengers" className="form-label">Número de Passageiros</label>
                                <input name="passageiros" type="text" className="form-control" id="passageiros"
                                       placeholder="Insira o número de passageiros" value={passageiros} onChange={e => setPassageiros(e.target.value)}
                                       required/>
                                <p>Value -> {passageiros}</p>
                                <div className="invalid-feedback">
                                    Número Inválido.
                                </div>
                            </div>

                            <div>
                                <label htmlFor="local_f" className="form-label">Escola</label>
                                <select name="local_f" id="local_f" className="form-select"
                                        aria-label="Default select example" value={local_f} onChange={e => setLocal(e.target.value)}>
                                    <option value="ESA">ESA</option>
                                    <option value="EsACT">EsACT</option>
                                    <option value="ESE">ESE</option>
                                    <option value="ESSa">ESSa</option>
                                    <option value="ESTiG">ESTiG</option>
                                </select>
                                <p>Value -> {local_f}</p>
                            </div>
                            <MyComponent s={start} f={finish} p={passageiros} l={local_f}/>
                        <button className="w-100 btn btn-primary btn-lg" type="submit">Reservar Viagem</button>
                    </form>
                </div>
            </div>
        );

}

function adicionaReservas() {
    return(
        <Adiciona/>
    )
}

export default adicionaReservas;