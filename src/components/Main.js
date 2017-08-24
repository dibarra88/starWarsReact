import React, { Component } from 'react';
import Vehicles from './Vehicles.js';
import Starships from './Starships.js';
import People from './People.js';

export default class Main extends Component {
    // PROPS AND STATE
    // Set props and state below.
    // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
    // Enter your code below:
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            pilot: ''
        }
    }
    // FORM: HANDLE INPUT CHANGES
    // handleNameChange below:
    // See form lesson for details.
    // Enter your code below:
    handleNameChange = (event) => {
        this.setState({ value: event.target.value });
    }

    //  FORM: SUBMIT METHOD
    // handleSubmit below:
    // See form lesson for details.
    // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
    // Then, set the value of the input back to an empty string.
    // Enter your code below:
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(
            {
                pilot: this.state.value,
                value: ''
            }
        )
    }

    render() {
        return (
            <main className="row">
                <section className="col-md-10 offset-md-1">
                    <div className="jumbotron">
                        <h1 className="display-3">Star Wars</h1 > <hr className="my-4" />
                    </div >
                    <div className="card form">
                        <div className="card-block">
                            <h2 className="card-title">What is your name, pilot?</h2>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input className="form-control col-md-4 offset-md-4" id="pilotName" onChange={this.handleNameChange} name="name" type="text" value={this.state.value} placeholder="Enter your name" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                            <h1>{this.state.pilot}</h1>
                        </div>
                    </div>
                    <div className="jumbotron">
                        < p className="lead" > The Vehicles of Star Wars </p>
                    </div >
                    <Vehicles />
                    <div className="jumbotron">
                        < p className="lead" > The Starships of Star Wars </p>
                    </div >
                    <Starships />
                    <div className="jumbotron">
                        < p className="lead" > The People of Star Wars </p>
                    </div >
                    <People />
                </section >
            </main>
        )
    }
} 