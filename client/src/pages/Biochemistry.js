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

class Biochemistry extends React.Component {
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
                  What is Biochemistry
                </h5>
                <p>
                  The study of chemical processes that occur within and relate
                  to living organisms is known as biochemistry or biological
                  chemistry. The fields of structural biology, enzymology, and
                  metabolism can be considered subfields of biochemistry, a
                  branch of both chemistry and biology.
                </p>
              </div>
            </section>

            <section class="container-fluid">
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  How to study for Biochemistry
                </h5>
                <ol>
                  <li style={{ fontWeight: "bold" }}>
                    Learn the structures from the very beginning.
                  </li>
                  <p>
                    When you come across a new pathway, molecule, or reaction,
                    write it down and begin to memorize it right away. This
                    holds true for all cofactors and enzymes, amino acids,
                    glycolysis, lipid metabolism, the pentose phosphate pathway,
                    and nucleotides.
                  </p>
                  <li style={{ fontWeight: "bold" }}>
                    Review fundamental and organic chemistry.
                  </li>
                  <p>
                    Just to refresh your memory and give you a quick rundown. It
                    will make it easier to comprehend the more difficult
                    subjects! Don't be concerned about going too far.
                  </p>
                  <li style={{ fontWeight: "bold" }}>
                    look into your professor
                  </li>
                  <p>
                    Analyze their exam questions, their lecture or class notes,
                    or whether the class is worthwhile (some biochemistry
                    lecturers can be incredibly boring!)
                  </p>
                  <li style={{ fontWeight: "bold" }}>Extend things</li>
                  <p>
                    The best way to build metabolic pathways from scratch is in
                    this manner. Consider how molecules react and change in your
                    mind. Ensure that you comprehend each stage of the
                    procedure.
                  </p>
                  <li style={{ fontWeight: "bold" }}>
                    Read the prescribed texts
                  </li>
                  <p>
                    if it comes from a reliable source (or one that will likely
                    be put to the test). After class, review your lecture notes.
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

export default Biochemistry;
