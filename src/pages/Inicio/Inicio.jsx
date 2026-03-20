import { HeroPrueba } from "../../components/HeroPrueba/HeroPrueba"
import { Contactanos } from "../../components/SeccionesInicio/Contactanos/Contactanos"
import { Opiniones } from "../../components/SeccionesInicio/Opiniones/Opiniones"
import { ProyectosDest } from "../../components/SeccionesInicio/ProyectosDest/ProyectosDest"
import { Servicios } from "../../components/SeccionesInicio/Servicios/Servicios"

export function Inicio(){
    return(
        <>
            <HeroPrueba />
            <Servicios />
            <ProyectosDest />
            <Opiniones />
            <Contactanos />
        </>
    )
}