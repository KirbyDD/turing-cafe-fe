import React, { Component } from 'react';
import CardContainer from './CardContainer';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: ''
    }
  }

  componentDidMount() {
    this.gatherReservations();
  }

  gatherReservations = () => {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(reservations => this.setState({ reservations: reservations}))
      .catch(error => this.setState({ error: error.message }))
  }

  postReservation = newRes => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      body: JSON.stringify(newRes),
      headers: {
        'content-type': 'application/json'
      }})
      .catch(error => this.setState({ error: error.message }))
  }

  deleteReservation = id => {
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: 'DELETE'
    })
    .then(response => this.gatherReservations())
    .catch(error => this.setState({ error: error.message }))
  }

  addReservation = newRes => {
    this.setState({ reservations: [...this.state.reservations, newRes] })
    this.postReservation(newRes)
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <CardContainer reservations={this.state.reservations} deleteReservation={this.deleteReservation}/>
        </div>
      </div>
    )
  }
}

export default App;
