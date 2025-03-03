import React from 'react';
import './CardPizza.css';


const CardPizza = ({ name, price, ingredients, img, desc }) => {
  return (
    <div className="pizza-card">
      <img src={img} alt={name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-description">{desc}</p>
        <p className="card-text">Ingredientes:</p>
        <ul className="ingredient-list">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p className="card-price">Precio: ${price.toLocaleString()}</p>
        <div className="buttons">
          <button className="btn btn-primary">Ver más</button>
          <button className="btn btn-secondary">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
