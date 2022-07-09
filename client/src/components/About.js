import React from "react";
import Footer from "./Footer";
import NavBar from "./Navbar";
import { Card } from "react-bootstrap";
import {
  FaWhatsapp,
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function About() {
  return (
    <div>
      <NavBar />
      <div>
        <video class="background-video" loop autoPlay muted>
          <source src="/img/about.mp4" type="video/mp4" />
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
              and beyond. We are the leading student-first connected learning
              platform.
            </p>
            <p className="fw-bold">Our Goal</p>
            <p>
              By facilitating students to learn more in a shorter amount of time
              and at a lower cost, we work to increase the overall return on
              investment in education.
            </p>
          </div>

          <Card className="child-container3 mt-5 shadow-lg p-0 mb-5 bg-body rounded ">
            <Card.Img src="/img/group-learning.jpg" alt="Group learning" />
            
          </Card>
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
              src="/img/educators.png"
              className="online-tutor"
              alt="Group learning"
            />
          </Card>
          <div className="child-container">
            <p className="fw-bold text-center fs-2 small-device-visibility">
              Instructors
            </p>
            <p>
              The growing e-learning community of higher education faculty
              members shares the objectives of assisting other educators in
              improving their teaching abilities and assisting students in
              learning and succeeding in their studies. Teachers collaborate
              with other faculty members, share resources, and develop new
              teaching techniques through online learning. On the platform are
              over 65,000 educators. Assignments, tests, case studies, lecture
              notes, and other materials are contributed by the faculty. By
              participating in a variety of event formats, such as workshops,
              discussions, and community gatherings, faculty can also learn new
              skills and teaching techniques from professors and subject matter
              experts.
            </p>
            <p className="fw-bold">Resources</p>
            <p>
              On this website or platform, the majority of the content is
              created by outside parties. On this website or platform, the
              majority of the images were downloaded from unsplash.com,
              google.com , and pexels.com.
            </p>
            <p style={{ fontStyle: "italic", fontSize: 12 }}>
              None of the content on this website is subject to any rights that
              we may have. Please get in touch with us or write a report to us
              if you believe your content has been posted on this website and
              would like us to remove it.
            </p>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section class="container team-container">
        <h2 style={{ textAlign: "center", color: "navy" }}>
         Online Tutors
        </h2>
        <hr />
        <div class="row about-row">
          <div class="column about-column">
            <div class="card about-card">
              <img
                src="/Img/orionty.jpg"
                alt="Orionty"
                className="rounded"
                style={{ width: "100%",height:350,objectFit:"cover" }}
              />
              <div class="container about-container">
                <h2>Orionty</h2>
                <p class="title-container">Software Developer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>oriontyweb@example.com</p>
                <div className="mb-2 d-flex justify-content-center align-items">
                  <a href="www.whatsapp.com" className="fs-3 mx-2">
                    <FaWhatsapp />
                  </a>
                  <a href="www.facebook.com" className="fs-3 mx-2">
                    <FaFacebookSquare />
                  </a>
                  <a href="www.instagram.com" className="fs-3 mx-2">
                    <FaInstagram />
                  </a>
                  <a href="www.twitter.com" className="fs-3 mx-2">
                    <FaTwitter />
                  </a>
                </div>
                <p>
                  <a href="tel:+233553311567">
                    <button class="button-container">Contact</button>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="column about-column">
            <div class="card about-card">
              <img
                src="/Img/orionty.jpg"
                alt="Mike"
                className="rounded"
                style={{ width: "100%",height:350,objectFit:"cover" }}
              />
              <div class="container">
                <h2>Mike Ross</h2>
                <p class="title-container">Data Scientist</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>mike@example.com</p>
                <div className="mb-2 d-flex justify-content-center align-items">
                  <a href="www.whatsapp.com" className="fs-3 mx-2">
                    <FaWhatsapp />
                  </a>
                  <a href="www.facebook.com" className="fs-3 mx-2">
                    <FaFacebookSquare />
                  </a>
                  <a href="www.instagram.com" className="fs-3 mx-2">
                    <FaInstagram />
                  </a>
                  <a href="www.twitter.com" className="fs-3 mx-2">
                    <FaTwitter />
                  </a>
                </div>
                <p>
                  <a href="tel:+233553311567">
                    <button class="button-container">Contact</button>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="column about-column">
            <div class="card about-card">
              <img
                src="/Img/orionty.jpg"
                alt="Peter Walker"
                className="rounded"
                style={{ width: "100%",height:350,objectFit:"cover" }}
              />
              <div class="container">
                <h2>Peter Walker</h2>
                <p class="title-container">Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>peterwalker782@example.com</p>
                <div className="mb-2 d-flex justify-content-center align-items">
                  <a href="www.whatsapp.com" className="fs-3 mx-2">
                    <FaWhatsapp />
                  </a>
                  <a href="www.facebook.com" className="fs-3 mx-2">
                    <FaFacebookSquare />
                  </a>
                  <a href="www.instagram.com" className="fs-3 mx-2">
                    <FaInstagram />
                  </a>
                  <a href="www.twitter.com" className="fs-3 mx-2">
                    <FaTwitter />
                  </a>
                </div>
                <p>
                  <a href="tel:+233553311567">
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
                src="/Img/orionty.jpg"
                alt="Orionty"
                className="rounded"
                style={{ width: "100%",height:350,objectFit:"cover" }}
              />
              <div class="container about-container">
                <h2>Orionty</h2>
                <p class="title-container">CEO & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>oriontyweb@example.com</p>
                <div className="mb-2 d-flex justify-content-center align-items">
                  <a href="www.whatsapp.com" className="fs-3 mx-2">
                    <FaWhatsapp />
                  </a>
                  <a href="www.facebook.com" className="fs-3 mx-2">
                    <FaFacebookSquare />
                  </a>
                  <a href="www.instagram.com" className="fs-3 mx-2">
                    <FaInstagram />
                  </a>
                  <a href="www.twitter.com" className="fs-3 mx-2">
                    <FaTwitter />
                  </a>
                </div>
                <p>
                  <a href="tel:+233553311567">
                    <button class="button-container">Contact</button>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="column about-column">
            <div class="card about-card">
              <img
                src="/Img/orionty.jpg"
                alt="Mike"
                className="rounded"
                style={{ width: "100%",height:350,objectFit:"cover" }}
              />
              <div class="container">
                <h2>Mike Ross</h2>
                <p class="title-container">Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>mike@example.com</p>
                <div className="mb-2 d-flex justify-content-center align-items">
                  <a href="www.whatsapp.com" className="fs-3 mx-2">
                    <FaWhatsapp />
                  </a>
                  <a href="www.facebook.com" className="fs-3 mx-2">
                    <FaFacebookSquare />
                  </a>
                  <a href="www.instagram.com" className="fs-3 mx-2">
                    <FaInstagram />
                  </a>
                  <a href="www.twitter.com" className="fs-3 mx-2">
                    <FaTwitter />
                  </a>
                </div>
                <p>
                  <a href="tel:+233553311567">
                    <button class="button-container">Contact</button>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="column about-column">
            <div class="card about-card">
              <img
                src="/Img/orionty.jpg"
                alt="Peter Walker"
                className="rounded"
                style={{ width: "100%",height:350,objectFit:"cover" }}
              />
              <div class="container">
                <h2>Peter Walker</h2>
                <p class="title-container">Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>peterwalker782@example.com</p>
                <div className="mb-2 d-flex justify-content-center align-items">
                  <a href="www.whatsapp.com" className="fs-3 mx-2">
                    <FaWhatsapp />
                  </a>
                  <a href="www.facebook.com" className="fs-3 mx-2">
                    <FaFacebookSquare />
                  </a>
                  <a href="www.instagram.com" className="fs-3 mx-2">
                    <FaInstagram />
                  </a>
                  <a href="www.twitter.com" className="fs-3 mx-2">
                    <FaTwitter />
                  </a>
                </div>
                <p>
                  <a href="tel:+233553311567">
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
