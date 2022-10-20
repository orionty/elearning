import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Programs from "./components/Programs";
import About from "./components/About";
import Contact from "./components/Contact";
import Physics from "./pages/Physics";
import "./App.css";
import OnlineTutors from "./components/OnlineTutors";
import WebCart from "./components/Carts/WebCart";
import GraphicDesignCart from "./components/Carts/GraphicDesignCart";
import AppDevCart from "./components/Carts/AppDevCart";
import DataScienceCart from "./components/Carts/DataScienceCart";
import AIcart from "./components/Carts/AIcart";
import PythonCart from "./components/Carts/PythonCart";
import CplusLanguageCart from "./components/Carts/CplusLanguageCart";
import JavaCart from "./components/Carts/JavaCart";
import MachineLearningCart from "./components/Carts/MachineLearningCart";
import CourseQuestions from "./components/CourseQuestions.js";
import Privacy from "./components/policies/Privacy";
import PhysicsTopicsPage from "./components/Questions/physics/PhysicsTopicsPage";
import PhysicsAndMeasurement from "./components/Questions/physics/PhysicsAndMeasurment";
import Chemistry from "./pages/chemistry";
import Mathematics from "./pages/maths";
import Biology from "./pages/Biology";
import ComputerScience from "./pages/ComputerScience";
// import ComputerEngineering from "./pages/ComputerEngineering";
import Statistics from "./pages/Statistics";
// import ElectricalEngineering from "./pages/ElectricalEngineering";
import ActuarialScience from "./pages/ActuarialScience";
// import Biochemistry from "./pages/Biochemistry";
import Optometry from "./pages/Optometry";
// import Economics from "./pages/Economics";

import TermOfUse from "./components/policies/TermOfUse";
import Copyright from "./components/policies/Copyright";
import MotionOneDimension from "./components/Questions/physics/MotionOneDimension";
import Vectors from "./components/Questions/physics/Vectors";
import MotionTwoDimension from "./components/Questions/physics/MotionTwoDimension";
import LawOfMotion from "./components/Questions/physics/LawOfMotion";
import CircularMotion from "./components/Questions/physics/CircularMotion";
import WorkAndKineticEnergy from "./components/Questions/physics/WorkAndKineticEnergy";
import LinearMomentum from "./components/Questions/physics/LinearMomentum";
import RotationalMotion from "./components/Questions/physics/RotationalMotion";
import Elasticity from "./components/Questions/physics/Elasticity";
import FluidMechanics from "./components/Questions/physics/FluidMechanics";
import OscillationAndWaves from "./components/Questions/physics/OscillatonAndWaves";
import SoundWaves from "./components/Questions/physics/SoundWaves";
import TemperatureAndKineticTheory from "./components/Questions/physics/TemperatureAndKineticTheory";
import Heat from "./components/Questions/physics/Heat";
import LawsOfThermodynamics from "./components/Questions/physics/LawsOfThermodynamics";
import ElectricFields from "./components/Questions/physics/ElectricFields";
import ElectricPotential from "./components/Questions/physics/ElectricalPotential";
import ElectricCurrents from "./components/Questions/physics/ElectricCurrents";
import DcCircuits from "./components/Questions/physics/DcCircuits";
import Magnetism from "./components/Questions/physics/Magnetsim";
import Induction from "./components/Questions/physics/Induction";
import ElectromagneticWaves from "./components/Questions/physics/ElectromagneticWaves";
import GeometricOptics from "./components/Questions/physics/GeometricOptics";
import WaveNatureOfLight from "./components/Questions/physics/WaveNatureOfLight";
import OpticalInstruments from "./components/Questions/physics/OpticalInstruments";
import ComputerScienceTopics from "./components/Questions/computer_science/ComputerScienceTopics";
import NetworkModels from "./components/Questions/computer_science/NetworkModels";
import NetworkingBasics from "./components/Questions/computer_science/NetworkingBasics";
import PhysicalLayer from "./components/Questions/computer_science/PhysicalLayer";
import ApplicationLayer from "./components/Questions/computer_science/ApplicationLayer";
import DataLinkLayer from "./components/Questions/computer_science/DataLinkLayer";
import TransmissionMedia from "./components/Questions/computer_science/TransmissionMedia";
import NetworkLayer from "./components/Questions/computer_science/NetworkLayer";
import Multiplexing from "./components/Questions/computer_science/Multiplexing";
import TransportLayer from "./components/Questions/computer_science/TransportLayer";
import ClientServerModel from "./components/Questions/computer_science/ClientServerModel";
import NetworkSecurity from "./components/Questions/computer_science/NetworkSecurity";
import NetworkAttacks from "./components/Questions/computer_science/NetworkAttacks";




export default function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Homepage />}>
          {" "}
        </Route>
        <Route path="courses" element={<Programs />}></Route>
        <Route path="about" element={<About />}></Route>
        
        <Route path="questions" element={<CourseQuestions />}></Route>
        <Route path="online_tutor" element={<OnlineTutors />}></Route>
        <Route path="web_development" element={<WebCart />}></Route>
        <Route path="graphic/designing" element={<GraphicDesignCart />}></Route>
        <Route path="app/development" element={<AppDevCart />}></Route>
        <Route path="data/science" element={<DataScienceCart />}></Route>
        <Route
          path="machine/learning"
          element={<MachineLearningCart />}
        ></Route>
        <Route path="artificial/intelligence" element={<AIcart />}></Route>
        <Route path="python" element={<PythonCart />}></Route>
        <Route path="c++" element={<CplusLanguageCart />}></Route>
        <Route path="java" element={<JavaCart />}></Route>
        <Route path="Contact-us" element={<Contact />}></Route>
        <Route path="physics" element={<Physics />}></Route>
        <Route path="chemistry" element={<Chemistry />}></Route>
        <Route path="maths" element={<Mathematics />}></Route>
        <Route path="statistics" element={<Statistics />}></Route>
        <Route path="actuarial_science" element={<ActuarialScience />}></Route>
        <Route path="biology" element={<Biology />}></Route>
        <Route path="optometry" element={<Optometry />}></Route>
        <Route path="computer_science" element={<ComputerScience />}></Route>
        {/*
        
        <Route path="computer_engineering" element={<ComputerEngineering />}
        ></Route>
        
        <Route path="electrical_engineering"  element={<ElectricalEngineering />}
        ></Route>
        
        <Route path="biochemistry" element={<Biochemistry />}></Route>
        <Route path="economics" element={<Economics />}></Route> */}
        <Route path="privacy_policy" element={<Privacy />}></Route>
        <Route path="term-of-use" element={<TermOfUse />}></Route>
        <Route path="disclaimer" element={<Copyright />}></Route>
        <Route path="physics/questions" element={<PhysicsTopicsPage />}></Route>
        <Route path="computer_science/questions" element={<ComputerScienceTopics />}></Route>
        <Route path="physics/measurement" element={<PhysicsAndMeasurement />} ></Route>
        <Route path="motion-in-one-dimension" element={<MotionOneDimension />} ></Route>
        <Route path="physics/vectors" element={<Vectors />} ></Route>
        <Route path="physics/law-of-motion" element={<LawOfMotion />} ></Route>
        <Route path="physics/circular-motion" element={<CircularMotion />} ></Route>
        <Route path="physics/work-and-kinetic-energy" element={<WorkAndKineticEnergy />} ></Route>
        <Route path="physics/motion-two-dimensions" element={<MotionTwoDimension />} ></Route>
        <Route path="physics/linear-momentum" element={<LinearMomentum />} ></Route>
        <Route path="physics/rotational-motion" element={<RotationalMotion />} ></Route>
        <Route path="physics/static-equilibrium/elasticity" element={<Elasticity />} ></Route>
        <Route path="physics/fluid-mechanics" element={<FluidMechanics />} ></Route>
        <Route path="physics/oscillations-and-waves" element={<OscillationAndWaves />} ></Route>
        <Route path="physics/sound-waves" element={<SoundWaves />} ></Route>
        <Route path="physics/heat" element={<Heat />} ></Route>
        <Route path="physics/laws-of-thermodynamics" element={<LawsOfThermodynamics />} ></Route>
        <Route path="physics/electric-charge-and-electric-field" element={<ElectricFields />} ></Route>
        <Route path="physics/electric-potential" element={<ElectricPotential />} ></Route>
        <Route path="physics/electric-currents" element={<ElectricCurrents />} ></Route>
        <Route path="physics/dc-circuits" element={<DcCircuits />} ></Route>
        <Route path="physics/magnetism" element={<Magnetism />} ></Route>
        <Route path="physics/electromagnetic/induction-and-faradays-law" element={<Induction />} ></Route>
        <Route path="physics/temperature-and-kinetic-theory" element={<TemperatureAndKineticTheory />} ></Route>
        <Route path="physics/electromagnetic-waves" element={<ElectromagneticWaves />} ></Route>
        <Route path="physics/geometric-optics" element={<GeometricOptics />} ></Route>
        <Route path="physics/wave-nature-of-light" element={<WaveNatureOfLight />} ></Route>
        <Route path="physics/optical-instruments" element={<OpticalInstruments />} ></Route>
        <Route path="computer_science/network-models" element={<NetworkModels />} ></Route>
        <Route path="computer_science/networking-basics" element={<NetworkingBasics />} ></Route>
        <Route path="computer_science/physical-layer" element={<PhysicalLayer />} ></Route>
        <Route path="computer_science/application-layer" element={<ApplicationLayer />} ></Route>
        <Route path="computer_science/data-link-layer" element={<DataLinkLayer />} ></Route>
        <Route path="computer_science/transmission-media" element={<TransmissionMedia />} ></Route>
        <Route path="computer_science/network-layer" element={<NetworkLayer />} ></Route>
        <Route path="computer_science/multiplexing" element={<Multiplexing />} ></Route>
        <Route path="computer_science/transport-layer" element={<TransportLayer />} ></Route>
        <Route path="computer_science/client-server-model" element={<ClientServerModel />} ></Route>
        <Route path="computer_science/network-security" element={<NetworkSecurity />} ></Route>
        <Route path="computer_science/network-attacks" element={<NetworkAttacks />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}
