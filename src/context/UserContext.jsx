import { createContext, useState, useEffect, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
  };

  const getProfile = async () => {
    if (!token) return;

    try {
      const res = await fetch("http://localhost:5000/api/auth/me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Token inválido o expirado");

      const data = await res.json();
      setEmail(data.email);
    } catch (err) {
      console.error("Error fetching profile:", err);
      logout(); // Si hay error con el token, cerrar sesión
    }
  };

  useEffect(() => {
    if (token) {
      getProfile();
    } else {
      setEmail(null);
    }
  }, [token]);

  const login = async ({ email, password }) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        await getProfile(); // Actualizar email desde backend
        return { success: true };
      } else {
        return { success: false, message: data.message || "Error en login" };
      }
    } catch (err) {
      console.error("Login failed:", err);
      return { success: false, message: err.message };
    }
  };

  const register = async ({ email, password }) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        await getProfile(); // Actualizar email desde backend
        return { success: true };
      } else {
        return { success: false, message: data.message || "Error en registro" };
      }
    } catch (err) {
      console.error("Register failed:", err);
      return { success: false, message: err.message };
    }
  };

  return (
    <UserContext.Provider
      value={{ email, token, login, register, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
