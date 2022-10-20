import React from "react";
import Footer from "../components/Footer";
import PagesNavBar from "../components/PagesNavBar";
import { Link } from "react-router-dom";
import Algebra from '../pdf/Algebra.pdf'
import Inequalities from '../pdf/Inequalities.pdf'
import PartialFractions from '../pdf/PartialFractions.pdf'
import LogarithmsAndExponentialFunctions from '../pdf/LogarithmsAndExponentialFunctions.pdf'
import HyperbolicFunctions from '../pdf/HyperbolicFunctions.pdf'
import ArithmeticAndGeometricProgressions from '../pdf/ArithmeticAndGeometricProgressions.pdf'
import TheBinomialSeries from '../pdf/TheBinomialSeries.pdf'
import MaclaurinsSeries from '../pdf/MaclaurinsSeries.pdf'
import SolvingEquationsByIterativeMethods from '../pdf/SolvingEquationsByIterativeMethods.pdf'
import ScrollIntoView from "../components/ScrollIntoView";
import ComputerNumberingSystems from '../pdf/ComputerNumberingSystems.pdf'
import BooleanAlgebraAndLogicCircuits from '../pdf/BooleanAlgebraAndLogicCircuits.pdf'
import IntroductionToTrigonometry from '../pdf/IntroductionToTrigonometry.pdf'





class Statistics extends React.Component {
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
              <Link to="/statistics" style={{ fontWweight: "bold" }}>
                PART 1 
              </Link>
              <a href={Algebra} target="_blank" rel="noopener noreferrer">
              Algebra
              </a>
              <a
                href={Inequalities}
                target="_blank"
                rel="noopener noreferrer"
              >
                Inequalities
              </a>
              <a
                href={PartialFractions}
                target="_blank"
                rel="noopener noreferrer"
              >
                Partial Fractions
              </a>
              <a href={LogarithmsAndExponentialFunctions} target="_blank" rel="noopener noreferrer">
              Logarithms And Exponential Functions
              </a>
              <a
                href={HyperbolicFunctions}
                target="_blank"
                rel="noopener noreferrer"
              >
                Hyperbolic Functions
              </a>
              <a href={ArithmeticAndGeometricProgressions} target="_blank" rel="noopener noreferrer">
              Arithmetic And Geometric Progressions
              </a>
              <a
                href={TheBinomialSeries}
                target="_blank"
                rel="noopener noreferrer"
              >
               The Binomial Series
              </a>
              <a
                href={MaclaurinsSeries}
                target="_blank"
                rel="noopener noreferrer"
              >
               Maclaurin's Series
              </a>
              <a
                href={SolvingEquationsByIterativeMethods}
                target="_blank"
                rel="noopener noreferrer"
              >
               Solving Equations By Iterative Methods
              </a>
              <a
                href={ComputerNumberingSystems}
                target="_blank"
                rel="noopener noreferrer"
              >
                Computer Numbering Systems
              </a>
              <a
                href={BooleanAlgebraAndLogicCircuits}
                target="_blank"
                rel="noopener noreferrer"
              >
                Boolean Algebra And Logic Circuits
              </a>
              <a
                href={IntroductionToTrigonometry}
                target="_blank"
                rel="noopener noreferrer"
              >
                Introduction To Trigonometry
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
                  What is Statistics
                </h5>
                <p>
                  The study or analysis of a set of data to ascertain or
                  interpret various things is all that statistics is. Other
                  definitions of statistics include classified statistics that
                  reflect the condition or state of individuals. All of the
                  mathematical puzzles posed in statistics can be solved in
                  three steps. Data collection comes first, followed by data
                  summarization and statistical analysis as the final step.
                </p>
              </div>
            </section>

            <section class="container-fluid">
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>Study Tips for the Student of Basic Statistics </h5>
                <ol>
                  <li>
                    Instead of mass practice, use distributive practice. To
                    study statistics, set aside one to two hours per day at the
                    same time for six days of the week (leave the seventh day
                    off). Avoid cramming four or five hours of study into one or
                    two sessions per week. This is a fundamental idea.
                  </li>
                  <li>
                    At least once per week, students should study in triads or
                    quads. A deeper level of understanding is actually cemented
                    through verbal exchange and interpretation of concepts and
                    skills with other students.
                  </li>
                  <li>
                    Try not to try to remember formulas (A good instructor will
                    never ask you to do this). Concepts, concepts, concepts:
                    study. Remember that you can always look up the formula in a
                    textbook later in life when you need to use a statistical
                    technique.
                  </li>
                  <li>
                    Work as many different exercises and problems as you can.
                    Ideally, a workbook is included with your textbook. Simply
                    reading about statistics won't teach you anything about it.
                    Pushing the pencil and repeatedly honing your techniques are
                    required.
                  </li>
                  <li>
                    In statistics, look for recurring themes. There are probably
                    only a small number of crucial skills that come up
                    repeatedly. If necessary, request that your instructor
                    emphasize these.
                  </li>
                  <li>
                    Become a Gestalt therapist! Recognize that statistics as a
                    whole is greater than the sum of its parts. It is very
                    simple to become preoccupied with minor details and lose
                    sight of the bigger picture.
                  </li>
                  <li>
                    Act if you suffer from math or statistics anxiety, which
                    affects about 70% of people in general. Most universities
                    offer top-notch counseling programs to lessen this
                    disability because they recognize how crippling this issue
                    is. Get assistance for yourself. This could end up being the
                    wisest choice you make during your undergraduate career.
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

export default Statistics;
