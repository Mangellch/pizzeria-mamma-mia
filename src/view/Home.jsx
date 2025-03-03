import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import CardPizza from './CardPizza';
import { getPizzas } from '../data/pizzas';
import '../index.css';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      const pizzaData = await getPizzas();
      console.log(pizzaData); 
      setPizzas(pizzaData);
    };

    fetchPizzas();
  }, []);

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
          />
        ))}
      </div>
    </>
  );
};

export default Home;
