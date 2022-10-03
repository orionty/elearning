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
import ComputerEngineering from "./pages/ComputerEngineering";
import Statistics from "./pages/Statistics";
import ElectricalEngineering from "./pages/ElectricalEngineering";
import ActuarialScience from "./pages/ActuarialScience";
import Biochemistry from "./pages/Biochemistry";
import Optometry from "./pages/Optometry";
import Economics from "./pages/Economics";
import Forum from "./components/Forum";
import TermOfUse from "./components/policies/TermOfUse";

export default function App() {
  return (
    <BrowserRouter basename={"/elearning"}>
      <Routes>
        <Route path="/" element={<Homepage />}>
          {" "}
        </Route>
        <Route path="programs" element={<Programs />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="discussion" element={<Forum />}></Route>
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
        <Route path="biology" element={<Biology />}></Route>
        <Route path="computer_science" element={<ComputerScience />}></Route>
        <Route
          path="computer_engineering"
          element={<ComputerEngineering />}
        ></Route>
        <Route path="statistics" element={<Statistics />}></Route>
        <Route
          path="electrical_engineering"
          element={<ElectricalEngineering />}
        ></Route>
        <Route path="actuarial_science" element={<ActuarialScience />}></Route>
        <Route path="biochemistry" element={<Biochemistry />}></Route>
        <Route path="optometry" element={<Optometry />}></Route>
        <Route path="economics" element={<Economics />}></Route>
        <Route path="privacy_policy" element={<Privacy />}></Route>
        <Route path="term-of-use" element={<TermOfUse />}></Route>
        <Route path="physics/questions" element={<PhysicsTopicsPage />}></Route>
        <Route
          path="physics/measurement"
          element={<PhysicsAndMeasurement />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
