import { use, useEffect } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { useState } from "react";
import {
  addItemToCartLocalStorage,
  getCartFromLocalStorage,
} from "../../utilities/localStorage";

export default function Bottles({ bottlesPromise }) {
  const [cart, setCart] = useState([]);
  const bottles = use(bottlesPromise);

  useEffect(() => {
    const storagedCartIds = getCartFromLocalStorage();

    const storedCart = [];
    for (const id of storagedCartIds) {
      console.log(id);
      const bottleCart = bottles.find((bottle) => bottle.id === id);
      if (bottleCart) {
        storedCart.push(bottleCart);
      }
    }
    console.log(storedCart);
    setCart(storedCart);
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    console.log("bottle added", bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
    addItemToCartLocalStorage(bottle.id);
  };

  return (
    <div>
      <h1>Buy Awsome Watter Bottle: {bottles.length}</h1>
      <h3>Cart: {cart.length}</h3>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
}
