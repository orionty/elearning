import React from "react";
import Footer from "./Footer";
import NavBar from "./Navbar";
import { Card } from "react-bootstrap";
import {
  FaWhatsapp,
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useScrollToTop } from "../components/ScrollToTop";

function About() {
  const setScrollToTop = useScrollToTop(true);

  return (
    <div onClick={() => setScrollToTop(true)}>
      <NavBar />
      <div>
        <video class="background-video" loop autoPlay muted>
          <source src="img/about.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <br />
      <br />
      <br />
      <section className="container">
        <h2 style={{ textAlign: "center", color: "navy" }}>About Us</h2>
        <hr />
        <div className=" parent-container">
          <div className="child-container">
            <p className="fw-bold">A Better Approach to Learning</p>
            <p>
              Our goal is to support every student in doing their best in school
              and beyond.
            </p>
            <p className="fw-bold">Our Goal</p>
            <p>
              The goal of esurde is to increase the overall return on
              capital in education by providing students with a platform for
              online learning that allows them to learn more in less time and at
              a lower cost. Among other advantages, online learning offers
              excellent flexibility, which makes it much simpler to organize
              development opportunities.
            </p>
          </div>

            <Card.Img
              src="img/group-learning.jpg"
              alt="Group learning"
              className="child-container3 mt-5 shadow-lg p-0 mb-5 bg-body rounded "
            />
          
          <p className="fw-bold text-center mb-4 fs-2 instructor-visibility">
            Instructors
          </p>
        </div>

        <div className=" parent-container">
          <Card
            className="child-container3 shadow-lg mb-4 bg-body rounded align-items-center"
            style={{ height: 350 }}
          >
            <Card.Img
              src="img/educators.png"
              className="online-tutor"
              alt="Group learning"
            />
          </Card>
          <div className="child-container">
            <p className="fw-bold text-center fs-2 small-device-visibility">
              Instructors
            </p>
            <p>
              The growing esurde community of higher education faculty
              members shares the objectives of assisting other educators in
              improving their teaching abilities and assisting students in
              learning and succeeding in their studies. Teachers collaborate
              with other faculty members, share resources, and develop new
              teaching techniques through online learning.
            </p>
            <p className="fw-bold">Resources</p>
            <p>
              The majority of the images on this website or platform were
              downloaded from unsplash.com, google.com, and pexels.com.
            </p>
            <p style={{ fontStyle: "italic", fontSize: 12 }}>
              No PDF on this website is covered by any rights we might have.
              Check out our references and resources. If you think your content
              has been posted on this website and would like us to remove it,
              please contact us or send a report to us.
            </p>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section class="container team-container">
        <h2 style={{ textAlign: "center", color: "navy" }}>Online Tutors</h2>
        <hr />
        <div class="row about-row">
          <div class="column about-column">
            <div class="card about-card">
              <img
                src="img/men-avatar.png"
                alt="Okyere Emmanuel Jnr."
                className="rounded"
                style={{ width: "100%", height: 350, objectFit: "cover" }}
              />
              <div class="container about-container">
                <h2>Okyere Emmanuel</h2>
                <p class="title-container">Physicist</p>

                <p>okyereemmanuel192@gmail.com</p>
                <div className="mb-2 d-flex justify-content-center align-items">
                  <a
                    href="https://wa.me/16038669439"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fs-3 mx-2"
                  >
                    <FaWhatsapp />
                  </a>
                  <Link to="www.facebook.com" className="fs-3 mx-2">
                    <FaFacebookSquare />
                  </Link>
                  <Link to="www.instagram.com" className="fs-3 mx-2">
                    <FaInstagram />
                  </Link>
                  <Link to="www.twitter.com" className="fs-3 mx-2">
                    <FaTwitter />
                  </Link>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    cla
                    className="fs-3 mx-2"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
                <p>
                  <Link to="tel:+160386694397">
                    <button class="button-container">Contact</button>
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div class="column about-column">
            <div class="card about-card">
              <img
                src="img/men-avatar.png"
                alt="Asamoah Isaac"
                className="rounded"
                style={{ width: "100%", height: 350, objectFit: "cover" }}
              />
              <div class="container">
                <h2>Asamoah Isaac</h2>
                <p class="title-container">Data Analyst</p>

                <p>Asamoahisaac6@gmail.com</p>
                <div className="mb-2 d-flex justify-content-center align-items">
                  <a
                    href="https://wa.me/16038669439"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fs-3 mx-2"
                  >
                    <FaWhatsapp />
                  </a>
                  <Link to="www.facebook.com" className="fs-3 mx-2">
                    <FaFacebookSquare />
                  </Link>
                  <Link to="www.instagram.com" className="fs-3 mx-2">
                    <FaInstagram />
                  </Link>
                  <Link to="www.twitter.com" className="fs-3 mx-2">
                    <FaTwitter />
                  </Link>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    cla
                    className="fs-3 mx-2"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
                <p>
                  <a
                    href="tel:+13063716578"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button class="button-container">Contact</button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </section>
      <section class="container team-container">
        <h2 style={{ textAlign: "center", color: "navy" }}>
          Our Management Team
        </h2>
        <hr />
        <div class="row about-row">
          <div class="column about-column">
            <div class="card about-card">
              <img
                src="img/men-avatar.png"
                alt="Orionty"
                className="rounded"
                style={{ width: "100%", height: 350, objectFit: "cover" }}
              />
              <div class="container about-container">
                <h2>Orionty</h2>
                <p class="title-container">CEO & Founder</p>
                <p>orionty@esurde.com</p>
                <div className="mb-2 d-flex justify-content-center align-items">
                  <a
                    href="https://wa.me/233553311567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fs-3 mx-2"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href="https://web.facebook.com/okyere.amponsah.9"
                    target="_blank"
                    rel="noopener noreferrer"
                    cla
                    className="fs-3 mx-2"
                  >
                    <FaFacebookSquare />
                  </a>
                  <a
                    href="https://www.instagram.com/oriontyprinciples/"
                    target="_blank"
                    rel="noopener noreferrer"
                    cla
                    className="fs-3 mx-2"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://twitter.com/OriontyPrincip2"
                    target="_blank"
                    rel="noopener noreferrer"
                    cla
                    className="fs-3 mx-2"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/okyere-amponsah-kwatia-141b761a4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    cla
                    className="fs-3 mx-2"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
                <p>
                  <a
                    href="tel:+233501336536"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button class="button-container">Contact</button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </section>

      <Footer />
    </div>
  );
}
export default About;
