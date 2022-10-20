import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer";
import NavBar from "../../Navbar";

function ComputerScienceTopics() {
  const Topics = [
    {
      id: 0,
      topic: "DATA COMMUNICATION AND NETWORKING",
      link: "#",
      
    },
    {
      id: 1,
      topic: "Network Models",
      link: "/computer_science/network-models",
      
    },
    {
      id: 2,
      topic: "Networking Basics",
      link: "/computer_science/networking-basics",
    },
    {
      id: 3,
      topic: "Physical Layer",
      link: "/computer_science/physical-layer",
    },
    {
      id: 4,
      topic: "Application Layer",
      link: "/computer_science/application-layer",
    },
    {
      id: 5,
      topic: "Data Link Layer",
      link: "/computer_science/data-link-layer",
    },
    {
      id: 6,
      topic: "Transmission Media",
      link: "/computer_science/transmission-media",
    },
    {
      id: 7,
      topic: "Network Layer  ",
      link: "/computer_science/network-layer",
    },
    {
      id: 8,
      topic: "Multiplexing ",
      link: "/computer_science/multiplexing",
    },
    {
      id: 9,
      topic: "Transport Layer ",
      link: "/computer_science/transport-layer",
    },
    {
      id: 10,
      topic: "Client Server Model ",
      link: "/computer_science/client-server-model",
    },
    {
      id: 11,
      topic: "Network Security ",
      link: "/computer_science/network-security",
    },
    {
      id: 12,
      topic: "Network Attacks ",
      link: "/computer_science/network-attacks",
    },
    
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
              <p key={topic.id} className = "p-1   topic-hover" > {topic.topic}</p>
            </Link>
           
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default ComputerScienceTopics;
