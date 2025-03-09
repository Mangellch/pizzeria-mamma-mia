import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import CardPizza from './CardPizza';
import { useCart } from '../context/CartContext'; 
import '../index.css';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useCart(); 

  // Función para obtener las pizzas desde la API
  const getPizzas = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/pizzas');
      if (!response.ok) {
        throw new Error('Error fetching pizzas');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch pizzas:', error);
      return [];
    }
  };

  useEffect(() => {
    const fetchPizzas = async () => {
      const pizzaData = await getPizzas();
      console.log(pizzaData); 
      setPizzas(pizzaData);
    };

    fetchPizzas();
  }, []);

  // Función para agregar pizza al carrito
  const handleAddToCart = (pizza) => {
    addToCart(pizza); // Llamamos a la función del contexto para añadir la pizza al carrito
  };

  return (
    <>
      <Header />
      <div className="pizzas-container">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            desc={pizza.desc} 
            onAddToCart={() => handleAddToCart(pizza)} // Pasamos la función al CardPizza
          />
        ))}
      </div>
    </>
  );
};

export default Home;
