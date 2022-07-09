import React from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaAt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { Container, Navbar, Nav } from "react-bootstrap";

function NavBar() {
  
  

  return (
    <div>
      {/* top navbar */}
      <nav class="navbar navbar-expand-lg navbar-dark  navBarTop ">
        <div class="container-fluid opacity-75">
          <Link to="/" className="navbar-brand cusText" id="#home">
            <FaAt className="fs-3 p-1" />
            contact@elearning.edu
          </Link>
          <Link to="/" className="navbar-brand cusText" id="#home">
            <FaPhone className="fs-3 p-1" /> +233 501-336-536
          </Link>
        </div>
      </nav>

      {/* down navbar */}
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light "
        bg="light"
        className="navBar p-3 d-flex justify-content-between align-items-center"
      >
        <Container fluid>
          <Navbar.Brand className="navBrand ">
            <FaGraduationCap className="fs-1 p-1 mb-2" />
            E-LEARNING
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-center"
          >
            <Nav>
              <Nav.Link className="navLinkHover">
                <Link
                  to="/"
                  className="text-decoration-none navitem"
                  id="#home"
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link className="navLinkHover">
                <Link to="/programs" className="text-decoration-none navitem">
                  Programs
                </Link>
              </Nav.Link>
              <Nav.Link className="navLinkHover">
                <Link to="/questions" className="text-decoration-none navitem">
                  Questions
                </Link>
              </Nav.Link>
              <Nav.Link className="navLinkHover">
                <Link to="/contact-us" className="text-decoration-none navitem">
                  Contact
                </Link>
              </Nav.Link>
              <Nav.Link className="navLinkHover">
                <Link to="/about" className="text-decoration-none navitem">
                  About
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse
            id="responsive-navbar-nav "
            className="justify-content-end"
          >
           
           <div className="d-flex">
           <Nav.Link className="navLinkHover">
                <Link to="/online_tutor" className="text-decoration-none navitem">
                  Become a Tutor
                </Link>
              </Nav.Link>
              <a href="/user_register" >

              <button type="button" className="btn" style={{backgroundColor:"navy",color:"white"}}>Sign Up</button>
              </a>
           </div>
         
          </Navbar.Collapse>
        </Container>
      </Navbar>

    
    </div>
  );
}

export default NavBar;
