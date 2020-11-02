import React from 'react';
import "./TablaHorarios.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


export default function ItemActividadHorario(props) {
    const useStyles = makeStyles({
        root: {
            margin: 3,
            maxWidth: 150,
        },
        media: {
            background: props.fondo,
            height: 50,
            paddingTop:5,
        },
        pieItem: {
            background: "#F2F4F4",
            margin: 0,
             height: 25,
        }
        });
    const classes = useStyles();

    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image=""
            title={props.nombre}
          >
              <h1 className="tituloDia">{props.dia}</h1>
              <div className="logoItemActividad">{props.logo}</div>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.nombre}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.horarioComienzo}-{props.horarioFinalizacion } hs
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.pieItem}>
              {props.profesor}
        </CardActions>
      </Card>
    );
}
