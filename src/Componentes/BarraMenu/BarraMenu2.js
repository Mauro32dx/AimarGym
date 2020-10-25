import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './BarraMenu.css';
import { animateScroll as scroll } from "react-scroll";
import BotoneraAcordeon from '../../Componentes/BarraMenu/BotoneraAcordeon.js';
import LogoAimar from '../LogoAimar/LogoAimar.js'

export default function BarraMenu(props) {
  const [styleLogo, setLogo] =useState(false);
  const [navbar, setNavbar] =useState(false);
  const changeBackground = () => {
    if ( window.scrollY >= 30) {
      setNavbar(true);
      setLogo(true);
    } else {
      setNavbar(false);
      setLogo(false);
    }
  }
  window.addEventListener('scroll',changeBackground);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <div className='infoRedes'>
        <BotoneraAcordeon Direccion='Av 1, num 344 - La Plata, Bs As, Argentina' Whatsapp='0221-31225221' Facebook='@AimarGym' Instagram='@AimarGym' />
      </div>
      <div  className='contenedorEncabezado activo'>

        <Navbar className={navbar ? 'navbar' : 'navbar active'} collapseOnSelect  expand="md" fixed="top">
            <Navbar.Brand >
              <div className='fondoLogo' onClick={scrollToTop}>
                <div>
                  <LogoAimar estiloLogo={styleLogo}/>
                </div>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mr-auto" />
                <Nav >
                  {props.children}                 
                </Nav>                        
            </Navbar.Collapse>
        </Navbar>
      </div>
    </div>

    
  );
}