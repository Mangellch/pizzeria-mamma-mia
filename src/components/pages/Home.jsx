import React, { useEffect, useState } from "react";
import Header from "../Header";
import CardPizza from "../CardPizza";
import { useCart } from "../../context/CartContext";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas");
        if (!res.ok) throw new Error("No se pudieron cargar las pizzas");
        const data = await res.json();
        setPizzas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  if (loading) return <p>Cargando pizzas...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Header />

      <div className="container my-5">
        <div className="row g-4">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-12 col-md-4 d-flex justify-content-center">
              <CardPizza
                id={pizza.id}
                img={pizza.img}
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                desc={pizza.desc}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

