import './Opiniones.css'
export function Opiniones(){
    return(
        <section className="section-opiniones">
            <div className="opiniones-container">
                <h2>Palabras de nuestros clientes</h2>
                <div className="opiniones-grid">
                    <div className="opiniones-card">
                        <p className="opinion-texto">"Estudio M transformó completamente nuestro hogar. Su atención al detalle y capacidad para capturar nuestra esencia es incomparable."</p>
                        <h3>Elena Martínez</h3>
                        <p className="cliente-ocupacion">Residencial Buenos Aires</p>
                    </div>
                    <div className="opiniones-card">
                        <p className="opinion-texto">"El equipo de Estudio M superó todas nuestras expectativas. El diseño de nuestra oficina es funcional, elegante y totalmente único."</p>
                        <h3>Carlos Ruiz</h3>
                        <p className="cliente-ocupacion">CEO Tech Solutions</p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}