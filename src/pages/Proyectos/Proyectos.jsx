import './Proyectos.css';
import { proyectos } from '../../constants/proyectos';
export function Proyectos() {
  return (
    <section className="proyectos-section">
      <div className="proyectos-header">
        <span className="subtitle">Portafolio</span>
        <h2>Proyectos Seleccionados</h2>
        <p>Una mirada a nuestros trabajos más recientes</p>
      </div>

      <div className="proyectos-grid">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="proyecto-card">
            <div className="proyecto-image-container">
              <img src={proyecto.imagen} alt={proyecto.titulo} />
              <div className="proyecto-overlay">
                <div className="proyecto-info">
                  <span className="proyecto-cat">{proyecto.categoria}</span>
                  <h3>{proyecto.titulo}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}