import React, { useState, useEffect } from "react";
import { getPizzas } from "../data/pizzas";
import "./cart.css";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      const pizzas = await getPizzas();

      const pizzasWithCount = pizzas.map((pizza) => ({ ...pizza, count: 1 }));
      setCart(pizzasWithCount);
    };
    fetchPizzas();
  }, []);

  const increaseQuantity = (id) => {
    setCart(cart.map((pizza) =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    ));
  };

  const decreaseQuantity = (id) => {
    setCart(cart
      .map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
      )
      .filter((pizza) => pizza.count > 0) // Eliminamos la pizza si count es 0
    );
  };

  const totalPrice = cart.reduce(
    (total, pizza) => total + pizza.price * pizza.count,  
    0
  );

  const formattedTotal = totalPrice.toLocaleString('es-CL', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

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
              <p>Precio: ${pizza.price.toLocaleString('es-CL', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
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
