import React from 'react';
import Card from './Card';
import './CardContainer.css'

const CardContainer = ({ reservations, deleteReservation }) => {
  const cardList = reservations.map(reservation => {
    return <Card id={reservation.id} 
                  name={reservation.name}
                  date={reservation.date}
                  time={reservation.time}
                  number={reservation.number}
                  deleteReservation={deleteReservation}
                  />
  })
  return (
    <main>
      <h2>List of Reservations</h2>
      <div className='card-section'>
        {cardList}
      </div>
    </main>
  )
}

export default CardContainer;