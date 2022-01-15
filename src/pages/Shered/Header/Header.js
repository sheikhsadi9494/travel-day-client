import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const {user, logOut} = useAuth();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Travel Day</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className="text-white" as={Link} to="/">Home</Nav.Link>
            { user?.email ? <Nav.Link className="text-white" as={Link} to="/myBookings">My Bookings</Nav.Link> : ''}
            { user?.email ? <Nav.Link className="text-white" as={Link} to="/manageAllServices">Manage all services</Nav.Link> : ''}
           { user?.email ? <Nav.Link className="text-white" as={Link} to="AddServices">Add Services</Nav.Link> : ''}
            { 
              user?.email ? 
              <Button variant='dark' onClick={logOut}>logOut</Button> 
                : 
              <Nav.Link className="text-white" as={Link} to="/signin">Sign in</Nav.Link> 
            }
            <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName ? user?.displayName : ' '}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
