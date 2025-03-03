import React, { useState } from "react";
import "./register.css";

const Register = () => {
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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

    const { email, password, confirmPassword } = usuario;

    console.log(email, password, confirmPassword);

    // Validaciones
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      errorMessage = "⚠ Todos los campos son obligatorios.";
    } else if (!isValidEmail(email)) {
      errorMessage = "⚠ Ingresa un email válido.";
    } else if (password.length < 6) {
      errorMessage = "⚠ La contraseña debe tener al menos 6 caracteres.";
    } else if (password !== confirmPassword) {
      errorMessage = "⚠ Las contraseñas no coinciden.";
    }

    if (errorMessage) {
      setMessage(errorMessage);
      return;
    }

    // Si pasa todas las validaciones
    setMessage("");
    alert("✅ Registro exitoso.");
    window.location.reload();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Registro</h1>

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

          <div className="items">
            <label htmlFor="confirmPassword">Repetir contraseña</label> 
            <input
              type="password"
              placeholder="Repetir contraseña"
              id="confirmPassword"
              value={usuario.confirmPassword}
              onChange={handleOnChange}
            />
          </div>

          <button type="submit">Registrate</button>

          {message && <p className="message">{message}</p>}
        </div>
      </form>
    </>
  );
};

export default Register;
