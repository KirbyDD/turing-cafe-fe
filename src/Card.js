import React from 'react';
import './Card.css'


const Card = ({ id, name, date, time, number, deleteReservation }) => {
  return (
    <article className='card'>
      <h3>Name: {name}</h3>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Party Size: {number}</p>
      <button onClick={e => deleteReservation(id)}>Cancel</button>
    </article>
  )
}

export default Card;