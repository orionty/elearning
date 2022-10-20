import React ,{useState}from "react";
import { CardGroup, Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import {GrCertificate} from 'react-icons/gr'


function Courses() {
  const [subEmail, setsubEmail] = useState("");
  

  const submitNewletter = async (e) => {
    e.preventDefault();
    const response = await fetch("https://elearning-server-app.herokuapp.com/newsletter", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        subEmail,
      }),
    });
    const resData = await response.json();
    if (resData.status === "success") {
      alert("Subscribe successfully!");
    } else if (resData.status === "fail") {
      alert("Unable to subscribe!!");
    }
    window.location.reload();
  };


  return (
    <div >
      <section>
        <p className="container text-center fw-bold" style={{ color: "navy" }}>
          Please select a course you want to learn.
        </p>
        <hr />
        <div>
          {/* first cards */}
          <section>
            <CardGroup className="container">
              <Card
                className=" shadow-lg p-0 mb-5 bg-body rounded- me-2"
                style={{ cursor: "pointer" }}
              >
                <Link to="/physics">
                  <Card.Img
                    variant="top"
                    src="img/physics-icon1.png"
                    alt="Physics"
                    style={{ objectFit: "contain", height: 150 }}
                    className="rounded"
                  ></Card.Img>
                </Link>
                <Card.Body className="cardBg">
                  <Card.Title className="fs-6   text-center">
                    <Link
                      to="/physics"
                      className="text-decoration-none "
                      style={{ color: "navy" }}
                    >
                      PHYSICS
                    </Link>
                  </Card.Title>
                  <Card.Text className="headText">
                    Quantum attention functions are the bridges between the
                    mental and the physical.
                    <span className="span">available now</span>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card
                className=" shadow-lg p-0 mb-5 bg-body rounded me-2"
                style={{ cursor: "pointer" }}
              >
                <Link to="/chemistry">
                  <Card.Img
                    variant="top"
                    src="img/chemistry-icon1.png"
                    alt="Chemistry"
                    className="rounded"
                    style={{ objectFit: "contain", height: 150 }}
                  ></Card.Img>
                </Link>
                <Card.Body className="cardBg">
                  <Card.Title
                    className="fs-6  text-center"
                    style={{ color: "navy" }}
                  >
                    <Link
                      to="/chemistry"
                      className="text-decoration-none "
                      style={{ color: "navy" }}
                    >
                      CHEMISTRY
                    </Link>
                  </Card.Title>
                  <Card.Text className="headText">
                    The stars are laboratories in which the evolution of matter
                    proceeds in the direction of large molecules.
                    <span className="span">available now</span>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card
                className="shadow-lg p-0 mb-5 bg-body rounded me-2"
                style={{ cursor: "pointer" }}
              >
                <Link to="/maths">
                  <Card.Img
                    variant="top"
                    src="img/math-icon1.png"
                    alt="Maths"
                    style={{ objectFit: "contain", height: 150 }}
                    className="rounded pt-2"
                  ></Card.Img>
                </Link>
                <Card.Body className="cardBg">
                  <Card.Title
                    className="fs-6  text-center"
                    style={{ color: "navy" }}
                  >
                    <Link
                      to="/maths"
                      className="text-decoration-none "
                      style={{ color: "navy" }}
                    >
                      MATHEMATICS
                    </Link>
                  </Card.Title>
                  <Card.Text className="headText">
                    Mathematics is the most beautiful and most powerful creation
                    of the human spirit.
                    <span className="span">available now</span>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card
                className=" shadow-lg p-0 mb-5 bg-body rounded me-2"
                style={{ cursor: "pointer" }}
              >
                <Link to="/biology">
                  <Card.Img
                    variant="top"
                    src="img/biology-icon.png"
                    alt="Biology"
                    style={{ objectFit: "contain", height: 150 }}
                    className="rounded pt-2"
                  ></Card.Img>
                </Link>
                <Card.Body className="cardBg">
                  <Card.Title
                    className="fs-6  text-center"
                    style={{ color: "navy" }}
                  >
                    <Link
                      to="/biology"
                      className="text-decoration-none "
                      style={{ color: "navy" }}
                    >
                      BIOLOGY
                    </Link>
                  </Card.Title>
                  <Card.Text className="headText">
                    Our world is built on biology and once we begin to
                    understand it, it then becomes a technology.
                    <span className="span">available now</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </section>
          <br />
          {/* second cards*/}
          <section>
            <CardGroup className="container">
              <Card
                className="shadow-lg p-0 mb-5 bg-body rounded me-2"
                style={{ cursor: "pointer" }}
              >
                <Link to="/actuarial_science">
                  <Card.Img
                    variant="top"
                    src="img/actuarial-icon.png"
                    style={{ objectFit: "contain", height: 150 }}
                    alt="Actuarial Science"
                    className="rounded"
                  ></Card.Img>
                </Link>
                <Card.Body className="cardBg">
                  <Card.Title className="fs-6   text-center">
                    <Link
                      to="/actuarial_science"
                      className="text-decoration-none "
                      style={{ color: "navy" }}
                    >
                      ACTUARIAL SCIENCE
                    </Link>
                  </Card.Title>
                  <Card.Text className="headText">
                    <p class="card-text">
                      Life is a series of likelihoods. Thinking in a
                      probabilistic way will serve you well.{" "}
                    </p>

                    <span className="span">available now</span>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card
                className=" shadow-lg p-0 mb-5 bg-body rounded me-2"
                style={{ cursor: "pointer" }}
              >
                <Link to="/statistics">
                  <Card.Img
                    variant="top"
                    src="img/statistics.png"
                    alt="Statistics"
                    className="rounded "
                    style={{ objectFit: "contain", height: 150 }}
                  ></Card.Img>
                </Link>
                <Card.Body className="cardBg">
                  <Card.Title
                    className="fs-6  text-center"
                    style={{ color: "navy" }}
                  >
                    <Link
                      to="/statistics"
                      className="text-decoration-none "
                      style={{ color: "navy" }}
                    >
                      STATISTICS
                    </Link>
                  </Card.Title>
                  <Card.Text className="headText">
                    If your experiment needs statistics, you ought to have done
                    a better experiment.
                    <span className="span">available now</span>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card
                className=" shadow-lg p-0 mb-5 bg-body rounded me-2"
                style={{ cursor: "pointer" }}
              >
                <Link to="#">
                  <Card.Img
                    variant="top"
                    src="img/biochemistry-icon.png"
                    alt="Biochemistry"
                    style={{ objectFit: "contain", height: 150 }}
                    className="rounded pt-2"
                  />
                </Link>
                <Card.Body className="cardBg">
                  <Card.Title
                    className="fs-6  text-center"
                    style={{ color: "navy" }}
                  >
                    <Link
                      to="#"
                      className="text-decoration-none "
                      style={{ color: "navy" }}
                    >
                      BIOCHEMISTRY
                    </Link>
                  </Card.Title>
                  <Card.Text className="headText">
                    Happier thoughts lead to essentially a happier biochemistry.
                    A happier, healthier body.
                    <span className="span-coming-soon">coming soon</span>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card
                className=" shadow-lg p-0 mb-5 bg-body rounded me-2"
                style={{ cursor: "pointer" }}
              >
                <Link to="#">
                  <Card.Img
                    variant="top"
                    src="img/electrical-engineering-icon1.png"
                    style={{ objectFit: "contain", height: 150 }}
                    alt="Electrical-engineering"
                    className="rounded"
                  />
                </Link>
                <Card.Body className="cardBg">
                  <Card.Title
                    className="fs-6  text-center"
                    style={{ color: "navy" }}
                  >
                    <Link
                      to="#"
                      className="text-decoration-none "
                      style={{ color: "navy" }}
                    >
                      ELECTRICAL ENGINEERING
                    </Link>
                  </Card.Title>
                  <Card.Text className="headText">
                    Reading is a mighty engine, beside which steam and
                    electricity sink into insignificance.
                    <span className="span-coming-soon">coming soon</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </section>
          <br />
          {/* third cards */}
          <section>
            <CardGroup className="container">
              <Card
                className=" shadow-lg p-0 mb-5 bg-body rounded me-2"
                style={{ cursor: "pointer" }}
              >
                <Link to="/computer_science">
                  <Card.Img
                    variant="top"
                    src="img/computer-science.-icon1.png"
                    style={{ objectFit: "contain", height: 150 }}
                    alt="Computer-Science"
                    className="rounded pt-2"
                  />
                </Link>
                <Card.Body className="cardBg">
                  <Card.Title className="fs-6   text-center">
                    <Link
                      to="/computer_science"
                      className="text-decoration-none "
                      style={{ color: "navy" }}
                    >
                      COMPUTER SCIENCE
                    </Link>
                  </Card.Title>
                  <Card.Text className="headText">
                    The goal of Computer Science is to build something that will
                    last at least until we've finished building it.
                    <span className="span">available now</span>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card
                className=" shadow-lg p-0 mb-5 bg-body rounded me-2"
                style={{ cursor: "pointer" }}
              >
                <Link to="#">
                  <Card.Img
                    variant="top"
                    src="img/computer-engineering-icon.png"
                    alt="Computer Engineering"
                    style={{ objectFit: "contain", height: 150 }}
                    className="rounded"
                  />
                </Link>
                <Card.Body className="cardBg">
                  <Card.Title
                    className="fs-6  text-center"
                    style={{ color: "navy" }}
                  >
                    <Link
                      to="#"
                      className="text-decoration-none "
                      style={{ color: "navy" }}
                    >
                      COMPUTER ENGINEERING
                    </Link>
                  </Card.Title>
                  <Card.Text className="headText">
                    A good programmer is someone who always looks both ways
                    before crossing a one-way street.
                    <span className="span-coming-soon">coming soon</span>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card
                className=" shadow-lg p-0 mb-5 bg-body rounded me-2"
                style={{ cursor: "pointer" }}
              >
                <Link to="/optometry">
                  <Card.Img
                    variant="top"
                    src="img/Optometry-icon1.png"
                    style={{ objectFit: "contain", height: 150 }}
                    alt="Optometry"
                    className="rounded"
                  />
                </Link>
                <Card.Body className="cardBg">
                  <Card.Title
                    className="fs-6  text-center"
                    style={{ color: "navy" }}
                  >
                    <Link
                      to="/optometry"
                      className="text-decoration-none "
                      style={{ color: "navy" }}
                    >
                      OPTOMETRY
                    </Link>
                  </Card.Title>
                  <Card.Text className="headText">
                    The real voyage of discovery consists not in seeking new
                    landscapes, but in having new eyes.
                    <span className="span">available now</span>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card
                className=" shadow-lg p-0 mb-5 bg-body rounded me-2"
                style={{ cursor: "pointer" }}
              >
                <Link to="#">
                  <Card.Img
                    variant="top"
                    src="img/economics-icon1.png"
                    style={{ objectFit: "contain", height: 150 }}
                    alt="Economics"
                    className="rounded"
                  />
                </Link>
                <Card.Body className="cardBg">
                  <Card.Title
                    className="fs-6  text-center"
                    style={{ color: "navy" }}
                  >
                    <Link
                      to="#"
                      className="text-decoration-none "
                      style={{ color: "navy" }}
                    >
                      ECONOMICS
                    </Link>
                  </Card.Title>
                  <Card.Text className="headText">
                    Economics has never been a science - and it is even less now
                    than a few years ago.
                    <span className="span-coming-soon">coming soon</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </section>
        </div>
      </section>

      <hr />

      {/* Carousel cards */}
      <section>
        <div>
          <h3
            class="container text-center mb-3 mt-3"
            style={{ color: "rgb(2, 2, 105)" }}
          >
            Our popular courses
          </h3>
          <p class="text-center" style={{ opacity: 0.9 }}>
            Here is your favorite course that suits you. Pick the best course
            and get a better outcome.
          </p>
        </div>

        <Carousel>
          <Carousel.Item>
            <div class="container">
              <div className="row-container">
                <div className="column-container shadow p-3 mb-5 bg-body rounded">
                  <Link
                    to="/web_development"
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/img/web-design.jpg`}
                      className="rounded popular-hover"
                      alt="Web Development"
                    />
                    <div className="caption-container">
                      <h4
                        style={{
                          color: "rgb(2, 2, 105)",
                          fontSize: "25px",
                          fontWeight: "bold",
                        }}
                      >
                         $40.65 <s className="fs-6">$84.87</s>
                      </h4>
                      <h4
                        style={{
                          color: "rgb(2, 2, 105)",
                          fontSize: "18px",
                          fontWeight: "bold",
                        }}
                      >
                          Web Development Bootcamp 2022

                      </h4>
                      <h5
                        style={{
                          fontWeight: "normal",
                          opacity: 0.8,
                          fontSize: "12px",
                        }}
                      >
                        Basic to professional web development
                        <br /><GrCertificate className="fs-2 p-1"/> Certificate of completion
                      </h5>
                    </div>
                  </Link>
                </div>
                <div className="column-container shadow p-3 mb-5 bg-body rounded">
                  <Link
                    to="/graphic/designing"
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/img/graphic-design.jpg`}
                      className="rounded popular-hover"
                      alt="Graphic Designing"
                    />
                    <div class="caption-container">
                      <h4
                        style={{
                          color: "rgb(2, 2, 105)",
                          fontSize: "25px",
                          fontWeight: "bold",
                        }}
                      >
                         $33.46 <s className="fs-6">$76.46</s>
                      </h4>
                      <h4
                        style={{
                          color: "rgb(2, 2, 105)",
                          fontSize: "18px",
                          fontWeight: "bold",
                        }}
                      >
                        Graphic Designing Bootcamp 2022
                      </h4>
                      <h5
                        style={{
                          fontWeight: "normal",
                          opacity: 0.8,
                          fontSize: "12px",
                        }}
                      >
                        Basic to professional graphic designing
                        <br /><GrCertificate className="fs-2 p-1"/> Certificate of completion
                      </h5>
                    </div>
                  </Link>
                </div>
                <div class="column-container shadow p-3 mb-5 bg-body rounded">
                  <Link
                    to="/app/development"
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/img/mobile-app-development.jpg`}
                      class="rounded popular-hover"
                      alt="App Development"
                    />
                    <div class="caption-container">
                      <h4
                        style={{
                          color: "rgb(2, 2, 105)",
                          fontSize: "25px",
                          fontWeight: "bold",
                        }}
                      >
                         $44.67 <s className="fs-6">$84.87</s>
                      </h4>
                      <h4
                        style={{
                          color: "rgb(2, 2, 105)",
                          fontSize: "18px",
                          fontWeight: "bold",
                        }}
                      >
                        App Development Bootcamp 2022
                      </h4>
                      <h5
                        style={{
                          fontWeight: "normal",
                          opacity: 0.8,
                          fontSize: "12px",
                        }}
                      >
                        Basic to professional mobile app development
                        <br /><GrCertificate className="fs-2 p-1"/> Certificate of completion
                      </h5>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div class="container">
              <div className="row-container">
                <div className="column-container shadow p-3 mb-5 bg-body rounded">
                  <Link
                    to="/data/science"
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/img/data-science.jpg`}
                      className="rounded popular-hover"
                      alt="Data Science"
                    />
                    <div className="caption-container">
                      <h4
                        style={{
                          color: "rgb(2, 2, 105)",
                          fontSize: "25px",
                          fontWeight: "bold",
                        }}
                      >
                        $35.99 <s className="fs-6">$79.99</s>
                      </h4>
                      <h4
                        style={{
                          color: "rgb(2, 2, 105)",
                          fontSize: "18px",
                          fontWeight: "bold",
                        }}
                      >
                        Data Science Bootcamp 2022
                      </h4>
                      <h5
                        style={{
                          fontWeight: "normal",
                          opacity: 0.8,
                          fontSize: "12px",
                        }}
                      >
                        Basic to professional data science
                        <br /><GrCertificate className="fs-2 p-1"/> Certificate of completion
                      </h5>
                    </div>
                  </Link>
                </div>
                <div className="column-container shadow p-3 mb-5 bg-body rounded">
                  <Link
                    to="/artificial/intelligence"
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/img/Artificial-Intelligence.jpg`}
                      className="rounded popular-hover"
                      alt="Artificial Intelligence"
                    />
                    <div class="caption-container">
                      <h4
                        style={{
                          color: "rgb(2, 2, 105)",
                          fontSize: "25px",
                          fontWeight: "bold",
                        }}
                      >
                         $36.99 <s className="fs-6">$83.99</s>
                      </h4>
                      <h4
                        style={{
                          color: "rgb(2, 2, 105)",
                          fontSize: "18px",
                          fontWeight: "bold",
                        }}
                      >
                         Artificial Intelligence Bootcamp 2022
                      </h4>
                      <h5
                        style={{
                          fontWeight: "normal",
                          opacity: 0.8,
                          fontSize: "12px",
                        }}
                      >
                        Basic to professional artificial intelligence
                        <br /><GrCertificate className="fs-2 p-1"/> Certificate of completion
                      </h5>
                    </div>
                  </Link>
                </div>
                <div class="column-container shadow p-3 mb-5 bg-body rounded">
                  <Link
                    to="/machine/learning"
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/img/machine-learning.jpg`}
                      class="rounded popular-hover"
                      alt="Machine Learning"
                    />
                    <div class="caption-container">
                      <h4
                        style={{
                          color: "rgb(2, 2, 105)",
                          fontSize: "25px",
                          fontWeight: "bold",
                        }}
                      >
                        $36.99 <s className="fs-6">$83.99</s>
                      </h4>
                      <h4
                        style={{
                          color: "rgb(2, 2, 105)",
                          fontSize: "18px",
                          fontWeight: "bold",
                        }}
                      >
                        Machine Learning Bootcamp 2022
                      </h4>
                      <h5
                        style={{
                          fontWeight: "normal",
                          opacity: 0.8,
                          fontSize: "12px",
                        }}
                      >
                        Basic to professional machine learning
                        <br /><GrCertificate className="fs-2 p-1"/> Certificate of completion
                      </h5>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div class="container">
              <div className="row-container">
                <div className="column-container shadow p-3 mb-5 bg-body rounded">
                  <Link to="/python" className="text-decoration-none text-dark">
                    <img
                      src={`${process.env.PUBLIC_URL}/img/python.png`}
                      className="rounded popular-hover"
                      alt="Python"
                    />
                    <div className="caption-container">
                      <h4
                        style={{
                          color: "rgb(2, 2, 105)",
                          fontSize: "25px",
                          fontWeight: "bold",
                        }}
                      >
                        $45.99 <s className="fs-6">$85.99</s>
                      </h4>
                      <h4
                        style={{
                          color: "rgb(2, 2, 105)",
                          fontSize: "18px",
                          fontWeight: "bold",
                        }}
                      >
                        Python Bootcamp 2022
                      </h4>
                      <h5
                        style={{
                          fontWeight: "normal",
                          opacity: 0.8,
                          fontSize: "12px",
                        }}
                      >
                        Basic to professional python
                        <br /><GrCertificate className="fs-2 p-1"/> Certificate of completion
                      </h5>
                    </div>
                  </Link>
                </div>
                <div className="column-container shadow p-3 mb-5 bg-body rounded">
                  <Link to="/c++" className="text-decoration-none text-dark">
                    <img
                      src={`${process.env.PUBLIC_URL}/img/c++.png`}
                      className="rounded popular-hover"
                      alt="c++"
                    />
                    <div class="caption-container">
                      <h4
                        style={{
                          color: "rgb(2, 2, 105)",
                          fontSize: "25px",
                          fontWeight: "bold",
                        }}
                      >
                       $45.99 <s className="fs-6">$85.99</s>
                      </h4>
                      <h4
                        style={{
                          color: "rgb(2, 2, 105)",
                          fontSize: "18px",
                          fontWeight: "bold",
                        }}
                      >
                        C++ Programming Bootcamp 2022
                      </h4>
                      <h5
                        style={{
                          fontWeight: "normal",
                          opacity: 0.8,
                          fontSize: "12px",
                        }}
                      >
                        Basic to professional c++
                        <br /><GrCertificate className="fs-2 p-1"/> Certificate of completion
                      </h5>
                    </div>
                  </Link>
                </div>
                <div class="column-container shadow p-3 mb-5 bg-body rounded">
                  <Link to="/java" className="text-decoration-none text-dark">
                    <img
                      src={`${process.env.PUBLIC_URL}/img/java.jpg`}
                      class="rounded popular-hover"
                      alt="java"
                    />
                    <div class="caption-container">
                      <h4
                        style={{
                          color: "rgb(2, 2, 105)",
                          fontSize: "25px",
                          fontWeight: "bold",
                        }}
                      >
                        $44.99 <s className="fs-6">$83.99</s>
                      </h4>
                      <h4
                        style={{
                          color: "rgb(2, 2, 105)",
                          fontSize: "18px",
                          fontWeight: "bold",
                        }}
                      >
                         Java Programming Bootcamp 2022
                      </h4>
                      <h5
                        style={{
                          fontWeight: "normal",
                          opacity: 0.8,
                          fontSize: "12px",
                        }}
                      >
                        Basic to professional java
                        <br /><GrCertificate className="fs-2 p-1"/> Certificate of completion
                      </h5>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <br />
      {/* Newsletter */}
      <div class="custom-footer ">
        <section class="subscription bg-white mt-4  justify-content-center">
          <div class="container">
            <div class="row p-0 mb-5 bg-body rounded">
              <div class="col-lg-12">
                <div class="subscription-wrapper shadow-lg  ">
                  <div class="d-flex subscription-content justify-content-between align-items-center flex-column flex-md-row text-center text-md-left">
                    <h3 class="flex-fill subText">
                      Subscribe <br /> to our newsletter
                    </h3>
                    <form onSubmit={submitNewletter} class="row flex-fill">
                      <div class="col-lg-7 my-md-2 my-2">
                        {" "}
                        <input
                          type="email"
                          class="form-control px-4 border-0 w-100 text-center text-md-left"
                          id="email"
                          placeholder="Your Email"
                          onChange={(e) => setsubEmail(e.target.value)}
                          name="subEmail"
                        />{" "}
                      </div>
                      <div class="col-lg-5 my-md-2 my-2">
                        {" "}
                        <button
                          type="submit"
                          class="btn btnBgP btn-lg border-0 w-100 btnBgS"
                        >
                          Subscribe Now
                        </button>{" "}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <br />
      <br />
    </div>
  );
}

export default Courses;
