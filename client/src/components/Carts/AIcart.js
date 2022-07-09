import React, { useState } from "react";
import IntlTelInput from "react-bootstrap-intl-tel-input";
import { Modal, Button } from "react-bootstrap";
import {FaCcVisa,FaCcMastercard,FaCcAmex,FaCcDiscover} from 'react-icons/fa';
import Footer from "../Footer";
import NavBar from "../Navbar";

function AIcart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Payment </Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <div className="container d-flex justify-content-center align-items-center">
            <a href><FaCcVisa className="m-1 fs-1" /></a>
            <a href><FaCcMastercard className="m-1 fs-1" /></a>
            <a href><FaCcAmex className="m-1 fs-1" /></a>
            <a href><FaCcDiscover className="m-1 fs-1" /></a>
          </div>
          <br />

            <div>
              <label
                for="validationTooltip01"
                class="form-label"
                style={{ color: "navy" }}
              >
                Name on Card
              </label>
              <input
                type="text"
                class="form-control"
                id="validationTooltip01"
                placeholder="James Wood"
                name="card_name"
                required
              />
              <div class="valid-tooltip">Looks good!</div>
            </div>

            <div>
              <label
                for="validationTooltip02"
                class="form-label"
                style={{ color: "navy" }}
              >
               Credit card number
              </label>
              <input
                type="text"
                class="form-control"
                id="validationTooltip02"
                placeholder="1111-2222-3333-4444"
                name="card_name"
                required
              />
              <div class="valid-tooltip">Looks good!</div>
            </div>
            <div>
              <label
                for="validationTooltip03"
                class="form-label"
                style={{ color: "navy" }}
              >
               Expiration
              </label>
              <input
                type="text"
                class="form-control"
                id="validationTooltip03"
                placeholder="MM/YY"
                name="expiration"
                required
              />
              <div class="valid-tooltip">Looks good!</div>
            </div>

            <div>
              <label
                for="validationTooltip04"
                class="form-label"
                style={{ color: "navy" }}
              >
               CVV
              </label>
              <input
                type="text"
                class="form-control"
                id="validationTooltip04"
                placeholder="CVC"
                name="cvv"
                required
              />
              <div class="valid-tooltip">Looks good!</div>
            </div>

        

            <div>
              <label
                for="validationTooltip06"
                class="form-label"
                style={{ color: "navy" }}
              >
              Amount
              </label>
              <input
                type="number"
                class="form-control"
                id="validationTooltip06"
                value={165}
                name="amount"
                required
              />
              <div class="valid-tooltip">Looks good!</div>
            </div>

            <div>
              <label
                for="validationTooltip07"
                class="form-label"
                style={{ color: "navy" }}
              >
              Country
              </label>
              <input
                type="country"
                class="form-control"
                id="validationTooltip07"
                placeholder="United States"
                name="card_country"
                required
              />
              <div class="valid-tooltip">Looks good!</div>
            </div>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Pay $165
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      <section>
        <NavBar />
        <br />
        <div class="container contact-container">
          <section class=" container">
            <p
              class="text-center w-responsive mx-auto mb-5 pt-5"
              style={{ color: "navy" }}
            >
              Please fill all the fields below.
            </p>

            <form class="row g-3 needs-validation" novalidate>
              <div class="col-md-4 position-relative">
                <label
                  for="validationTooltip01"
                  class="form-label"
                  style={{ color: "navy" }}
                >
                  First name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationTooltip01"
                  placeholder="first name"
                  name="first_name"
                  required
                />
                <div class="valid-tooltip">Looks good!</div>
              </div>
              <div class="col-md-4 position-relative">
                <label
                  for="validationTooltip02"
                  class="form-label"
                  style={{ color: "navy" }}
                >
                  Last name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationTooltip03"
                  placeholder="last name"
                  name="last_name"
                  required
                />
                <div class="valid-tooltip">Looks good!</div>
              </div>

              <div class="col-md-4 position-relative">
                <label
                  for="validationTooltip04"
                  class="form-label"
                  style={{ color: "navy" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="validationTooltip03"
                  placeholder="example@gmail.com"
                  name="AI_email"
                  required
                />
                <div class="invalid-tooltip">please provide correct email</div>
              </div>

              <div class="col-md-4 position-relative">
                <label
                  for="validationTooltip05"
                  class="form-label"
                  style={{ color: "navy" }}
                >
                  Phone Number
                </label>

                <IntlTelInput
                  preferredCountries={["US", "GB"]}
                  defaultCountry={"US"}
                  defaultValue={"+1 409-444-4444"}
                  name={"phone_name"}
                />
                <div class="invalid-tooltip">
                  please provide correct phone number
                </div>
              </div>

              <div class="col-md-4 position-relative">
                <label
                  for="validationTooltip06"
                  class="form-label"
                  style={{ color: "navy" }}
                >
                  Country
                </label>
                <input
                  type="country"
                  class="form-control"
                  id="validationTooltip07"
                  placeholder="country name"
                  name="country"
                  required
                />
                <div class="valid-tooltip">Looks good!</div>
              </div>

              <div class="col-md-4 position-relative">
                <label
                  for="validationTooltip08"
                  class="form-label"
                  style={{ color: "navy" }}
                >
                  Course
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationTooltip02"
                  value={"Artificial Intelligence"}
                  name="AI"
                  required
                />
                <div class="valid-tooltip">Looks good!</div>
              </div>

              <div class="col-12 mb-5 me-3 d-flex justify-content-between">
                <button
                  class="btn "
                  type="submit"
                  style={{ backgroundColor: "navy", color: "white" }}
                >
                  Submit form
                </button>
                <a
                  href
                  className="text-decoration-none"
                  style={{ cursor: "pointer" }}
                  onClick={handleShow}
                >
                  click here to make payment
                </a>
              </div>
            </form>
          </section>
        </div>
        <br /> <br /> <br />
        <Footer />
      </section>
    </div>
  );
}

export default AIcart;
