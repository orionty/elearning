import React from "react";
import Footer from "../components/Footer";
import PagesNavBar from "../components/PagesNavBar";
import Introduction from "../pdf/EssentialIdeas.pdf";
import AtomsMoleculesAndIons from '../pdf/AtomsMoleculesAndIons.pdf'
import Stoichiometry from '../pdf/StoichiometryOfChemicalReactions.pdf'
import Thermochemistry from '../pdf/Thermochemistry.pdf'
import ElectronicStructure from '../pdf/ElectronicStructureAndPeriodicPropertiesOfElements.pdf'
import ChemicalBondingAndMolecularGeometry from '../pdf/ChemicalBondingAndMolecularGeometry.pdf'
import AdvancedTheoriesOfCovalentBonding from '../pdf/AdvancedTheoriesOfCovalentBonding.pdf'
import  Gases from "../pdf/Gases.pdf"
import LiquidsAndSolids from "../pdf/LiquidsAndSolids.pdf"
import ScrollIntoView from "../components/ScrollIntoView";
import CompositionOfSubstancesAndSolutions from "../pdf/CompositionOfSubstancesAndSolutions.pdf"
import SolutionsAndColloids from "../pdf/SolutionsAndColloids.pdf"
import   Kinetics from "../pdf/Kinetics.pdf"
import FundamentalEquilibriumConcepts from "../pdf/FundamentalEquilibriumConcepts.pdf"
import AcidBaseEquilibria from "../pdf/AcidBaseEquilibria.pdf"
import EquilibriaOfOtherReactionClasses from "../pdf/EquilibriaOfOtherReactionClasses.pdf"
import Thermodynamics from "../pdf/Thermodynamics.pdf"
import  Electrochemistry from '../pdf/Electrochemistry.pdf'
import RepresentativeMetalsMetalloidAndNonmetals from '../pdf/RepresentativeMetalsMetalloidAndNonmetals.pdf'
import TransitionMetalsAndCoordinationChemistry from '../pdf/TransitionMetalsAndCoordinationChemistry.pdf'
import OrganicChemistry from '../pdf/OrganicChemistry.pdf'
import NuclearChemistry from '../pdf/NuclearChemistry.pdf'

class Chemistry extends React.Component {
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

              <a href={Introduction} target="_blank" rel="noopener noreferrer">
                Essential Ideas
              </a>
              <a
                href={AtomsMoleculesAndIons}
                target="_blank"
                rel="noopener noreferrer"
              >
                Atoms, Molecules, and Ions
              </a>
             
              <a
                href={CompositionOfSubstancesAndSolutions}
                target="_blank"
                rel="noopener noreferrer"
              >
                Composition of Substances and Solutions
              </a>
              <a href={Stoichiometry} target="_blank" rel="noopener noreferrer">
                Stoichiometry of Chemical Reactions
              </a>
              <a
                href={Thermochemistry}
                target="_blank"
                rel="noopener noreferrer"
              >
                Thermochemistry
              </a>
              <a
                href={ElectronicStructure}
                target="_blank"
                rel="noopener noreferrer"
              >
                Electronic Structure and Periodic Properties of Elements
              </a>
              <a
                href={ChemicalBondingAndMolecularGeometry}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chemical Bonding and Molecular Geometry
              </a>
              <a
                href={AdvancedTheoriesOfCovalentBonding}
                target="_blank"
                rel="noopener noreferrer"
              >
                Advanced Theories of Covalent Bonding
              </a>
              <a
                href={ Gases}
                target="_blank"
                rel="noopener noreferrer"
              >
                Gases
              </a>
              <a
                href={ LiquidsAndSolids}
                target="_blank"
                rel="noopener noreferrer"
              >
                Liquids and Solids
              </a>
              <a
                href={ SolutionsAndColloids}
                target="_blank"
                rel="noopener noreferrer"
              >
                Solutions and Colloids
              </a>
              <a
                href={   Kinetics}
                target="_blank"
                rel="noopener noreferrer"
              >
                Kinetics
              </a>
              <a
                href={FundamentalEquilibriumConcepts}
                target="_blank"
                rel="noopener noreferrer"
              >
                Fundamental Equilibrium Concepts
              </a>
              <a
                href={ AcidBaseEquilibria}
                target="_blank"
                rel="noopener noreferrer"
              >
                Acid-Base Equilibria
              </a>
              <a
                href={ EquilibriaOfOtherReactionClasses}
                target="_blank"
                rel="noopener noreferrer"
              >
                Equilibria of Other Reaction Classes
              </a>
              <a
                href={ Thermodynamics}
                target="_blank"
                rel="noopener noreferrer"
              >
                Thermodynamics
              </a>
              <a
                href={  Electrochemistry}
                target="_blank"
                rel="noopener noreferrer"
              >
                Electrochemistry
              </a>
              <a
                href={ RepresentativeMetalsMetalloidAndNonmetals}
                target="_blank"
                rel="noopener noreferrer"
              >
                Representative Metals,Metalloid, and Nonmetals
              </a>
              <a
                href={ TransitionMetalsAndCoordinationChemistry}
                target="_blank"
                rel="noopener noreferrer"
              >
                Transistion Metals and Coordination Chemistry
              </a>
              <a
                href={ OrganicChemistry}
                target="_blank"
                rel="noopener noreferrer"
              >
                Organic Chemistry
              </a>
              <a
                href={ NuclearChemistry}
                target="_blank"
                rel="noopener noreferrer"
              >
                Nuclear Chemistry
              </a>
              {/* <a
                href={ Gases}
                target="_blank"
                rel="noopener noreferrer"
              >
                Substitution Reactions of Carbonyl Compounds at the α Carbon
              </a>
              <a
                href={ Gases}
                target="_blank"
                rel="noopener noreferrer"
              >
                Carbonyl Condensation Reactions
              </a>
              <a
                href={ Gases}
                target="_blank"
                rel="noopener noreferrer"
              >
                Amines
              </a>
              <a
                href={ Gases}
                target="_blank"
                rel="noopener noreferrer"
              >
                Carbon–Carbon Bond-Forming Reactions in Organic Synthesis
              </a>
              <a
                href={ Gases}
                target="_blank"
                rel="noopener noreferrer"
              >
                Carbohydrates
              </a>
              <a
                href={ Gases}
                target="_blank"
                rel="noopener noreferrer"
              >
                Amino Acids and Proteins
              </a>
              <a
                href={ Gases}
                target="_blank"
                rel="noopener noreferrer"
              >
                Lipids
              </a>
              <a
                href={ Gases}
                target="_blank"
                rel="noopener noreferrer"
              >
                Synthetic Polymers
              </a> */}
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
                  What is Chemistry
                </h5>
                <p>
                  The scientific study of matter's characteristics and behavior
                  is known as chemistry. It is a branch of natural science that
                  studies everything from the building blocks of matter to the
                  compounds made up of atoms, molecules, and ions, as well as
                  their composition, structure, characteristics, behavior, and
                  the changes they go through when they interact with other
                  substances.
                </p>
              </div>
            </section>

            <section class="container-fluid">
              {/* How to study  */}
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  How to study for Chemistry
                </h5>

                <p>
                  One of those subjects where people either love it or hate it
                  is chemistry. Chemistry is typically offered as an elective
                  rather than a required course in high school. But all
                  undergraduate students must complete at least one chemistry
                  course as a requirement for graduation at the majority of
                  reputable colleges. A minimum of one chemistry course will
                  probably be necessary for you to complete before you graduate
                  if you intend to work in the fields of medicine, engineering,
                  or a natural science.Most people find chemistry to be
                  difficult, but it doesn't have to be. People most frequently
                  struggle with chemistry because they don't approach it
                  correctly. We'll look at tried-and-true methods and strategies
                  that can help you learn and study chemistry if you put them to
                  use.
                </p>
              </div>
            </section>

            <section class="container-fluid">
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  Glance For Understanding
                </h5>
                <p>
                  There is a lot of new information to learn and memorize in
                  chemistry, just like there is in any other science. In fact,
                  as you start studying chemistry, you'll be exposed to so much
                  new information that if you get caught up in trying to
                  memorize everything, you'll find it difficult to keep up.
                  Prioritize learning the foundational ideas first. You can
                  devote time to memorization once you have a firm grasp of the
                  fundamentals. Additionally, you'll find it much simpler to
                  memorize everything else as you master the fundamentals of
                  chemistry and come to understand the concepts.
                </p>
              </div>
            </section>

            
            <section class="container-fluid">
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  Daily practice
                </h5>
                <p>
                  Practice is essential to learning and studying chemistry. Your
                  daily study routine should include completing practice
                  problems, working formulas, and solving equations. Yes, a
                  daily study schedule. If you want to learn chemistry and stay
                  at the top of your game, you should dedicate a little bit of
                  time each day—about an hour—to studying it. Examine and solve
                  the practice questions from chemistry test samples as well as
                  questions from previous chemistry tests to gauge your
                  knowledge of and understanding of chemistry (if you can get
                  your hands on them.)
                </p>
              </div>
            </section>

            
            <section class="container-fluid">
              <div>
                <h5  style={{ color: "red", fontWeight: "15px" }}>Utilize your lab time </h5>
                <p>
                  There is no substitute for actual hands-on experience when it
                  comes to understanding and learning chemistry, and there is no
                  better way to get this experience than by participating in
                  chemistry labs. Utilize any and all chances to work in the lab
                  that are offered. Your comprehension and knowledge of
                  chemistry will improve as a result of working through
                  chemistry problems and performing chemistry experiments in a
                  real-world setting.
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

export default Chemistry;
