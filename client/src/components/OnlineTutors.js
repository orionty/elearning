import React from "react";
import Footer from "./Footer";
import NavBar from "./Navbar";
import axios from "axios";


class OnlineTutors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      user_email: "",
      phoneNumber: "",
      linkedin: "",
    };
  }

  onFirstNameChange(event) {
    this.setState({ firstname: event.target.value });
  }
  onLastNameChange(event) {
    this.setState({ lastname: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ user_email: event.target.value });
  }

  onPhoneNumberChange(event) {
    this.setState({ phoneNumber: event.target.value });
  }

  onLinkedinChange(event) {
    this.setState({ linkedin: event.target.value });
  }

  submitEmail(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3001/online/tutors",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert(" Sent Successfully.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    this.setState({
      firstname: "",
      lastname: "",
      user_email: "",
      phoneNumber: "",
      linkedin: "",
    });
  }
  render() {
    return (
     
        <div>
          <NavBar />
          <br />
          <section>
            <div class="container contact-container">
              <section class=" container">
                <p
                  class="text-center w-responsive mx-auto mb-5 pt-5"
                  style={{ color: "navy" }}
                >
                  Please fill all the fields below.
                </p>

                <form
                  onSubmit={this.submitEmail.bind(this)}
                  method="POST"
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
                      value={this.state.firstName}
                      onChange={this.onFirstNameChange.bind(this)}
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
                      id="validationTooltip02"
                      placeholder="last name"
                      name="lastName"
                      value={this.state.lastName}
                      onChange={this.onLastNameChange.bind(this)}
                      required
                    />
                    <div class="valid-tooltip">Looks good!</div>
                  </div>

                  <div class="col-md-4 position-relative">
                    <label
                      for="validationTooltip03"
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
                      name="user_email"
                      value={this.state.user_email}
                      onChange={this.onEmailChange.bind(this)}
                      required
                    />
                    <div class="invalid-tooltip">
                      please provide correct email
                    </div>
                  </div>

                  <div class="col-md-4 position-relative">
                    <label
                      for="validationTooltip04"
                      class="form-label"
                      style={{ color: "navy" }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationTooltip04"
                      placeholder="+1 409-444-4444"
                      name="phoneNumber"
                      value={this.state.phoneNumber}
                      onChange={this.onPhoneNumberChange.bind(this)}
                      required
                    />
                    <div class="invalid-tooltip">
                      please provide correct phone number
                    </div>
                  </div>

                  <div class="col-md-4 position-relative mb-5">
                    <label
                      for="validationTooltip06"
                      class="form-label"
                      style={{ color: "navy" }}
                    >
                      linkedin
                    </label>
                    <input
                      type="text"
                      name="linkedin"
                      class="form-control"
                      id="validationTooltip06"
                      placeholder="https://www.linkedin.com/in/your-profile-name"
                      required
                      value={this.state.linkedin}
                      onChange={this.onLinkedinChange.bind(this)}
                    />
                    <div class="invalid-tooltip">
                      please provide correct linkedin account
                    </div>
                  </div>
                  <br />

                  <div class="col-12 mb-5">
                    <button
                      class="btn "
                      type="submit"
                      style={{ backgroundColor: "navy", color: "white" }}
                    >
                      Submit form
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </section>
          <br />
          <br />
          <Footer />
        </div>
    );
  }
}

export default OnlineTutors;
