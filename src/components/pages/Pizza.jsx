import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { formatPrice } from '../../assets/helpers/formatPrice'; 
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';


const Pizza = () => {
  const { pizzaId } = useParams();
  const { addToCart } = useCart(); 
  const [showAlert, setShowAlert] = useState(false);
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleAdd = () => {
  addToCart(pizza);
  setShowAlert(true);
  setTimeout(() => setShowAlert(false), 2000);
};

const navigate = useNavigate();
const handleBack = () => {
  navigate('/'); 
};

//aca utilizamos un useEffect para hacer la peticion a la api y obtener la pizza
  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/pizzas/${pizzaId}`);
        if (!res.ok) throw new Error('No se pudo obtener la pizza');
        const data = await res.json();
        setPizza(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, [pizzaId]); 

  if (loading) return <p>Cargando pizza...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!pizza) return null;

  return (
    <div className="card mx-auto" style={{ width: '30rem' }}>
      <img src={pizza.img} className="card-img-top" alt={pizza.name} />
      <div className="card-body d-flex flex-column" style={{ minHeight: '320px' }}>
        <h3 className="card-title text-center">{pizza.name}</h3>
        <p className="card-text small text-muted">{pizza.desc}</p>

        <p className="card-text mb-1 fw-bold border-bottom">Ingredientes:</p>
        <ul className="list-unstyled ms-3 flex-grow-1">
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index} className="text-center border-bottom">
              🍕 {ingredient}
            </li>
          ))}
        </ul>

        <p className="card-text text-center mt-3">
          Price: {formatPrice(pizza.price)}
        </p>
          {showAlert && (
            <div className="alert alert-success text-center" role="alert">
              🍕 Pizza añadida con éxito
            </div>
          )}
        <div className="d-flex gap-3 justify-content-center mt-auto">
          <button className="btn btn-dark" 
          onClick={handleBack}>Volver al menú</button>

          <button className="btn btn-dark" onClick={handleAdd}>
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;

