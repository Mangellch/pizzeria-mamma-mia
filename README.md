# Pizzería Mamma Mia 🍕

This project is a pizza e-commerce web application built with **React** and **Vite**. It simulates an online shopping experience where users can register, log in, add pizzas to a shopping cart, and place orders.

## Features Implemented

- 🔐 **User Authentication** (Register, Login, Logout) using JWT tokens.
- 📦 **Shopping Cart** functionality with persistent state.
- 🛒 **Checkout system**: sends order data to backend via `/api/checkouts`.
- 👤 **User Profile** page showing authenticated user email and logout option.
- 📡 Backend API integration for:
  - `/api/auth/register`
  - `/api/auth/login`
  - `/api/auth/me`
  - `/api/checkouts`
- 🧠 State Management using React Context API (`UserContext`, `CartContext`).
- 💄 Basic UI styled with Bootstrap.

## Technologies Used

- React + Vite
- React Router DOM
- Context API
- Fetch API
- Bootstrap 5

## Setup

1. Clone the repository
2. Run `npm install`
3. Start the dev server with `npm run dev`
4. Then cd backend
5. Run `npm install`
6. `npm start` to run the backend

Make sure the backend is running on `http://localhost:5000` for the API requests to work correctly.
