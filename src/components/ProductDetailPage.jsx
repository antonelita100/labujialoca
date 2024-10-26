import React, { useEffect }  from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const imagesFolderAceites = require.context('../assets/Productos/Aceites', false, /\.(png|jpe?g|svg)$/);
const imagesFolderEncendido = require.context('../assets/Productos/Encendido', false, /\.(png|jpe?g|svg)$/);
const imagesFolderFiltros = require.context('../assets/Productos/Filtros', false, /\.(png|jpe?g|svg)$/);
const imagesFolderLamparas = require.context('../assets/Productos/Lamparas', false, /\.(png|jpe?g|svg)$/);
const imagesFolderLimpieza = require.context('../assets/Productos/Limpieza', false, /\.(png|jpe?g|svg)$/);
const imagesFolderMantenimiento = require.context('../assets/Productos/Mantenimiento', false, /\.(png|jpe?g|svg)$/);
const imagesFolderRefrigeracion = require.context('../assets/Productos/Refrigeracion', false, /\.(png|jpe?g|svg)$/);
const imagesFolderSeguridad = require.context('../assets/Productos/Seguridad', false, /\.(png|jpe?g|svg)$/);

const ProductDetailPage = () => {
  const { id } = useParams();
  const products = [
    { id: 1, name: 'Aceite Semisinteico Puma 4L', description: 'Aceite marca Puma de 4 litros, No es 100% sintético, pero ofrece un balance entre rendimiento y costo.', image: imagesFolderAceites('./semisintetico.png'), category: 'Aceites'  },
    { id: 2, name: 'Aceite Semisinteico Puma 1L', description: 'Aceite marca Puma de 1 litro, No es 100% sintético, pero ofrece un balance entre rendimiento y costo.', image: imagesFolderAceites('./semisintetico2.png'), category: 'Aceites'  },
    { id: 3, name: 'Aceite Sinteico Puma 4L', description: 'Lubricante de motor Puma de 4 litros, disponible en densidades 5W-40 y 5W-30.', image: imagesFolderAceites('./sintetico.png'), category: 'Aceites'  },
    { id: 4, name: 'Aceite Sinteico Puma 1L', description: 'Lubricante de motor Puma de 1 litro, disponible en densidades 5W-40 y 5W-30.', image: imagesFolderAceites('./sintetico2.png'), category: 'Aceites'  },
    { id: 5, name: 'Aceite Suelto', description: 'Disponible en mineral y semisintético, lubricando eficazmente el motor.', image: imagesFolderAceites('./suelto.png'), category: 'Aceites'  },
    { id: 6, name: 'Bobina Volkswagen', description: 'Encedido del auto. Especial para modelos como Suran, Polo y Gol.', image: imagesFolderEncendido('./bobina.jpeg'), category: 'Encendido' },
    { id: 7, name: 'Bujia Champion', description: 'Bujia marca Champion. Elemento clave para el encendido del motor.', image: imagesFolderEncendido('./bujia.jpeg'), category: 'Encendido' },
    { id: 8, name: 'Bujia NGK', description: 'Bujia marca NGK. Elemento clave para el encendido del motor.', image: imagesFolderEncendido('./bujia2.jpeg'), category: 'Encendido' },
    { id: 9, name: 'Cable de Bujias AcDelco', description: 'Cable de bujia marca AcDelco. Conducen la chispa para el encendido del auto.', image: imagesFolderEncendido('./cables.jpeg'), category: 'Encendido' },
    { id: 10, name: 'Cable de Bujias Genoud', description: 'Cable de bujia marca Genoud. Conducen la chispa para el encendido del auto.', image: imagesFolderEncendido('./cables2.jpeg'), category: 'Encendido' },
    { id: 11, name: 'Filtro de Aceite', description: 'Filtra las impurezas para proteger el motor.', image: imagesFolderFiltros('./aceite.jpeg'), category: 'Filtros' },
    { id: 12, name: 'Filtro de Aire', description: 'Evita que entre suciedad al motor, mejorando la eficiencia de combustible.', image: imagesFolderFiltros('./aire.jpeg'), category: 'Filtros' },
    { id: 13, name: 'Iluminacion Efecto Xenon', description: 'Luces bajas y altas con efecto xenón.', image: imagesFolderLamparas('./lamparas.jpeg'), category: 'Lamparas' },
    { id: 14, name: 'Luces Led', description: 'Ilumina tu camino con tecnología avanzada.', image: imagesFolderLamparas('./lamparas2.jpeg'), category: 'Lamparas' },
    { id: 15, name: 'Lampara de Señalizacion', description: 'Luces de posición, stop y giro.', image: imagesFolderLamparas('./lamparas3.jpeg'), category: 'Lamparas' },
    { id: 16, name: 'Halogena H4', description: 'Para luces altas y bajas.', image: imagesFolderLamparas('./lamparas4.jpeg'), category: 'Lamparas' },
    { id: 17, name: 'Cepillo', description: 'Para lavar las ruedas', image: imagesFolderLimpieza('./limpieza.jpeg'), category: 'Limpieza' },
    { id: 18, name: 'Silicona Liquida', description: 'Indicada para neumáticos.', image: imagesFolderLimpieza('./limpieza2.jpeg'), category: 'Limpieza' },
    { id: 19, name: 'Shampoo Envasado', description: 'Ideal para aquellos que buscan mantener su auto en las mejores condiciones.', image: imagesFolderLimpieza('./limpieza3.jpeg'), category: 'Limpieza' },
    { id: 20, name: 'Gamuza Sinteica', description: 'Rejilla húmeda para limpiar superficies.', image: imagesFolderLimpieza('./limpieza4.jpeg'), category: 'Limpieza' },
    { id: 21, name: 'Silicona en Aerosol', description: 'Especial para los interiores del auto.', image: imagesFolderLimpieza('./limpieza5.jpeg'), category: 'Limpieza' },
    { id: 22, name: 'Escobillas', description: 'Limpiaparabrisas de alta calidad', image: imagesFolderLimpieza('./limpieza6.jpeg'), category: 'Limpieza' },
    { id: 23, name: 'Cera Teflonada', description: 'Brillo y protección adicionales para tu auto.', image: imagesFolderLimpieza('./limpieza7.jpeg'), category: 'Limpieza' },
    { id: 24, name: 'Cera Liquida', description: ' Brillo máximo para tu vehículo.', image: imagesFolderLimpieza('./limpieza8.jpeg'), category: 'Limpieza' },
    { id: 25, name: 'Shampoo Siliconado', description: 'Para un lavado completo del auto.', image: imagesFolderLimpieza('./limpieza10.jpeg'), category: 'Limpieza' },
    { id: 26, name: 'Silicona Suelta', description: 'Ideal para aplicar en gomas, alfombras y plásticos.', image: imagesFolderLimpieza('./limpieza9.jpeg'), category: 'Limpieza' },
    { id: 27, name: 'Limpia Cuerpo Mariposa', description: 'Para mantener el cuerpo de mariposa del auto en óptimas condiciones.', image: imagesFolderMantenimiento('./mantenimiento.jpeg'), category: 'Mantenimiento' },
    { id: 28, name: 'Tapa Fugas Radiadores', description: 'Sella fugas en radiadores pinchados.', image: imagesFolderMantenimiento('./mantenimiento2.jpeg'), category: 'Mantenimiento' },
    { id: 29, name: 'Limpia Inyectores Liqui Moly', description: 'Producto especial para limpiar inyectores de nafta y diésel. Marca Liqui Molly.', image: imagesFolderMantenimiento('./mantenimiento3.jpeg'), category: 'Mantenimiento' },
    { id: 30, name: 'Limpia Inyectores', description: 'Producto especial para limpiar inyectores de nafta y diésel. Marca Manol.', image: imagesFolderMantenimiento('./mantenimiento4.jpeg'), category: 'Mantenimiento' },
    { id: 31, name: 'Liquido Refrigerante Concentrado', description: 'Puede diluirse hasta en 4 litros de agua.', image: imagesFolderRefrigeracion('./refrigerante.jpeg'), category: 'Refrigerante' },
    { id: 32, name: 'Liquido Refrigerante Petronas', description: 'Línea original de Fiat. Anticorrosivo y anticongelante para todo tipo de auto. Uso directo.', image: imagesFolderRefrigeracion('./refrigerante2.jpeg'), category: 'Refrigerante' },
    { id: 33, name: 'Agua Desmineralizada', description: 'Ideal para mezclar con el refrigerante, previene sarro y corrosión en el sistema de refrigeración del auto.', image: imagesFolderRefrigeracion('./refrigerante3.jpeg'), category: 'Refrigerante' },
    { id: 34, name: 'Liquido Refrigerante', description: 'Anticongelante y anticorrosivo para todo tipo de autos, listo para usar.', image: imagesFolderRefrigeracion('./refrigerante4.jpeg'), category: 'Refrigerante' },
    { id: 35, name: 'Kit de Seguridad', description: 'Incluye matafuegos, chaleco, botiquín de primeros auxilios y balizas.', image: imagesFolderSeguridad('./seguridad.jpeg'), category: 'Seguridad' },
    { id: 36, name: 'Matafuegos', description: 'Elemento esencial para la seguridad de tu auto y la VTV.', image: imagesFolderSeguridad('./seguridad2.jpeg'), category: 'Seguridad' },
    { id: 37, name: 'Bulones Anti Robo', description: 'Protege y asegura tus neumáticos.', image: imagesFolderSeguridad('./seguridad3.jpeg'), category: 'Seguridad' },
    { id: 38, name: 'Criquet Tijera', description: 'Herramienta fundamental para cambiar una rueda. Hasta 1 tonelada.', image: imagesFolderSeguridad('./seguridad4.jpeg'), category: 'Seguridad' },
    { id: 39, name: 'Criquet Hidraulico', description: 'Herramienta fundamental para cambiar una rueda. Hasta 2 toneladas.', image: imagesFolderSeguridad('./seguridad5.jpeg'), category: 'Seguridad' },
    { id: 40, name: 'Compresor de Aire', description: 'Ideal para inflar neumáticos fácilmente.', image: imagesFolderSeguridad('./seguridad6.jpeg'), category: 'Seguridad' },
];


    // Obtener el producto actual
    const product = products.find((prod) => prod.id === parseInt(id));

    // Filtrar productos relacionados que sean de la misma categoría
    const relatedProducts = products.filter((prod) => prod.category === product.category && prod.id !== product.id);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return (
      <div className='product_detail-container'>
        {product ? (
          <>
            <section className="product-detail">
              <img className="product_detail-img" src={product.image} alt={product.name} />
              <div className="product_detail-content">
                <h2 className="product_detail-name">{product.name}</h2>
                <p className="product_detail-description">{product.description}</p>
                <a href="https://wa.me/5491168081631" target="_blank" rel="noopener noreferrer">
                  <button className="product_detail-btn">Consultar Producto</button>
                </a>
              </div>
            </section>
            
            {/* Productos relacionados */}
            {relatedProducts.length > 0 && (
              <section className="related-products">
                <div className="related-products-container">
                  <h2>Productos Relacionados</h2>
                  <div className="related-products-list">
                    {relatedProducts.map((relatedProduct) => (
                      <div key={relatedProduct.id} className="related-product-item">
                        <div className="related-product-img">
                          <img src={relatedProduct.image} alt={relatedProduct.name} />
                        </div>
                        <div className="related-product-content">
                          <h2>{relatedProduct.name}</h2>
                          <div className="related-product-btn">
                            <Link to={`/product/${relatedProduct.id}`}>
                              VER DETALLES <FaArrowRight />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </>
        ) : (
          <p>Producto no encontrado</p>
        )}
      </div>
);
}

export default ProductDetailPage;
