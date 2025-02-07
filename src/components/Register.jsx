import React, { useState } from "react";
import "./register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const isValidEmail = (email) => { 
    
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    let errorMessage = "";

    // Validaciones
    if (!email || !password || !confirmPassword) {
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="items">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              placeholder="Contraseña"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="items">
            <label htmlFor="repeat-password">Repetir contraseña</label>
            <input
              type="password"
              placeholder="Repetir contraseña"
              id="repeat-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {message && <p className="message">{message}</p>}

          <button type="submit">Registrate</button>
        </div>
      </form>
    </>
  );
};

export default Register;
