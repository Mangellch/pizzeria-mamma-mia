import React from 'react';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card">
      <img src={img} alt={name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
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
