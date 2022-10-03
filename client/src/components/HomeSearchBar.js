import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { MdDateRange } from "react-icons/md";
import { BiTime } from "react-icons/bi";
import BookData from "../Data";
import {useScrollToTop} from '../components/ScrollToTop'
import { Container, Navbar, Nav } from "react-bootstrap";

function HomeSearchBar() {
  const setScrollToTop = useScrollToTop(true);
  const [wordEntered, setWordEntered] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

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
    <div onClick={() => setScrollToTop(true)}>
      {/* top navbar */}
      <nav class="navbar navbar-expand-lg navbar-dark  navBarTop  ">
        <div class="container-fluid opacity-100 justify-content-even align-items-center">
          <div className=" text-light cusText">
            <MdDateRange className="fs-2 p-1" />
            {date.toLocaleDateString()}
          </div>
          <div>
            <p className="text-light ">
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
                <Link to={value.link} className="text-decoration-none ">
                  <p
                    key={value.id}
                    style={{ cursor: "pointer", color: "navy" }}
                  >
                    {value.mainContent}{" "}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default HomeSearchBar;
