import { Link } from "react-router-dom";
import "./Hero.css";
import hero1 from "../../assets/Galeria/interiorNegro.png";
import hero2 from "../../assets/Galeria/CocinaNegra.png";
import hero3 from "../../assets/Galeria/BañoMinimalista.png";

const images = [hero1, hero2, hero3];

export function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className="hero"
            style={{
                backgroundImage: `url(${images[current]})`,
            }}
        >
            <div className="hero-overlay">
                <div className="hero-container">
                    <div className="hero-content">
                        <h1>
                            Estudio <span>M</span>
                        </h1>

                        <p>Diseñamos espacios que inspiran</p>

                        <div className="hero-buttons">
                            <Link to="/proyectos" className="btn outline">
                                Explorar proyectos →
                            </Link>

                            <Link to="/contacto" className="btn primary">
                                Contáctanos
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}