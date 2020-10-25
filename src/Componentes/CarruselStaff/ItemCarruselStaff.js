import React from 'react';
import './CarruselStaff.css';


export default function ItemCarruselStaff(props) {
    var estiloFondo = {
        backgroundImage: `url(${props.fondo})`,
        
    };
    
    return (
        <React.Fragment> 
            <div className= { props.id + ' itemPersonal'}  >
                <div className='contenedorFoto' >
                    <div  className='FondoPerfil' style={estiloFondo} />
                    <img src={props.foto}  alt="Logo" className='imgItemCarruselStaff'/>
                </div> 
                <div className='contenedorInformacion'>
                    <div className='contenedorInformacion2'>
                        <div> {props.nombre} </div>
                        <div> {props.profecion} </div>                          
                    </div>

                </div>
            </div>

        </React.Fragment>
    )
}