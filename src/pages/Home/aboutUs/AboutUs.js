import React from "react";
import "./About.css";

const AboutUs = () => {
  return (
    <div className="d-lg-flex justify-content-between align-items-center m-5">
      <div className="w-lg-50">
        <h1 className="text-warning">About Us</h1>
        <p>
          Top Tour Operators and Travel Agency. We offering in total 793 tours
          and holidays <br /> throughout the world. Combined we have received
          1532 customer reviews and an <br /> average rating of 5 out of 5
          stars. <br />
          <br /> Travel has helped us to understand the meaning of life and it
          has helped us become <br /> better people. Each time we travel, we see
          the world with new eyes.
        </p>
        <div>
          <div className="d-flex justify-content-around mt-5">
            <div>
              <p>
                <i className="far fa-check-circle fs-5 text-warning"></i> Safety
                Travel System
              </p>
              <p>
                <i className="far fa-clock fs-5 text-warning"></i> Expert Trip
                Planning
              </p>
              <p>
                <i className="far fa-thumbs-up fs-5 text-warning"></i> Right
                Solution & Guide
              </p>
            </div>
            <div>
              <p>
                <i className="fas fa-hand-holding-heart fs-5 text-warning"></i>{" "}
                Budget-Friendly Tour
              </p>
              <p>
                <i className="fas fa-broadcast-tower fs-5 text-warning"></i> Fast
                Communication
              </p>
              <p>
                <i className="fas fa-headset fs-5 text-warning"></i> 24/7 Customer
                Support
              </p>
            </div>
          </div>
          <div className='mx-auto'>
            <button className="btn btn-warning rounded-pill px-3 text-white fw-bold mx-4 mt-3">
              Contact Us
            </button>
            <button className="btn btn-warning rounded-pill px-3 text-white fw-bold mt-3">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="w-50">
        <img
          className="rounded-pill mt-3 img-fluid"
          src="https://templates.hibootstrap.com/jaunt/default/assets/img/about2.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutUs;
