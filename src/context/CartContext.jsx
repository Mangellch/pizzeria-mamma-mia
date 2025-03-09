import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Función para añadir al carrito
  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existingPizza = prevCart.find((item) => item.id === pizza.id);
      
      let updatedCart;
      if (existingPizza) {
        //aumentar la cantidad
        updatedCart = prevCart.map((item) =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        //agregar el producto con count 1
        updatedCart = [...prevCart, { ...pizza, count: 1 }];
      }

      // Actualizar el total
      updateTotal(updatedCart);
      
      return updatedCart;
    });
  };

  // Función para actualizar el total
  const updateTotal = (newCart) => {
    const totalPrice = newCart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);
    setTotal(totalPrice);
  };

  // Función para actualizar la cantidad de un producto
  const updateQuantity = (id, delta) => {
    setCart((prevCart) => {
  
      const updatedCart = prevCart.map((item) => {
        if (item.id === id) {
 
          return { ...item, count: Math.max(item.count + delta, 0) };
        }
        return item;
      }).filter((item) => item.count > 0); // Eliminar productos con cantidad 0

      // Actualizar el total
      updateTotal(updatedCart);

      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, total, addToCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useCart = () => useContext(CartContext);
