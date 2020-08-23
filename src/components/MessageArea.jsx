import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { setInputMessage, sendMessage } from '../redux/chat/actions';
import store from '../redux/store';

export default function MessageArea(props) {

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            store.dispatch(sendMessage(e))
        }
    }

    return (
        <div className="formulario">
            <Form onSubmit={(e) => store.dispatch(sendMessage(e))}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Write your message below</Form.Label>
                    <Form.Control as="textarea" rows="3"
                        onChange={(e) => store.dispatch(setInputMessage(e))}
                        onKeyPress={handleKeyPress}
                        value={props.inputValue} />
                </Form.Group>
                <Button className="button" variant="success" type="submit" size="sm" block>
                    Submit
        </Button>
            </Form>
        </div>
    );
}
