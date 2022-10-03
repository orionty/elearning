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
      link: "/motion/one/dimension",
    },
    {
      id: 3,
      topic: "VECTORS",
      link: "/vectors",
    },
    {
      id: 4,
      topic: "MOTION IN TWO DIMENSIONS",
      link: "/motion/two/dimension",
    },
    {
      id: 5,
      topic: "THE LAW OF MOTION",
      link: "/law/motion",
    },
    {
      id: 6,
      topic: "CIRCULAR MOTION AND OTHER APPLICATION OF NEWTON'S LAW",
      link: "/circular/motion",
    },
    {
      id: 7,
      topic: "ENERGY OF A SYSTEM",
      link: "/energy/system",
    },
    {
      id: 8,
      topic: "STATIC ELASTICITY",
      link: "/static/elasticity",
    },
    {
      id: 9,
      topic: "LINEAR MOMENTUM AND COLLISIONS",
      link: "/linear/momentum",
    },
    {
      id: 10,
      topic: "ROTATION OF A RIGID OBJECT ABOUT A FIXED AXIS",
      link: "/rigid/object",
    },
    {
      id: 11,
      topic: "ANGULAR MOMENTUM",
      link: "/angular/momentum",
    },
    {
      id: 12,
      topic: "STATIC EQUILIBRIUM AND ELASTICITY",
      link: "/static/elasticity",
    },
    {
      id: 13,
      topic: "UNIVERSAL GRAVITATION",
      link: "/universal/gravitation",
    },
    {
      id: 14,
      topic: "FLUID MECHANICS",
      link: "/fluid/mechanics",
    },
  ];

  return (
    <div>
      <NavBar />
      <div
        className="container mt-5 mb-5 p-3"
        style={{ backgroundColor: "rgb(237, 237, 246)" }}
      >
        <h6>Topics</h6>
        {Topics.map((topic) => (
          <div>
            <Link to={topic.link}>
              <p key={topic.id}> {topic.topic}</p>
            </Link>
           
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default PhysicsTopicsPage;
