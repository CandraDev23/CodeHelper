import React from "react";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function Cardd(props) {
    return(
    <Card className="my-3" style={{ width: '18rem', height: "30rem"}}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title className="text-dark">{props.title}</Card.Title>
        <Card.Text className="text-secondary">
          {props.desc}
        </Card.Text>
      </Card.Body>
      <Card.Body className="d-flex justify-content-between align-items-center">
        <Card.Link className="pe-3" style={{textDecoration: "none"}} href="#">Detail</Card.Link>
        <Button variant="primary">Buy now</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardd;