import React, { useState, useEffect } from 'react';
import { useCart } from "../context/CartContext"; 
import { getPizzas } from "../data/pizzas";
import './pizza.css';

const Pizza = () => {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchPizzas = async () => {
      const pizzasData = await getPizzas();
      setPizzas(pizzasData);
    };
    
    fetchPizzas();
  }, []);

  const pizza = pizzas.find((pizza) => pizza.id === "p001"); 

  return (
    <div className="pizza-container">
      <div className="pizza-details">
        <h2>{pizza?.name}</h2>
        <img src={pizza?.img} alt={pizza?.name} />
        <p>{pizza?.desc}</p>
        <ul>
          {pizza?.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p className="price">Precio: ${pizza?.price.toLocaleString()}</p>
        <button
          className="btn-add-cart"
          onClick={() => addToCart(pizza)}
        >
          Añadir al carrito 🛒
        </button>
      </div>
    </div>
  );
};

export default Pizza;
