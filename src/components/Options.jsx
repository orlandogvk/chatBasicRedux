import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import store from '../redux/store';
import {deleteMessage} from '../redux/chat/actions';

export default function Options(props){
    return(
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Opciones
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={()=>store.dispatch(deleteMessage(props.index))}>Eliminar</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Reenviar</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Destacar</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}