import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";

const ManageAllServices = () => {
  const [allBookings, setAllBookings] = useState([]);

  useEffect(() => {
    fetch("https://salty-hamlet-26022.herokuapp.com/bookings")
      .then((res) => res.json())
      .then((data) => setAllBookings(data));
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
            const remaining = allBookings.filter(
              (allBooking) => allBooking._id !== id
            );
            setAllBookings(remaining);
          }
        });
    }
  };

  return (
    <div className="mb-5 pb-5">
      <h1 className="text-center my-5">Manage all orders</h1>
      {allBookings.length === 0 ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="dark" />
        </div>
      ) : (
        <section className="row g-5 mx-5 mb-5 pb-5">
          {allBookings.map((allBooking) => (
            <div className="col-lg-4 col-lg-4 col-sm-12" key={allBooking._id}>
              <div className="shadow shasow p-3 rounded-3">
                <h3>{allBooking.orderName}</h3>
                <h4>Costomer: {allBooking.fullName}</h4>
                <p>service id: {allBooking._id}</p>
               <Button className="btn btn-danger" onClick={() => handleDeleteBooking(allBooking._id)}>
                  Cancel Booking
                </Button>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default ManageAllServices;
