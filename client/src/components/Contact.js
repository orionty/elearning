import React from "react";
import Footer from "./Footer";
import NavBar from "./Navbar";
import axios from "axios";
import { Card } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onSubjectChange(event) {
    this.setState({ subject: event.target.value });
  }

  onMsgChange(event) {
    this.setState({ message: event.target.value });
  }

  submitEmail(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3001/send/mail",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    this.setState({ name: "", email: "", subject: "", message: "" });
  }

  render() {
    return (
      // <ScrollIntoView>
      // </ScrollIntoView>
        <div>
          <NavBar />
          <div>
            <div>
              <Card>
                <Card.Img
                  src="img/Contact-us.png"
                  style={{ objectFit: "contain", height: 280 }}
                  alt="Conatct Us"
                />
                <Card.ImgOverlay className="contact-overlay"></Card.ImgOverlay>
              </Card>
            </div>

            {/* Contact Layout */}
            <br />
            <br />
            <br />

            <div className="container ">
              <p
                className="container text-center  shadow-lg p-3 mb-5 bg-body rounded"
                style={{ color: "navy" }}
              >
                We appreciate you visiting our website. Please use the feedback
                form below if you have any comments about any page on
                www.elearning.com.
              </p>
            </div>

            <div class="container contact-container">
              <section class=" container">
                <p
                  class="container text-center w-responsive mx-auto mb-5 pt-5 borderBtn"
                  style={{ color: "navy" }}
                >
                  We are grateful that you came to our website. Please use this
                  form to provide feedback regarding your visit, the site's
                  content, or to report any broken links. Your suggestions and
                  comments are appreciated.
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
                      Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationTooltip01"
                      placeholder="name"
                      value={this.state.name}
                      name="name"
                      required
                      onChange={this.onNameChange.bind(this)}
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
                      name="email"
                      required
                      value={this.state.contact_email}
                      onChange={this.onEmailChange.bind(this)}
                    />
                    <div class="invalid-tooltip">
                      please provide correct email
                    </div>
                  </div>

                  <div class="col-md-4 position-relative">
                    <label
                      for="validationTooltip02"
                      class="form-label"
                      style={{ color: "navy" }}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationTooltip02"
                      placeholder="subject"
                      name="subject"
                      required
                      value={this.state.subject}
                      onChange={this.onSubjectChange.bind(this)}
                    />
                    <div class="valid-tooltip">Looks good!</div>
                  </div>

                  <div class="col-md-6 position-relative">
                    <label
                      for="validationTooltip04"
                      class="form-label"
                      style={{ color: "navy" }}
                    >
                      Message
                    </label>
                    <textarea
                      class="form-control"
                      id="validationTooltip04"
                      name="message"
                      required
                      value={this.state.message}
                      onChange={this.onMsgChange.bind(this)}
                    ></textarea>
                    <div class="invalid-tooltip">Please fill this field</div>
                  </div>

                  <div class="col-12 mb-5">
                    <input
                      type="submit"
                      name=""
                      value="Submit"
                      className="btn "
                      style={{ backgroundColor: "navy", color: "white" }}
                    />
                  </div>
                </form>
              </section>
            </div>

            <div className=" mt-5">
              <Card>
                <Card.Img
                  src="img/need-help.jpg"
                  style={{ objectFit: "cover", height: 270 }}
                  alt=" Message us now on whatsapp +233 553311567"
                />
                <Card.ImgOverlay className="text-overlay"></Card.ImgOverlay>
                <Card.ImgOverlay className="text-light d-flex justify-content-center align-items-center">
                  <a
                    href="https://wa.me/233553311567"
                    className="text-decoration-none text-light"
                    target={"_blank"}
                  >
                    <p
                      className="p-3 rounded-pill fw-bold shadow-lg  mb-5 "
                      style={{ backgroundColor: "navy", cursor: "pointer" }}
                    >
                      Message us now on whatsapp <FaWhatsapp />
                    </p>
                  </a>
                </Card.ImgOverlay>
              </Card>
            </div>

            <br />
            <br />
            <br />
            <br />
          </div>
          <Footer />
        </div>
    );
  }
}

export default Contact;
