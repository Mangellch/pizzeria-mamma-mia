import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useUser } from "../../context/UserContext";
import { formatPrice } from "../../assets/helpers/formatPrice";

const Cart = () => {
  const { cart, increment, decrement, getTotal } = useCart();
  const { token } = useUser();
  const total = getTotal();
  const [message, setMessage] = useState("");

  const handleCheckout = async () => {
    if (!token) {
      setMessage("Debes iniciar sesión para pagar.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      if (!res.ok) throw new Error("Error al procesar la compra");

      setMessage("Compra realizada con éxito 🎉");
    } catch (err) {
      setMessage("Error al procesar la compra: " + err.message);
    }
  };

  return (
    <div className="container vh-100 align-items-center justify-content-center mt-4">
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
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
                <span className="fw-bold text-capitalize">{pizza.name}</span>
                <span>{formatPrice(pizza.price)}</span>
              </div>

              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => decrement(pizza.id)}
                >
                  -
                </button>
                <span className="fw-bold">{pizza.quantity}</span>
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => increment(pizza.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <div className="text-start mt-4 mb-4">
            <h4>Total: {formatPrice(total)}</h4>
            <button
              className="btn btn-dark mt-2"
              disabled={!token}
              onClick={handleCheckout}
            >
              Pagar
            </button>
            {message && (
              <p
                className={`mt-2 ${
                  message.includes("éxito") ? "text-success" : "text-danger"
                }`}
              >
                {message}
              </p>
            )}
            {!token && (
              <p className="text-danger mt-2">Debes iniciar sesión para pagar.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
