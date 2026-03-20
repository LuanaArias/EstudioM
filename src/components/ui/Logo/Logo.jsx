import LogoImg from '../../../assets/logoPrincipal.png'
import './Logo.css'
export function Logo(){
    return(
        <>
            <div className='logo-principal-container' >
                <img src={LogoImg} alt="Logo Estudio M" className='imagen-logo'/>
            </div>
        </>
    )
}