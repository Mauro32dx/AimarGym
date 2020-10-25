import React from 'react';
import './Carrusel.css';
import Grid from '@material-ui/core/Grid';


export default function ItemCarrusel(props) {
    return (
        <div className='contenedorItem' >
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6}  >
                    <h3 className='itemCarruselTexto1'> {props.Titulo} </h3>
                    <h3  className='itemCarruselTexto2'> {props.Subtitulo} </h3>
                    <p  className='itemCarruselTexto3'> {props.Descripcion} </p>                    
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={props.Imagen} alt="Logo" className='imgItemCarrusel'/>    
                </Grid>
            </Grid>                            
        </div>
    )
}