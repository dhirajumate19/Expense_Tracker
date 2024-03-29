import React from "react";
import { Button, Nav, Navbar, NavLink } from "react-bootstrap";
import "../Header/Header.css";
import Authentication from "../Authentication";
function HeaderComponent() {
  const isUserLoggedIn = Authentication.isLoggedUserIn();
  // console.log(isUserLoggedIn);

  return (
    <>
      <Nav className="navbar">
        <Nav.Item className="nav-item">
          <Navbar.Brand className="brand" href="http://localhost:3000/home">
            ToDoApp
          </Navbar.Brand>
          {isUserLoggedIn && (
            <Nav.Link className="nav-link" href="http://localhost:3000/home">
              {" "}
              Home
            </Nav.Link>
          )}
          {isUserLoggedIn && (
            <Nav.Link className="nav-link" href="">
              {" "}
              About Us
            </Nav.Link>
          )}
          {isUserLoggedIn && (
            <Nav.Link className="nav-link" href="">
              {" "}
              Contact US
            </Nav.Link>
          )}
          <div>
            { !isUserLoggedIn &&<Nav.Link className="button" href="http://localhost:3000/login">
              Login
            </Nav.Link>}
            {isUserLoggedIn && (
              <Nav.Link
                onClick={Authentication.LogoutUser}
                className="button"
                href="http://localhost:3000/logout"
              >
                {" "}
                Logout
              </Nav.Link>
            )}{" "}
          </div>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default HeaderComponent;
