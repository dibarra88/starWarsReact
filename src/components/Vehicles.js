import React, { Component } from 'react';

export default class Vehicles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicles: []
        }
    }
    componentDidMount() {
        var url = 'https://swapi.co/api/vehicles/';
        fetch(url)
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then((data) => {
                console.log('Vehicles', data);
                this.setState({ vehicles: data.results });
            });
    }
    render() {
        return (
            <div className="row" >
                {this.state.vehicles.map(vehicle => (
                    < div key={vehicle.name} className="col-md-4" >
                        <div className="card">
                            <div className="card-block">
                                <h4 className="card-title">Vehicle: {vehicle.name}</h4>
                                <h5 className="card-subtitle mb-2 text-muted">Model: {vehicle.model}</h5>
                                <div className="card">
                                    <div className="card-block">
                                        <h5 className="card-subtitle mb-2 text-muted">Specs</h5>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Manufacturer: {vehicle.manufacturer}</li>
                                            <li className="list-group-item">Class: {vehicle.vehicle_class}</li>
                                            <li className="list-group-item">Passengers: {vehicle.passengers}</li>
                                            <li className="list-group-item">Crew: {vehicle.crew}</li>
                                            <li className="list-group-item">Length: {vehicle.length}</li>
                                            <li className="list-group-item">Max Speed: {vehicle.max_atmosphering_speed}</li>
                                            <li className="list-group-item">Cargo Capacity: {vehicle.cargo_capacity}</li>
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