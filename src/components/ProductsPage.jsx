import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import './ProductsPage.css';
import { FaArrowRight } from "react-icons/fa";

const imagesFolderAceites = require.context('../assets/Productos/Aceites', false, /\.(png|jpe?g|svg)$/);
const imagesFolderEncendido = require.context('../assets/Productos/Encendido', false, /\.(png|jpe?g|svg)$/);
const imagesFolderFiltros = require.context('../assets/Productos/Filtros', false, /\.(png|jpe?g|svg)$/);
const imagesFolderLamparas = require.context('../assets/Productos/Lamparas', false, /\.(png|jpe?g|svg)$/);
const imagesFolderLimpieza = require.context('../assets/Productos/Limpieza', false, /\.(png|jpe?g|svg)$/);
const imagesFolderMantenimiento = require.context('../assets/Productos/Mantenimiento', false, /\.(png|jpe?g|svg)$/);
const imagesFolderRefrigeracion = require.context('../assets/Productos/Refrigeracion', false, /\.(png|jpe?g|svg)$/);
const imagesFolderSeguridad = require.context('../assets/Productos/Seguridad', false, /\.(png|jpe?g|svg)$/);

const ProductsPage = () => {
  const products = [
    { id: 1, name: 'Aceite Semisinteico Puma 4L', image: imagesFolderAceites('./semisintetico.png'), category: 'Aceites'  },
    { id: 2, name: 'Aceite Semisinteico Puma 1L', image: imagesFolderAceites('./semisintetico2.png'), category: 'Aceites'  },
    { id: 3, name: 'Aceite Sinteico Puma 4L', image: imagesFolderAceites('./sintetico.png'), category: 'Aceites'  },
    { id: 4, name: 'Aceite Sinteico Puma 1L', image: imagesFolderAceites('./sintetico2.png'), category: 'Aceites'  },
    { id: 5, name: 'Aceite Suelto', image: imagesFolderAceites('./suelto.png'), category: 'Aceites'  },
    { id: 6, name: 'Bobina Volkswagen', image: imagesFolderEncendido('./bobina.jpeg'), category: 'Encendido' },
    { id: 7, name: 'Bujia Champion', image: imagesFolderEncendido('./bujia.jpeg'), category: 'Encendido' },
    { id: 8, name: 'Bujia NGK', image: imagesFolderEncendido('./bujia2.jpeg'), category: 'Encendido' },
    { id: 9, name: 'Cable de Bujias AcDelco', image: imagesFolderEncendido('./cables.jpeg'), category: 'Encendido' },
    { id: 10, name: 'Cable de Bujias Genoud', image: imagesFolderEncendido('./cables2.jpeg'), category: 'Encendido' },
    { id: 11, name: 'Filtro de Aceite', image: imagesFolderFiltros('./aceite.jpeg'), category: 'Filtros' },
    { id: 12, name: 'Filtro de Aire', image: imagesFolderFiltros('./aire.jpeg'), category: 'Filtros' },
    { id: 13, name: 'Iluminacion Efecto Xenon', image: imagesFolderLamparas('./lamparas.jpeg'), category: 'Lamparas' },
    { id: 14, name: 'Luces Led', image: imagesFolderLamparas('./lamparas2.jpeg'), category: 'Lamparas' },
    { id: 15, name: 'Lampara de Señalizacion', image: imagesFolderLamparas('./lamparas3.jpeg'), category: 'Lamparas' },
    { id: 16, name: 'Halogena H4', image: imagesFolderLamparas('./lamparas4.jpeg'), category: 'Lamparas' },
    { id: 17, name: 'Cepillo', image: imagesFolderLimpieza('./limpieza.jpeg'), category: 'Limpieza' },
    { id: 18, name: 'Silicona Liquida', image: imagesFolderLimpieza('./limpieza2.jpeg'), category: 'Limpieza' },
    { id: 19, name: 'Shampoo Envasado', image: imagesFolderLimpieza('./limpieza3.jpeg'), category: 'Limpieza' },
    { id: 20, name: 'Gamuza Sinteica', image: imagesFolderLimpieza('./limpieza4.jpeg'), category: 'Limpieza' },
    { id: 21, name: 'Silicona en Aerosol', image: imagesFolderLimpieza('./limpieza5.jpeg'), category: 'Limpieza' },
    { id: 22, name: 'Escobillas', image: imagesFolderLimpieza('./limpieza6.jpeg'), category: 'Limpieza' },
    { id: 23, name: 'Cera Teflonada', image: imagesFolderLimpieza('./limpieza7.jpeg'), category: 'Limpieza' },
    { id: 24, name: 'Cera Liquida', image: imagesFolderLimpieza('./limpieza8.jpeg'), category: 'Limpieza' },
    { id: 25, name: 'Shampoo Siliconado', image: imagesFolderLimpieza('./limpieza10.jpeg'), category: 'Limpieza' },
    { id: 26, name: 'Silicona Suelta', image: imagesFolderLimpieza('./limpieza9.jpeg'), category: 'Limpieza' },
    { id: 27, name: 'Limpia Cuerpo Mariposa', image: imagesFolderMantenimiento('./mantenimiento.jpeg'), category: 'Mantenimiento' },
    { id: 28, name: 'Tapa Fugas Radiadores', image: imagesFolderMantenimiento('./mantenimiento2.jpeg'), category: 'Mantenimiento' },
    { id: 29, name: 'Limpia Inyectores Liqui Moly', image: imagesFolderMantenimiento('./mantenimiento3.jpeg'), category: 'Mantenimiento' },
    { id: 30, name: 'Limpia Inyectores', image: imagesFolderMantenimiento('./mantenimiento4.jpeg'), category: 'Mantenimiento' },
    { id: 31, name: 'Liquido Refrigerante Concentrado', image: imagesFolderRefrigeracion('./refrigerante.jpeg'), category: 'Refrigerante' },
    { id: 32, name: 'Liquido Refrigerante Petronas', image: imagesFolderRefrigeracion('./refrigerante2.jpeg'), category: 'Refrigerante' },
    { id: 33, name: 'Agua Desmineralizada', image: imagesFolderRefrigeracion('./refrigerante3.jpeg'), category: 'Refrigerante' },
    { id: 34, name: 'Liquido Refrigerante', image: imagesFolderRefrigeracion('./refrigerante4.jpeg'), category: 'Refrigerante' },
    { id: 35, name: 'Kit de Seguridad', image: imagesFolderSeguridad('./seguridad.jpeg'), category: 'Seguridad' },
    { id: 36, name: 'Matafuegos', image: imagesFolderSeguridad('./seguridad2.jpeg'), category: 'Seguridad' },
    { id: 37, name: 'Bulones Anti Robo', image: imagesFolderSeguridad('./seguridad3.jpeg'), category: 'Seguridad' },
    { id: 38, name: 'Criquet Tijera', image: imagesFolderSeguridad('./seguridad4.jpeg'), category: 'Seguridad' },
    { id: 39, name: 'Criquet Hidraulico', image: imagesFolderSeguridad('./seguridad5.jpeg'), category: 'Seguridad' },
    { id: 40, name: 'Compresor de Aire', image: imagesFolderSeguridad('./seguridad6.jpeg'), category: 'Seguridad' },
  ];

  const [filteredCategory, setFilteredCategory] = useState('All');
  const [visibleProducts, setVisibleProducts] = useState(8);

  // Función para filtrar productos por categoría
  const handleFilterCategory = (category) => {
    setFilteredCategory(category);
    setVisibleProducts(8); // Reiniciar el número de productos visibles al cambiar la categoría
  };

  // Productos filtrados según la categoría seleccionada
  const filteredProducts = filteredCategory === 'All'
    ? products
    : products.filter(product => product.category === filteredCategory);

  // Función para mostrar más productos
  const handleShowMore = () => {
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 8);
  };

  return (
    <section className="products">
      <div className="products-container">
        <div className="products-title">
          <h2>NUESTROS PRODUCTOS</h2>
          <div className="products-subtitle">
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in</h4>
          </div>
        </div>

        {/* Botones de categorías */}
        <div className="category-buttons">
          <button onClick={() => handleFilterCategory('All')}>Todos</button>
          <button onClick={() => handleFilterCategory('Aceites')}>Aceites</button>
          <button onClick={() => handleFilterCategory('Encendido')}>Encendido</button>
          <button onClick={() => handleFilterCategory('Filtros')}>Filtros</button>
          <button onClick={() => handleFilterCategory('Lamparas')}>Lámparas</button>
          <button onClick={() => handleFilterCategory('Limpieza')}>Limpieza</button>
          <button onClick={() => handleFilterCategory('Mantenimiento')}>Mantenimiento</button>
          <button onClick={() => handleFilterCategory('Refrigerante')}>Refrigeración</button>
          <button onClick={() => handleFilterCategory('Seguridad')}>Seguridad</button>
        </div>

        {/* Mostrar productos filtrados */}
        <div className="products-grid">
          {filteredProducts.slice(0, visibleProducts).map(product => (
            <div key={product.id} className="product-item">
              <LazyLoad height={200} offset={100}>
                <div className="product-img">
                  <img src={product.image} alt={product.name} />
                </div>
              </LazyLoad>
              <div className="product-content">
                <h2>{product.name}</h2>
                <div className="product-btn">
                  <Link to={`/product/${product.id}`}>
                    VER DETALLES <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mostrar botón "Ver más" si hay más productos */}
        {visibleProducts < filteredProducts.length && (
          <div className="product-view_more">
            <button onClick={handleShowMore}>VER MÁS PRODUCTOS</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsPage;















