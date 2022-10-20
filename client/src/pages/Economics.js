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

class Economics extends React.Component {
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
            {/* short words */}
            <section class="container-fluid">
              <hr />
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  What is Economics
                </h5>
                <p>
                  The social science of economics focuses on the creation,
                  exchange, and consumption of goods and services. Economics is
                  the study of how economies function and the actions and
                  interactions of economic agents.
                </p>
              </div>
            </section>

            <section class="container-fluid">
              {/* How to study  */}
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  How to study for Economics
                </h5>
                <p>
                  The production, distribution, and consumption of scarce goods
                  and services are the main subjects of economics' analysis and
                  description. Because it makes an effort to explain how people
                  behave as individuals, groups, and organizations, economics is
                  regarded as a social science. However, economics is heavily
                  grounded in math and statistics, unlike many social sciences.
                  In fact, most college students must pass a number of advanced
                  math and statistics courses before they can declare an
                  economics major. Additionally, students find economics to be
                  one of the more difficult subjects, particularly those in
                  their first and second years of college who did not take
                  economics in high school. If you can study economics in high
                  school, take advantage of the opportunity. You'll be better
                  prepared for college's more difficult economics courses. There
                  are four levels of academic performance that students must
                  exhibit in order to succeed in the study of economics. These
                  consist of:
                </p>
              </div>
            </section>

            <section class="container-fluid">
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>Knowledge</h5>
                <p>
                  Knowledge represents the first academic performance level in
                  the study of economics. Learning and retaining specific
                  information, such as facts, definitions, and explanations,
                  constitutes gaining knowledge. The knowledge-based questions
                  that make up the majority of high school economics exams
                  require little to no analysis. Nevertheless, knowledge is the
                  cornerstone of learning and is necessary to advance to other
                  levels of academic performance.
                </p>
              </div>
            </section>

            <section class="container-fluid">
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  Understanding
                </h5>
                <p>
                  Comprehension represents the second level of academic
                  achievement in the study of economics. While knowledge
                  concentrates on learning information, comprehension
                  concentrates on understanding the content's meaning. The three
                  main ways to show understanding in economics are (a)
                  converting information from one form to another (for example,
                  from words to numbers), (b) interpreting information (for
                  example, by explaining), and (c) estimating trends (e.g.
                  predicting future effects and implications). Within the realm
                  of economics, comprehension is the lowest level of
                  understanding.
                </p>
              </div>
            </section>
            <section class="container-fluid">
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  Application
                </h5>
                <p>
                  Application represents the third grade level in the study of
                  economics. Students are expected to use and apply material in
                  real-world situations once they have gained knowledge and
                  comprehension of economic concepts, principles, laws, and
                  theories.
                </p>
              </div>
            </section>
            <section class="container-fluid">
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  Analysis
                </h5>
                <p>
                  The fourth and final academic performance level in the study
                  of economics is analysis. Analysis is the capacity to dissect
                  a body of knowledge (including economic theory) into its
                  component parts in order to comprehend its overall
                  organizational structure. Identification of the components,
                  comprehension of the relationship(s) between the components,
                  and recognition of the organizational principles and laws are
                  all typical components of analysis.
                </p>
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

export default Economics;
