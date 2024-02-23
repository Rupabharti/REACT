import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='Card'>
        <img src="https://images.pexels.com/photos/15867013/pexels-photo-15867013/free-photo-of-cute-baby-girl-lying-on-blanket-indoors.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" width={200} style={{border:" 2px solid black"}} />
      <h1>{props.title}</h1>
      <p>{ props.description}</p>
    </div>
  )
}

export default Card
