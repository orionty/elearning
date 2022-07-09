import React from "react";
import Footer from "../components/Footer";
import PagesNavBar from "../components/PagesNavBar";


class Physics extends React.Component{

    openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
    }
    closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
    }
   
    render()
    {
        return(

            <div>
                <section>
                <div id="mySidenav" class="sidenav">
      <a href  class="closebtn" style={{cursor:"pointer"}} onClick={this.closeNav}>&times;</a>
      <a href="/"  style={{fontWweight: "bold"}}>PART 1 MECHANICS</a>
      <a href="/measurements">Physics and Measurement</a>
      <a href="/motion1D">Motion in One Dimension</a>
      <a href="/vectors">Vectors</a>
      <a href="/">Motion in Two Dimensions</a>
      <a href="/">The Law of Motion</a>
      <a href="/">Circular Motion and Other Application of Newton's Laws</a>
      <a href="/">Energy of a System</a>
      <a href="/">Static Electrticity</a>
      <a href="/">Linear Momentum and Collisions</a>
      <a href="/">Rotation of a Rigid Object About a Fixed Axis</a>
      <a href="/">Angular Momentum</a>
      <a href="/">Static Equilibrium and Elasticity</a>
      <a href="/">Universal Gravitation</a>
      <a href="/">Fluid Mechanics</a>
      <a href="/"  style={{fontWweight: "bold"}}>PART 2 OSCILLATIONS AND MECHANICAL WAVES</a>
      <a href="/">Oscillatory Motion</a>
      <a href="/">Wave Motion</a>
      <a href="/">Superposition and Standing Waves</a>
      <a href="/">Sound Waves</a>
      <a href="/"  style={{fontWweight: "bold"}}>PART 3 THERMODYNAMICS</a>
      <a href="/">Temperature</a>
      <a href="/">The First Law of Thermodynamics</a>
      <a href="/">The Kinetic Theory of Gases</a>
      <a href="/">Heat Engines,Entropy and The Second Law of THERMODYNAMICS</a>
      <a href="/"  style={{fontWweight: "bold"}}>PART 4 ELECTRICITY AND MAGNETISM</a>
      <a href="/">Electric Fields</a>
      <a href="/">Gauss's Law</a>
      <a href="/">Electric Potential</a>
      <a href="/">Capacitance and Dielectrics</a>
      <a href="/">Current and Resistance</a>
      <a href="/">Direct Current Circuits</a>
      <a href="/">Magnetic Fields</a>
      <a href="/">Sources of the Magnetic Field</a>
      <a href="/">Faraday's Law</a>
      <a href="/">Alternating Current Circuits</a>
      <a href="/">Electromagnetic Waves</a>
      <a href="/" style={{fontWweight: "bold"}}>PART 5 LIGHT AND OPTICS</a>
      <a href="/">The Nature of Light and the Laws of Geometric Optics</a>
      <a href="/">Image Formation</a>
      <a href="/">Interference of Light Waves</a>
      <a href="/">Diffraction Patterns and Polarization</a>
      <a href="/"  style={{fontWweight: "bold"}}>PART 6 MODERN PHYSICS</a>
      <a href="/">Relativity</a>

    </div>
                </section>
                    {/* top navbar */}
     <nav class="navbar navbar-expand-lg navbar-dark  navBarTop ">
        <div class="container-fluid opacity-75">
          <span style={{fontSize:"20px",cursor:"pointer",color: "white"}} onClick={this.openNav}>&#9776; Menu</span>
        </div>
      </nav>

           <PagesNavBar />
            {/* Physics Content */}
           <section>
               {/* short words */}
         <section class="container-fluid">
   <hr />
     <div>
      <h5 style={{color: "red", fontWeight:  "15px" }}>What is physics</h5>
       <p>Physics, the most fundamental physical science is concerned with the fundamental principles of the universe. It is the foundation upon
          which the other sciences-astronomy, biology, chemistry and geology are based. 
          The beauty of physics lies in the simplicity of its fundamental
          principles and in the manner in which just a small number of concepts and models can alter and expand our view of the world around us.
      </p>
     </div>
  
        </section>

   <section class="container-fluid"> 
       {/* How to study  */}
     <div>
       <h5 style={{color: "red", fontWeight:  "15px" }}>How to study</h5>
       <p>Instructors are often asked, "How should I study physics and prepare for examinations?" There is no simple answer to this question, but we can offer some suggestions based
          on our own experiences in learning and teaching over the years.First and foremost, maintain a positive attitude toward the subject matter, keeping in mind that physics is 
          the most fundamental of all natural sciences. Other science courses that follow will use the same physical principles, so it important
           that you understand and a ble to apply the various concepts and theories discussed in the text.
       </p>
     </div>
     
   </section>          

   <section class="container-fluid">
     <div>
      <h5 style={{color: "red", fontWeight:  "15px" }}>Concepts and principles</h5>
       <p>It is essential that you understand the basic concepts and principles before attempting to solve assigned problems. You can best accomplish this goal
         by carefully reading our notes before you attend your lecture on the covered material. We have worked hard to prepare questions that help you judge for yourself how well
         you understand the material. The pitfall preventions will also help guide you away from common misunderstandings about physics. During class, take careful notes and ask questions
        about those ideas that are unclear to you. Keep in mind that few people are able to to absorb the full meaning of scientific material after only one reading; several readings of the text and your notes may be necessary.
        You should minimize your memorization of the material. Successful memorization of the passages of the text, equations and derivations does not necessarily indicate that you
        understand the material. Your understanding of the material will be enhanced through a combination of efficient study habits, discussions with other students and with instructors,
        and ask questions whenever you believe that clarification of a concept is necessary. </p>
     </div>
     
   </section>

    {/* Preparation for this course  */}
   <section class="container-fluid">
     <div>
      <h5 style={{color: "red", fontWeight:  "15px" }}>Preparation for this course</h5>
       <p>If you had high school physics, you will probably learn concepts faster than those who have not because you will be familiar with the language of physics. If English is a second language for you, keep a glossary of new terms that you
        encounter and make sure you understand how they are used in physics. Likewise, if you are farther along in your mathematics courses, you will pick up the mathematical aspects of physics faster.</p>
     </div>
   </section>

    {/* Six main areas in physics  */}
   <section  class="container-fluid">
     <div>
       <p>The study of physics can be divided into six main areas: </p>
       <ol>
         <li>classical mechanics, concerning the motion of objects that are large relative to atoms and move at speeds much slower than the speed of light.</li>
         <li>relativity, a theory describing objects moving at any speed, even speeds approaching the speed of light.</li>
         <li>thermodynamics, dealing with heat, work, temperature, and the statistical behavior of systems with large numbers of particles.</li>
         <li>electromagnetism, concerned with electricity, magnetism, and electromagnetism fields.</li>
         <li>optics, the study of the behavior of light and its interaction with materials.</li>
         <li>quantum mechanics, a collection of theories connecting the behavior of matter at the submicroscopic level to macroscopic observations.</li>
       </ol>
     </div>
  
   </section>

           </section>
           <br />
           <br />
            <Footer />
            </div>
        );
    }
}

export default Physics;