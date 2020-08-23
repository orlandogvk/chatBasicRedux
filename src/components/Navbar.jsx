import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default function Barra(){
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Chat with Redux</Navbar.Brand>
            </Navbar>
        </div>
    );
}