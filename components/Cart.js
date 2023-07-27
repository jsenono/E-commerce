// components/Cart.js
import React from 'react';
import useStore from '../lib/store';
// import CartItem from './CartItem';

const Cart = () => {
  const cart = useStore((state) => state.cart);
  const incrementItem = useStore((state) => state.incrementItem);
  const removeItem = useStore((state) => state.removeItem);
  const emptyCart = useStore((state) => state.emptyCart);
  const addToCart = useStore((state) => state.addToCart);

  // Calculate the total cost of items in the cart
  const total = cart.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div className="col-lg-6">
          <h3>{item.name}</h3>
          <h3>{item.price}</h3>
          <button onClick={() => incrementItem(item.id)}>Increment</button>
      <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
      ))}
      <p>Total: ${total.toFixed(2)}</p>
      <button onClick={() => emptyCart()}>Empty Cart</button>
    </div>
  );
};

export default Cart;