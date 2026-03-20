import { Link } from "react-router-dom";
import "./Hero.css";

export function Hero() {
    return (
        <section
            className="hero"
            style={{
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6)",
            }}
        >
            <div className="hero-overlay">
                <div className="hero-container">
                    <div className="hero-content">
                        <h1>
                            Estudio <span>M</span>
                        </h1>

                        <p>Diseñamos espacios que inspiran</p>

                        <div className="hero-buttons">
                            <Link to="/galeria" className="btn outline">
                                Explorar proyectos →
                            </Link>

                            <Link to="/contacto" className="btn primary">
                                Contáctanos
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}