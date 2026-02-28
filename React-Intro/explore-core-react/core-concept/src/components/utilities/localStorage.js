// get cart
const getCartFromLocalStorage = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    const storedCart = JSON.parse(storedCartString);
    return storedCart;
  }
  return [];
};

const saveCartToLocalStorage = (cart) => {
  const cartStringfied = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringfied);
};

// add cart
const addItemToCartLocalStorage = (id) => {
  const cart = getCartFromLocalStorage();
  const newCart = [...cart, id];

  // save cart to the local storage
  saveCartToLocalStorage(newCart);
};

export {getCartFromLocalStorage, addItemToCartLocalStorage}
