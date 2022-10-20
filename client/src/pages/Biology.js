import React from "react";
import Footer from "../components/Footer";
import PagesNavBar from "../components/PagesNavBar";
import { Link } from "react-router-dom";
import TheHistoryAndScopeOfMicrobiology from '../pdf/TheHistoryAndScopeOfMicrobiology.pdf'
import TheStudyOfMicrobialStructure from '../pdf/TheStudyOfMicrobialStructure.pdf'
import ProcaryoticCellStructureAndFunction from '../pdf/ProcaryoticCellStructureAndFunction.pdf'
import EucaryoticCellStructureAndFunction from '../pdf/EucaryoticCellStructureAndFunction.pdf'
import MicrobialNutrition from '../pdf/MicrobialNutrition.pdf'
import MicrobialGrowth from '../pdf/MicrobialGrowth.pdf'
import Metabolism from '../pdf/Metabolism.pdf'
import EnergyReleaseAndConservation from '../pdf/EnergyReleaseAndConservation.pdf'
import ScrollIntoView from "../components/ScrollIntoView";
import TheUseOfEnergyInBiosynthesis from '../pdf/TheUseOfEnergyInBiosynthesis.pdf'
import GeneStructureReplicationAndExpression from '../pdf/GeneStructureReplicationAndExpression.pdf'
import RegulationOfGeneExpression from '../pdf/RegulationOfGeneExpression.pdf'
import MechanismsOfGeneticVariation from '../pdf/MechanismsOfGeneticVariation.pdf'


class Biology extends React.Component {
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
                PART 1 
              </Link>
              <a href={TheHistoryAndScopeOfMicrobiology} target="_blank" rel="noopener noreferrer">
              The History And Scope Of Microbiology
              </a>
              <a
                href={TheStudyOfMicrobialStructure}
                target="_blank"
                rel="noopener noreferrer"
              >
                The Study Of Microbial Structure
              </a>
              <a href={ProcaryoticCellStructureAndFunction} target="_blank" rel="noopener noreferrer">
              Procaryotic Cell Structure And Function
              </a>
              <a
                href={EucaryoticCellStructureAndFunction}
                target="_blank"
                rel="noopener noreferrer"
              >
               Eucaryotic Cell Structure And Function
              </a>
              <a href={MicrobialNutrition} target="_blank" rel="noopener noreferrer">
              Microbial Nutrition
              </a>
              <a
                href={MicrobialGrowth}
                target="_blank"
                rel="noopener noreferrer"
              >
                Microbial Growth
              </a>
              <a
                href={Metabolism}
                target="_blank"
                rel="noopener noreferrer"
              >
                Metabolism
              </a>
              <a
                href={EnergyReleaseAndConservation}
                target="_blank"
                rel="noopener noreferrer"
              >
                Energy Release And Conservation
              </a>
              <a
                href={TheUseOfEnergyInBiosynthesis}
                target="_blank"
                rel="noopener noreferrer"
              >
                The Use Of Energy In Biosynthesis
              </a>
              <a
                href={GeneStructureReplicationAndExpression}
                target="_blank"
                rel="noopener noreferrer"
              >
                Gene Structure, Replication, And Expression
              </a>
              <a
                href={RegulationOfGeneExpression}
                target="_blank"
                rel="noopener noreferrer"
              >
                Regulation Of Gene Expression
              </a>
              <a
                href={MechanismsOfGeneticVariation}
                target="_blank"
                rel="noopener noreferrer"
              >
                Mechanisms Of Genetic Variation
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
          {/* Physics Content */}
          <section>
            {/* short words */}
            <section class="container-fluid">
              <hr />
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  What is Biology
                </h5>
                <p>
                  The scientific study of life is known as biology. Although it
                  is a natural science with a broad scope, it is tied together
                  as a single, coherent field by a number of commonalities. For
                  instance, every organism consists of cells that process
                  genetic information that can be passed on to future
                  generations.
                </p>
              </div>
            </section>

            <section class="container-fluid">
              {/* How to study  */}
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  How to study for Biology
                </h5>
                <p>
                  Both in high school and in college, biology is typically a
                  required course. Every student is required to take it at some
                  point. Although it need not be difficult, biology can be
                  difficult for some students. Learning biology is a cumulative
                  process, just like learning math and a few other subjects.
                  It's imperative that you comprehend the fundamentals before
                  you can comprehend more complicated biological concepts and
                  processes. We'll look at tried-and-true advice and methods for
                  enhancing biology learning and study below.
                </p>
              </div>
            </section>

            <section class="container-fluid">
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  Attend the class and be ready.
                </h5>
                <p>
                  Reading your biology textbook or taking notes from a classmate
                  won't make up for missing class. Biology is a challenging,
                  practical subject. It entails gaining knowledge of biological
                  systems that call for experimentation and explanation.
                  Additionally a cumulative subject, biology. What you learn in
                  one class will serve as the foundation for your future
                  learning. Be prepared for each lecture by reading the
                  textbook, finishing the labs, and going over your notes from
                  the previous lecture. If you are prepared for lectures, you
                  will benefit from them much more. Students who attend biology
                  class on a regular basis perform significantly better than
                  those who don't.
                </p>
              </div>
            </section>

            <section class="container-fluid">
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  Don't try to catch up.
                </h5>
                <p>
                  In subjects like history, home economics, or social science,
                  the game of "catchup" might be acceptable, but biology doesn't
                  lend itself to it. Once more, learning biology is a cumulative
                  process. Your understanding of existing biological concepts
                  expands with each new one you learn. As you study biology,
                  you'll spend a lot of time doing practical experiments and
                  in-depth research in laboratories. Building a lab is
                  challenging. At the end of the semester, making up several
                  labs is impossible and useless. The key to learning biology is
                  to keep up with the material and finish your assignments on
                  time.
                </p>
              </div>
            </section>

            <section class="container-fluid">
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  Utilize your lab time.{" "}
                </h5>
                <p>
                  Although biology has some theoretical components, it is also a
                  practical, hands-on science. Reading your textbook or
                  attending a lecture to learn biology theory is one thing;
                  applying biology in a lab setting is an entirely different
                  experience. One of the best ways to learn biology is through
                  laboratory experiments on biological systems and processes.
                  More so than what you read in a book, what you do in the lab
                  will stick with you.
                </p>
              </div>
            </section>

            <section class="container-fluid">
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  Use diagrams and drawings
                </h5>
                <p>
                  Complex systems and processes abound in biology, which you
                  must comprehend, memorize, apply, and replicate for your exam,
                  your teacher, and perhaps even for your career. Even the most
                  complex biological processes can be easily understood and
                  remembered by using imagery, especially drawings and diagrams.
                </p>
              </div>
            </section>
            <section class="container-fluid">
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  Learn the terminology
                </h5>
                <p>
                  You would never think about training to be a doctor without
                  expecting to learn everything about the human body, or a
                  mechanic without being familiar with every component of a car.
                  The same is true for biology, I suppose. If you want to
                  succeed in biology, you must (a) pay attention to the
                  terminology and (b) learn it, even if you don't plan to become
                  a biologist or didn't choose to enroll in the course. You must
                  comprehend the words and concepts used to explain biology in
                  order to learn it. Write down unfamiliar words you come across
                  so you can look them up later. Spend some time dissecting
                  words to determine their component parts when they appear to
                  have prefixes or roots.
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

export default Biology;
