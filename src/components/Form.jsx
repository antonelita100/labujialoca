import React, { useState } from 'react';
import { FaArrowRight, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import Swal from 'sweetalert2';
import './Form.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          access_key: 'cbd1f3d1-170b-4d1f-8b8f-da371a8ecab3', 
        }),
      });

      if (response.ok) {
        Swal.fire({
          title: 'Mensaje enviado!',
          text: 'Estaremos en contacto próximamente!',
          icon: 'success',
          confirmButtonText: 'Cerrar',
        });
        setFormData({ name: '', email: '', phone: '', message: '' }); // Resetea el formulario
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.',
          icon: 'error',
          confirmButtonText: 'Cerrar',
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Error al enviar el mensaje. Por favor, inténtalo más tarde.',
        icon: 'error',
        confirmButtonText: 'Cerrar',
      });
    }
  };

  return (
    <div id='contact' className="contact-section">
      <div className="contact">
        {/* MAPA */}
        <div className="contact-map">
          <div className="contact-map_title">
            <h2>¿DÓNDE ESTAMOS?</h2>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.9784903388736!2d-58.45097733120764!3d-34.629983850484294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca31a46606a3%3A0x8a62103a504a5742!2sLa%20buj%C3%ADa%20loca!5e0!3m2!1ses-419!2sar!4v1726367707130!5m2!1ses-419!2sar"
            title="Mapa"
          ></iframe>
        </div>

        <div className="contact-container">
          <div className="contact-column">
            <div className="contact-column_title">
              <h2>INFO DE CONTACTO</h2>
            </div>
            {/* Ubicación */}
            <div className="info-item">
              <div className="icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-content">
                <h3>UBICACIÓN</h3>
                <span>Av. Directorio 1503, Caballito.</span>
              </div>
            </div>

            {/* Teléfono */}
            <div className="info-item">
              <div className="icon">
                <FaPhone />
              </div>
              <div className="info-content">
                <h3>TELÉFONO</h3>
                <span>(+54 11 6808-1631)</span>
              </div>
            </div>

            {/* Email */}
            <div className="info-item">
              <div className="icon">
                <FaEnvelope />
              </div>
              <div className="info-content">
                <h3>MAIL</h3>
                <span>labujialocaexpress@gmail.com</span>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div id="form" className="contact-form">
            <h2>MANDANOS UN MENSAJE</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="phone"
                  name="phone"
                  placeholder="Celular"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <textarea
                name="message"
                placeholder="Mensaje"
                value={formData.message}
                onChange={handleChange}
              />
              <button type="submit">Enviar Ahora <FaArrowRight /></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
