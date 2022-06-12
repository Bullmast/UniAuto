import React, {Component} from "react";
import { Button, ButtonGroup, Table,Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

export class ClientEdit extends Component {

    emptyItem = {
        pendente: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async componentDidMount() {
        const trip = await (await fetch(`/reservas/${this.props.match.params.id}`)).json();
        this.setState({item: trip});
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }
    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch('/reservas' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/reservas');
    }
    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Edit Client' : 'Add Client'}</h2>;

        return <div>

            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="pendente">Pendente</Label>
                        <Input type="text" className="pendente" name="pendente" id="pendente" value={item.pendente || ''}
                               onChange={this.handleChange} autoComplete="pendente"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/reservas">Cancel</Button>
                    </FormGroup>
                </Form>
                <h1>Second form:</h1>
                <Form action="/updatetrip" method="PUT">
                    <div>
                        <input name="id" id="id" type="text" className="form-control"
                               placeholder="ID: " aria-label="Username"
                               aria-describedby="basic-addon1"/>
                    </div>
                    <div>
                        <input name="pendente" id="pendente" type="text" className="form-control"
                               placeholder="Pendente: " aria-label="Username"
                               aria-describedby="basic-addon1"/>
                    </div>
                    <div id="user-button">
                        <button type="submit" className="btn btn-outline-primary me-2">Confirmar</button>
                    </div>
                </Form>
            </Container>
        </div>
    }
}


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
