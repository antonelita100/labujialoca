import "./footer.css"
import logo from '../assets/Logo.png'
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer>
            <div className="footer-container">
                {/* Primera columna: Logo y texto */}
                <div className="footer-column logo-column">
                    <img src={logo} alt="Logo la bujia loca" className="footer-logo" />            
                    <p className="footer-text">ACCESORIOS Y
                    REPUESTOS DE AUTOS DE LA MEJOR CALIDAD.</p>
                </div>

                {/* Segunda columna: Links de secciones */}
                <div className="footer-column links-column">
                    <h4>Secciones</h4>
                    <ul>
                    <li><Link to="/#home">Inicio</Link></li>
                    <li><Link to="/#about">Nosotros</Link></li>
                    <li><Link to="/#services">Servicios</Link></li>
                    <li><Link to="/#contact">Contacto</Link></li>
                    </ul>
                </div>

                {/* Tercera columna: Info de contacto */}
                <div className="footer-column contact-column-footer">
                    <h4>Contacto</h4>
                    <p>Email: labujialocaexpress@gmail.com</p>
                    <p>Teléfono: +54 11 6808-1631</p>
                    <p>Dirección: Av. Directorio 1503</p>
                </div>
            </div>

        <div className="footer-copyright">
            <h3 className="footer-text">&copy; 2024 La Bujia Loca</h3>
        </div>
        </footer>
        );
}

export default Footer