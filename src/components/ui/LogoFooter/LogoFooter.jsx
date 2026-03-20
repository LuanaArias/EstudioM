import imgFooter from '../../../assets/LogoFooter.png'
import './LogoFooter.css'
export function LogoFooter(){
    return(
        <>
            <div className='logo-footer-container' >
                <img src={imgFooter} alt="Logo Estudio M" className='logo-footer'/>
            </div>
        </>
    )
}