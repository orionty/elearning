import React from "react";


class TopicNavBar extends React.Component{

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
      <a href="/">Vectors</a>
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

            </div>
        );
    }
}

export default  TopicNavBar;