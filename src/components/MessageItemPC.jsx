import React from 'react';
import Card from 'react-bootstrap/Card';
import Avatar from 'react-avatar';
import imageSrc from '../images/perfiltarjeta.jpg';
import store from '../redux/store';
import {optionsMessage} from '../redux/chat/actions';


export default function MessagesPC(props){
    return(
        <Card className="Card" border="success" style={{ width: '15rem' }}>
        <Card.Header><Avatar src={imageSrc} size={50} round="100%" /></Card.Header>
        <Card.Body>
        <Card.Title>{props.name}</Card.Title>
          <Card.Text style={{ color: 'green' }}>
           {props.message}
          </Card.Text>
          <Card.Text className="time">
           Message sent at {props.time}
          </Card.Text>
          <Card.Text className="time">
          <svg width="2em" 
          height="2em" 
          viewBox="0 0 16 16" 
          class="bi bi-arrow-down-square-fill" 
          fill="currentColor" 
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => store.dispatch(optionsMessage(props.index))}>
              <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 5a.5.5 0 0 0-1 0v4.793L5.354 7.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 9.793V5z"/>
          </svg>
          </Card.Text>
        </Card.Body>
      </Card>
    )
}