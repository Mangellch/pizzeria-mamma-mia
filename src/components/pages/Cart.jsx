import { useState } from 'react';
import { pizzaCart as initialCart } from '../../assets/helpers/pizzas';
import { formatPrice } from '../../assets/helpers/formatPrice';

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  // Aumentar cantidad
  const increase = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  // Disminuir cantidad o eliminar si es 0
  const decrease = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  // Calcular total
  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Detalles del pedido:</h2>

      {cart.length === 0 ? (
        <p className="text-center">Tu carrito está vacío (por ahora 😁)</p>
      ) : (
        <>
          {cart.map((pizza) => (
            <div
              key={pizza.id}
              className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2"
            >
              <div className="d-flex align-items-center gap-3">
                <img
                  src={pizza.img}
                  alt={pizza.name}
                  style={{
                    width: '50px',
                    height: '50px',
                    objectFit: 'cover',
                    borderRadius: '5px',
                  }}
                />
                <span className="fw-bold text-capitalize">{pizza.name}</span>
                <span>{formatPrice(pizza.price)}</span>
              </div>

              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => decrease(pizza.id)}
                >
                  -
                </button>
                <span className="fw-bold">{pizza.count}</span>
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => increase(pizza.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <div className="text-start mt-4 mb-4">
            <h4>Total: {formatPrice(total)}</h4>
            <button className="btn btn-dark mt-2">Pagar</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
