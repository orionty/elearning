import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Footer from "../Footer";
import NavBar from "../Navbar";

function CplusLanguageCart() {
  const [CpFirstname, setCpFirstName] = useState("");
  const [CpLastname, setCpLastName] = useState("");
  const [cp_email, setCpEmail] = useState("");
  const [CpPhonenumber, setCpPhoneNumber] = useState("");
  const [cp_country, setCpCountry] = useState("");
  const [cp_course, setCpCourse] = useState("");

  const submitRequest = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://elearning-server-app.herokuapp.com/register/cplus",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          cp_email,
          CpFirstname,
          CpLastname,
          CpPhonenumber,
          cp_country,
          cp_course,
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
                  name="CpFirstname}"
                  required
                  onChange={(e) => setCpFirstName(e.target.value)}
                  value={CpFirstname}
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
                  name="CpLastName"
                  required
                  onChange={(e) => setCpLastName(e.target.value)}
                  value={CpLastname}
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
                  name="cp_email"
                  required
                  onChange={(e) => setCpEmail(e.target.value)}
                  value={cp_email}
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
                  name="CpPhonenumber"
                  required
                  onChange={(e) => setCpPhoneNumber(e.target.value)}
                  value={CpPhonenumber}
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
                  name="cp_country"
                  required
                  onChange={(e) => setCpCountry(e.target.value)}
                  value={cp_country}
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
                  placeholder="enter C++ ..."
                  name="cp_course"
                  onChange={(e) => setCpCourse(e.target.value)}
                  value={cp_course}
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
                <a href="https://buy.stripe.com/aEUaHZ3j931maaY5kr">
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

export default CplusLanguageCart;
