import { useState } from 'react';
import './FormContacto.css';
import { BotonWsp } from '../../ui/BotonWsp/BotonWsp';

export function FormContacto() {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleWhatsAppSend = (e) => {
        e.preventDefault();
 
        const telefono = "5491156000863"; 
    
        const mensajeWsp = `Hola Mónica! Mi nombre es *${nombre}* y me gustaría realizar el siguiente trabajo:%0A%0A${descripcion}`;
    
        const url = `https://wa.me/${telefono}?text=${mensajeWsp}`;
    
        window.open(url, '_blank');
    };

    return (
        <section className="section-formulario-contacto">
        <div className="formulario-wrapper">
            <div className="formulario-header">
                <h2>Comienza tu transformación</h2>
                <p>Cuéntanos tu idea y hablemos por WhatsApp</p>
            </div>

            <form className="form-simple" onSubmit={handleWhatsAppSend}>
            <div className="input-group">
                <label htmlFor="nombre">NOMBRE COMPLETO</label>
                <input 
                    type="text" 
                    id="nombre" 
                    placeholder="Tu nombre aquí..." 
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required 
                />
            </div>

            <div className="input-group">
                <label htmlFor="descripcion">DESCRIPCIÓN DEL TRABAJO</label>
                <textarea 
                    id="descripcion" 
                    placeholder="Cuéntanos sobre tu espacio, estilo o necesidades..." 
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    required 
                    rows="5"
                />
            </div>

            <div className="submit-wrapper">
                <button type="submit" className="btn submit-wsp">
                    ENVIAR A WHATSAPP
                    <BotonWsp />
                </button>
            </div>
            </form>
        </div>
    </section>
  );
}