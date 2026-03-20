import { Logo } from '../ui/Logo/Logo'
import { Navbar } from '../Navbar/Navbar'
import './Header.css'

export function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <Logo />
                <Navbar />
            </div>
        </header>
    );
}