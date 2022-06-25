import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import Header from "./Header";
import {DataList} from "./DataList"

function IdaeVolta(){
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange=() =>{
        setIsChecked(!isChecked);
    };

    return(
        <div className="IdaeVolta">
            <div className="iev">
                <input
                    type="checkbox"
                    id="IdaeVolta"
                    name="local_f"
                    value="Ida_e_Volta"
                    checked={isChecked}
                    onChange={handleOnChange}
                />
                Ida e Volta?
            </div>
            {!isChecked ? <select name="local_f" id="local_f" className="form-select" aria-label="Default select example">
                <option value="ESA">ESA</option>
                <option value="EsACT">EsACT</option>
                <option value="ESE">ESE</option>
                <option value="ESSa">ESSa</option>
                <option value="ESTiG">ESTiG</option>
            </select>: null}
        </div>
    )
}


function Reservas(){

    return(
        <div className="Reservas">
            <Header/>
            <br/>
            <div className="bloco1">
                <form action="/addtrip" method="POST" id="trip-form">
                    <div>
                        <label htmlFor="address" className="form-label">Para onde deseja ir?</label>
                        <input name="local_i" type="text" className="form-control" id="address" placeholder="Morada"
                               required/>
                        <div className="invalid-feedback">
                            Por favor insira a morada de destino.
                        </div>
                    </div>
                    <div>
                        <label htmlFor="dateinit" className="form-label">Data de inicio</label>
                        <input name="start" type="text" className="form-control" id="dateinit" placeholder="Insira a data com formato dd/mm hh/mm"
                               required/>
                        <div className="invalid-feedback">
                            Por favor insira a data.
                        </div>
                    </div>

                    <div>
                        <label htmlFor="datefinal" className="form-label">Data de retorno</label>
                        <input name="finish" type="text" className="form-control" id="datefinal" placeholder="Insira a data com formato dd/mm hh/mm"
                               required/>
                        <div className="invalid-feedback">
                            Por favor insira a data.
                        </div>
                    </div>

                    <div>
                        <label htmlFor="passengers" className="form-label">Número de Passageiros</label>
                        <input name="passageiros" type="text" className="form-control" id="passengers" placeholder="Insira o número de passageiros"
                               required/>
                        <div className="invalid-feedback">
                            Número Inválido.
                        </div>
                    </div>

                    <div>
                        <label className="form-label">Veículo</label>
                        <input name="veiculo" type="text" className="form-control" id="passengers" placeholder="Insira o ID do veículo"
                                required/>
                        <div className="invalid-feedback">
                            ID não existe.
                        </div>
                    </div>
                    <br/>
                    <IdaeVolta/>
                    <br/>
                    <button className="w-100 btn btn-primary btn-lg" type="submit">Validar</button>
                </form>

            </div>
            <div className="trip">
                <div>
                    { <DataList statement='trip' /> }
                </div>
                <form action="/listtrip" method="GET">
                    <button>Listar viagens</button>
                </form>
            </div>
        </div>

    );
}


export default Reservas;
