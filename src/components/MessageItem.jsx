import React from 'react';
import Card from 'react-bootstrap/Card';
import Options from './Options';
import Avatar from 'react-avatar';
import imageSrc from '../images/yo.jpeg';

export default function Messages(props){
    return(
        <Card className="Card" border="success" style={{ width: '15rem' }}>
        <Card.Header><Avatar src={imageSrc} size={50} round="100%" /></Card.Header>
        <Card.Body>
        <Card.Title>{props.name}</Card.Title>
          <Card.Text>
           {props.message}
          </Card.Text>
          <Card.Text className="time">
           Message sent at {props.time}
          </Card.Text>
          <Card.Text className="time">
           <Options index={props.index}/>
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

