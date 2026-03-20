import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'
import BotonTema from './components/ui/BotonTema/BotonTema';
import { navbarRoutes } from "./constants/navbar.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="app">
      <Header tema={theme} alternar={toggleTheme}/>

      <main>
        <Routes>
          {navbarRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App
