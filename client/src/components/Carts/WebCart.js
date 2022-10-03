import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Button, Modal } from "react-bootstrap";
import Footer from "../Footer";
import NavBar from "../Navbar";
import CheckoutForm from "../stripe/CheckoutForm";
const stripePromise = loadStripe("pk_test_51LoFDZEfLeh0BZ6edBz9cndsEeCX2jgJoxCtcACXPynH2k5Zhegvb1ejLyaqRcGhCPOVcREgZ8YXMg8PlzoK0J5G00mYMlsWo6");

function WebCart() {
  const [lgShow, setLgShow] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
 
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:3001/web-development-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "Web Development" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [web_email, setRegisteredEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [web_country, setWebCountry] = useState("");
  const [web_course, setWebCourse] = useState("");



  const submitRequest = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:3001/register/web/development",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ web_email, firstName, lastName, phoneNumber,web_country,web_course }),
      }
    );
    const resData = await response.json();
    if (resData.status === "success") {
      alert("Your form Sent Sucessfully.");
    } else if (resData.status === "fail") {
      alert("Form failed to send.");
    }
    window.location.reload();
  };

  return (
    <div >
        
     <>
     <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg" >
           Payment Details/Web Development
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
         <CheckoutForm />
        </Elements>
      )}
        </Modal.Body>
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
                <input
                  type="text"
                  class="form-control"
                  id="validationTooltip07"
                  placeholder="+1 409-444-4444"
                  name="phoneNumber"
                  required
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
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
                  type="text"
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
                  placeholder=" enter web development..."
                  name="web_course"
                  required
                  onChange={(e) => setWebCourse(e.target.value)}
                  value={web_course}
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
                <Button onClick={() => setLgShow(true)}>Pay Now</Button>
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
