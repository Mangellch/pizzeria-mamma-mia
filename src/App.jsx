import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./view/Home";
import Register from "./view/Register";
import Login from "./view/Login";
import Cart from "./view/Cart";
import Pizza from "./view/Pizza";
import Profile from "./view/Profile";
import NotFound from "./view/NotFound";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/p001" element={<Pizza />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
