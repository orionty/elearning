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
    
    <a  href="https://web.facebook.com/profile.php?id=100039105502161"
                  target="_blank"
                  rel="noopener noreferrer">

    <button type="button" class="btn btnBg">ESURDE FORUM</button>
    </a>
  </Card.ImgOverlay>
</Card> 

    </div>
        
  
        
    
    );
}

export default ProgramsBg;