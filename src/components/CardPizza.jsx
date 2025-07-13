import { Link } from 'react-router-dom';
import { useState } from 'react';
import { formatPrice } from '../assets/helpers/formatPrice';
import { useCart } from '../context/CartContext';

const CardPizza = ({ id, img, name, price, ingredients, desc }) => {
  const { addToCart } = useCart();
  const [showAlert, setShowAlert] = useState(false);

  const handleAdd = () => {
    const pizza = { id, name, price, img };
    addToCart(pizza);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  return (
    <div className="card" style={{ width: '30rem' }}>
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body d-flex flex-column" style={{ minHeight: '320px' }}>
        <h3 className="card-title text-center">{name}</h3>
        <p className="card-text small text-muted">{desc}</p>

        <p className="card-text mb-1 fw-bold border-bottom">Ingredientes:</p>
        <ul className="list-unstyled ms-3 flex-grow-1">
          {ingredients.map((ing, i) => (
            <li key={i} className="text-center border-bottom">🍕 {ing}</li>
          ))}
        </ul>

        <p className="card-text text-center mt-1">
          Price: {formatPrice(price)}
        </p>

        <div
          className="alert alert-success text-center p-2"
          role="alert"
          style={{
            visibility: showAlert ? 'visible' : 'hidden',
            transition: 'visibility 0.3s',
          }}
        >
          🍕 Pizza añadida con éxito
        </div>

        <div className="d-flex gap-3 justify-content-center">
          <Link to={`/pizza/${id}`} className="btn btn-dark">
            Ver más
          </Link>

          <button className="btn btn-dark" onClick={handleAdd}>
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
