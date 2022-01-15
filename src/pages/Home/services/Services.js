import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import Service from "../service/Service";
import './Services.css'

const Services = () => {
  const [services, setServices] = useState([]);

    useEffect(() => {
      fetch("https://salty-hamlet-26022.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
    }, []);

  return (
    <div className="overflow-hidden mx-5">
      <h1 className="text-center fw-bold my-5 text-warning">Destinations</h1>
    { services.length === 0 ? 
      <div className="d-flex justify-content-center">
        <Spinner animation="border" variant="dark" />
      </div>
    :
      <Row xs={1} md={3} className="g-4">
        {
             services.map( service => <Service key={service._id} service={service}></Service>)
        }
       </Row> 
    }
    </div>
  );
};

export default Services;
