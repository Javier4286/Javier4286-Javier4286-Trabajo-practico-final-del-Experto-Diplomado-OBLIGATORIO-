import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import DetalleProducto from "./Pages/DetalleProducto/DetalleProducto";
import Registro from "./Pages/Registro/Registro";
import Login from "./Pages/Login/Login";
import NotFound from "./pages/notFound/NotFound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <header><Header /></header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalleProducto/:id" element={<DetalleProducto />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer><Footer /></footer>
    </Router>
  )
}

export default App