import { Link } from "react-router-dom";
import './Contactanos.css'
export function Contactanos(){
    return(
        <section className="section-inicio-contactanos">
            <h2>Comienza tu transformación</h2>
            <p>Agenda una consulta y descubre cómo podemos transformar tu espacio en algo extraordinario</p>
            <Link to="/contacto" className="btn contactanos-inicio">
              Contáctanos
            </Link>
        </section>
    )
}