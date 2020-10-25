import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import './Tarjeta.css';


const useStyles = makeStyles({
  root: {
    margin:'3%',
    background: 'black',

  },
  media: {
    height: '400px',

  },
});

export default function Tarjeta(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <div className='contenedorIcono'>aa</div>
        <h1 className='textoTituloTarjeta'>{props.Titulo}</h1>

        <img src={props.Imagen} alt={props.Titulo} className="opacidad"/>

      </CardActionArea>
    </Card>
  );
}