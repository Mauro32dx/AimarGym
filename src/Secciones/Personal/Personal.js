import React from 'react';
import './Personal.css';
import CarruselStaff from '../../Componentes/CarruselStaff/CarruselStaff.js';
import Foto1 from '../../Imagenes/SeccionPersonal/perfil1.png';
import Foto2 from '../../Imagenes/SeccionPersonal/perfil2.png';
import Foto3 from '../../Imagenes/SeccionPersonal/perfil3.png';
import Foto4 from '../../Imagenes/SeccionPersonal/perfil4.png';
import Foto5 from '../../Imagenes/SeccionPersonal/perfil5.png';
import Foto6 from '../../Imagenes/SeccionPersonal/perfil6.png';
import Foto7 from '../../Imagenes/SeccionPersonal/perfil7.png';
import Fondo1 from '../../Imagenes/SeccionPersonal/fondo1.jpg';

export default class Personal extends React.Component {
    constructor(props){
        super();
        this.state = { 
         }
    }
    

    render () {
        
        return (
            <div>
                <CarruselStaff 
                    Items = {
                        [
                        { 
                          id: 'Item0',  
                          nombre: "Nombre 0",
                          profecion: "Profesor 0",
                          fondo: Fondo1,
                          foto: Foto1             },
                        { 
                          id: 'Item1',
                          nombre: "Nombre 1",
                          profecion: "Profesor 1",
                          fondo: Fondo1,
                          foto: Foto2             },
                        { 
                          id: 'Item2',
                          nombre: "Nombre 2",
                          profecion: "Profesor 2",
                          fondo: Fondo1,
                          foto: Foto3             },
                        { 
                          id: 'Item3',
                          nombre: "Nombre 3",
                          profecion: "Profesor 3",
                          fondo: Fondo1,
                          foto: Foto5             },
                        { 
                          id: 'Item4',
                          nombre: "Nombre 4",
                          profecion: "Profesor 4",
                          fondo: Fondo1,
                          foto: Foto4             },
                        { 
                          id: 'Item5',
                          nombre: "Nombre 5",
                          profecion: "Profesor 5",
                          fondo: Fondo1,
                          foto: Foto6             },
                        { 
                          id: 'Item6',
                          nombre: "Nombre 6",
                          profecion: "Profesor 6",
                          fondo: Fondo1,
                          foto: Foto7             }
                      ]
                    }
                />

            </div>
        )
    }
}