import "./BotonTema.css";

export default function BotonTema({ tema, alternar }) {
  // Verificamos si es dark mode para aplicar una clase extra
  const esOscuro = tema === "dark";

  return (
    <button 
      className={`alternar-tema-switch ${esOscuro ? "activado" : ""}`} 
      onClick={alternar}
      aria-label={`Cambiar a modo ${esOscuro ? "claro" : "oscuro"}`}
    >
      <div className="canica-switch">
        {esOscuro ? (
          <span className="icono-wsp">🌙</span>
        ) : (
          <span className="icono-wsp">☀️</span>
        )}
      </div>
    </button>
  );
}