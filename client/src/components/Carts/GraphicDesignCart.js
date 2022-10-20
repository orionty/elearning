import React, { useState} from "react";

import { Button } from "react-bootstrap";
import Footer from "../Footer";
import NavBar from "../Navbar";

function GraphicDesignCart() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [design_email, setDesignEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [design_country, setDesignCountry] = useState("");
  const [design_course, setDesignCourse] = useState("");

  const submitRequest = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://elearning-server-app.herokuapp.com/register/graphic/designing",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          design_email,
          firstname,
          lastname,
          phonenumber,
          design_country,
          design_course,
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
                  name="firstname"
                  required
                  onChange={(e) => setFirstname(e.target.value)}
                  value={firstname}
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
                  name="lastname"
                  required
                  onChange={(e) => setLastname(e.target.value)}
                  value={lastname}
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
                  name="design_email"
                  required
                  onChange={(e) => setDesignEmail(e.target.value)}
                  value={design_email}
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
                  name="phonenumber"
                  required
                  onChange={(e) => setPhonenumber(e.target.value)}
                  value={phonenumber}
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
                  name="design_country"
                  required
                  onChange={(e) => setDesignCountry(e.target.value)}
                  value={design_country}
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
                  placeholder="enter graphic designing..."
                  name="design_course"
                  onChange={(e) => setDesignCourse(e.target.value)}
                  value={design_course}
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
                <a href="https://buy.stripe.com/9AQ6rJf1R9pK82QeUV">
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

export default GraphicDesignCart;
