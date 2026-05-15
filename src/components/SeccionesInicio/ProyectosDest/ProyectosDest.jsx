import imagen1 from '../../../assets/Galeria/bañoVerde.png'
import imagen2 from '../../../assets/Galeria/CocinaNordica.png'
import imagen3 from '../../../assets/Galeria/FrentePisano.png'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import './ProyectosDest.css'

export function ProyectosDest(){
    return(
        <section className="section-proyectos-destacados-container">
            <h2>Proyectos destacados</h2>
            <p>Cada proyecto es una historia única de transformación y creatividad</p>
            <div className="grid-proyectos-destacados">
                <div className="proyecto-destacado">
                    <img src={imagen1} alt="Proyecto 1" />
                    <div className="overlay-destacados">
                        <h3>Baños</h3>
                        <p>Toilette Ecléctico con Mural Paisajístico</p>
                    </div>
                </div>
                <div className="proyecto-destacado">
                    <img src={imagen2} alt="Proyecto 2" />
                    <div className="overlay-destacados">
                        <h3>Cocina</h3>
                        <p>Cocina Minimalista en Madera Clara y Contrastes</p>
                    </div>
                </div>

                <div className="proyecto-destacado">
                    <img src={imagen3} alt="Proyecto 3" />
                    <div className="overlay-destacados">
                        <h3>Locales Comerciales</h3>
                        <p>Frente Comercial Pisano</p>
                    </div>
                </div>
            </div>
            <Link to="/proyectos" className="btn primary-destacados">
                Ver todos mis proyectos <span>→</span>
            </Link>
        </section>
    )
}