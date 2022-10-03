import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { BiTime } from "react-icons/bi";
import { Container, Navbar, Nav } from "react-bootstrap";
import {useScrollToTop} from '../components/ScrollToTop'


function NavBar() {
  var [date, setDate] = useState(new Date());
  const setScrollToTop = useScrollToTop(true);


  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  return (
    <div onClick={() => setScrollToTop(true)}>
      {/* top navbar */}
      <nav class="navbar navbar-expand-lg navbar-dark  navBarTop  ">
        <div class="container-fluid opacity-100 justify-content-even align-items-center">
          <div className="text-light ">
            <MdDateRange className="fs-2 p-1" />
            {date.toLocaleDateString()}
          </div>
          <div>
            <p className="text-light">
              <BiTime className="fs-2 p-1" />
              {date.toLocaleTimeString()}
            </p>
          </div>
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
                <Link to="/discussion" className="text-decoration-none navitem">
                  Discussion
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
                <Link
                  to="/online_tutor"
                  className="text-decoration-none navitem"
                >
                  Become a Tutor
                </Link>
              </Nav.Link>
              <a href="https://chat.whatsapp.com/Cli4Yx9O0d6AgGFJEPE7l7" target="_blank"
                rel="noopener noreferrer">
                <button
                  type="button"
                  className="btn"
                  style={{ backgroundColor: "navy", color: "white" }}
                >
                  Join Now
                </button>
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
