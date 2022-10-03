import React from "react";
import { Card } from "react-bootstrap";


function ProgramsBg() {
    return(
        
  <div>
    
    <Card>
  <Card.Img src="img/programBg.jpg"  className="programBg" alt="Card image" />
  <Card.ImgOverlay className="linearBgCopy">

  </Card.ImgOverlay>
  <Card.ImgOverlay className="centered  ">
     <Card.Title className="mainText">Education is the key to success.</Card.Title>
    <Card.Text className="headText">
    Making an impact in Classrooms and Communities.
    </Card.Text>
    
    <button type="button" class="btn btnBg">Newsletter Subscribe</button>
  </Card.ImgOverlay>
</Card> 

    </div>
        
  
        
    
    );
}

export default ProgramsBg;