import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import Header from "./Header";
import {DataList} from "./DataList";

function VeiculosDisponiveis(){
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange=() =>{
        setIsChecked(!isChecked);
    };

    return(
        <div className="IdaeVolta">
            <div className="iev">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleOnChange}
                />
                Listar Veiculos Disponiveis
            </div>
            {isChecked ? <DataList statement='available'/>: null}
        </div>
    )
}

function adicionaReservas(){

    return(
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
                        <input name="start" type="text" className="form-control" id="start" placeholder="dd/mm/yy hh:mm"
                               required/>
                        <div className="invalid-feedback">
                            Por favor insira a data.
                        </div>
                    </div>

                    <div>
                        <label htmlFor="datefinal" className="form-label">Data de retorno</label>
                        <input name="finish" type="text" className="form-control" id="finish" placeholder="dd/mm/yy hh:mm"
                               required/>
                        <div className="invalid-feedback">
                            Por favor insira a data.
                        </div>
                    </div>

                    <div>
                        <label htmlFor="passengers" className="form-label">Número de Passageiros</label>
                        <input name="passageiros" type="text" className="form-control" id="passageiros" placeholder="Insira o número de passageiros"
                               required/>
                        <div className="invalid-feedback">
                            Número Inválido.
                        </div>
                    </div>

                    <div>
                        <label htmlFor="local_f" className="form-label">Escola</label>
                        <select name="local_f" id="local_f" className="form-select" aria-label="Default select example">
                            <option value="ESA">ESA</option>
                            <option value="EsACT">EsACT</option>
                            <option value="ESE">ESE</option>
                            <option value="ESSa">ESSa</option>
                            <option value="ESTiG">ESTiG</option>
                        </select>
                    </div>
                    <br/>
                    <VeiculosDisponiveis/>
                    <br/>
                    <button className="w-100 btn btn-primary btn-lg" type="submit">Validar</button>
                </form>
            </div>
        </div>
    );
}

export default adicionaReservas;