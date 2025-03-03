import { Link } from "react-router-dom";
import "./notfound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-card">
        <img
          src="/img/error.jpg"
          alt="404 Image"
          className="not-found-image"
        />
        <h1 className="not-found-title">404 - Página no encontrada</h1>
        <p className="not-found-text">Lo sentimos, la página que buscas no existe.</p>
        <Link to="/" className="not-found-link">Volver al inicio</Link>
      </div>
    </div>
  );
};

export default NotFound;

