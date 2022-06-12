import React, {Component} from "react";
import { Button, ButtonGroup, Table,Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

class DataList extends Component {
    constructor(props) {
        super(props);
        this.state = {users: [], trips: []};
        this.remove = this.remove.bind(this);
    }


    async componentDidMount() {
        const response1 = await fetch('/listuser');
        const response2 = await fetch('/listtrip');
        const body1 = await response1.json();
        const body2 = await response2.json();
        this.setState({users: body1, trips: body2});

    }

    async accept(id) {
        await fetch(`/reservas/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedClients = [...this.state.trips];
            let obj = updatedClients.findIndex(obj => obj.id === id);
            updatedClients[obj].pendente = 1;
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
        const {users, trips, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        if (this.props.statement==='user') {
            return (
                <div className="App-intro">
                    <h2>Utilizadores</h2>
                    <h1>{this.props.statement}</h1>
                    {users.map(utilizador =>
                        <div key={utilizador.id}>
                            {utilizador.firstName} ({utilizador.lastName})
                        </div>
                    )}
                </div>
            )
        }
        if (this.props.statement==='trip') {
            const tripList = trips.map(viagem => {
                return <tr key={viagem.id}>
                    <td style={{whiteSpace: 'nowrap'}}>{viagem.hora_inicio}</td>
                    <td>{viagem.hora_fim}</td>
                    <td>{viagem.veiculo}</td>
                    <td>{viagem.passageiros}</td>
                    <td>{viagem.local_de_inicio}</td>
                    <td>{viagem.local_de_fim}</td>
                    <td>{viagem.kms_iniciais}</td>
                    <td>{viagem.kms_percorridos}</td>
                    <td>{viagem.pendente}</td>
                    <td>
                        <ButtonGroup>
                            <Button size="sm" color="primary" onClick={() => this.accept(viagem.id)}>Aceitar</Button>
                            <Button size="sm" color="danger" onClick={() => this.remove(viagem.id)}>Remover</Button>
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
                                <th width="30%">Hora de Inicio</th>
                                <th width="30%">Hora de Fim</th>
                                <th width="30%">Veiculo</th>
                                <th width="30%">Número de passageiros</th>
                                <th width="30%">Local de Inicio</th>
                                <th width="30%">Local de Fim</th>
                                <th width="30%">Kms Iniciais</th>
                                <th width="30%">Kms Percorridos</th>
                                <th width="30%">Pendente</th>
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
