import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';
import ProductDetailPage from './components/ProductDetailPage';
import './App.css';
import Navigation from './components/header';
import Footer from './components/footer';
import Error404 from "./components/Error404";

const App = () => {
  const location = useLocation();

  // Efecto para hacer scroll a las secciones con hash (#services, #products, etc.)
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/products" element={<ProductsPage />} />
        <Route exact path="/product/:id" element={<ProductDetailPage className="product-detail-page"/>} />
        <Route path="/Error404" element={<Error404 />} />
        <Route path="*" element={<Navigate to="/Error404"/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
