import { Logo } from '../ui/Logo/Logo'
import { Navbar } from '../Navbar/Navbar'
import './Header.css'
import BotonTema from '../ui/BotonTema/BotonTema';

export function Header({ tema, alternar }) {
    return (
        <header className="header">
            <div className="header-container">
                <Logo />
                <Navbar />
                <BotonTema tema={tema} alternar={alternar}/>
            </div>
        </header>
    );
}