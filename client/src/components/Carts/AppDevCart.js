import React, { useState } from "react";

import { Button } from "react-bootstrap";
import Footer from "../Footer";
import NavBar from "../Navbar";

function AppDevCart() {
  const [AppFirstname, setAppFirstname] = useState("");
  const [AppLastname, setAppLastname] = useState("");
  const [app_email, setAppEmail] = useState("");
  const [AppPhonenumber, setAppPhonenumber] = useState("");
  const [app_country, setAppCountry] = useState("");
  const [app_course, setAppCourse] = useState("");

  const submitRequest = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://elearning-server-app.herokuapp.com/register/app/development",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          app_email,
          AppFirstname,
          AppLastname,
          AppPhonenumber,
          app_country,
          app_course,
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
                  name="AppFirstname"
                  required
                  onChange={(e) => setAppFirstname(e.target.value)}
                  value={AppFirstname}
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
                  name="AppLastname"
                  required
                  onChange={(e) => setAppLastname(e.target.value)}
                  value={AppLastname}
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
                  name="app_email"
                  required
                  onChange={(e) => setAppEmail(e.target.value)}
                  value={app_email}
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
                  name="AppPhonenumber"
                  required
                  onChange={(e) => setAppPhonenumber(e.target.value)}
                  value={AppPhonenumber}
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
                  name="app_country"
                  required
                  onChange={(e) => setAppCountry(e.target.value)}
                  value={app_country}
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
                  placeholder="enter app development..."
                  name="app_course"
                  onChange={(e) => setAppCourse(e.target.value)}
                  value={app_course}
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
                <a href="https://buy.stripe.com/4gw8zRf1R45q2Iw3ce">
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

export default AppDevCart;
