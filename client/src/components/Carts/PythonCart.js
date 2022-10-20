import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Footer from "../Footer";
import NavBar from "../Navbar";

function PythonCart() {
  const [PythonFirstName, setPythonFirstName] = useState("");
  const [PythonLastName, setPythonLastName] = useState("");
  const [Python_email, setPythonEmail] = useState("");
  const [PythonPhoneNumber, setPythonPhoneNumber] = useState("");
  const [Python_country, setPythonCountry] = useState("");
  const [Python_course, setPythonCourse] = useState("");

  const submitRequest = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/register/python", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        Python_email,
        PythonFirstName,
        PythonLastName,
        PythonPhoneNumber,
        Python_country,
        Python_course,
      }),
    });
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
                  name="PythonFirstName"
                  required
                  onChange={(e) => setPythonFirstName(e.target.value)}
                  value={PythonFirstName}
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
                  name="PythonLastName"
                  required
                  onChange={(e) => setPythonLastName(e.target.value)}
                  value={PythonLastName}
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
                  name="Python_email"
                  required
                  onChange={(e) => setPythonEmail(e.target.value)}
                  value={Python_email}
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
                  name="PythonPhoneNumber"
                  required
                  onChange={(e) => setPythonPhoneNumber(e.target.value)}
                  value={PythonPhoneNumber}
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
                  name="Python_country"
                  required
                  onChange={(e) => setPythonCountry(e.target.value)}
                  value={Python_country}
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
                  placeholder="enter python..."
                  name="Python_course"
                  required
                  onChange={(e) => setPythonCourse(e.target.value)}
                  value={Python_course}
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
                <a href="https://buy.stripe.com/cN28zR4ndeK44QEfZ2">
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

export default PythonCart;
