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

class ElectricalEngineering extends React.Component {
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
                  What is Electrical Engineering
                </h5>
                <p>
                  One of the more recent engineering specialties, electrical
                  engineering has roots in the late 19th century. It is the area
                  of engineering that deals with electricity-related technology.
                  From tiny microchips to enormous power plant generators,
                  electrical engineers work on a diverse range of parts,
                  gadgets, and systems. Early electricity experiments used
                  static charges and crude batteries. However, Michael Faraday's
                  Law of Induction, which essentially states that the voltage in
                  a circuit is proportional to the rate of change in the
                  magnetic field through the circuit, marked the beginning of
                  the actual design, construction, and manufacture of useful
                  devices and systems. The fundamental concepts of the electric
                  generator, electric motor, and transformer are all covered by
                  this law. The introduction of electricity to homes,
                  businesses, and industry, which was made possible by
                  electrical engineers, is a defining feature of the modern era.
                </p>
              </div>
            </section>

            <section class="container-fluid">
              {/* What does an electrical engineer do?  */}
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  What does an electrical engineer do?
                </h5>
                <p>
                  According to the U.S. Bureau of Labor Statistics, "Electrical
                  engineers design, develop, test, and oversee the manufacturing
                  of electrical equipment, such as electric motors, radar and
                  navigation systems, communications systems, and power
                  generation equipment. Electronics engineers create electronic
                  devices like portable music players and global positioning
                  systems (GPS), as well as broadcast and communications
                  systems. Most likely, an electrical engineer created any
                  practical, everyday device that generates, conducts, or uses
                  electricity. Engineers may also carry out or create the
                  specifications for destructive or nondestructive testing of a
                  device's or component's functionality, dependability, and
                  long-term durability. Using fundamental parts like conductors,
                  coils, magnets, batteries, switches, resistors, capacitors,
                  inductors, diodes, and transistors, electrical engineers of
                  today create electrical systems and devices. These few basic
                  components are found in almost all electrical and electronic
                  devices, including the microprocessors in your phone and the
                  generators at electric power plants.
                </p>
              </div>
            </section>

            <section class="container-fluid">
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  Electrical engineering's future
                </h5>
                <p>
                  Electrical and electronics engineers' employment is expected
                  to increase by 4% between now and 2022 as a result of their
                  "versatility in developing and applying emerging
                  technologies," according to the BLS. These new technologies
                  can be used for a variety of things, such as studying the red
                  electrical flashes known as sprites that occasionally hover
                  above thunderstorms. Electrical engineer Victor Pasko from
                  Penn State and his associates have created a model to explain
                  how the peculiar lightning develops and vanishes.
                </p>
              </div>
            </section>

            <section class="container-fluid">
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  Electrical and Electronics engineering specialties
                </h5>
                <p>
                  The electronic computer branch of electrical engineering, the
                  largest of its specialized subfields, was first developed
                  during World War II. Several disciplines besides electronics
                  have been drawn to the field of computer science and
                  engineering, most notably logicians, linguists, and applied
                  mathematicians. The study of electric power and light and
                  their uses is another extremely broad field. The design,
                  production, and use of turbines, generators, transmission
                  lines, transformers, motors, lighting systems, and appliances
                  are among the field's specialties. The transmission of voice
                  and data by laser signals through optical fiber networks is a
                  third important area in communications, which also includes
                  telephony and satellite communications. The exchange of
                  digital data among computers linked by wire, microwave, and
                  satellite circuits is now a significant business that has
                  forged a close relationship between experts in computers and
                  communications.
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

export default ElectricalEngineering;
