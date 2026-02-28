import { use } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { useState } from "react";
import { addItemToCartLocalStorage } from "../../utilities/localStorage";

export default function Bottles({ bottlesPromise }) {
  const [cart, setCart] = useState([])
  const bottles = use(bottlesPromise);

  const handleAddToCart = (bottle) => {
    console.log("bottle added", bottle);
    const newCart = [...cart, bottle]
    setCart(newCart)
    addItemToCartLocalStorage(bottle.id)
  };

  return (
    <div>
      <h1>Buy Awsome Watter Bottle: {bottles.length}</h1>
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
