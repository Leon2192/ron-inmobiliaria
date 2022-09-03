import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropiedadesContainer from "../components/PropiedadesContainer/PropiedadesContainer";
import AboutUs from "../Screens/About/AboutUs";
import Alquileres from "../Screens/Alquileres/Alquileres";
import Contact from "../Screens/Contact/Contact";
import Home from "../Screens/Home/Home";
import Tienda from "../Screens/Tienda/Tienda";
import Venta from "../Screens/Venta/Venta";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/detail/:detailId" element={<PropiedadesContainer />} />
        <Route path="/category/:categoryId" element={<Tienda />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
