import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaAt } from "react-icons/fa";
import { FaPhone, FaSearch } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import BookData from "../Data";
import { Container, Navbar, Nav } from "react-bootstrap";

function HomeSearchBar() {
  const [wordEntered, setWordEntered] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = BookData.filter((value) => {
      return value.mainContent.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

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
            <div>
              <div className=" d-flex">
                <input
                  type="text"
                  placeholder="search here"
                  value={wordEntered}
                  onChange={handleFilter}
                  className="form-control search-width"
                />
                <div className="ms-2 searchIcon">
                  {filteredData.length === 0 ? (
                    <FaSearch />
                  ) : (
                    <RiCloseFill id="clearBtn" onClick={clearInput} />
                  )}
                </div>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {filteredData.length !== 0 && (
        <div className="container-fluid dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div>
                <a href={value.link} className="text-decoration-none ">
                  <p
                    key={value.id}
                    style={{ cursor: "pointer", color: "navy" }}
                  >
                    {value.mainContent}{" "}
                  </p>
                </a>
                
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default HomeSearchBar;
