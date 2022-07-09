import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Background() {
    return(
        
  <div>
    
    <Card>
  <Card.Img src="/img/learnBg.png"  alt="Group Learning" />
  <Card.ImgOverlay className="linearBg">

  </Card.ImgOverlay>
  <Card.ImgOverlay className="centered  ">
     <Card.Title className="mainText">A great place for learning.</Card.Title>
    <Card.Text className="headText">
    The best and cheapest way of getting to know learning to make a better tomorrow.
    </Card.Text>
    
    <Link to ="/"><button type="button" class="btn btnBg">Get Started</button></Link>
  </Card.ImgOverlay>
</Card> 

    </div>
        
  
        
    
    );
}

export default Background;