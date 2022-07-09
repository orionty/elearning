import React from "react";
import ProgramsBg from "./ProgramsBg";
import Footer from "./Footer";
import Courses from "./Courses";
import NavBar from "./Navbar"



function Programs(){
    return(
        <div>
            <NavBar />
            <ProgramsBg />
            <Courses />
            <Footer />
        </div>
    );
}

export default Programs;