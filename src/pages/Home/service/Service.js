import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {placeName, serviceName, imgUrl, price, discription, _id} = props.service;
    return (
        <div>
            <Col>
            <Card>
              <Card.Img variant="top" src={imgUrl} />
              <Card.Body>
                <Card.Title><small>{placeName}</small></Card.Title>
                <Card.Title>{serviceName}</Card.Title>
                <Card.Text>
                    {discription}
                </Card.Text>
                <p className='fw-bold'>{price}</p>
                <Link to={`services/${_id}`}>
                   <Button variant='warning'>Book Now</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </div>
    );
};

export default Service;