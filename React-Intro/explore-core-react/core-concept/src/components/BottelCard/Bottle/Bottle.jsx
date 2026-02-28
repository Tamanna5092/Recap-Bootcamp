import React from 'react'
import './Bottle.css'

export default function Bottle({bottle, handleAddToCart}) {
  const {img, name, price, quantity, seller} = bottle

  return (
    <div className='bottle-card cart'>
      <img src={img}></img>
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>{quantity} remaining</p>
      <p>{seller}</p>
      <button onClick={()=> handleAddToCart(bottle)}>Add to Cart</button>
    </div>
  )
}
