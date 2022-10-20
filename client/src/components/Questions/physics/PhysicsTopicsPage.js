import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer";
import NavBar from "../../Navbar";

function PhysicsTopicsPage() {
  const Topics = [
    {
      id: 1,
      topic: "PHYSICS AND MEASUREMENT",
      link: "/physics/measurement",
      
    },
    {
      id: 2,
      topic: "MOTION IN ONE DIMENSION",
      link: "/motion-in-one-dimension",
    },
    {
      id: 3,
      topic: "VECTORS",
      link: "/physics/vectors",
    },
    {
      id: 4,
      topic: "MOTION IN TWO DIMENSIONS",
      link: "/physics/motion-two-dimensions",
    },
    {
      id: 5,
      topic: "THE LAW OF MOTION",
      link: "/physics/law-of-motion",
    },
    {
      id: 6,
      topic: "CIRCULAR MOTION AND OTHER APPLICATION OF NEWTON'S LAW",
      link: "/physics/circular-motion",
    },
    {
      id: 7,
      topic: "WORK AND KINETIC ENERGY  ",
      link: "/physics/work-and-kinetic-energy",
    },
    {
      id: 8,
      topic: "LINEAR MOMENTUM ",
      link: "/physics/linear-momentum",
    },
    {
      id: 9,
      topic: "ROTATIONAL MOTION",
      link: "/physics/rotational-motion",
    },
    {
      id: 10,
      topic: "STATIC EQUILIBRIUM AND ELASTICITY ",
      link: "/physics/static-equilibrium/elasticity",
    },
    
    {
      id: 11,
      topic: "FLUID MECHANICS",
      link: "/physics/fluid-mechanics",
    },
    {
      id: 12,
      topic: "OSCILLATIONS AND WAVES",
      link: "/physics/oscillations-and-waves",
    },

    {
      id: 13,
      topic: "SOUND WAVES",
      link: "/physics/sound-waves",
    },
    {
      id: 14,
      topic: "TEMPERATURE AND KINETIC THEORY",
      link: "/physics/temperature-and-kinetic-theory",
    },
    {
      id: 15,
      topic: "HEAT",
      link: "/physics/heat",
    },
 
    {
      id: 16,
      topic: " THE LAWS OF THERMODYNAMICS",
      link: "/physics/laws-of-thermodynamics"
    },
    {
      id: 17,
      topic: "ELECTRIC CHARGE AND ELECTRIC FIELDS",
      link: "/physics/electric-charge-and-electric-field",
    },
    
    {
      id: 18,
      topic: "ELECTRIC POTENTIAL",
      link: "/physics/electric-potential",
    },
    {
      id: 19,
      topic: "ELECTRIC CURRENTS",
      link: "/physics/electric-currents",
    },
    {
      id: 20,
      topic: "DC CIRCUITS",
      link: "/physics/dc-circuits",
    },
    {
      id: 28,
      topic: "MAGNETISM",
      link: "/physics/magnetism",
    },
   
    {
      id: 29,
      topic: "ELECTROMAGNETIC INDUCTION AND FARADAY'S LAW",
      link: "/physics/electromagnetic/induction-and-faradays-law",
    },
    
    
    {
      id: 30,
      topic: "ELECTROMAGNETIC WAVES",
      link: "/physics/electromagnetic-waves",
    },
    {
      id: 31,
      topic: "GEOMETRIC OPTICS",
      link: "/physics/geometric-optics",
    },
    {
      id: 35,
      topic: "THE WAVE NATURE OF LIGHT",
      link: "/physics/wave-nature-of-light",
    },
    {
      id: 36,
      topic: "OPTICAL INSTRUMENTS",
      link: "/physics/optical-instruments",
    },
    // {
    //   id: 37,
    //   topic: "RELATIVITY",
    //   link: "#",
    // },
  ];

  return (
    <div>
      <NavBar />
      <div
        className="container mt-5 mb-5 p-3"
      
      >
        <h6 className="topics-border-btn">Topics</h6>
        {Topics.map((topic) => (
          <div>
            <Link to={topic.link} style={{textDecoration:"none"}}>
              <p key={topic.id}className = "p-1   topic-hover" v> {topic.topic}</p>
            </Link>
           
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default PhysicsTopicsPage;
