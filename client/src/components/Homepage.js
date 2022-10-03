import React from "react";
import Background from "./Background";
import Cards from "./Cards";
import Footer from "./Footer";
import HomeSearchBar from "./HomeSearchBar";


function Homepage() {
    return(
        <div >
           <HomeSearchBar  />
           <Background />
           <Cards />
           <Footer />
        </div>

    );
}

export default Homepage;
