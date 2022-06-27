import React, {Component} from "react";
import { Button, ButtonGroup, Table,Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

class DataList extends Component {
    constructor(props) {
        super(props);
        this.state = {users: [], trips: [], available: [], cars: []};
        this.remove = this.remove.bind(this);
    }


    async componentDidMount() {
        const response1 = await fetch('/listuser');
        const response2 = await fetch('/listtrip');
        const response3 = await fetch('/findAvailableVehicle');
        const response4 = await fetch('/listvehicle');
        const body1 = await response1.json();
        const body2 = await response2.json();
        const body3 = await response3.json();
        const body4 = await response4.json();
        this.setState({users: body1, trips: body2, available: body3, cars: body4});

    }

    async accept(id, auth) {
        await fetch(`/reservas/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(auth)}
        ).then(() => {
            let updatedClients = [...this.state.trips];
            let obj = updatedClients.findIndex(obj => obj.id === id);
            updatedClients[obj].autorizacao = auth;
            this.setState({trips: updatedClients});
        });
    }

    async remove(id) {
        await fetch(`/reservas/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedClients = [...this.state.trips].filter(i => i.id !== id);
            this.setState({trips: updatedClients});
        });
    }

    render() {
        const {users, trips, available, cars, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        if (this.props.statement==='available'){
            return (
                <div className="lista de veiculos">
                    <select name="veiculo" id="veiculo" className="form-select" aria-label="Default select example">
                        {available.map(veiculo =>
                            <option value={veiculo.id}>{veiculo.modelo}  ({veiculo.matricula}) - {veiculo.escola}</option>)}
                    </select>
                </div>
            )
        }

        if(this.props.statement=='veiculo') {
            const VeiculoList = cars.map(veiculo =>{
                return <tr key={veiculo.id}>
                    <td style={{whiteSpace: 'nowrap'}}>{veiculo.id}</td>
                    <td>{veiculo.matricula}</td>
                    <td>{veiculo.quilometros}</td>
                    <td>{veiculo.ano}</td>
                    <td>{veiculo.lugares}</td>
                    <td>{veiculo.escola}</td>
                    <td>{veiculo.marca}</td>
                    <td>{veiculo.modelo}</td>
                </tr>
            });
            return(
                <div>
                    <Container fluid>
                        <Table className="mt-4">
                            <thead>
                            <tr>
                                <th width="30%">Id do Veículo</th>
                                <th width="30%">Matrícula</th>
                                <th width="30%">Kms</th>
                                <th width="30%">Ano</th>
                                <th width="30%">Lugares</th>
                                <th width="30%">Escola</th>
                                <th width="30%">Marca</th>
                                <th width="30%">Modelo</th>
                            </tr>
                            </thead>
                            <tbody>
                            {VeiculoList}
                            </tbody>
                        </Table>
                    </Container>
                </div>
            )
        }

        if (this.props.statement==='user') {
            const userList = users.map(utilizador =>{
                return <tr key={utilizador.id}>
                    <td style={{whiteSpace: 'nowrap'}}>{utilizador.firstName}</td>
                    <td>{utilizador.lastName}</td>
                    <td>{utilizador.codigo}</td>
                    <td>{utilizador.email}</td>
                </tr>
            });
            return (
                <div className="fluid-table">
                    <Container fluid >
                        <Table className="mt-4">
                            <thead>
                            <tr>
                                <th width="10%">Nome Próprio</th>
                                <th width="10%">Apelido</th>
                                <th width="10%">Código</th>
                                <th width="10%">Email</th>
                            </tr>
                            </thead>
                            <tbody>
                            {userList}
                            </tbody>
                        </Table>
                    </Container>
                </div>
            )
        }

        if (this.props.statement==='trip') {
            const tripList = trips.map(viagem => {
                return <tr key={viagem.id}>
                    <td style={{whiteSpace: 'nowrap'}}>{viagem.id}</td>
                    <td>{viagem.hora_inicio}</td>
                    <td>{viagem.hora_fim}</td>
                    <td>{viagem.veiculo}</td>
                    <td>{viagem.passageiros}</td>
                    <td>{viagem.local_de_inicio}</td>
                    <td>{viagem.local_de_fim}</td>
                    <td>{viagem.kms_iniciais}</td>
                    <td>{viagem.kms_percorridos}</td>
                    <td>{viagem.autorizacao}</td>
                    <td>
                        <ButtonGroup>
                            <Button size="sm" color="primary" onClick={() => this.accept(viagem.id,"Aceite")}>Aceitar</Button>
                            <Button size="sm" color="danger" onClick={() => this.accept(viagem.id, "Recusada")}>Recusar</Button>
                        </ButtonGroup>
                    </td>
                </tr>
            });
            return (
                <div>
                    <Container fluid>
                        <Table className="mt-4">
                            <thead>
                            <tr>
                                <th width="30%">ID da viagem</th>
                                <th width="30%">Hora de Inicio</th>
                                <th width="30%">Hora de Fim</th>
                                <th width="30%">Veiculo</th>
                                <th width="30%">Número de passageiros</th>
                                <th width="30%">Local de Inicio</th>
                                <th width="30%">Local de Fim</th>
                                <th width="30%">Kms Iniciais</th>
                                <th width="30%">Kms Percorridos</th>
                                <th width="30%">Autorização</th>
                            </tr>
                            </thead>
                            <tbody>
                            {tripList}
                            </tbody>
                        </Table>
                    </Container>
                </div>
            )

        }
    }
}

export {DataList};
