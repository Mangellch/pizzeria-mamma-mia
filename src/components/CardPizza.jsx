import { formatPrice } from '../assets/helpers/formatPrice';

const CardPizza = ({ img, name, price, ingredients, desc }) => {
  return (
    <div className="card" style={{ width: '30rem' }}>
      <img src={img} className="card-img-top" alt={name} />

      <div
        className="card-body d-flex flex-column"
        style={{ minHeight: '320px' }}
      >
        <h3 className="card-title text-center">{name}</h3>
        <p className="card-text small text-muted">{desc}</p>

        <p className="card-text mb-1 fw-bold border-bottom">Ingredientes:</p>
        <ul className="list-unstyled ms-3 flex-grow-1">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="text-center border-bottom">
              🍕 {ingredient}
            </li>
          ))}
        </ul>

        <p className="card-text text-center mt-3">
          Price: {formatPrice(price)}
        </p>

        <div className="d-flex gap-3 justify-content-center mt-auto">
          <a href="#" className="btn btn-dark">Ver más</a>
          <a href="#" className="btn btn-dark">Añadir</a>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
