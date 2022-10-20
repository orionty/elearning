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
import AngularMomentum from "../pdf/RollingAndAngularMomentum.pdf";
import Elasticity from "../pdf/StaticEquilibriumAndElasticity.pdf";
import OscillatoryMotion from "../pdf/OscillatoryMotion.pdf";
import TheLawOfGravity from "../pdf/TheLawOfGravity.pdf";
import FluidMechanics from "../pdf/FluidMechanics.pdf";
import WaveMotion from "../pdf/WaveMotion.pdf";
import SoundWaves from "../pdf/SoundWaves.pdf";
import SuperpositionAndStandingWaves from "../pdf/SuperpositionAndStandingWaves.pdf";
import Temperature from "../pdf/Temperature.pdf";
import FirstLawOfThermodynamics from "../pdf/HeatAndTheFirstLawOfThermodynamics.pdf";
import TheKineticTheoryOfGases from "../pdf/TheKineticTheoryOFGases.pdf";
import HeatEnginesEntropyAndTheSecondLawOfTHERMODYNAMICS from "../pdf/HeatEnginesEntropyAndTheSecondLawOfThermodynamics.pdf";
import ScrollIntoView from "../components/ScrollIntoView";
import ElectricFields from "../pdf/ElectricFields.pdf";
import GaussLaw from "../pdf/GaussLaw.pdf";
import ElectricPotential from "../pdf/ElectricPotential.pdf";
import CapacitanceAndDielectrics from "../pdf/CapacitanceAndDielectrics.pdf";
import CurrentAndResistance from "../pdf/CurrentAndResistance.pdf";
import DirectCurrentCircuits from "../pdf/DirectCurrentCircuits.pdf";
import MagneticFields from "../pdf/MagneticFields.pdf";
import SourcesOfTheMagneticField from "../pdf/SourcesOfTheMagneticField.pdf";
import FaradaysLaw from "../pdf/FaradaysLaw.pdf";
import Inductance from "../pdf/Inductance.pdf";
import AlternatingCurrentCircuits from "../pdf/AlternatingCurrentCircuits.pdf";
import ElectromagneticWaves from "../pdf/ElectromagneticWaves.pdf";
import GeometricOptics from "../pdf/GeometricOptics.pdf";
import InterferenceOfLightWaves from "../pdf/InterferenceOfLightWaves.pdf";
import DiffractionAndPolarization from "../pdf/DiffractionAndPolarization.pdf";

class Physics extends React.Component {
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
              <a
                href={AngularMomentum}
                target="_blank"
                rel="noopener noreferrer"
              >
                Rolling and Angular Momentum
              </a>
              <a href={Elasticity} target="_blank" rel="noopener noreferrer">
                Static Equilibrium and Elasticity
              </a>
              <a
                href={TheLawOfGravity}
                target="_blank"
                rel="noopener noreferrer"
              >
                The Law of Gravity
              </a>
              <a
                href={FluidMechanics}
                target="_blank"
                rel="noopener noreferrer"
              >
                Fluid Mechanics
              </a>

              <Link to="/physics" style={{ fontWweight: "bold" }}>
                PART 2 OSCILLATIONS AND MECHANICAL WAVES
              </Link>
              <a
                href={OscillatoryMotion}
                target="_blank"
                rel="noopener noreferrer"
              >
                Oscillatory Motion
              </a>
              <a href={WaveMotion} target="_blank" rel="noopener noreferrer">
                Wave Motion
              </a>
              <a
                href={SuperpositionAndStandingWaves}
                target="_blank"
                rel="noopener noreferrer"
              >
                Superposition and Standing Waves
              </a>
              <a href={SoundWaves} target="_blank" rel="noopener noreferrer">
                Sound Waves
              </a>

              <Link to="/physics" style={{ fontWweight: "bold" }}>
                PART 3 THERMODYNAMICS
              </Link>
              <a href={Temperature} target="_blank" rel="noopener noreferrer">
                Temperature
              </a>
              <a
                href={FirstLawOfThermodynamics}
                target="_blank"
                rel="noopener noreferrer"
              >
                Heat and The First Law of Thermodynamics
              </a>
              <a
                href={TheKineticTheoryOfGases}
                target="_blank"
                rel="noopener noreferrer"
              >
                The Kinetic Theory of Gases
              </a>
              <a
                href={HeatEnginesEntropyAndTheSecondLawOfTHERMODYNAMICS}
                target="_blank"
                rel="noopener noreferrer"
              >
                Heat Engines,Entropy and The Second Law of THERMODYNAMICS
              </a>

              <Link to="/physics" style={{ fontWweight: "bold" }}>
                PART 4 ELECTRICITY AND MAGNETISM
              </Link>
              <a
                href={ElectricFields}
                target="_blank"
                rel="noopener noreferrer"
              >
                Electric Fields
              </a>
              <a href={GaussLaw} target="_blank" rel="noopener noreferrer">
                Gauss's Law
              </a>
              <a
                href={ElectricPotential}
                target="_blank"
                rel="noopener noreferrer"
              >
                Electric Potential
              </a>
              <a
                href={CapacitanceAndDielectrics}
                target="_blank"
                rel="noopener noreferrer"
              >
                Capacitance and Dielectrics
              </a>
              <a
                href={CurrentAndResistance}
                target="_blank"
                rel="noopener noreferrer"
              >
                Current and Resistance
              </a>
              <a
                href={DirectCurrentCircuits}
                target="_blank"
                rel="noopener noreferrer"
              >
                Direct Current Circuits
              </a>
              <a
                href={MagneticFields}
                target="_blank"
                rel="noopener noreferrer"
              >
                Magnetic Fields
              </a>
              <a
                href={SourcesOfTheMagneticField}
                target="_blank"
                rel="noopener noreferrer"
              >
                Sources of the Magnetic Field
              </a>
              <a href={FaradaysLaw} target="_blank" rel="noopener noreferrer">
                Faraday's Law
              </a>
              <a href={Inductance} target="_blank" rel="noopener noreferrer">
                Inductance
              </a>
              <a
                href={AlternatingCurrentCircuits}
                target="_blank"
                rel="noopener noreferrer"
              >
                Alternating Current Circuits
              </a>
              <a
                href={ElectromagneticWaves}
                target="_blank"
                rel="noopener noreferrer"
              >
                Electromagnetic Waves
              </a>

              <Link to="/physics" style={{ fontWweight: "bold" }}>
                PART 5 LIGHT AND OPTICS
              </Link>
              <a
                href={GeometricOptics}
                target="_blank"
                rel="noopener noreferrer"
              >
                Geometric Optics
              </a>
              <a
                href={InterferenceOfLightWaves}
                target="_blank"
                rel="noopener noreferrer"
              >
                Interference of Light Waves
              </a>
              <a
                href={DiffractionAndPolarization}
                target="_blank"
                rel="noopener noreferrer"
              >
                Diffraction and Polarization
              </a>

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
          {/* Physics Content */}
          <section>
            {/* short words */}
            <section class="container-fluid">
              <hr />
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  What is physics
                </h5>
                <p>
                  The most fundamental branch of physical science, physics, is
                  concerned with the underlying laws of nature. It serves as the
                  foundation for all other sciences, including astronomy,
                  biology, chemistry, and geology. The simplicity of physics'
                  core ideas and the way that a relatively small number of
                  concepts and models can transform and broaden our
                  understanding of the world are what make it so beautiful.
                </p>
              </div>
            </section>

            <section class="container-fluid">
              {/* How to study  */}
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  How to study
                </h5>
                <p>
                  Many students ask their instructors, "How should I study
                  physics and get ready for exams?" Although there isn't a
                  straightforward answer to this, we can make some
                  recommendations based on our own long-term learning and
                  teaching experiences. First and foremost, keep a positive
                  frame of mind while studying the material. Remember that
                  physics is the most fundamental of all the natural sciences.
                  It is crucial that you comprehend and have the ability to
                  apply the various concepts and theories covered in the text
                  because subsequent science courses will use the same physical
                  principles.
                </p>
              </div>
            </section>

            <section class="container-fluid">
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  Concepts and principles
                </h5>
                <p>
                  Before attempting to solve any problems that have been
                  assigned, it is imperative that you comprehend the fundamental
                  ideas and concepts. You can most effectively achieve this by
                  carefully reading our notes before you go to your lecture on
                  the subject matter covered. We have put a lot of effort into
                  developing tests that allow you to assess How well you
                  comprehend the subject is up to you. The danger Preventative
                  measures will also direct you away from typical misconceptions
                  pertaining to physics. When in class, be cautious. make notes
                  and inquire about concepts that are unclear to you.
                  <br />
                  Keep in mind that not everyone can comprehend the a scientific
                  article's full meaning after just one reading; It might be
                  necessary to read the text and your notes several times.
                  Reduce the amount of information you memorize. Effective
                  memorization of text passages and equations the fact that you
                  use derivations does not necessarily mean you comprehend the
                  subject. Your comprehension of the subject will be improved by
                  combining effective study methods habits, conversations with
                  teachers and fellow students, and whenever you think that a
                  question needs to be clarified, ask concept is required.
                </p>
              </div>
            </section>

            {/* Preparation for this course  */}
            <section class="container-fluid">
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  Preparation for this course
                </h5>
                <p>
                  If you took high school physics, you will likely pick up
                  concepts more quickly than those who did not because you are
                  already familiar with the physics lingo. If you speak English
                  as a second language, keep a glossary of new words you come
                  across and make sure you know their definitions and physics
                  applications. Similarly, you will learn the mathematical
                  aspects of physics more quickly if you have completed more
                  mathematics courses.
                </p>
              </div>
            </section>

            {/* Six main areas in physics  */}
            <section class="container-fluid">
              <div>
                <p>The study of physics can be divided into six main areas: </p>
                <ol>
                  <li>
                    classical mechanics, concerning the motion of objects that
                    are large relative to atoms and move at speeds much slower
                    than the speed of light.
                  </li>
                  <li>
                    relativity, a theory describing objects moving at any speed,
                    even speeds approaching the speed of light.
                  </li>
                  <li>
                    thermodynamics, dealing with heat, work, temperature, and
                    the statistical behavior of systems with large numbers of
                    particles.
                  </li>
                  <li>
                    electromagnetism, concerned with electricity, magnetism, and
                    electromagnetism fields.
                  </li>
                  <li>
                    optics, the study of the behavior of light and its
                    interaction with materials.
                  </li>
                  <li>
                    quantum mechanics, a collection of theories connecting the
                    behavior of matter at the submicroscopic level to
                    macroscopic observations.
                  </li>
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

export default Physics;
