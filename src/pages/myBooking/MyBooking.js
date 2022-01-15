import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://salty-hamlet-26022.herokuapp.com/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  const handleDeleteBooking = (id) => {
    const proceed = window.confirm("Are you want to sure to delete this file");
    if (proceed) {
      const url = `https://salty-hamlet-26022.herokuapp.com/bookings/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  return (
    <div className="pb-5">
      <h1 className="text-center my-5">My Bookings</h1>  
      { 
          bookings.length === 0 ? (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" variant="dark" />
            </div>
          ) : (
            <section className="row g-4 mx-3 mb-3">
              {bookings.map( booking  => booking.email === 'sadis6343@gmail.com' ? 
                <div className="col-lg-4 col-md-4 col-sm-12" key={booking._id}>
                    <div className="shadow shadow p-3 rounded-3">
                    <h3>{booking.orderName}</h3>
                    <h4>Costomer Name: {booking.fullName}</h4>
                    <p>service id : {booking._id}</p>
                    <button
                      className="btn btn-danger text-white"
                      onClick={() => handleDeleteBooking(booking._id)}
                    >
                      Cancel Booking
                    </button>
                  </div> 
                </div> 
              : 
              '')
             }
        </section>
      )}

    </div>
  );
};

export default MyBooking;


