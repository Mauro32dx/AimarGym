import React from 'react';
import BarraMenu from '../Componentes/BarraMenu/BarraMenu2.js';
import './Principal.css';
import { Link } from 'react-scroll';
import Presentacion from '../Secciones/Presentacion/Presentacion.js'
import Home from '../Secciones/Home/Home.js';
import PieDePagina from '../Componentes/PieDePagina/PieDePagina.js';
import Personal from '../Secciones/Personal/Personal.js';
import Actividades from '../Secciones/Actividades/Actividades.js';
import Horarios from '../Secciones/Horarios/Horarios.js';

function Principal() {
  
    return (
      <div>
            <BarraMenu>
              <Link  to="S01" spy={true} smooth={true} offset={-56} duration={2000} delay={200} className="botonBarraMenu">HOME</Link>
              <Link  to="S02" spy={true} smooth={true} offset={-56} duration={2000} delay={200} className="botonBarraMenu">ACTIVIDADES</Link>
              <Link  to="S03" spy={true} smooth={true} offset={-56} duration={2000} delay={200} className="botonBarraMenu">HORARIOS</Link>
              <Link  to="S04" spy={true} smooth={true} offset={-56} duration={2000} delay={200} className="botonBarraMenu">STAFF</Link>
              <Link  to="S05" spy={true} smooth={true} offset={-56} duration={2000} delay={200} className="botonBarraMenu">TARIFA</Link>
              <Link  to="S06" spy={true} smooth={true} offset={-56} duration={2000} delay={200} className="botonBarraMenu"> CONTACTO</Link>
            </BarraMenu>

            <section className="element" id="S00" style={{ background:'#f7f7f7'}}>
              <Presentacion />
            </section>
            <section id="S01" style={{  }}>
              <Home />
            </section>
            <section className="element" id="S02" style={{background:'#f7f7f7'}}>
              <Actividades />
            </section>
            <section className="element" id="S03" style={{ }}>
              <Horarios />
            </section>
            <section className="element" id="S04" style={{ background:'#f7f7f7'}}>
              <Personal />
            </section>
            <section className="element" id="S05" style={{ height:"400px" }}>tarifa</section>
            <section className="element" id="S06" style={{ background:'#f7f7f7', height:"400px" }}>Contacto</section>

            <PieDePagina />
      </div>
    );
  }
  
  export default Principal;