import React from "react";
import Footer from "../components/Footer";
import PagesNavBar from "../components/PagesNavBar";
import { Link } from "react-router-dom";
import Introduction from '../pdf/Introduction.pdf'
import NetworkModels from '../pdf/NetworkModels.pdf'
import DataAndSignals from '../pdf/DataAndSignals.pdf'
import DigitalTransmission from '../pdf/DigitalTransmission.pdf'
import AnalogTransmission from '../pdf/AnalogTransmission.pdf'
import ScrollIntoView from "../components/ScrollIntoView";
import MultiplexingAndSpreading from '../pdf/MultiplexingAndSpreading.pdf'






class ComputerScience extends React.Component {
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
                PART 1 DATA COMMUNICATION AND NETWORKING
              </Link>
              <a href={Introduction} target="_blank" rel="noopener noreferrer">
                Introduction
              </a>
              <a
                href={NetworkModels}
                target="_blank"
                rel="noopener noreferrer"
              >
                Network Models
              </a>
             
              <a href={DataAndSignals} target="_blank" rel="noopener noreferrer">
              Data And Signals
              </a>
              <a
                href={DigitalTransmission}
                target="_blank"
                rel="noopener noreferrer"
              >
                Digital Transmission
              </a>
              <a
                href={AnalogTransmission}
                target="_blank"
                rel="noopener noreferrer"
              >
                Analog Transmission
              </a>
              <a
                href={MultiplexingAndSpreading}
                target="_blank"
                rel="noopener noreferrer"
              >
                Multiplexing And Spreading
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
                  What is Computer Science
                </h5>
                <p>
                  The study of computers and computational systems is known as
                  computer science. Computer scientists, as opposed to
                  electrical and computer engineers, focus primarily on software
                  and software systems, including their theory, design,
                  development, and application. Artificial intelligence,
                  computer systems and networks, security, database systems,
                  human computer interaction, vision and graphics, numerical
                  analysis, programming languages, software engineering,
                  bioinformatics, and computing theory are some of the main
                  areas of study in computer science. Even though programming is
                  a requirement for studying computer science, it is only one
                  aspect of the subject. Computer scientists study the
                  performance of computer hardware and software in addition to
                  designing and analyzing algorithms to solve programs. The
                  challenges that computer scientists face range from the
                  abstract—determining which problems can be solved by computers
                  and the complexity of the algorithms that do so—to the
                  concrete—creating applications that run smoothly on mobile
                  devices, are user-friendly, and adhere to security protocols.
                </p>
              </div>
            </section>

            <section class="container-fluid">
              {/* Development of computer science  */}
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  Development of computer science
                </h5>
                <p>
                  Although the electronic digital computer that is the subject
                  of computer science was created some two decades earlier, the
                  field of computer science did not become an independent one
                  until the early 1960s. The related disciplines of mathematics,
                  electrical engineering, physics, and management information
                  systems are where computer science has its roots. Two
                  fundamental ideas that helped shape the development of the
                  computer come from mathematics: the notion that all data can
                  be represented as a series of zeros and ones, as well as the
                  imprecise idea of a "stored program." Similar to how numbers
                  in the well-known decimal system are represented using the
                  digits 0 through 9, in the binary number system, numbers are
                  represented by a series of the binary digits 0 and 1. The
                  binary digit, or bit, naturally evolved into the fundamental
                  unit of data storage and transmission in a computer system due
                  to the relative ease with which two states (for example, high
                  and low voltage) can be realized in electrical and electronic
                  devices. Electrical engineering provides the basics of circuit
                  design—namely, the idea that electrical impulses input to a
                  circuit can be combined using Boolean algebra to produce
                  arbitrary outputs. (The Boolean algebra developed in the 19th
                  century supplied a formalism for designing a circuit with
                  binary input values of zeros and ones [false or true,
                  respectively, in the terminology of logic] to yield any
                  desired combination of zeros and ones as output.) The
                  invention of the transistor and the miniaturization of
                  circuits, along with the invention of electronic, magnetic,
                  and optical media for the storage and transmission of
                  information, resulted from advances in electrical engineering
                  and physics.
                </p>
              </div>
            </section>

            <section class="container-fluid">
              <div>
                <h5 style={{ color: "red", fontWeight: "15px" }}>
                  How to Get Ready for Computer Science
                </h5>
                <ol>
                  <li style={{ fontWeight: "bold" }}>
                    What Does Computer Science Mean to You?
                  </li>
                  <p>
                    Consider the following before deciding to continue your
                    education at a university: Are you doing it to earn a good
                    living? due to a childhood desire to create your very own
                    video game? Or awe at the beauty of bringing artificial
                    intelligence to life? Whatever computer science means to
                    you, it's important to hold onto it tightly because it will
                    give you the willpower you need when times are tough (when,
                    not if). Because computer science is a broad field, identify
                    your area of expertise and immerse yourself in it, whether
                    it be software engineering, computer security, or
                    algorithms. You'll see the big picture if you base your
                    studies on a primary interest, which will undoubtedly
                    increase your enthusiasm. Invest in books related to your
                    interest, watch YouTube channels, read news about it, etc.
                    They need not be technical, but they should give you a
                    better perspective and general understanding of the
                    discipline.
                  </p>
                  <li style={{ fontWeight: "bold" }}>
                    Develop Your Craft and Your Skill Set
                  </li>
                  <p>
                    Evidently, a computer scientist's substance comes from his
                    or her technical expertise. Being a high performer is
                    challenging for you because university courses move quickly
                    and some students may find it difficult to catch up.
                  </p>
                  <li style={{ fontWeight: "bold" }}>Become Resourceful</li>
                  <p>
                    Check out the less expensive e-book versions of popular
                    university textbooks if you're looking for even more extra
                    resources before you enroll in a real university. There are
                    a ton of resources and information available on the
                    Internet. Utilize them to your advantage! Programming
                    language fundamentals, such as operators, functions, and
                    libraries, are taught in online tutorials and manuals and
                    can be freely applied to your code and problem sets. You'll
                    also be expected to look these fundamentals up for reference
                    in college.
                  </p>
                  <li style={{ fontWeight: "bold" }}>Get to Know GitHub</li>
                  <p>
                    A platform for hosting open-source projects is called
                    GitHub. It is a method for developers to collaborate online
                    on a single project. Both in the workplace and in higher
                    education, GitHub is widely used. The ability to work on the
                    same code is a requirement for developers. It's important to
                    at least become familiar with how to navigate the GitHub
                    website, as some universities even use it to conduct their
                    courses.
                  </p>
                  <li style={{ fontWeight: "bold" }}>
                    Try Out Various Preparation Methods
                  </li>
                  <p>
                    Push yourself past your comfort zone. Learn what works and
                    what doesn't for you. Try out new and specialized methods of
                    preparation, such as designing websites for nonprofits as a
                    volunteer or producing YouTube videos to explain concepts.
                    Experimenting outside of your comfort zone allows you to
                    find opportunities that will help you achieve greater
                    heights. You will gain self-assurance so that when you
                    encounter new difficulties in college (such as a specific
                    programming error), you understand that it will take some
                    time for you to resolve them and continue to be motivated.
                  </p>
                  <li style={{ fontWeight: "bold" }}>
                    It's a lifestyle, not a competition.
                  </li>
                  <p>
                    The goal isn't to beat out everyone else to get first class
                    honors; take a moment to unwind. You find meaning in
                    computer science through the learning and degree-acquiring
                    processes; any accomplishments are a bonus. It's about the
                    relationships you build, the obstacles you overcome, and
                    your personal development. That is what inspires you to
                    pursue a career in computer science.
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

export default ComputerScience;
