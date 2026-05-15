import './SobreMi.css';
import img from '../../assets/Galeria/Cocinaysala.png'

export function SobreMi() {
  return (
    <section className="sobre-mi" id="sobre-mi">
      <div className="sobre-mi-container">
        
        <div className="sobre-mi-image">
          <div className="image-wrapper">
            <img src={img} alt="Arquitecta de Estudio M" />
            <div className="decor-box"></div>
          </div>
        </div>

        <div className="sobre-mi-content">
          <span className="subtitle">La mente detrás del diseño</span>
          <h2>Transformando visiones en espacios tangibles</h2>
          <div className="divider"></div>
          
          <p>
            Soy la creadora de Estudio M, un espacio donde el diseño, la estética y la funcionalidad se encuentran para dar vida a cada proyecto. Mi enfoque está en escuchar, interpretar y transformar ideas en espacios únicos, pensados a medida de cada cliente.
          </p>
          
          <p>
            Con una mirada detallista y sensible, trabajo buscando equilibrio entre lo práctico y lo emocional, porque creo que los espacios no solo se ven: se sienten, se viven.
          </p>

          <p>
            Estudio M nace desde la pasión por crear, renovar y potenciar cada ambiente, acompañando a quienes confían en mí en todo el proceso, desde la idea inicial hasta el resultado final.
          </p>
          <div className="sobre-mi-stats">
            <div className="stat-item">
              <span className="stat-number">+5</span>
              <span className="stat-text">Años de experiencia</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">+30</span>
              <span className="stat-text">Proyectos finalizados</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}