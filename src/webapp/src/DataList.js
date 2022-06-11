import React, {Component} from "react";

class DataList extends Component {
    state = {
        users: [],
        trips: [],
    };


    async componentDidMount() {
        const response1 = await fetch('/listuser');
        const response2 = await fetch('/listtrip');
        const body1 = await response1.json();
        const body2 = await response2.json();
        this.setState({users: body1, trips: body2, isUser:true});

    }
    render() {
        const {users,trips} = this.state;
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
            return (
                <div className="Trip-intro">
                    <h1>Reservas</h1>
                    <h2>{this.props.statement}</h2>
                    {trips.map(viagem =>
                        <li>
                            {viagem.local_de_inicio} - {viagem.local_de_fim}
                        </li>
                    )}
                </div>
            )

        }
    }
}

export {DataList};
