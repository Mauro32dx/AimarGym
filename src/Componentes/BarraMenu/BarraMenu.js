import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './BarraMenu.css';

window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if ( top> 50 ) {
        Navbar.classList.remove("colorNavbar1");
        Navbar.classList.add("colorNavbar2");
    } else {
        Navbar.classList.remove("colorNavbar2");
        Navbar.classList.add("colorNavbar1");
    }
}

export default class BarraMenu extends React.Component {
    constructor(props){
        super();
        this.state = { 
         }
    }
    
    componentDidMount(){
        this.selecEstiloNavbar();
    }
    
    selecEstiloNavbar(){

    }

    render () {
        

        return (
            <div  className='contenedorEncabezado'>
                <Navbar id='navbar' className="navbar colorNavbar1" collapseOnSelect  expand="md" fixed="top">
                    <Navbar.Brand href="#home">Aimar GYM</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto" />
                        <Nav >
                            {this.props.children}                 
                        </Nav>                        
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}