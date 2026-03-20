import "./BotonTema.css";

export default function BotonTema({ tema, alternar }) {
  return (
    <button className="alternar-tema" onClick={alternar}>
      {tema === "light" ? "Modo oscuro 🌙" : "Modo claro ☀️"}
    </button>
  );
}