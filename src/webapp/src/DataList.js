import React, {Component} from "react";
import {Button, ButtonGroup, Container, Table} from 'reactstrap';
import {Link} from "react-router-dom";



class DataList extends Component {
    constructor(props) {
        super(props);
        this.state = {users: [], trips: [], available: [], cars: [], log: ""};
        this.remove = this.remove.bind(this);
    }


    async componentDidMount() {
        const response1 = await fetch('/listuser');
        const response2 = await fetch('/listtrip');
        const response3 = await fetch('/findAvailableVehicle');
        const response4 = await fetch('/listvehicle');
        const response5 = await fetch('/stateUser');
        const body1 = await response1.json();
        const body2 = await response2.json();
        const body3 = await response3.json();
        const body4 = await response4.json();
        const body5 = await response5.json();
        this.setState({users: body1, trips: body2, available: body3, cars: body4, log: body5});
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
        const {users, trips, cars, log} = this.state;

        if (this.props.statement==='log') {
            if(log.gestor === 1){
                return(
                    <header
                        className="shadow-sm d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-0 border-bottom">
                        <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                            <h1 id="uni"> uni </h1>
                            <h1 id="auto">Auto </h1>
                        </a>

                        <nav className="navbar">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="#">Utilizadores</a>
                                    <ul>
                                        <li><Link to="/ListaUtilizadores" className="nav-link px-2 link-dark">Lista de
                                            Utilizadores</Link></li>
                                    </ul>
                                </li>
                                <li><a href="#">Reservas</a>
                                    <ul>
                                        <li><Link to="/adicionaReservas" className="nav-link px-2 link-dark">Adiciona
                                            Reserva</Link></li>
                                        <li><Link to="/ListaReservas" className="nav-link px-2 link-dark">Lista de
                                            Viagens</Link></li>
                                        <li><Link to="/fazerCheckout" className="nav-link px-2 link-dark">Faz Checkout da
                                            Viagem</Link></li>
                                    </ul>
                                </li>
                                <li><a href="#">Veiculos</a>
                                    <ul>
                                        <li><Link to="/veiculos" className="nav-link px-2 link-dark">Adiciona Veículo</Link>
                                        </li>
                                        <li><Link to="/ListaVeiculos" className="nav-link px-2 link-dark">Lista de
                                            Veículos</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/Sobre" className="nav-link px-2 link-dark">Sobre</Link></li>
                            </ul>
                        </nav>
                        <div>
                            <p>Olá, Gestor</p>
                        </div>
                        <div className="col-md-3 text-end">
                            <div className="col-md-3 text-end">
                                <Link to="/Logout">
                                    <button type="button" className="btn btn-outline-primary me-2">Logout</button>
                                </Link>
                            </div>
                        </div>
                    </header>
                )
            }

            if(log.gestor === 0){
                return (

                    <header
                        className="shadow-sm d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-0 border-bottom">
                        <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                            <h1 id="uni"> uni </h1>
                            <h1 id="auto">Auto </h1>
                        </a>

                        <nav className="navbar">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="#">Reservas</a>
                                    <ul>
                                        <li><Link to="/adicionaReservas" className="nav-link px-2 link-dark">Adiciona
                                            Reserva</Link></li>
                                        <li><Link to="/fazerCheckout" className="nav-link px-2 link-dark">Faz Checkout da
                                            Viagem</Link></li>
                                    </ul>
                                </li>
                                <li><a href="#">Veiculos</a>
                                    <ul>
                                        <li><Link to="/ListaVeiculos" className="nav-link px-2 link-dark">Lista de
                                            Veículos</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/Sobre" className="nav-link px-2 link-dark">Sobre</Link></li>
                            </ul>
                        </nav>
                        <div>
                            <p>Olá, {log.firstName} </p>
                        </div>
                        <div className="col-md-3 text-end">
                            <Link to="/Logout">
                                <button type="button" className="btn btn-outline-primary me-2">Logout</button>
                            </Link>
                        </div>
                    </header>

                )
            }
            return(

                <header
                    className="shadow-sm d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-0 border-bottom">
                    <a href="/"
                       className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <h1 id="uni"> uni </h1>
                        <h1 id="auto">Auto </h1>
                    </a>

                    <nav className="navbar">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="#">Veiculos</a>
                                <ul>
                                    <li><Link to="/ListaVeiculos" className="nav-link px-2 link-dark">Lista de
                                        Veículos</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/Sobre" className="nav-link px-2 link-dark">Sobre</Link></li>
                        </ul>
                    </nav>
                    <div className="col-md-3 text-end">
                        <div className="col-md-3 text-end">
                            <Link to="/Login">
                                <button type="button" className="btn btn-outline-primary me-2">Login</button>
                            </Link>
                            <Link to="/Utilizadores">
                                <button type="button" className="btn btn-primary me-2">Registo</button>
                            </Link>
                        </div>
                    </div>
                </header>
            )
        }


        if(this.props.statement==='veiculo-av') {
            const VeiculoList = cars.filter(i => i.escola === this.props.l && i.lugares >= this.props.p)
            const res = []
            for (let i=0; i<VeiculoList.length; i++) {
                let flag=1
                const list = trips.filter(t => t.veiculo === VeiculoList[i].id)
                if (list.length>0) {
                    for (let j=0; j<list.length; j++) {
                        if ( (list[j].hora_inicio < this.props.s) || (this.props.s < list[j].hora_fim) || (list[j].hora_inicio < this.props.f) || (this.props.f< list[j].hora_fim) ) {flag=0}
                    }
                    if (flag===1) res.push(VeiculoList[i])
                }
                else {
                    res.push(VeiculoList[i])
                }
            }
            if (res.length>0) {
                let Result = res.map(veiculo => {
                    return <option value={veiculo.id}>{veiculo.modelo} ({veiculo.matricula}) - {veiculo.escola}</option>
                })
                return (
                    <div>
                        <select name="veiculo" id="veiculo" className="form-select" aria-label="Default select example">
                            {Result}
                        </select>
                    </div>
                )
            }
            else {
                return(
                    <div>
                        <p>No available vehicles</p>
                    </div>
                )
            }
        }

        if(this.props.statement==='veiculo') {
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
                                <th width="30%">Local da Reserva</th>
                                <th width="30%">Escola</th>
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
