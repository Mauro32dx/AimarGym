import React from 'react';
import './CarruselStaff.css';
import ItemCarruselStaff from './ItemCarruselStaff.js';
//import Ejemplo from './Ejemplo.js';
import { makeStyles } from '@material-ui/core/styles';


export default function CarruselStaff(props) {
    const useStyles = makeStyles({
        active2: {
            transformStyle: "preserve-3d",
            transform: "perspective(600px) rotateY(0deg) rotateX(0deg)",
            
            '&:hover': { 
                transformStyle: "preserve-3d",
                transform: "scale(1.1) perspective(600px) rotateY(10deg) rotateX(10deg)",  
                cursor: "pointer",
                transition: "all 1s ease",
            },
        },
    });
    const classes = useStyles();

    const Items = props.Items;

    const max= Items.length - 1;
    let p=2;
    let ItemActivo=Items[p];
    let ItemSigiente=Items[p+1];
    let ItemAnterior=Items[p-1];
    let ItemSigiente2=Items[p+2];
    let ItemAnterior2=Items[p-2];

    function SeleccionarItem(n) {
            let Activo= n;
            if (n > max) {
                Activo=0;
            }
            if (n < 0) {
                Activo=max;
            }

            let Anterior= (Activo-1);
            if (Anterior < 0) {
                Anterior= max;
            }

            let Siguiente= (Activo+1);           
            if (Siguiente > max) {
                Siguiente=0
            }
            let Anterior2= (Anterior-1);
            if (Anterior2 < 0) {
                Anterior2= max;
            }

            let Siguiente2= (Siguiente+1);           
            if (Siguiente2 > max) {
                Siguiente2=0
            }            

            p=Activo;

            ItemActivo=Items[Activo].id;
            ItemSigiente=Items[Siguiente].id;
            ItemAnterior=Items[Anterior].id;
            ItemSigiente2=Items[Siguiente2].id;
            ItemAnterior2=Items[Anterior2].id;

            cargarItems(ItemAnterior2, ItemAnterior, ItemActivo, ItemSigiente, ItemSigiente2);

    }  

    function cargarItems(ItemAnterior2, ItemAnterior, ItemActivo, ItemSigiente, ItemSigiente2) {
        for (let i = 0; i < (Items.length); i++) {
            activarItems(Items[i].id, ' itemPersonal');
          }
        activarItems(ItemAnterior2, ' itemPersonal visible3');          
        activarItems(ItemAnterior, ' itemPersonal visible1');
        activarItems(ItemActivo, ' itemPersonal active '+classes.active2);
        activarItems(ItemSigiente, ' itemPersonal visible2');
        activarItems(ItemSigiente2, ' itemPersonal visible4');    
    }

    function activarItems(id, estilo){
        var x = document.getElementsByClassName(id)[0];
        x.className = id + estilo;
    } 


    let crearListaItems = Items.map((data) => 
        <ItemCarruselStaff 
            id={data.id}
            nombre={data.nombre}
            foto={data.foto}
            profecion={data.profecion}
            fondo={data.fondo}
        />
    );    

    let Staff= ( 
        <div className='contenedorItems '>
            {crearListaItems}
        </div>
    );
    const BotonesControl= (
        <div className='contenedorBotonControles' >
            <div className='botonPre' onClick={()=> SeleccionarItem(p-1) }>
                prev
            </div>
            <div className='botonNex' onClick={()=>  SeleccionarItem(p+1)}>
                Next
            </div>       
        </div>
    )

    return (
        <React.Fragment> 
            {BotonesControl} 
            <div className='contenedorSliders'>                
                {Staff}                
            </div>
        </React.Fragment>
    )
}
