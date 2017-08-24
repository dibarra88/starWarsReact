import React, { Component } from 'react';

export default class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        }
    }
    componentDidMount() {
        var url = 'https://swapi.co/api/people/';
        fetch(url)
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then((data) => {
                console.log('People : ', data);
                this.setState({ people: data.results });
            });
    }
    render() {
        return (
            <div className="row" >
                {this.state.people.map(person => (
                    < div key={person.name} className="col-md-4" >
                        <div className="card">
                            <div className="card-block">
                                <h4 className="card-title">Name: {person.name}</h4>
                                <div className="card">
                                    <div className="card-block">
                                        <h5 className="card-subtitle mb-2 text-muted">Specs</h5>
                                        <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Gender: {person.gender}</li>
                                            <li className="list-group-item">Birth Year: {person.birth_year}</li>
                                            <li className="list-group-item">Height: {person.height}</li>
                                            <li className="list-group-item">Mass: {person.mass}</li>
                                            <li className="list-group-item">Eye Color: {person.eye_color}</li>
                                            <li className="list-group-item">Hair Color: {person.hair_color}</li>
                                            <li className="list-group-item">Skin Color: {person.skin_color}</li>
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