import React from 'react';
import './CarruselStaff.css';

export default class Ejemplo extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event) {
        if  ((event.clientX)>(window.innerWidth/2)){
            this.setState({
                x: Math.round((((event.clientX*100)/(window.innerWidth)))-50)
            });
        } else {
            this.setState({
                x: Math.round((((event.clientX*100)/(window.innerWidth)) -100)+50),
            });
        }

        if  ((event.clientY)>(window.innerHeight/2)){
            this.setState({
                y: Math.round(0),
                x: Math.round(0)
                // y: Math.round(50 - ((event.clientY*100)/(window.innerHeight)))
            });
        } else {
            this.setState({
                y: Math.round(15),
                //y: Math.round((((event.clientY*100)/(window.innerHeight)) - 50)*-1)
            });
        }

    }
  
    render(props) {


        var estiloFondo = {
            backgroundImage: `url(${this.props.fondo})`,
            filter: "blur(4px)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize:" cover",
            transformStyle: "preserve-3d", 
            transform: `scale(1.2) translateX(${this.state.x}px) translateY(${this.state.y}px)`,
            transition: "all 2s ease"
        };

        var cardStyle = {
              transform: `scale(1) rotateY(${this.state.x}deg) rotateX(${this.state.y}deg)`,
              transformStyle: "preserve-3d", 
              cursor: "pointer", overflow: "hidden",
              transition: "all 1s ease",           
        };
        
        return (
            <React.Fragment> 
                <div className= { this.props.id + ' itemPersonal'} onMouseMove={this.handleMouseMove} style={cardStyle} >
                    <div className='contenedorFoto' >
                        <div  className='FondoPerfil' style={estiloFondo} />
                        <img src={this.props.foto}  alt="Logo" className='imgItemCarruselStaff'/>
                    </div> 
                    <div className='contenedorInformacion'>
                        <div className='contenedorInformacion2'>
                            <div> {this.props.nombre} </div>
                            <div> {this.props.profecion} </div> 
                            <p>(X:{this.state.x}, Y:{this.state.y})</p>
                        </div>
    
                    </div>
                </div>
    
            </React.Fragment>
        )
        
    }
  }