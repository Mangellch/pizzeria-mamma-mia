import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState(""); 
  const handleOnChange = (e) => {
    setUsuario((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorMessage = "";

    const { email, password } = usuario;

    console.log(email, password);

    // Validaciones
    if (!email.trim() || !password.trim()) {
      errorMessage = "⚠ Todos los campos son obligatorios.";
    } else if (!isValidEmail(email)) {
      errorMessage = "⚠ Ingresa un email válido.";
    } else if (password.length < 6) {
      errorMessage = "⚠ La contraseña debe tener al menos 6 caracteres.";
    }

    if (errorMessage) {
      setMessage(errorMessage);
      return;
    }

    // Si pasa todas las validaciones
    setMessage("");
    alert("✅ Iniciaste sesión con éxito.");
    window.location.reload();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Inicia Sesión</h1>

          <div className="items">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={usuario.email}
              onChange={handleOnChange} 
            />
          </div>

          <div className="items">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              placeholder="Contraseña"
              id="password"
              value={usuario.password}
              onChange={handleOnChange}
            />
          </div>

          <button type="submit">Iniciar sesión</button>

          {message && <p className="message">{message}</p>}
        </div>
      </form>
    </>
  );
};

export default Login;
