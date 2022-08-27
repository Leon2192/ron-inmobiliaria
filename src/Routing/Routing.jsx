import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "../Screens/About/AboutUs";
import Alquileres from "../Screens/Alquileres/Alquileres";
import Contact from "../Screens/Contact/Contact";
import Home from "../Screens/Home/Home";
import Venta from "../Screens/Venta/Venta";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/alquileres" element={<Alquileres />} />
        <Route path="/venta" element={<Venta />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
