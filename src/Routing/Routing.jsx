import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "../components/Detail/Detail";
import AboutUs from "../Screens/About/AboutUs";
import Contact from "../Screens/Contact/Contact";
import Home from "../Screens/Home/Home";
import Tienda from "../Screens/Tienda/Tienda";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/category/:categoryId" element={<Tienda />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
