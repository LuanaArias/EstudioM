import { useState } from 'react';
import './FormContacto.css';

export function FormContacto() {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleWhatsAppSend = (e) => {
        e.preventDefault();

        // Tu número de teléfono con código de país 
        const telefono = "5491100000000"; 
    
        // Armamos el texto con saltos de línea codificados (%0A)
        const mensajeWsp = `Hola Mónica! Mi nombre es *${nombre}* y me gustaría realizar el siguiente trabajo:%0A%0A${descripcion}`;
    
        // Creamos la URL de WhatsApp
        const url = `https://wa.me/${telefono}?text=${mensajeWsp}`;
    
        // Abrimos en una pestaña nueva
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
                    <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.207l-.694 2.54 2.595-.68c.905.515 1.83.843 2.844.843 3.181 0 5.767-2.586 5.767-5.766 0-3.18-2.587-5.77-5.769-5.77zm3.387 8.192c-.146.415-.852.759-1.185.808-.333.05-.664.125-2.072-.444-1.705-.688-2.774-2.45-2.859-2.564-.084-.114-.694-.922-.694-1.757 0-.835.437-1.245.593-1.411.156-.167.343-.208.457-.208.115 0 .229 0 .323.005.104.005.245-.039.385.297.146.349.5.1.22l.604 1.472c.073.141.12.305.026.49-.094.185-.141.303-.281.465-.141.162-.297.271-.422.417-.135.156-.276.323-.119.593.156.27.693 1.144 1.484 1.847.79.703 1.458.922 1.729 1.057.271.135.427.114.583-.062.156-.177.666-.771.843-1.037.177-.266.354-.224.593-.135.24.09.1.516 2.052.1.343.156.51.24.645.292.135.052.27.078.417.146.146.068.323.114.479.281z"/>
                    </svg>
                </button>
            </div>
            </form>
        </div>
    </section>
  );
}