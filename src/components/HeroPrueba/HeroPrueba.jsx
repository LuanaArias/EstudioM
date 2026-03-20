import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HeroPrueba.css";

const slides = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
];

export function HeroPrueba(){
    const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // cambia cada 5s

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