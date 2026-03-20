import { Inicio } from "../pages/Inicio/Inicio.jsx";
import { SobreMi } from "../pages/SobreMi/SobreMi.jsx";
import { Contacto } from "../pages/Contacto/Contacto.jsx";
import { Proyectos } from "../pages/Proyectos/Proyectos.jsx";


export const navbarRoutes = [
  {
    name: "Inicio",
    path: "/",
    element: <Inicio />,
  },
  {
    name: "Sobre mí",
    path: "/sobre-mi",
    element: <SobreMi />,
  },
  {
    name: "Proyectos",
    path: "/proyectos",
    element: <Proyectos />,
  },
  {
    name: "Contacto",
    path: "/contacto",
    element: <Contacto />,
  },
];