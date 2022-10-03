import React from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap } from 'react-icons/fa';
import { Container,Navbar,Nav} from "react-bootstrap";
function PagesNavBar() {
    
    return(
        <div>

      <Navbar collapseOnSelect expand="lg"  variant ="light " bg="light" className="navBar p-3 d-flex justify-content-between align-items-center">
      <Container fluid >
      <Navbar.Brand   className="navBrand "><FaGraduationCap  className="fs-1 p-1 mb-2"/>E-LEARNING</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
        <Nav>
        <Nav.Link className="navLinkHover"><Link to ="/" className="text-decoration-none navitem" id="#home">Home</Link></Nav.Link>
        <Nav.Link className="navLinkHover"><Link to ="/programs" className="text-decoration-none navitem" id="#campuses">Programs</Link></Nav.Link>
        <Nav.Link className="navLinkHover"><Link to ="/questions" className="text-decoration-none navitem" id="#questions">Questions</Link></Nav.Link>
        <Nav.Link className="navLinkHover"><Link to ="/discussion" className="text-decoration-none navitem" id="#discussion">Discussion</Link></Nav.Link>
        <Nav.Link className="navLinkHover"><Link to ="/contact-us" className="text-decoration-none navitem" id="#about">Contact</Link></Nav.Link>
        <Nav.Link className="navLinkHover"><Link to ="/about" className="text-decoration-none navitem" id="#contact">About</Link></Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse id="responsive-navbar-nav " className="justify-content-end">
      <div className="d-flex justify-content-around align-items-center">
           <Nav.Link className="navLinkHover">
                <Link to="/online_tutor" className="text-decoration-none navitem">
                  Become a Tutor
                </Link>
              </Nav.Link>
              <a href="https://chat.whatsapp.com/Cli4Yx9O0d6AgGFJEPE7l7" target="_blank"
                rel="noopener noreferrer">
              <button type="button" className="btn" style={{backgroundColor:"navy",color:"white"}}>Join Now</button>
              </a>
           </div>
      
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
            
        </div>

    );
}


export default PagesNavBar;