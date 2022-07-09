import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Programs from "./components/Programs";
import About from "./components/About";
import Contact from "./components/Contact";
import Physics from "./pages/Physics";
import MotionOneD from "./components/MotionOneD";
import './App.css';
import Vectors from "./components/Vectors";
import Measurement from "./components/Measurement";
import OnlineTutors from "./components/OnlineTutors";
import UserRegister from "./components/UserRegister";
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







export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}> </Route>
        <Route path="programs" element={<Programs />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="questions" element={<CourseQuestions />}></Route>
        <Route path="online_tutor" element={<OnlineTutors />}></Route>
        <Route path="user_register" element={<UserRegister />}></Route>
        <Route path="web_development" element={<WebCart />}></Route>
        <Route path="graphic/designing" element={<GraphicDesignCart />}></Route>
        <Route path="app/development" element={<AppDevCart />}></Route>
        <Route path="data/science" element={<DataScienceCart />}></Route>
        <Route path="machine/learning" element={<MachineLearningCart />}></Route>
        <Route path="artificial/intelligence" element={<AIcart />}></Route>
        <Route path="python" element={<PythonCart />}></Route>
        <Route path="c++" element={<CplusLanguageCart />}></Route>
        <Route path="java" element={<JavaCart />}></Route>
        <Route path="vectors" element={<Vectors />}></Route>
        <Route path="measurements" element={<Measurement />}></Route>
        <Route path="motion1D" element={<MotionOneD />}></Route>
        <Route path="Contact-us" element={<Contact />}></Route>
        <Route path="physics" element={<Physics />}></Route>
        <Route path="privacy_policy" element={<Privacy />}></Route>
        <Route path="/physics/questions" element={<PhysicsTopicsPage />}></Route>
        <Route path="/physics/measurement" element={<PhysicsAndMeasurement />}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}