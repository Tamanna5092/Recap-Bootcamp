import Cart from "../Cart/Cart";
import "./Carts.css";

export default function Carts({ cart }) {
  return (
    <div>
      <h2>Cart Items Selected: {cart.length}</h2>
      <div className="carts-container">
        {cart.map((item) => (
          <Cart key={item.id} item={item}></Cart>
        ))}
      </div>
    </div>
  );
}
