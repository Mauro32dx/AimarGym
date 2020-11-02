import React, { useState } from 'react';
import './CarruselStaff.css';


export default function ItemCarruselStaff(props) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0); 
    const [hover, setHover] = useState(false);

    function trueHover() {
        setHover(true)
    }  
    function falseHover() {
        setHover(false)
    }




    function  handleMouseMove(event) {
        if  ((event.clientY)>(window.innerHeight/2)){
            setX(Math.round(0));
            setY(Math.round(0));
        } else {
            setY(Math.round(10));
            if  ((event.clientX)>(window.innerWidth/2)){
                setX(Math.round(10));
            } else {
                setX(Math.round(-10));
            }
            if  ((event.clientX)>((window.innerWidth/2)+100)) {
                if ((event.clientX)<((window.innerWidth/2)-100)){
                    setX(Math.round(0));
                    setY(Math.round(0));
                }
             }

        }


    }
    
    var estiloFondo = {
        backgroundImage: `url(${props.fondo})`,
        filter: "blur(3px)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize:" cover",
        transformStyle: "preserve-3d", 
        transform: `scale(1.2) translateX(${x}px) translateY(${y}px)`,
        transition: "all 2s ease"
    };
    
    var styleActivo ={
        transformStyle: "preserve-3d",
        transform: `scale(1.1) perspective(600px) rotateY(${x}deg) rotateX(${y}deg)`,
        cursor: "pointer",
        overflow: "hidden",
        transition: "all 1s ease",   
    };
    var styleDesactivo ={
        transformStyle: "preserve-3d",
        transform: `scale(1) perspective(600px) rotateY(0deg) rotateX(0deg)`,
        cursor: "pointer",
        overflow: "hidden",
        transition: "all 1s ease",   
    };
    


    return (
        <React.Fragment> 
            <div className= { props.id + ' itemPersonal'}  onMouseMove={handleMouseMove} onMouseEnter={trueHover} onMouseLeave={falseHover} style={hover?styleActivo:styleDesactivo}>
                <div className='contenedorFoto' >
                    <div  className='FondoPerfil' style={estiloFondo} />
                    <img src={props.foto}  alt="Logo" className='imgItemCarruselStaff'/>
                </div> 
                <div className='contenedorInformacion'>
                    <div className='contenedorInformacion2'>
                        <div> {props.nombre} </div>
                        <div> {props.profecion} </div>  

                        <p>(X:{x}, Y:{y})</p>                        
                    </div>

                </div>
            </div>

        </React.Fragment>
    )
}