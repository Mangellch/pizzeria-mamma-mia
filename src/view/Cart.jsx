import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import "./cart.css";

const Cart = () => {
  const { cart, updateQuantity } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  // Calcular el total siempre que cambie el carrito
  useEffect(() => {
    const total = cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0);
    setTotalPrice(total);
  }, [cart]); // Esto se ejecuta cada vez que el carrito cambia

  const formattedTotal = totalPrice.toLocaleString("es-CL", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const increaseQuantity = (id) => {
    updateQuantity(id, 1);  // Incrementar cantidad
  };

  const decreaseQuantity = (id) => {
    updateQuantity(id, -1); // Decrementar cantidad
  };

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        cart.map((pizza) => (
          <div key={pizza.id} className="cart-item">
            <img src={pizza.img} alt={pizza.name} className="cart-img" />
            <div className="cart-info">
              <h3>{pizza.name}</h3>
              <p>
                Precio: $
                {pizza.price.toLocaleString("es-CL", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </p>
              <p>Cantidad: {pizza.count}</p>
              <button onClick={() => decreaseQuantity(pizza.id)}>-</button>
              <button onClick={() => increaseQuantity(pizza.id)}>+</button>
            </div>
          </div>
        ))
      )}
      <h3>Total: ${formattedTotal}</h3>
      <button className="pay-btn">Pagar</button>
    </div>
  );
};

export default Cart;
