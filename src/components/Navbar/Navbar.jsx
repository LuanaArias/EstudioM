import "./Navbar.css";
import { navbarRoutes } from "../../constants/navbar.jsx";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* BOTÓN */}
            <div 
                className={`hamburger ${open ? "active" : ""}`}
                onClick={() => setOpen(!open)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* OVERLAY */}
            {open && <div className="overlay-menu" onClick={() => setOpen(false)} />}

            {/* MENÚ */}
            <nav className={`menu ${open ? "open" : ""}`}>
                <ul>
                    {navbarRoutes.map((item) => (
                        <li key={item.name}>
                            <NavLink 
                                to={item.path}
                                onClick={() => setOpen(false)}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}