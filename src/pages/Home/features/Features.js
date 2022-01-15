import React from "react";

const Features = () => {
  return (
    <div>
      <div className="mx-5 text-secondary">
        <h1 className="text-center fw-bold pt-5 text-warning">Top Features</h1>
        <p className="text-center">
          Travel has helped us to understand the meaning of life and it has
          helped us become <br /> better people. Each time we travel, we see the
          world with new eyes.
        </p>
      </div>
      <div className="d-lg-flex d-md-flex text-center justify-content-around m-5">
        <div className=" shadow rounded-3 p-3 py-5 m-3">
          <div>
            <i className="far fa-calendar-alt fs-1 text-secondary my-3"></i>
          </div>
          <h4>Reservation</h4>
          <p>
            As compared with earlier times where a reservation personnel has to
            update its inventory every time.
          </p>
          <button
            type="button"
            className="btn btn-outline-danger fw-bold rounded-pill px-4"
          >
            Read More
          </button>
        </div>
        <div className=" shadow rounded-3 p-3 py-5 m-3">
          <div>
            <i className="fas fa-plane-departure fs-1 text-secondary my-3"></i>
          </div>
          <h4>Tour Pack</h4>
          <p>
            You can dream, create, design, and build the most wonder ful place
            in the world. But it requires people.
          </p>
          <button
            type="button"
            className="btn btn-outline-danger fw-bold rounded-pill"
          >
            Read More
          </button>
        </div>
        <div className=" shadow rounded-3 p-3 py-5 m-3">
          <div>
            <i className="fas fa-money-bill fs-1 text-secondary my-3"></i>
          </div>
          <h4>Payment</h4>
          <p>
            As compared with earlier times where a reservation personnel has to
            update its inventory every time.
          </p>
          <button
            type="button"
            className="btn btn-outline-danger fw-bold rounded-pill"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
