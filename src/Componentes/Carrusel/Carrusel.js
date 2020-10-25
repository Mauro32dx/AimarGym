import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carrusel.css';
import ItemCarrusel from './ItemCarrusel.js';
import Imagen1 from '../../Imagenes/SeccionPresentacion/slide-1.png';
import Imagen2 from '../../Imagenes/SeccionPresentacion/slide-2.png';
import Imagen3 from '../../Imagenes/SeccionPresentacion/slide-3.png';


export default function Carrusel(props) {
    return (
        <React.Fragment>
            <Carousel className="carruselEstilo">
                <Carousel.Item>
                    <ItemCarrusel Imagen={Imagen1} Titulo='TITULO 1' Subtitulo='Subtitulo 1' Descripcion='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' /> 
                </Carousel.Item>
                <Carousel.Item >
                    <ItemCarrusel Imagen={Imagen2} Titulo='TITULO 2' Subtitulo='Subtitulo 2' Descripcion='Hola mundo Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' />
                </Carousel.Item>
                <Carousel.Item >
                    <ItemCarrusel Imagen={Imagen3} Titulo='TITULO 3' Subtitulo='Subtitulo 3' Descripcion='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'  />    
                </Carousel.Item>     
            </Carousel>
        </React.Fragment>
    )
}
