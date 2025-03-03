import { useState, useEffect } from "react";
import './pizza.css'; 

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas/p001')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error fetching pizza');
        }
        return response.json();
      })
      .then((data) => setPizza(data))
      .catch((error) => console.error("Error fetching pizza:", error));
  }, []); 

  if (!pizza) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pizza-card"> 
        <img src={pizza.img} alt={pizza.name} className="card-img-top"/>
        <div className="card-body">
            <h2 className="card-title">{pizza.name}</h2>
            <p className="card-description">{pizza.desc}</p>
            <p className="card-price"><strong>Precio:</strong> ${pizza.price}</p>
            <p className="card-text" ><strong>Ingredientes:</strong></p>
            <p className="ingredient-list"> {pizza.ingredients.join(", ")}</p>
            <div className="buttons">
                <button className="btn btn-primary">Ver más</button>
                <button className="btn btn-secondary">Añadir al carrito</button>
            </div>
        </div>
    </div>
  );
};

export default Pizza;
