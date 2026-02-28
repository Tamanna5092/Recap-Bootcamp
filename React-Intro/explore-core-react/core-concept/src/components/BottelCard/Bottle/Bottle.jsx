import React from 'react'
import './Bottle.css'

export default function Bottle({bottle}) {
  const {img, name, price, quantity, seller} = bottle
  return (
    <div className='bottle-card'>
      <img src={img}></img>
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>{quantity} remaining</p>
      <p>{seller}</p>
    </div>
  )
}
