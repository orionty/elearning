import React from "react";
import Footer from "../components/Footer";
import PagesNavBar from "../components/PagesNavBar";
import { Link } from "react-router-dom";
import NatureOfBinocularVisionAnomalies from '../pdf/NatureOfBinocularVisionAnomalies.pdf'
import DetectingBinocularVisionAnomaliesInPrimaryEyecarePractice from '../pdf/DetectingBinocularVisionAnomaliesInPrimaryEyecarePractice.pdf'
import ExaminationOfYoungChildren from '../pdf/ExaminationOfYoungChildren.pdf'
import EvaluationOfHeterophoria from '../pdf/EvaluationOfHeterophoria.pdf'
import BinoculerInstability from '../pdf/BinoculerInstability.pdf'
import ManagementOfHeterophoria from '../pdf/ManagementOfHeterophoria.pdf'
import EsophoricConditions1 from '../pdf/EsophoricConditions1.pdf'
import ScrollIntoView from "../components/ScrollIntoView";
import ExophoricConditions from '../pdf/ExophoricConditions.pdf'
import HyperphoriaAndCyclophoria from '../pdf/HyperphoriaAndCyclophoria.pdf'
import EyeExercisesForHeterophoria from '../pdf/EyeExercisesForHeterophoria.pdf'
import AnisometropiaAndAniseikonia from '../pdf/AnisometropiaAndAniseikonia.pdf'
import OverviewSensoryChangesInStrabismus from '../pdf/OverviewSensoryChangesInStrabismus.pdf'






class Optometry extends React.Component {
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
              <Link to="/optometry" style={{ fontWweight: "bold" }}>
                PART 1 
              </Link>
              <a href={NatureOfBinocularVisionAnomalies} target="_blank" rel="noopener noreferrer">
              Nature Of Binocular Vision Anomalies
              </a>
              <a
                href={DetectingBinocularVisionAnomaliesInPrimaryEyecarePractice}
                target="_blank"
                rel="noopener noreferrer"
              >
                Detecting Binocular Vision Anomalies In Primary Eyecare Practice
              </a>
              <a href={ExaminationOfYoungChildren} target="_blank" rel="noopener noreferrer">
              Examination Of Young Children
              </a>
              <a
                href={EvaluationOfHeterophoria}
                target="_blank"
                rel="noopener noreferrer"
              >
                Evaluation Of Heterophoria
              </a>
              <a href={BinoculerInstability} target="_blank" rel="noopener noreferrer">
              Binoculer Instability
              </a>
              <a
                href={ManagementOfHeterophoria}
                target="_blank"
                rel="noopener noreferrer"
              >
               Management Of Heterophoria
              </a>
              <a
                href={EsophoricConditions1}
                target="_blank"
                rel="noopener noreferrer"
              >
               EsophoricConditions 
              </a>
              <a
                href={ExophoricConditions}
                target="_blank"
                rel="noopener noreferrer"
              >
              Exophoric Conditions
              </a>
              <a
                href={HyperphoriaAndCyclophoria}
                target="_blank"
                rel="noopener noreferrer"
              >
              Hyperphoria And Cyclophoria
              </a>
              <a
                href={EyeExercisesForHeterophoria}
                target="_blank"
                rel="noopener noreferrer"
              >
              Eye Exercises For Heterophoria
              </a>
              <a
                href={AnisometropiaAndAniseikonia}
                target="_blank"
                rel="noopener noreferrer"
              >
              Anisometropia And Aniseikonia
              </a>
              <a
                href={OverviewSensoryChangesInStrabismus}
                target="_blank"
                rel="noopener noreferrer"
              >
              Overview Sensory Changes In Strabismus
              </a>
             
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
                  What is Optometry
                </h5>
                <p>
                  Examining the eyes and associated structures for flaws or
                  abnormalities is part of the scope of the specialized medical
                  field known as optometry. Optometrists are medical specialists
                  who usually offer complete primary eye care. Optometry is a
                  branch of medicine that focuses on identifying and treating
                  conditions that affect the human visual system. An eye care
                  specialist with an OD (Doctor of Optometry) degree who is
                  skilled in evaluating general eye health is known as an
                  optometrist. Your eyes may be examined by an optometrist for
                  vision correction and physical issues. They can identify
                  vision problems, eye injuries, ocular abnormalities, and
                  health conditions like diabetes and high blood pressure. They
                  can also prescribe contact lenses and glasses to correct
                  refractive errors. Optometrists may also conduct health
                  evaluations and give patients clinical recommendations.
                </p>
              </div>
            </section>

            <section class="container-fluid">
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  What do optometrists do?
                </h5>
                <p>
                  In addition to eye exams and glasses fittings, an optometrist
                  can handle a variety of other tasks. Following is a list of
                  tasks performed by most optometrists:
                </p>
                <ol>
                  <li style={{ fontWeight: "bold" }}>
                    Identifying visual defects
                  </li>
                  <p>
                    Optometrists are qualified to examine the eyes for signs of
                    damage and to identify vision problems.
                  </p>
                  <li style={{ fontWeight: "bold" }}>
                    Performing eye exams and vision tests
                  </li>
                  <p>
                    To find refractive errors, optometrists can perform vision
                    tests and eye exams.
                  </p>
                  <li style={{ fontWeight: "bold" }}>
                    Performing health evaluations
                  </li>
                  <p>
                    An optometrist can diagnose diabetes and high blood pressure
                    based on an eye exam and other health assessments.
                  </p>
                  <li style={{ fontWeight: "bold" }}>
                  Recommending eyewear and contact lenses
                  </li>
                  <p>
                  An optometrist will prescribe and fit eyeglasses and contact lenses to correct refractive errors.
                  </p>
                  <li style={{ fontWeight: "bold" }}>
                  Condition treatment
                  </li>
                  <p>
                  Astigmatism, nearsightedness, and farsightedness are among the conditions that optometrists are able to treat.
                  </p>
                  <li style={{ fontWeight: "bold" }}>
                  Making available vision therapy
                  </li>
                  <p>
                  To improve visual skills and restore vision, an optometrist may recommend vision therapy.
                  </p>
                  <li style={{ fontWeight: "bold" }}>
                  Medication prescription
                  </li>
                  <p>
                  It is legal for an optometrist to recommend drugs that can treat eye conditions.
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

export default Optometry;
