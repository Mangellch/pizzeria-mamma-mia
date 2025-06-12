import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../assets/helpers/pizzas";

const Home = () => {
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
