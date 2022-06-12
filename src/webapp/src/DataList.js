import React, {Component} from "react";
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
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
        else {
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
                    <td>
                        <ButtonGroup>
                            <Button size="sm" color="primary" tag={Link} to={"/reservas/" + viagem.id}>Edit</Button>
                            <Button size="sm" color="danger" onClick={() => this.remove(viagem.id)}>Delete</Button>
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
