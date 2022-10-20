import React from "react";
import Footer from "../components/Footer";
import PagesNavBar from "../components/PagesNavBar";
import { Link } from "react-router-dom";
import DescriptiveStatistics from '../pdf/DescriptiveStatistics.pdf'
import BasicConceptsFromProbabilityTheory from '../pdf/BasicConceptsFromProbabilityTheory.pdf'
import AdditionalTopicsInProbability from '../pdf/AdditionalTopicsInProbability.pdf'
import SamplingDistributions from '../pdf/SamplingDistributions.pdf'
import PointEstimation from '../pdf/PointEstimation.pdf'
import IntervalEstimation from '../pdf/IntervalEstimation.pdf'
import HypothesisTesting from '../pdf/HypothesisTesting.pdf'
import LinearRegressionModels from '../pdf/LinearRegressionModels.pdf'
import DesignOfExperiments from '../pdf/DesignOfExperiments.pdf'
import AnalysisOfVariance from '../pdf/AnalysisOfVariance.pdf'
import ScrollIntoView from "../components/ScrollIntoView";
import BayesianEstimationAndInference from '../pdf/BayesianEstimationAndInference.pdf'
import NonparametricTests from '../pdf/NonparametricTests.pdf'
import EmpericalMethods from '../pdf/EmpericalMethods.pdf'




class ActuarialScience extends React.Component {
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
              <Link to="/actuarial_science" style={{ fontWweight: "bold" }}>
                PART 1 
              </Link>
              <a href={DescriptiveStatistics} target="_blank" rel="noopener noreferrer">
              Descriptive Statistics
              </a>
              <a
                href={BasicConceptsFromProbabilityTheory}
                target="_blank"
                rel="noopener noreferrer"
              >
               Basic Concepts From Probability Theory
              </a>
              <a href={AdditionalTopicsInProbability} target="_blank" rel="noopener noreferrer">
              Additional Topics In Probability
              </a>
              <a
                href={SamplingDistributions}
                target="_blank"
                rel="noopener noreferrer"
              >
                Sampling Distributions
              </a>
              <a href={PointEstimation} target="_blank" rel="noopener noreferrer">
              Point Estimation
              </a>
              <a
                href={IntervalEstimation}
                target="_blank"
                rel="noopener noreferrer"
              >
                Interval Estimation
              </a>
              <a
                href={HypothesisTesting}
                target="_blank"
                rel="noopener noreferrer"
              >
               Hypothesis Testing
              </a>
              <a
                href={LinearRegressionModels}
                target="_blank"
                rel="noopener noreferrer"
              >
               Linear Regression Models
              </a>
              <a
                href={DesignOfExperiments}
                target="_blank"
                rel="noopener noreferrer"
              >
                Design Of Experiments
              </a>
              <a
                href={AnalysisOfVariance}
                target="_blank"
                rel="noopener noreferrer"
              >
                Analysis Of Variance
              </a>
              <a
                href={BayesianEstimationAndInference}
                target="_blank"
                rel="noopener noreferrer"
              >
                Bayesian Estimation And Inference
              </a>
              <a
                href={NonparametricTests}
                target="_blank"
                rel="noopener noreferrer"
              >
                Nonparametric Tests
              </a>
              <a
                href={EmpericalMethods}
                target="_blank"
                rel="noopener noreferrer"
              >
                Emperical Methods
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
                  What is Actuarial Science
                </h5>
                <p>
                  Actuarial science is concerned with assessing risks and
                  preserving the financial stability of financial or insurance
                  organizations. Graduates of actuarial studies are taught how
                  to use the principles of mathematics, statistics, and
                  probability to predict future events and take preventive
                  action. Actuarial Studies' main objectives are to equip
                  students with the knowledge necessary to perform actuarial
                  duties and to help them pass their actuarial exams more
                  quickly (keep on reading to learn more about them).
                </p>
              </div>
            </section>

      

            <section class="container-fluid">
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  What does an actuary do?
                </h5>
                <p>
                  Actuaries examine historical data to estimate the amount of
                  money that should be set aside to cover potential financial
                  losses in the future. Take automobile collisions as an
                  example. An actuary will look at the percentage of people
                  involved in accidents in previous years to estimate how many
                  people will be involved in accidents in London in November of
                  this year. The actuary will use that information to identify a
                  trend, predict this year's percentage, and determine how much
                  each individual should pay for insurance in order for it to
                  cover the costs associated with a car accident. When there is
                  no historical data or the data is no longer relevant due to
                  changes in policy or other factors, it can be difficult for an
                  actuary to make predictions.
                </p>
              </div>
            </section>

            <section class="container-fluid">
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  Applications of Actuarial Science
                </h5>
                <p>
                  Actuarial science is primarily used in two areas: pension
                  plans and life insurance. To analyze liabilities and enhance
                  financial decision-making, actuarial science is also used in
                  the study of financial organizations. Actuaries use this
                  specialized science to assess how future events will affect
                  the economy, finance, and other areas of business.
                </p>
              </div>
            </section>

            <section class="container-fluid">
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  Understanding Actuarial Science{" "}
                </h5>
                <p>
                  Actuarial science uses probability analysis to quantify the
                  risk of an event happening so that its financial impact can be
                  calculated. Actuaries frequently use actuarial science in the
                  insurance sector. Actuaries examine mathematical models to
                  forecast or predict whether it is reasonable for an event to
                  occur so that an insurance provider can set aside money to
                  cover any claims that may arise from the event. Insurance
                  companies, for instance, could learn more about the likelihood
                  or timeframe of paying out a life insurance policy by looking
                  at the mortality rates of people who are a certain age. With
                  the rise in long-term insurance needs in the late 17th
                  century, actuarial science was formally established as a
                  mathematical field of study. Mathematics, probability theory,
                  statistics, finance, economics, and computer science are all
                  interrelated fields of actuarial science. In the past,
                  actuarial science created tables and premiums using
                  deterministic models. Due to the widespread use of high-speed
                  computers and the fusion of stochastic actuarial models with
                  contemporary financial theory, science has undergone
                  revolutionary changes over the past 30 years. A lot of
                  colleges and universities offer actuarial science degrees,
                  which include a strong foundational course in math,
                  statistics, economics, and all types of investments.
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

export default ActuarialScience;
