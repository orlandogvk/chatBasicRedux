import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {setInputMessage,sendMessage} from '../redux/chat/actions';
import store from '../redux/store';

export default function MessageArea(props){

    const handleKeyPress=(e)=>{
        if (e.key === 'Enter') {
            store.dispatch(sendMessage(e))
          }
    }

    return (
    <Form onSubmit={(e)=>store.dispatch(sendMessage(e))}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Write your message</Form.Label>
            <Form.Control as="textarea" rows="3" 
            onChange={(e)=>store.dispatch(setInputMessage(e))} 
            onKeyPress={handleKeyPress}
            value={props.inputValue}/>
        </Form.Group>
        <Button variant="secondary" type="submit" size="lg" block>
             Submit
        </Button>
    </Form>
    );
}
