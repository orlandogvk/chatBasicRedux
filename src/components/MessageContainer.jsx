import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from './Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MessageArea from './MessageArea';
import Messages from './MessageItem';
import store from '../redux/store';
import MenuMessage from './OptionsMessage';
import MessagesPC from './MessageItemPC';



export default function Contenedor() {

    const {messages, inputMessage} = store.getState().chatReducer;
    return (
        <>
            <Container className="container" fluid="md">

                <Row>
                    <Col><Navbar/></Col>
                </Row>
                
                <div className="containerMsg">
                    {
                        messages.map((item, index) => {
                            if (item.userId === 1) {
                                if (item.showOptions) {
                                    return (
                                
                                        <div id="yo">
                                            <Row key={index}>
                                                <Col><Messages
                                                    title="Message"
                                                    name="Orlando"
                                                    message={item.content}
                                                    time={item.time}
                                                    index={index} />
                                                    <MenuMessage index={index} />
                                                </Col>
                                            </Row>

                                        </div>
                              
                                    )
                                } else {
                                    return (
                                        <div id="yo">
                                            <Row key={index} className="pcItem">
                                                <Col><Messages
                                                    title="Message"
                                                    name="Orlando"
                                                    message={item.content}
                                                    time={item.time}
                                                    index={index} />
                                                </Col>
                                            </Row>
                                        </div>
                                    )
                                }

                            } else {
                                if (item.showOptions) {
                                    return (
                                        <div id="pc">
                                            <Row key={index}>
                                                <Col><MessagesPC
                                                    title="Message"
                                                    name="PC"
                                                    message={item.content}
                                                    time={item.time}
                                                    index={index}
                                                />
                                                    <MenuMessage index={index} />
                                                </Col>
                                            </Row>
                                        </div>
                                    );

                                } else {
                                    return (
                                        <div id="pc">
                                            <Row key={index}>
                                                <Col><MessagesPC
                                                    title="Message"
                                                    name="PC"
                                                    message={item.content}
                                                    time={item.time}
                                                    index={index}
                                                />
                                                </Col>
                                            </Row>
                                        </div>
                                    );

                                }

                            }


                        })
                    }
                </div>
              
            </Container>
            <MessageArea inputValue={inputMessage} />
        </>
    )

}
