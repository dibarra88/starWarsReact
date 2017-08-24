import React, { Component } from 'react';

export default class Starships extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starships: []
        }
    }
    componentDidMount() {
        var url = 'https://swapi.co/api/starships/';
        fetch(url)
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then((data) => {
                console.log('Starships: ', data);
                this.setState({ starships: data.results });
            });
    }
    render() {
        return (
            <div className="row" >
                {this.state.starships.map(starship => (
                    < div key={starship.name} className="col-md-4" >
                        <div className="card">
                            <div className="card-block">
                                <h4 className="card-title">Starship: {starship.name}</h4>
                                <h5 className="card-subtitle mb-2 text-muted">Model: {starship.model}</h5>
                                <div className="card">
                                    <div className="card-block">
                                        <h5 className="card-subtitle mb-2 text-muted">Specs</h5>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Manufacturer: {starship.manufacturer}</li>
                                            <li className="list-group-item">Class: {starship.starship_class}</li>
                                            <li className="list-group-item">Passengers: {starship.passengers}</li>
                                            <li className="list-group-item">Crew: {starship.crew}</li>
                                            <li className="list-group-item">Length: {starship.length}</li>
                                            <li className="list-group-item">Max Speed: {starship.max_atmosphering_speed}</li>
                                            <li className="list-group-item">Cargo Capacity: {starship.cargo_capacity}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}