import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component, useState} from "react";
import Header from "./Header";
import {DataList} from "./DataList"
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

                        <div className="invalid-feedback">
                            Por favor insira a data.
                        </div>
                    </div>

                    <div>
                        <label htmlFor="passengers" className="form-label">Número de Passageiros</label>
                        <input name="passageiros" type="text" className="form-control" id="passageiros"
                               placeholder="Insira o número de passageiros" value={passageiros} onChange={e => setPassageiros(e.target.value)}
                               required/>

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

                    </div>
                    <DataList statement="veiculo-av" s={start} f={finish}
                              p={passageiros} l={local_f}/>
                    <br/>
                    <button className="w-100 btn btn-primary btn-lg" type="submit">Reservar Viagem</button>
                </form>
            </div>
        </div>
    );

}

export function ListaReservas(){
    return(
        <div className="ListaRervas">
            <Header/>
            <div>
                <DataList statement='trip'/>
            </div>
        </div>
    );
}

export function FazerCheckout(){

    return(
        <div className="fazerCheckout">
            <Header/>
            <br/>
            <div className="bloco1">
                <form action="/initcheckout" method="POST">
                    <div>
                        <label htmlFor="obs" className="form-label">Deseja colocar uma observação?</label>
                        <input name="obs" type="text" className="form-control" id="obs" placeholder="Observações (opcional)" optional/>
                    </div>
                    <div>
                        <label htmlFor="id" className="form-label">Viagem</label>
                        <input name="id" type="text" className="form-control" id="id" placeholder="Insira o ID da viagem" required/>
                        <div className="invalid-feedback">
                            ID não existe.
                        </div>
                    </div>
                    <div>
                        <label htmlFor="km_p" className="form-label">Quais são os km finais do veículo?</label>
                        <input name="km_p" type="text" className="form-control" id="km_p" placeholder="Kms percorridos" required/>
                        <div className="invalid-feedback">
                            Por favor insira os km percorridos do veículo.
                        </div>
                    </div>
                    <br/>
                    {<button className="w-100 btn btn-primary btn-lg" type="submit">Fazer Checkout</button>}
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