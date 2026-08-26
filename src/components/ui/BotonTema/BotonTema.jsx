import "./BotonTema.css";
import { Moon, Sun } from "lucide-react";

export default function BotonTema({ tema, alternar }) {
  const esOscuro = tema === "dark";

  return (
    <button
      className={`alternar-tema-switch ${esOscuro ? "activado" : ""}`}
      onClick={alternar}
      aria-label={`Cambiar a modo ${esOscuro ? "claro" : "oscuro"}`}
    >
      <div className="canica-switch">
        {esOscuro ? (
          <Moon className="icono-tema" />
        ) : (
          <Sun className="icono-tema" />
        )}
      </div>
    </button>
  );
}