import React from 'react';
import Grid from '@material-ui/core/Grid';
import Icono from '../../Componentes/Iconos/IconoHome.js'
export default class Home extends React.Component {
    constructor(props){
        super();
        this.state = { 
         }
    }
    
    render () {
        return (
            <div>
                <h1> Sobre Nosotros </h1>
                <p> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500 </p>

                <Grid container>
                    <Grid item xs={12} sm={6} md={3} >
                        <Icono nombre='icono1' size="60px"/>
                        <div>HOLA MUNDO</div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Icono nombre='icono2' size="60px"/>
                        <div>TITULO 2</div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Icono nombre='icono3' size="60px"/>
                        <div>TITULO 3</div>
                    </Grid>
                    <Grid item xs={6} sm={3} md={3}>
                        <Icono nombre='icono4' size="60px"/>
                        <div>TITULO 4</div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

