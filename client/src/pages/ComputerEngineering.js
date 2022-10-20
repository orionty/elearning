import React from "react";
import Footer from "../components/Footer";
import PagesNavBar from "../components/PagesNavBar";
import { Link } from "react-router-dom";
import pdf from "../pdf/PhysicsAndMeasurement.pdf";
import MotionInOneDimension from "../pdf/MotionInOneDimension.pdf";
import Vectors from "../pdf/Vectors.pdf";
import MotionInTwoDimensions from "../pdf/MotionInTwoDimensions.pdf";
import LawOfMotion from "../pdf/LawsOfMotion.pdf";
import ApplicationOfNewtonLaws from "../pdf/Application'sOfNewtonLaws.pdf";
import WorkAndKineticEnergy from "../pdf/WorkAndKineticEnergy.pdf";
import PotentialEnergyAndConservationOfEnergy from "../pdf/PotentialEnergyAndConservationOfEnergy.pdf";
import LinearMomentumAndCollisions from "../pdf/LinearMomentumAndCollisions.pdf";
import RotationOfARigidObject from "../pdf/RotationOfARigidObject.pdf";
import ScrollIntoView from "../components/ScrollIntoView";

class ComputerEngineering extends React.Component {
  openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };
  closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  render() {
    return (
      <ScrollIntoView>
        <div>
          <section>
            <div id="mySidenav" class="sidenav">
              <a
                href
                class="closebtn"
                style={{ cursor: "pointer" }}
                onClick={this.closeNav}
              >
                &times;
              </a>
              <Link to="/physics" style={{ fontWweight: "bold" }}>
                PART 1 MECHANICS
              </Link>
              <a href={pdf} target="_blank" rel="noopener noreferrer">
                Physics and Measurement
              </a>
              <a
                href={MotionInOneDimension}
                target="_blank"
                rel="noopener noreferrer"
              >
                Motion in One Dimension
              </a>
              <a href={Vectors} target="_blank" rel="noopener noreferrer">
                Vectors
              </a>
              <a
                href={MotionInTwoDimensions}
                target="_blank"
                rel="noopener noreferrer"
              >
                Motion in Two Dimensions
              </a>
              <a href={LawOfMotion} target="_blank" rel="noopener noreferrer">
                The Law of Motion
              </a>
              <a
                href={ApplicationOfNewtonLaws}
                target="_blank"
                rel="noopener noreferrer"
              >
                Circular Motion and Other Application of Newton's Laws
              </a>
              <a
                href={WorkAndKineticEnergy}
                target="_blank"
                rel="noopener noreferrer"
              >
                Work and Kinetic Energy
              </a>
              <a
                href={PotentialEnergyAndConservationOfEnergy}
                target="_blank"
                rel="noopener noreferrer"
              >
                Potential Energy and Conservation of Energy
              </a>
              <a
                href={LinearMomentumAndCollisions}
                target="_blank"
                rel="noopener noreferrer"
              >
                Linear Momentum and Collisions
              </a>
              <a
                href={RotationOfARigidObject}
                target="_blank"
                rel="noopener noreferrer"
              >
                Rotation of a Rigid Object About a Fixed Axis
              </a>

              <Link to="/">Angular Momentum</Link>
              <Link to="/">Static Equilibrium and Elasticity</Link>
              <Link to="/">Universal Gravitation</Link>
              <Link to="/">Fluid Mechanics</Link>
              <Link to="/" style={{ fontWweight: "bold" }}>
                PART 2 OSCILLATIONS AND MECHANICAL WAVES
              </Link>
              <Link to="/">Oscillatory Motion</Link>
              <Link to="/">Wave Motion</Link>
              <Link to="/">Superposition and Standing Waves</Link>
              <Link to="/">Sound Waves</Link>
              <Link to="/physics" style={{ fontWweight: "bold" }}>
                PART 3 THERMODYNAMICS
              </Link>
              <Link to="/">Temperature</Link>
              <Link to="/">The First Law of Thermodynamics</Link>
              <Link to="/">The Kinetic Theory of Gases</Link>
              <Link to="/">
                Heat Engines,Entropy and The Second Law of THERMODYNAMICS
              </Link>
              <Link to="/physics" style={{ fontWweight: "bold" }}>
                PART 4 ELECTRICITY AND MAGNETISM
              </Link>
              <Link to="/">Electric Fields</Link>
              <Link to="/">Gauss's Law</Link>
              <Link to="/">Electric Potential</Link>
              <Link to="/">Capacitance and Dielectrics</Link>
              <Link to="/">Current and Resistance</Link>
              <Link to="/">Direct Current Circuits</Link>
              <Link to="/">Magnetic Fields</Link>
              <Link to="/">Sources of the Magnetic Field</Link>
              <Link to="/">Faraday's Law</Link>
              <Link to="/">Alternating Current Circuits</Link>
              <Link to="/">Electromagnetic Waves</Link>
              <Link to="/" style={{ fontWweight: "bold" }}>
                PART 5 LIGHT AND OPTICS
              </Link>
              <Link to="/physics">
                The Nature of Light and the Laws of Geometric Optics
              </Link>
              <Link to="/">Image Formation</Link>
              <Link to="/">Interference of Light Waves</Link>
              <Link to="/">Diffraction Patterns and Polarization</Link>
              <Link to="/physics" style={{ fontWweight: "bold" }}>
                PART 6 MODERN PHYSICS
              </Link>
              <Link to="/">Relativity</Link>
            </div>
          </section>
          {/* top navbar */}
          <nav class="navbar navbar-expand-lg navbar-dark  navBarTop ">
            <div class="container-fluid opacity-75">
              <span
                style={{ fontSize: "20px", cursor: "pointer", color: "white" }}
                onClick={this.openNav}
              >
                &#9776; Topics
              </span>
            </div>
          </nav>

          <PagesNavBar />

          <section>
            <section class="container-fluid">
              <hr />
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  What is Computer Engineering
                </h5>
                <p>
                  A subfield of electrical engineering called computer
                  engineering combines a number of computer science and
                  electronic engineering disciplines needed to create computer
                  hardware and software.
                </p>
              </div>
            </section>

            <section class="container-fluid">
              {/* Development of computer science  */}
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  Getting into Computer Engineering
                </h5>
                <p>
                  A computer engineer typically starts their career by obtaining
                  a bachelor's degree in the field. Electrical engineering and
                  computer science courses, both necessary to become a computer
                  engineer, are combined into a degree in computer engineering.
                  A degree in electrical engineering or computer science is,
                  however, acceptable to some employers. To be a capable
                  computer engineer, you must have knowledge in both fields.
                  Some engineering students take part in internship programs
                  while pursuing their degrees so that they will graduate with
                  work experience. Others, however, might opt to pursue an
                  associate's degree in engineering or computer science. A
                  two-year associate's degree enables you to start working
                  sooner. As a result, you can continue to work as a technician
                  or assistant while pursuing your bachelor's degree. As you
                  work toward your dream of becoming a computer engineer, you
                  acquire practical experience and earn money. Coursework in
                  math, science, and computer science is typically included in
                  computer engineering programs. Considering that computer
                  engineering includes both hardware and software, the
                  coursework you take may also cover software, circuit boards,
                  computer programming, or hardware, depending on the specialty
                  you choose. Additionally, strong communication abilities,
                  analytical abilities, critical thinking, and problem-solving
                  abilities are essential. Being a computer engineer requires
                  you to constantly be developing, evaluating, and collaborating
                  with others.
                </p>
              </div>
            </section>

            <section class="container-fluid">
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  How to Get Ready for Computer Engineering
                </h5>
                <ol>
                  <li style={{ fontWeight: "bold" }}>
                    What Does Computer Engineering Mean to You?
                  </li>
                  <p>
                    Consider the following before deciding to continue your
                    education at a university: Are you doing it to earn a good
                    living? due to a childhood desire to create your very own
                    video game? Or awe at the beauty of bringing artificial
                    intelligence to life? Whatever computer Engineering means to
                    you, it's important to hold onto it tightly because it will
                    give you the willpower you need when times are tough (when,
                    not if). Because computer Engineering is a broad field, identify
                    your area of expertise and immerse yourself in it, whether
                    it be software engineering, computer security, or
                    algorithms. You'll see the big picture if you base your
                    studies on a primary interest, which will undoubtedly
                    increase your enthusiasm. Invest in books related to your
                    interest, watch YouTube channels, read news about it, etc.
                    They need not be technical, but they should give you a
                    better perspective and general understanding of the
                    discipline.
                  </p>
                  <li style={{ fontWeight: "bold" }}>
                    Develop Your Craft and Your Skill Set
                  </li>
                  <p>
                    Evidently, a computer engineer's substance comes from his
                    or her technical expertise. Being a high performer is
                    challenging for you because university courses move quickly
                    and some students may find it difficult to catch up.
                  </p>
                  <li style={{ fontWeight: "bold" }}>Become Resourceful</li>
                  <p>
                    Check out the less expensive e-book versions of popular
                    university textbooks if you're looking for even more extra
                    resources before you enroll in a real university. There are
                    a ton of resources and information available on the
                    Internet. Utilize them to your advantage! Programming
                    language fundamentals, such as operators, functions, and
                    libraries, are taught in online tutorials and manuals and
                    can be freely applied to your code and problem sets. You'll
                    also be expected to look these fundamentals up for reference
                    in college.
                  </p>
                  <li style={{ fontWeight: "bold" }}>Get to Know GitHub</li>
                  <p>
                    A platform for hosting open-source projects is called
                    GitHub. It is a method for developers to collaborate online
                    on a single project. Both in the workplace and in higher
                    education, GitHub is widely used. The ability to work on the
                    same code is a requirement for developers. It's important to
                    at least become familiar with how to navigate the GitHub
                    website, as some universities even use it to conduct their
                    courses.
                  </p>
                  <li style={{ fontWeight: "bold" }}>
                    Try Out Various Preparation Methods
                  </li>
                  <p>
                    Push yourself past your comfort zone. Learn what works and
                    what doesn't for you. Try out new and specialized methods of
                    preparation, such as designing websites for nonprofits as a
                    volunteer or producing YouTube videos to explain concepts.
                    Experimenting outside of your comfort zone allows you to
                    find opportunities that will help you achieve greater
                    heights. You will gain self-assurance so that when you
                    encounter new difficulties in college (such as a specific
                    programming error), you understand that it will take some
                    time for you to resolve them and continue to be motivated.
                  </p>
                  <li style={{ fontWeight: "bold" }}>
                    It's a lifestyle, not a competition.
                  </li>
                  <p>
                    The goal isn't to beat out everyone else to get first class
                    honors; take a moment to unwind. You find meaning in
                    computer Engineering through the learning and degree-acquiring
                    processes; any accomplishments are a bonus. It's about the
                    relationships you build, the obstacles you overcome, and
                    your personal development. That is what inspires you to
                    pursue a career in computer Engineering.
                  </p>
                </ol>
              </div>
            </section>
          </section>
          <br />
          <br />
          <Footer />
        </div>
      </ScrollIntoView>
    );
  }
}

export default ComputerEngineering;
