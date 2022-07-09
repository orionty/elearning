import React, { useState } from "react";
import IntlTelInput from "react-bootstrap-intl-tel-input";
import { Modal, Button } from "react-bootstrap";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDiscover,
} from "react-icons/fa";
import Footer from "../Footer";
import NavBar from "../Navbar";


function WebCart() {

 

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [web_email, setRegisteredEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [web_country, setWebCountry] = useState("");

  const submitRequest = async (e) => {
    console.log({ web_email });
    const response = await fetch(
      "http://localhost:3001/register/web/development",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ web_email, firstName, lastName, phoneNumber }),
      }
    );
    const resData = await response.json();
    if (resData.status === "success") {
      alert("Message Sent.");
      window.location.reload();
    } else if (resData.status === "fail") {
      alert("Message failed to send.");
    }
  };

  return (
    <div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Payment </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container d-flex justify-content-center align-items-center">
              <a href>
                <FaCcVisa className="m-1 fs-1" />
              </a>
              <a href>
                <FaCcMastercard className="m-1 fs-1" />
              </a>
              <a href>
                <FaCcAmex className="m-1 fs-1" />
              </a>
              <a href>
                <FaCcDiscover className="m-1 fs-1" />
              </a>
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
                value={125}
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
              Pay $125
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

            <form
              onSubmit={submitRequest}
              class="row g-3 needs-validation"
              novalidate
            >
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
                  name="firstName"
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
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
                  name="lastName"
                  required
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
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
                  name="web_email"
                  required
                  onChange={(e) => setRegisteredEmail(e.target.value)}
                  value={web_email}
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
                  name={"phoneNumber"}
                  onPhoneNumberChange={(e) => setPhoneNumber(e.target.value)}
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
                  name="web_country"
                  required
                  onChange={(e) => setWebCountry(e.target.value)}
                  value={web_country}
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
                  value={"Web Development"}
                  name="web_course"
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

export default WebCart;
