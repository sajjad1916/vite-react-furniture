import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/custom.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import Shop from "./pages/Shop";



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
