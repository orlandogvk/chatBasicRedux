import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from './Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MessageArea from './MessageArea';
import Messages from './MessageItem';
import store from '../redux/store';



export default function Contenedor(){
    const{messages,inputMessage}=store.getState().chatReducer;
    console.log('Arreglo mensajes:',messages);
    return(
        <>
        <Container className="container" fluid="md">
            <Row>
                <Col><Navbar/></Col>
            </Row>
            {
                messages.map((item,index)=>{
                    return(
                        <Row key={index}>
                            <Col><Messages 
                            title="Message" 
                            name="Orlando" 
                            message={item.content} 
                            time={item.time}
                            index={index}/>
                            </Col>
                        </Row>
                    )
                })
            }
        </Container>
        <MessageArea inputValue={inputMessage} />
        </>
    )
}
