import React, { useEffect, useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const PlaceBooking = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const {user} = useAuth();

  useEffect( () => {
    fetch(`https://salty-hamlet-26022.herokuapp.com/services/${serviceId}`)
      .then( res => res.json())
      .then( data => setService(data));
  }, []);

  const onSubmit = data => {
    console.log(data);
      axios.post('https://salty-hamlet-26022.herokuapp.com/bookings', data)
      .then(res => {
          if(res.data.insertedId){
              alert('Place Order Successfully');
              reset();
          }
      })
  };


  return (
    <div>
      <h1 className="text-center text-warning mt-5">Booking Details</h1>
      <div>
        <div>
          <Col>
            <Card className="border border-0 mt-5">
              <Card.Img variant="top" className="w-25 rounded-pill mx-auto" src={service.imgUrl} />
              <Card.Body className="w-75 mx-auto">
                <Card.Title>
                  <small>{service.placeName}</small>
                </Card.Title>
                <Card.Title>Destinaction : {service.serviceName}</Card.Title>
                <Card.Text>{service.discription}</Card.Text>
                <p className="fw-bold"><b>Price:</b> {service.price}</p>
                <Link to={`/`}>
                  <Button variant="warning">back to home</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </div>
        <div>
            <h1 className="text-center my-5 text-warning">Place Booking</h1>
            
        <form  className="d-flex flex-column mx-auto w-50" onSubmit={handleSubmit(onSubmit)}>
            <input className="mb-3" defaultValue={user.displayName} {...register("fullName", {required: true})} placeholder="enter your full name" />
            <input className="mb-3" defaultValue={user.email} {...register("email", {required: true})} placeholder="enter your email" />
           { service.serviceName !== undefined && <input className="mb-3" defaultValue={service.serviceName} {...register("orderName", {required: true})}/> }
            <input className="mb-3" {...register("phoneNumber", {required: true})} placeholder="enter your phone number" />
            <textarea className="mb-3" {...register("address", {required: true})} placeholder="enter your address" />
            <input value='Place Booking' className="mb-3 btn btn-warning mx-auto text-white" type="submit" />
      </form>

        </div>
      </div>
    </div>
  );
};

export default PlaceBooking;
