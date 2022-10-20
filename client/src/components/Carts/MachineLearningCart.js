import React, { useState } from "react";

import { Button } from "react-bootstrap";
import Footer from "../Footer";
import NavBar from "../Navbar";

function MachineLearningCart() {
  const [MLFirstName, setMLFirstName] = useState("");
  const [MLLastName, setMLLastName] = useState("");
  const [ML_email, setMLEmail] = useState("");
  const [MLPhoneNumber, setMLPhoneNumber] = useState("");
  const [ML_country, setMLCountry] = useState("");
  const [ML_course, setMLCourse] = useState("");

  const submitRequest = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://elearning-server-app.herokuapp.com/register/machine/learning",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          ML_email,
          MLFirstName,
          MLLastName,
          MLPhoneNumber,
          ML_country,
          ML_course,
        }),
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
    <div>
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
                  name="MLFirstName"
                  required
                  onChange={(e) => setMLFirstName(e.target.value)}
                  value={MLFirstName}
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
                  name="MLLastName"
                  required
                  onChange={(e) => setMLLastName(e.target.value)}
                  value={MLLastName}
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
                  name="ML_email"
                  required
                  onChange={(e) => setMLEmail(e.target.value)}
                  value={ML_email}
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
                  name="MLPhoneNumber"
                  required
                  onChange={(e) => setMLPhoneNumber(e.target.value)}
                  value={MLPhoneNumber}
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
                  name="ML_country"
                  required
                  onChange={(e) => setMLCountry(e.target.value)}
                  value={ML_country}
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
                  placeholder="enter machine learning..."
                  name="ML_course"
                  required
                  onChange={(e) => setMLCourse(e.target.value)}
                  value={ML_course}
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
                <a href="https://buy.stripe.com/cN2g2jbPF0Tebf228d">
                  <Button>Pay Now</Button>
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

export default MachineLearningCart;
