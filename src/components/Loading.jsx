import React from "react";
import Spinner from 'react-bootstrap/Spinner'
function Loading(props) {
  return (
    <div className="App">
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="danger" />
      <h1>{props.text}</h1>
    </div>
  );
}
export default Loading;