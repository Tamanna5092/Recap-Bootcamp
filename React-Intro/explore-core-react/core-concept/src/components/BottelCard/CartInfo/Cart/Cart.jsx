import React from "react";
import "./Cart.css";

export default function Cart({ item }) {
  console.log(item);
  const { name, price, img, seller } = item;
  return (
    <div className="cart-item">
      <div>
        <img src={img} alt={name} />
      </div>
      <div>
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <p>Seller: {seller}</p>
      </div>
    </div>
  );
}
