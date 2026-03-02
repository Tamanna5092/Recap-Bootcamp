import Cart from "../Cart/Cart";
import "./Carts.css";

export default function Carts({ cart, handleRemoveItemFromCart }) {
  return (
    <div>
      <h2>Cart Items Selected: {cart.length}</h2>
      <div className="carts-container">
        {cart.map((item) => (
          <Cart
            key={item.id}
            item={item}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
          ></Cart>
        ))}
      </div>
    </div>
  );
}
