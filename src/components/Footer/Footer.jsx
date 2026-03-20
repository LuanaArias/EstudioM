import { Link } from "react-router-dom";
import './Footer.css'
import { LogoFooter } from "../ui/LogoFooter/LogoFooter";
export function Footer() {
  return (
    <footer className="footer-estudio">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo */}
          <div className="footer-brand">
            <LogoFooter />
            <p>Arquitectura y diseño de interiores que cuentan tu historia.</p>
          </div>

          {/* Navegación */}
          <div className="footer-links">
            <h3>Explorar</h3>
            <ul>
                <li>
                    <Link to="/">
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link to="/sobre-mi">
                        Sobre mí
                    </Link>
                </li>
                <li>
                    <Link to="/proyectos">
                        Proyectos
                    </Link>
                </li>
                <li>
                    <Link to="/contacto">
                        Contacto
                    </Link>
                </li>
            </ul>
          </div>

          {/*  Contacto */}
          <div className="footer-contact">
            <h3>Contacto</h3>
            <p>hola@estudiom.com</p>
            <p>Buenos Aires, Argentina</p>
            <div className="social-links">
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Estudio M. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}