import imagen1 from '../../../assets/proyectosDest/imagen1.jpg'
import imagen2 from '../../../assets/proyectosDest/imagen2.jpg'
import imagen3 from '../../../assets/proyectosDest/imagen3.jpg'
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
                        <h3>Cocina Moderna</h3>
                        <p>Diseño en madera y mármol</p>
                    </div>
                </div>
                <div className="proyecto-destacado">
                    <img src={imagen2} alt="Proyecto 2" />
                    <div className="overlay-destacados">
                        <h3>Living Minimalista</h3>
                        <p>Espacios cálidos y funcionales</p>
                    </div>
                </div>

                <div className="proyecto-destacado">
                    <img src={imagen3} alt="Proyecto 3" />
                    <div className="overlay-destacados">
                        <h3>Interior Contemporáneo</h3>
                        <p>Luz natural y texturas</p>
                    </div>
                </div>
            </div>
            <Link to="/galeria" className="btn primary-destacados">
                Ver todos mis proyectos <span>→</span>
            </Link>
        </section>
    )
}