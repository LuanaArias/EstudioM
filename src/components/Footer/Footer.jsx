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
            <a href="https://wa.me/5491156000863?text=Hola%2C%20quiero%20hacer%20una%20consulta" target="_blank" className="whatsapp-link">
              <p>+54 9 11 5600-0863</p>
            </a>
            <p>Buenos Aires, Argentina</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Estudio M. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}