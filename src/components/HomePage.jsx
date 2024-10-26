import React from 'react';
import Slider from 'react-slick';
import './HomePage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import auto_banner from '../assets/lambo.png';
import aceite from '../assets/aceite.png';
import lampara from '../assets/lampara.png';
import bateria from '../assets/bateria.png';
import local from '../assets/Local.jpeg';
import { FaLightbulb, FaOilCan, FaCarBattery } from 'react-icons/fa';  // Importación de íconos
import { FaArrowRight } from "react-icons/fa";
import { BsChatQuoteFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import ProductsPage from "./ProductsPage";
import WhatsAppButton from './WhatsAppButton';
import ContactForm from './Form'




const HomePage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const testimonials = [
    {
      id: 1,
      text: "Te safa donde compras aceite suelto o otra cosa un sabado a la tarde y domingo..solo ahi....",
      author: "Hector Zarza",
      source: "Opiniones de Google"
    },
    {
      id: 2,
      text: "Me ayudo a reparar una pinchadura me afrecio una espuma que levanto la cubierta y pude llegar a la gomeria. Muy amable se acerco hasta donde tenia el auto.",
      author: "Diego Lombardi",
      source: "Opiniones de Google"
    },
    {
      id: 3,
      text: "Trato cordial. Estaban de mudanza. Trabajo Perfecto. Recomiendo!",
      author: "Gabriel Yaryura",
      source: "Opiniones de Google"
    }
  ];
  return (
    <div className='Home-Page'>

       {/* BANNER */}
        <section id='home' className="banner-slider">
          <div className="banner">
            <div className="banner-content">
              <h1>ACCESORIOS Y<br />REPUESTOS DE AUTOS</h1>
              <p className="description">Al servicio de nuestros clientes.</p>
              {/* Boton hacia productos */}
                <a href="#products">
                <button className="banner-button">
                    NUESTROS PRODUCTOS <FaArrowRight />
                  </button>
                </a>
            </div>
            <div className="overlay-image">
              <img src={auto_banner} alt="lamborghini roja" />
            </div>
          </div>
        </section>

      {/* SERVICES */}
      <section id='services' className="services-section">
            <div className="service-title">
              <h2>NUESTROS SERVICIOS</h2>
                <div className="service-subtitle">
                  <h4>Todo lo que tu auto necesita, en un solo lugar</h4>
                </div>
            </div>        
              <div className="services">
                  <div className="service">
                      <div className="service-image">
                      <img src={lampara} alt="cambio de lamparas" />
                      </div>
                      <div className="icon-container">
                          <FaLightbulb size={48} color="#b50c09" />  {/* Ícono de lámparas */}
                      </div>
                      <div className="service-content">
                          <h3>Venta y Colocación de Lámparas</h3>
                          <p>Te ofrecemos una selección de lámparas de alta calidad y nos encargamos de su instalación para asegurar un rendimiento óptimo de la iluminación de tu auto.
                          </p>
                          <a href="https://wa.me/5491153416197?text=Hola,%20quiero%20consultar%20sobre%20sus%20servicios%20de%20lámparas" target="_blank" rel="noopener noreferrer">
                            <button>
                              Consultar <FaArrowRight />
                            </button>
                          </a>
                      </div>
                  </div>
                  <div className="service">
                      <div className="service-image">
                        <img src={aceite} alt="cambio de aceite" />
                      </div>
                      <div className="icon-container">
                          <FaOilCan size={48} color="#b50c09" />  {/* Ícono de aceite */}
                      </div>
                      <div className="service-content">
                          <h3>Venta y Colocación de Aceites Sueltos y Envasados</h3>
                          <p> Disponemos de aceites minerales, semisintéticos y sintéticos.</p>
                          <a href="https://wa.me/5491153416197?text=Hola,%20quiero%20consultar%20sobre%20sus%20servicios%20de%20aceites" target="_blank" rel="noopener noreferrer">
                            <button>
                              Consultar <FaArrowRight />
                            </button>
                          </a>
                      </div>
                  </div>
                  <div className="service">
                      <div className="service-image">
                        <img src={bateria} alt="cambio de baterias" />
                      </div>
                      <div className="icon-container">
                          <FaCarBattery size={48} color="#b50c09" />  {/* Ícono de baterías */}
                      </div>
                      <div className="service-content">
                          <h3>Venta y Colocación de Baterías</h3>
                          <p>Contamos con baterías de distintas marcas y modelos, y nos ocupamos de la instalación para que tu auto esté siempre listo para arrancar.
                          </p>
                          <a href="https://wa.me/5491153416197?text=Hola,%20quiero%20consultar%20sobre%20sus%20servicios%20de%20baterías" target="_blank" rel="noopener noreferrer">
                            <button>
                              Consultar <FaArrowRight />
                            </button>
                          </a>
                      </div>
                  </div>
              </div>
      </section>

      {/* PRODUCTOS*/}
      <section id='products' className="products-section">
        <div className="products-container">
            <ProductsPage />
        </div>
        {/* <img src={Producto_estrella} alt="Featured Product" />
        <div>
          <h2>Aceite Puma Semisintetico 10w40 Extra GD</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed recusandae quo culpa unde, odio at quisquam voluptates, quas dolore, amet magni inventore ea. Ad blanditiis quam eveniet minus, reiciendis aliquam! Voluptates atque quos, pariatur qui sed cumque amet error excepturi harum enim, ipsam nulla at possimus aperiam, omnis esse quasi.</p>
          <Link to="/product/1">
            <button>Ver Detalles</button>
          </Link>
        </div> */}

      </section>

      
      {/* TESTIMONIALS */}
      <section id='testimonials' className="testimonials">
        <div className="testimonials-icon">
          <BsChatQuoteFill />
        </div>
        <h2>LO QUE DICEN NUESTROS CLIENTES</h2> 
        <Slider {...sliderSettings}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-slide">
              <p>"{testimonial.text}"</p>
              <h4>- {testimonial.author}</h4>
              <small>{testimonial.source}</small>
            </div>
          ))}
        </Slider>
      </section>

      {/* ABOUT */}
      <section id='about' className="about">
        <div className="about-container">
            <div className='about-text_container'>
                <div class="about-header"> 
                    <h2>SOBRE NOSOTROS</h2>
                </div>
                <p>La Bujía Loca, fundada en los 80 por Mario Lowenstein y Susana Friessen, se consolidó durante<b> 40 años en el mercado automotriz </b>gracias a su atención personalizada y productos de calidad. En 2023, los fundadores decidieron donar la empresa a sus empleados como reconocimiento a su esfuerzo y dedicación</p>
                <p>Ahora, bajo la gestión de sus ex empleados en<b> su nueva ubicación en Av. Directorio 1503</b>, La Bujía Loca sigue manteniendo sus valores de confianza y satisfacción del cliente, ofreciendo un servicio cercano y especializado.</p>
                <a href="#form">
                  <button className='about-button'>
                      CONTACTANOS <FaArrowRight />
                  </button>
                </a>
            </div>
            <img src={local} alt="About Us" />
        </div>
      </section>
      

      {/* CONTACT */}
      <ContactForm />

      {/* Botón de WhatsApp */}
      <WhatsAppButton />

    </div>
  );
}

export default HomePage;
