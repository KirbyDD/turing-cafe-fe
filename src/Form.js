import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: '',
      form: false
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    let newRes = {
      id: Date.now(),
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: parseInt(this.state.number)
    }
    this.props.addReservation(newRes)
    this.resetForm();
  }

  showForm = () => {
    this.setState({ form: true })
  }

  resetForm = () => [
    this.setState({
      name: '',
      date: '',
      time: '',
      number: '',
      form: false
    })
  ]

  render() {
    return (
      <section>
        <button onClick={e => this.showForm()}>Create Reservation</button>
          { this.state.form && <form onChange={event => this.handleChange(event)}>
            <input name='name' placeholder='Enter Name...' value={this.state.name}/>
            <input name='date' placeholder='Enter Date...' value={this.state.date}/>
            <input name='time' placeholder='Enter Time...' value={this.state.time}/>
            <input name='number' placeholder='Enter Party Size...' value={this.state.number}/>
            <button onClick={e => this.handleSubmit(e)}>Make Reservation</button>
          </form>
        }
      </section>
    )
  }
}

export default Form;