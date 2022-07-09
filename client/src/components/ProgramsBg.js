import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProgramsBg() {
    return(
        
  <div>
    
    <Card>
  <Card.Img src="/img/programBg.jpg"  className="programBg" alt="Card image" />
  <Card.ImgOverlay className="linearBgCopy">

  </Card.ImgOverlay>
  <Card.ImgOverlay className="centered  ">
     <Card.Title className="mainText">Education is the key to success.</Card.Title>
    <Card.Text className="headText">
    Making an impact in Classrooms and Communities.
    </Card.Text>
    
    <Link to ="/"><button type="button" class="btn btnBg">Newsletter Subscribe</button></Link>
  </Card.ImgOverlay>
</Card> 

    </div>
        
  
        
    
    );
}

export default ProgramsBg;