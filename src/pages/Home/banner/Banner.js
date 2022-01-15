import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <div className="row align-items-center justify-content-evenly bg-color">
            <div className="co-lg-4 col-md-4 col-sm-12">
              <img
                className="d-block image"
                src="https://templates.hibootstrap.com/jaunt/default/assets/img/banner/banner1.png"
                alt="First slide"
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-center mt-4">
              <p>
                <small className="fw-bold text-primary">Amazing Pleaces</small>
              </p>
              <h1 className="fw-bolder">
                Expolre <span className="text-danger">Life</span> To Travel{" "}
                <br /> Where You Want
              </h1>
              <p className="text-secondery mx-4">
                Travel has helped us to understand the meaning of life and it
                has helped us become better people. Each time we travel,
                we see the world with new eyes.
              </p>
              <button className="btn btn-danger rounded-pill text-white px-4 py-2">
                Destination
              </button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row align-items-center justify-content-evenly bg-color">
            <div className="co-lg-4 col-md-4 col-sm-12">
              <img
                className="d-block image"
                src="https://templates.hibootstrap.com/jaunt/default/assets/img/banner/banner2.png"
                alt="First slide"
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-center mt-4">
              <p>
                <small className="fw-bold text-primary">Amazing Pleaces</small>
              </p>
              <h1 className="fw-bolder">
                Expolre <span className="text-danger">Life</span> To Travel{" "}
                <br /> Where You Want
              </h1>
              <p className="text-secondery mx-4">
                Travel has helped us to understand the meaning of life and it
                has helped us become better people. Each time we travel,
                we see the world with new eyes.
              </p>
              <button className="btn btn-danger rounded-pill text-white px-4 py-2">
                Destination
              </button>
            </div>
          </div>
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
};

export default Banner;

{
  /* <Carousel>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="https://gotravel.qodeinteractive.com/wp-content/uploads/2016/04/slide-3.jpg"
    alt="First slide"
  />
  <Carousel.Caption className="mt-5">
    <small className="fw-bold" >Amazing Pleaces</small>
    <h2>Expolre Life To Travel Where You Want</h2>

  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="https://gotravel.qodeinteractive.com/wp-content/uploads/2016/04/slide-4.jpg"
    alt="Second slide"
  />

  <Carousel.Caption>
  <small className="fw-bold" >Amazing Pleaces</small>
    <h2>Expolre Life To Travel Where You Want</h2>

  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="https://gotravel.qodeinteractive.com/wp-content/uploads/2016/04/slide-5.jpg"
    alt="Third slide"
  />

  <Carousel.Caption>
  <small className="fw-bold" >Amazing Pleaces</small>
    <h2>Expolre Life To Travel Where You Want</h2>

  </Carousel.Caption>
</Carousel.Item>
</Carousel> */
}
