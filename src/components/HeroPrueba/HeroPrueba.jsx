import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HeroPrueba.css";
import hero1 from "../../assets/Galeria/interior.png";
import hero2 from "../../assets/Galeria/hero2.png";
import hero3 from "../../assets/Galeria/hero3.png";

const slides = [hero1, hero2, hero3];

export function HeroPrueba(){
    const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // cambia cada 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {slides.map((img, i) => (
        <div
          key={i}
          className={`hero-slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            Estudio <span>M</span>
          </h1>

          <p>Diseñamos espacios que inspiran</p>

          <div className="hero-buttons">
            <Link to="/galeria" className="btn primary">
              Explorar proyectos →
            </Link>

            <Link to="/contacto" className="btn outline">
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}