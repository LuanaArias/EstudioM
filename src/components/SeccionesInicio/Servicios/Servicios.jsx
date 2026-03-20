import { useState } from "react";
import { servicios } from "../../../constants/servicios"
import './Servicios.css'

export function Servicios(){
    const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % servicios.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? servicios.length - 1 : prev - 1
    );
  };
    return(
        <section className="section-servicios-inicio">
            <div className="servicios-inicio-container">
                <h2>Nuestros servicios</h2>
                <p>Soluciones integrales de diseño adaptadas a tus necesidades</p>
            </div>
            <div className="servicios-grid">
                {servicios.map((servicio, index) => (
                <div key={index} className="servicio-card">
                    <h3>{servicio.titulo}</h3>
                    <p>{servicio.descripcion}</p>
                </div>
                ))}
            </div>
        </section>
    )
}