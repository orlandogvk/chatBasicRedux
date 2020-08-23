import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from './Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MessageArea from './MessageArea';
import Messages from './MessageItem';
import store from '../redux/store';
import MenuMessage from './OptionsMessage';



export default function Contenedor(){

    const{messages,inputMessage}=store.getState().chatReducer;
        return(
            <>
            <Container className="container" fluid="md">
                <Row>
                    <Col><Navbar/></Col>
                </Row>
                {
                    messages.map((item,index)=>{
                        if(item.showOptions){
                            return(
                                <>
                                <Row key={index}>
                                    <Col><Messages 
                                    title="Message" 
                                    name="Orlando" 
                                    message={item.content} 
                                    time={item.time}
                                    index={index}/>
                                    <MenuMessage index={index}/>
                                    </Col>
                                </Row>
                              
                                </>
                            )
                        }else{
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
                        }
                        
                    })
                }
            </Container>
            <MessageArea inputValue={inputMessage} />
            </>
        )
      
}
