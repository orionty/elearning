import React from "react";
import Footer from "../components/Footer";
import PagesNavBar from "../components/PagesNavBar";
import { Link } from "react-router-dom";
import ReviewOfPrerequisites from '../pdf/ReviewOfPrerequisites.pdf'
import VectorAndVectorSpaces from '../pdf/VectorAndVectorSpaces.pdf'
import MatricesAndSystemsOfLinearEquations from '../pdf/MatricesAndSystemsOfLinearEquations.pdf'
import EigenvaluesEigenvectorsAndDiagonalization from '../pdf/EigenvaluesEigenvectorsAndDiagonalization.pdf'
import FirstOrderDifferentialEquations from '../pdf/FirstOrderDifferentialEquations.pdf'
import ScrollIntoView from "../components/ScrollIntoView";
import SecondAndHigherOrderLinearDifferentialEquationsAndSystems from '../pdf/SecondAndHigherOrderLinearDifferentialEquationsAndSystems.pdf'
import TheLaplaceTransform from '../pdf/TheLaplaceTransform.pdf'
import SeiriesSolution from '../pdf/SeiriesSolutionsOfDifferentialEquationsSpecialFunctionsAndSturmLiouvilleEquations.pdf'
import FourierSeries from '../pdf/FourierSeries.pdf'
import FourierIntegralAndTheFourierTransform from '../pdf/FourierIntegralAndTheFourierTransform.pdf'
import VectorDifferentialCalculus from '../pdf/VectorDifferentialCalculus.pdf'
import VectorIntegralCalculus from '../pdf/VectorIntegralCalculus.pdf'






class Mathematics extends React.Component {
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
              <Link to="/maths" style={{ fontWweight: "bold" }}>
                PART 1 
              </Link>
              <a href={ReviewOfPrerequisites} target="_blank" rel="noopener noreferrer">
              Review Of Prerequisites
              </a>
              <a
                href={VectorAndVectorSpaces}
                target="_blank"
                rel="noopener noreferrer"
              >
               Vector And Vector Spaces
              </a>
              <a href={MatricesAndSystemsOfLinearEquations} target="_blank" rel="noopener noreferrer">
              Matrices And Systems Of Linear Equations
              </a>
              <a
                href={EigenvaluesEigenvectorsAndDiagonalization}
                target="_blank"
                rel="noopener noreferrer"
              >
               Eigenvalues, Eigenvectors and Diagonalization
              </a>
              <a href={FirstOrderDifferentialEquations} target="_blank" rel="noopener noreferrer">
              First Order Differential Equations
              </a>
             
              <a href={SecondAndHigherOrderLinearDifferentialEquationsAndSystems} target="_blank" rel="noopener noreferrer">
              Second and Higher Order Linear Differential Equations and Systems
              </a>
              <a href={TheLaplaceTransform} target="_blank" rel="noopener noreferrer">
              The Laplace Transform
              </a>
              <a href={SeiriesSolution} target="_blank" rel="noopener noreferrer">
              Seiries Solutions Of Differential Equations,Special Functions And Sturm-Liouville Equations
              </a>
              <a href={FourierSeries} target="_blank" rel="noopener noreferrer">
              Fourier Series
              </a>
              <a href={FourierIntegralAndTheFourierTransform} target="_blank" rel="noopener noreferrer">
              Fourier Integral And The Fourier Transform
              </a>
              <a href={VectorDifferentialCalculus} target="_blank" rel="noopener noreferrer">
              Vector Differential Calculus
              </a>
              <a href={VectorIntegralCalculus} target="_blank" rel="noopener noreferrer">
              Vector Integral Calculus
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
                  What is Mathematics
                </h5>
                <p>
                  The science and study of quality, structure, space, and change
                  is mathematics. Mathematicians use rigorous deduction from
                  carefully selected axioms and definitions to look for
                  patterns, make new hypotheses, and establish the veracity of
                  their findings. In many disciplines today, including natural
                  science, engineering, medicine, and the social sciences,
                  mathematics is a crucial tool. Inspires and makes use of new
                  mathematical discoveries, applied mathematics, the branch of
                  mathematics concerned with the application of mathematical
                  knowledge to other fields, and occasionally results in the
                  development of completely new disciplines. Although practical
                  applications for what started as pure mathematics are
                  frequently discovered later, mathematicians also engage in
                  pure mathematics, or mathematics for its own sake, without
                  having any application in mind.
                </p>
              </div>
            </section>

            <section class="container-fluid">
              {/* How to study  */}
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  Why learning Mathematics Is Important
                </h5>
                <p>
                  It organizes our lives and keeps them from becoming chaotic,
                  making mathematics a potent tool for global understanding and
                  communication. Understanding the world through mathematics
                  also helps us develop mental discipline. Math fosters logical
                  reasoning, critical analysis, inventiveness, abstract or
                  spatial thinking, problem-solving aptitude, and even effective
                  communication abilities.
                </p>
              </div>
            </section>

            {/* SHow do students learn math?  */}
            <section class="container-fluid">
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  How do students learn math?{" "}
                </h5>
                <ol>
                  <li style={{ fontWeight: "bold" }}>Practice makes perfect</li>
                  <p>
                    A strong command of mathematics is no exception to the rule
                    that nothing worthwhile comes easily! Use your free time to
                    practice equations, exercises, and fundamental math since
                    this skill can only be developed through repeated practice.
                    Perhaps the most important advice for learning math is this.
                    In a few weeks, you'll notice a difference both visually and
                    aurally.
                  </p>
                  <li style={{ fontWeight: "bold" }}>Examine your mistakes</li>
                  <p>
                    Many mathematical concepts revolve around problem-solving,
                    which requires trying out various solutions before settling
                    on the best one. Review your procedure and find the errors
                    if you received the incorrect response. Why is this one of
                    the most important lessons for learning math? This is due to
                    the fact that the best way to improve your abilities and
                    prevent repeating the same mistakes is to understand where
                    your strategy went wrong using a step-by-step process.
                  </p>
                  <li style={{ fontWeight: "bold" }}>
                    Prioritize ideas over procedures.
                  </li>
                  <p>
                    Math is a subject that must be learned in order; you must
                    fully comprehend one problem before moving on to the next.
                    If all you understand about an equation is how it works, it
                    will be more challenging to comprehend how it fits into
                    future solutions to various problems. In fact, students who
                    used a problem-solving-first approach consistently
                    outperformed students who learned the mathematical solution
                    before attempting to solve the problem with it, according to
                    a study by the Cognitive Science Society. Students could
                    more clearly understand the logic underlying the problem and
                    the steps necessary to solve it if they understood the
                    problem before learning the solution. Therefore, rather than
                    memorizing the steps, the best way to learn math is to
                    comprehend the ideas and logic behind each solution.
                  </p>
                </ol>
              </div>
            </section>
            {/* Math tips */}
            <section class="container-fluid">
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>Math tips</h5>
                <ol>
                  <li style={{ fontWeight: "bold" }}>
                    Give concrete, real-world examples
                  </li>
                  <p>
                    Mathematical solutions are frequently very abstract, which
                    makes them challenging to recall and comprehend. Applying a
                    mathematical solution to a situation that you are more
                    familiar with on a daily basis is one of the best ways to
                    learn math quickly.
                  </p>
                  <li style={{ fontWeight: "bold" }}>
                    Establish a distraction-free setting
                  </li>
                  <p>
                    Avoid the temptation to multitask or study in distracting
                    settings, such as noisy cafes or in front of a television,
                    as math is a subject that requires your utmost
                    concentration. Finding a place where you won't be
                    interrupted or tempted by distractions like food, housework,
                    or your phone is essential for learning math quickly.
                    Consider including a classical playlist in your study
                    routine since some studies have found that listening to
                    classical music while studying can enhance focus and lower
                    stress levels. There are therefore countless helpful
                    resources, tutoring services, and study tips available to
                    assist you if you want to learn math quickly. You can find
                    the best way for you to learn more quickly, whether you
                    concentrate on using math solutions to real-world issues or
                    you hire a tutor to assist you in achieving your learning
                    objectives. Simply approach it as a math problem and try
                    various solutions until you find the best one!
                  </p>
                  <li style={{ fontWeight: "bold" }}>
                    Utilize technology to enhance math learning
                  </li>
                  <p>
                    One of the cornerstones of learning math is the idea that
                    practice makes perfect, which is why math websites and
                    online tutoring have become so popular. You will comprehend
                    math better and pick up on the process of solving equations
                    more quickly the more math you are exposed to. Technology
                    has made it simpler and quicker to learn basic math online
                    for free thanks to tools like interactive video lessons,
                    books, games, and other useful online resources. Tutoring
                    sessions can really help you learn math more quickly,
                    whether you're learning elementary math online or something
                    more complicated.
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

export default Mathematics;
