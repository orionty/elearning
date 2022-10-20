import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { FiYoutube } from "react-icons/fi";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useScrollToTop } from "../components/ScrollToTop";

function Footer() {
  const [show, setShow] = useState(false);
  const setScrollToTop = useScrollToTop(true);
  const handleClose = () => setShow(false);
  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow = () => setShow2(true);

  return (
    // footer layout
    <section class="customFooter">
      {/* refernce */}
      <>
        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>References</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ol>
              <li>Halliday-Resnick-Walker_Fundamentals_of_Physics</li>
              <li>Chemistry-LR Openstax College</li>
              <li>Advanced Engineering Mathematics - Alan Jeffrey</li>
              <li>John Bird - Higher Engineering Mathematics-1</li>
              <li>Mathematical Statistics with Applications</li>
              <li>Prescott, Harley, and Klein’s Microbiology</li>
              <li>Pickwell's Binocular Vision Anomalies Bruce J.W.Evans</li>
            </ol>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Privacy Policy</Modal.Title>
          </Modal.Header>
          <Modal.Body className="conatiner">
            <h6>Privacy Policy Covers</h6>
            <p>
              This Privacy Policy explains how we handle Personal Data collected
              when you access or use our Services. "Personal Data" refers to any
              information that identifies or relates to a specific individual,
              including information that is referred to as "personally
              identifiable information" or "personal information" under
              applicable data privacy laws, rules, or regulations. This Privacy
              Policy does not apply to the practises of organisations or
              individuals that we do not own or control.
            </p>
            <h6>Children's Personal Information</h6>
            <p>
              We do not knowingly collect Personal Data from children under the
              age of 13 years old, as stated in the Terms of Use; if you are a
              child under the age of 13, please do not attempt to register for
              or otherwise use the Services or send us any Personal Data. If we
              discover that we have gathered Personal Data from a child under
              the age of 13, we will destroy such data as soon as feasible. If
              you believe a child under the age of 13 has provided us with
              Personal Data, please email us at privacy@elearning.com.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      <div class="container text-center text-md-left ">
        <div class="row text-light">
          <div class="col-md-4 mx-auto">
            <h5 class=" text-uppercase mt-3 mb-4 fw-bold">
              <span className="span-3d">E</span>
              <span className="span-3d2">SURDE</span>
            </h5>
            <p>
              A great place for learning. The best and cheapest way of getting
              to know learning to make a better tomorrow.
            </p>
          </div>
          <hr class="clearfix w-100 d-md-none" />
          <div class=" col-md-2 mx-auto">
            <h5 class="fw-normal text-capitalize mt-3 mb-4 borderBtn">
              Esurde
            </h5>

            <ul class="list-unstyled ">
              <li>
                <Link
                  class="text-decoration-none text-light borderBtn"
                  to="/online_tutor"
                >
                  Become Online Tutor
                </Link>
              </li>
              <li>
                <Link
                  class="text-decoration-none text-light borderBtn"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  class="text-decoration-none text-light borderBtn"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" class="text-decoration-none text-light borderBtn">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <hr class="clearfix w-100 d-md-none" />

          <div class="col-md-2 mx-auto">
            <h5 class="fw-normal text-capitalize mt-3 mb-4 borderBtn">
              Social Media Groups
            </h5>

            <ul class="list-unstyled">
              <li>
                <a
                  href="https://chat.whatsapp.com/Cli4Yx9O0d6AgGFJEPE7l7"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-decoration-none text-light borderBtn"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://web.facebook.com/profile.php?id=100039105502161"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-decoration-none text-light"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/+VuQ-VeA7FmkwNTg0"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-decoration-none text-light"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/elearning273"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-decoration-none text-light"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCN2x35pQqYcMc-A5MQU8ZvQ "
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-decoration-none text-light"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://chat.whatsapp.com/Cli4Yx9O0d6AgGFJEPE7l7"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-decoration-none text-light"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <hr class="clearfix w-100 d-md-none" />
          <div class="col-md-2 mx-auto">
            <h5 class="fw-normal text-capitalize mt-3 mb-4 borderBtn">
              Legal & Policies
            </h5>

            <ul class="list-unstyled">
              <li>
                <Link
                  to="/disclaimer"
                  style={{ cursor: "pointer" }}
                  class="text-decoration-none text-light borderBtn"
                >
                  Copyright Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy_policy"
                  style={{ cursor: "pointer" }}
                  class="text-decoration-none text-light borderBtn"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/term-of-use"
                  style={{ cursor: "pointer" }}
                  class="text-decoration-none text-light borderBtn"
                >
                  Term Of Use
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={handleShow}
                  style={{ cursor: "pointer" }}
                  class="text-decoration-none text-light borderBtn"
                >
                  References & Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr />
      <ul class="list-unstyled list-inline text-center py-2">
        <li class="list-inline-item">
          <h5 class="mb-1 text-light">ESURDE FORUM</h5>
        </li>
        <li class="list-inline-item">
          <a
            href="https://chat.whatsapp.com/Cli4Yx9O0d6AgGFJEPE7l7"
            class="text-decoration-none text-light btn btn-info btn-rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Now <RiWhatsappFill className="fs-1 p-1" />
          </a>
        </li>
        <li
          class="list-inline-item float-end"
          onClick={() => setScrollToTop(true)}
        >
          <BsFillArrowUpSquareFill className="fs-1 p-1" />
        </li>
      </ul>
      <hr />

      <ul class="list-unstyled list-inline text-center fs-1 ">
        <li class="list-inline-item p-4">
          <a
            class="text-decoration-none text-light"
            href="https://web.facebook.com/profile.php?id=100039105502161"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
        </li>
        <li class="list-inline-item p-4">
          <a
            class="text-decoration-none text-light"
            href="https://twitter.com/elearning273"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
        <li class="list-inline-item p-4">
          <a
            class="text-decoration-none text-light"
            href="https://chat.whatsapp.com/Cli4Yx9O0d6AgGFJEPE7l7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </li>
        <li class="list-inline-item p-4">
          <a
            class="text-decoration-none text-light"
            href="https://www.linkedin.com/company/elearning-orgaization/ "
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li class="list-inline-item p-4">
          <a
            class="text-decoration-none text-light"
            href="https://www.instagram.com "
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
        <li class="list-inline-item p-4">
          <a
            class="text-decoration-none text-light"
            href="https://www.youtube.com/channel/UCN2x35pQqYcMc-A5MQU8ZvQ "
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiYoutube />
          </a>
        </li>
      </ul>
      <div class="footer-copyright text-center text-light py-3">
        {" "}
        esurde copyright © 2022 || All right reserved.
      </div>
    </section>
  );
}

export default Footer;
