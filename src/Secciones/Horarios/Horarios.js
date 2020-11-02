import React from 'react';
import './Horarios.css';
import TablaHorarios from '../../Componentes/TablaHorarios/TablaHorarios.js';


const Actividades = [
    { id: 'Acti0',  
      nombre: "Actividad 0",
      profesor: "Profesor 0",
      fondo: "red",
      logo: "logo0",
      clases:[
            { dia:"lunes", horarioComienzo: "17:00", horarioFinalizacion: "18:00"},
            { dia:"miercoles", horarioComienzo: "17:00", horarioFinalizacion: "18:00"},
            { dia:"viernes", horarioComienzo: "17:00", horarioFinalizacion: "18:00"}
        ]  
    },
    { id: 'Acti1',  
    nombre: "Actividad 1",
    profesor: "Profesor 1",
    fondo: "green",
    logo: "logo1",
    clases:[
          { dia:"martes", horarioComienzo: "17:30", horarioFinalizacion: "18:30"},
          { dia:"jueves", horarioComienzo: "17:30", horarioFinalizacion: "18:30"}  
        ]    
    },
    { id: 'Acti2',  
    nombre: "Actividad 2",
    profesor: "Profesor 2",
    fondo: "blue",
    logo: "logo2",
    clases:[
          { dia:"lunes", horarioComienzo: "18:15", horarioFinalizacion: "19:15"},
          { dia:"jueves", horarioComienzo: "20:00", horarioFinalizacion: "21:00"}
        ]    
    },
    { id: 'Acti3',  
    nombre: "Actividad 3",
    profesor: "Profesor 3",
    fondo: "orange",
    logo: "logo3",
    clases:[
          { dia:"martes", horarioComienzo: "18:40", horarioFinalizacion: "19:40"},
          { dia:"viernes", horarioComienzo: "20:00", horarioFinalizacion: "21:00"},
          { dia:"jueves", horarioComienzo: "21:00", horarioFinalizacion: "22:00"}
      ]    
    },
    { id: 'Acti4',  
    nombre: "Actividad 4",
    profesor: "Profesor 4",
    fondo: "orange",
    logo: "logo4",
    clases:[
          { dia:"lunes", horarioComienzo: "17:10", horarioFinalizacion: "18:40"},
          { dia:"viernes", horarioComienzo: "20:00", horarioFinalizacion: "21:00"},
          { dia:"jueves", horarioComienzo: "21:00", horarioFinalizacion: "22:00"}
      ]    
    }
 ]

export default class Horarios extends React.Component {
    constructor(props){
        super();
        this.state = { 
         }
    }
    

    render () {
        return (
            <div>
                <h1> Horarios </h1>
                <p> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500 </p>
                <TablaHorarios  Actividades={ Actividades}
                />
            </div>
        )
    }
}