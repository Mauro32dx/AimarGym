import React from 'react';
import './Actividades.css';
import Tarjeta from '../../Componentes/Tarjeta/Tarjeta.js';
import Imagen1 from '../../Imagenes/SeccionActividades/classes-item-1.jpg';
import Imagen2 from '../../Imagenes/SeccionActividades/classes-item-2.jpg';
import Imagen3 from '../../Imagenes/SeccionActividades/classes-item-3.jpg';
import Imagen4 from '../../Imagenes/SeccionActividades/classes-item-4.jpg';
import Imagen5 from '../../Imagenes/SeccionActividades/classes-item-5.jpg';
import Imagen6 from '../../Imagenes/SeccionActividades/classes-item-6.jpg';
import Grid from '@material-ui/core/Grid';


export default class Actividades extends React.Component {
    constructor(props){
        super();
        this.state = { 
         }
    }
    

    render () {
        return (
            <div>
                <h1> Actividades </h1>
                <p> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500 </p>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Tarjeta Titulo='Actividad 1' Imagen={Imagen1} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Tarjeta Titulo='Actividad 2' Imagen={Imagen2} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Tarjeta Titulo='Actividad 4' Imagen={Imagen3} />                          
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Tarjeta Titulo='Actividad 5' Imagen={Imagen4} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Tarjeta Titulo='Actividad 6' Imagen={Imagen5} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Tarjeta Titulo='Actividad 7' Imagen={Imagen6} />                                 
                    </Grid>
                </Grid>    

            </div>
        )
    }
}