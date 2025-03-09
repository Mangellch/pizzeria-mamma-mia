import { useCart } from "../context/CartContext";  
import './cardpizza.css';

const CardPizza = ({ id, name, price, ingredients, img, desc }) => {
  const { addToCart } = useCart(); // Obtienes la función para agregar al carrito

  // Aquí no hace falta modificar nada en cuanto a la lógica. 
  // Pero pasamos el objeto completo de la pizza al carrito.

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
          <button
            className="btn btn-secondary"
            onClick={() => addToCart({ id, name, price, ingredients, img, desc })} // Agregar pizza completa
          >
            Añadir al carrito 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
