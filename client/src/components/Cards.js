import React from "react";
import { CardGroup,Card,Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";


function Cards() { 
    return(
  <div className="course-container">
     <p className="container text-center fw-bold" style={{color:"navy"}}>Please select a course you want to learn.</p>
   <hr />
      <section>
    <CardGroup className="container">
  <Card className=" shadow-lg p-0 mb-5 bg-body rounded me-2 " style={{cursor:"pointer"}}> 
  <Link to ="/physics"><Card.Img variant="top" src="img/physics-icon1.png"style={{objectFit:"contain",height:150}} className="rounded"/></Link>
    <Card.Body className="cardBg ">
      <Card.Title className="fs-6  text-center"><Link to ="/knust" className="text-decoration-none " style={{color:"navy"}}>PHYSICS</Link></Card.Title>
      <Card.Text className="headText">
      Quantum attention functions are the bridges between the mental and the physical.
      <span className="span">available now</span>
    </Card.Text>
    </Card.Body>
    
  </Card>
  <Card className=" shadow-lg p-0 mb-5 bg-body rounded me-2" style={{cursor:"pointer"}}> 
    <Card.Img variant="top" src="/Img/chemistry-icon1.png" style={{objectFit:"contain",height:150}} className="rounded"/>
    <Card.Body className="cardBg">
      <Card.Title className="fs-6  text-center" style={{color:"navy"}}>CHEMISTRY</Card.Title>
      <Card.Text className="headText">
      The stars are laboratories in which the evolution of matter proceeds in the direction of large molecules.
      <span className="span-coming-soon">coming soon</span>
    </Card.Text>
      </Card.Body>

  </Card>
  <Card className=" shadow-lg p-0 mb-5 bg-body rounded me-2" style={{cursor:"pointer"}}>
    <Card.Img variant="top" src="Img/math-icon1.png" style={{objectFit:"contain",height:150}} className="rounded pt-2"/>
    <Card.Body className="cardBg">
      <Card.Title className="fs-6  text-center" style={{color:"navy"}}>MATHEMATICS</Card.Title>
      <Card.Text className="headText">
      Mathematics is the most beautiful and most powerful creation of the human spirit.
      <span className="span-coming-soon">coming soon</span>
    </Card.Text>
    </Card.Body>
    
  </Card>
  <Card className=" shadow-lg p-0 mb-5 bg-body rounded me-2" style={{cursor:"pointer"}}>
    <Card.Img variant="top" src="Img/biology-icon.png" style={{objectFit:"contain",height:150}} className="rounded pt-3"/>
    <Card.Body className="cardBg">
      <Card.Title className="fs-6  text-center" style={{color:"navy"}}>BIOLOGY</Card.Title>
      <Card.Text className="headText">
      Our world is built on biology and once we begin to understand it, it then becomes a technology.
      <span className="span-coming-soon">coming soon</span>
    </Card.Text>
    </Card.Body>
    
  </Card>
 

  

</CardGroup>
    </section>
  <div class="container d-flex justify-content-end vMore"  style={{color:"navy",cursor:"pointer"}} >
  <Link to ="/programs"style={{textDecoration:"none"}}>view more&nbsp;&nbsp; <FaLongArrowAltRight /></Link>
  </div>

  <div className="container parent-container">
      
      <div className="child-container1  shadow p-3 mb-5 bg-body rounded text-center mt-3 eff">
      <h3 className="mt-5 pt-3 fw-bold ">Effective Learning And Teaching</h3>
      <p className="align-middle ">E-Learning gives you better thoughts, better ideas, 
        better solutions, better understanding, 
        better skills and better awareness</p>
        <a href="/user_register"> 
        <button type="button" class="btn shadow-lg mb-5 rounded-pill mt-5 p-2 fw-bold" style={{color:"white", backgroundColor:"navy"}}>Register Now</button>
        </a>
      </div>

      <div className="child-container2">
      <img src={`${process.env.PUBLIC_URL}/img/learningG.jpg`}  alt="learning-Groups" className="rounded learnImg" style={{width:'100%'}}/>
    </div>


      

  </div>

   <hr />
     
{/* Carousel cards */}
<section>
<div>
      <h3 class="container text-center mb-3 mt-3" style={{color: "rgb(2, 2, 105)"}}>Our popular courses</h3>
      <p class="text-center" style={{opacity: 0.9}}>Here is your favorite course that suits you. Pick the best course and get a better outcome.</p>
    </div>

    <Carousel>
  <Carousel.Item>
    
  <div class="container">
        <div className="row-container">
            <div className="column-container shadow p-3 mb-5 bg-body rounded">
              <a href="/web_development" className="text-decoration-none text-dark"> 
              
              <img src={`${process.env.PUBLIC_URL}/img/web-design.jpg`} className="rounded popular-hover"  alt="Web Development" />
              <div className="caption-container">
                <h4 style={{color: "rgb(2, 2, 105)", fontSize: "25px", fontWeight: "bold"}}>$125</h4>
                  <h4 style={{color: "rgb(2, 2, 105)", fontSize: "18px", fontWeight: "bold"}}>Web Development</h4>
                  <h5 style={{fontWeight: "normal", opacity: 0.8, fontSize: "12px"}}>Basic to professional web development</h5>
              </div>
              </a>
              
            </div>
            <div className="column-container shadow p-3 mb-5 bg-body rounded">
              <a  href="/graphic/designing" className="text-decoration-none text-dark">

              <img src={`${process.env.PUBLIC_URL}/img/graphic-design.jpg`} className="rounded popular-hover" alt="Graphic Designing" />
              <div class="caption-container">
                <h4 style={{color: "rgb(2, 2, 105)", fontSize: "25px", fontWeight: "bold"}}>$100</h4>
                  <h4 style={{color: "rgb(2, 2, 105)", fontSize: "18px", fontWeight: "bold"}}>Graphic Designing</h4>
                  <h5 style={{fontWeight: "normal", opacity: 0.8, fontSize: "12px"}}>Basic to professional graphic designing</h5>
              </div>
              </a>
              
            </div>
            <div class="column-container shadow p-3 mb-5 bg-body rounded">
              <a  href="/app/development" className="text-decoration-none text-dark">

              <img src={`${process.env.PUBLIC_URL}/img/mobile-app-development.jpg`} class="rounded popular-hover" alt="" /> 
              <div class="caption-container">
                <h4 style={{color: "rgb(2, 2, 105)", fontSize: "25px", fontWeight: "bold"}}>$200</h4>
                  <h4 style={{color: "rgb(2, 2, 105)", fontSize: "18px", fontWeight: "bold"}}>Mobile App Development</h4>
                  <h5 style={{fontWeight: "normal", opacity: 0.8, fontSize: "12px"}}>Basic to professional app development</h5>
              </div>
              </a>
              
            </div>
          </div>
        </div> 

  </Carousel.Item>


  <Carousel.Item>
  <div class="container">
        <div className="row-container">
            <div className="column-container shadow p-3 mb-5 bg-body rounded">
              <a  href="/data/science" className="text-decoration-none text-dark">

              <img src={`${process.env.PUBLIC_URL}/img/data-science.jpg`} className="rounded popular-hover"  alt="Data Science" />
              <div className="caption-container">
                <h4 style={{color: "rgb(2, 2, 105)", fontSize: "25px", fontWeight: "bold"}}>$150</h4>
                  <h4 style={{color: "rgb(2, 2, 105)", fontSize: "18px", fontWeight: "bold"}}>Data Science</h4>
                  <h5 style={{fontWeight: "normal", opacity: 0.8, fontSize: "12px"}}>Basic to professional data science</h5>
              </div>

              </a>
              
            </div>
            <div className="column-container shadow p-3 mb-5 bg-body rounded">
              <a  href="/artificial/intelligence" className="text-decoration-none text-dark">

              <img src={`${process.env.PUBLIC_URL}/img/Artificial-Intelligence.jpg`} className="rounded popular-hover" alt="Artificial Intelligence" />
              <div class="caption-container">
                <h4 style={{color: "rgb(2, 2, 105)", fontSize: "25px", fontWeight: "bold"}}>$165</h4>
                  <h4 style={{color: "rgb(2, 2, 105)", fontSize: "18px", fontWeight: "bold"}}>Artificial Intelligence</h4>
                  <h5 style={{fontWeight: "normal", opacity: 0.8, fontSize: "12px"}}>Basic to professional artificial intelligence</h5>
              </div>
              </a>
              
            </div>
            <div class="column-container shadow p-3 mb-5 bg-body rounded">
              <a  href="/machine/learning" className="text-decoration-none text-dark">

              <img src={`${process.env.PUBLIC_URL}/img/machine-learning.jpg`} class="rounded popular-hover" alt="Machine Learning" /> 
              <div class="caption-container">
                <h4 style={{color: "rgb(2, 2, 105)", fontSize: "25px", fontWeight: "bold"}}>$175</h4>
                  <h4 style={{color: "rgb(2, 2, 105)", fontSize: "18px", fontWeight: "bold"}}>Machine Learning</h4>
                  <h5 style={{fontWeight: "normal", opacity: 0.8, fontSize: "12px"}}>Basic to professional machine learning</h5>
              </div>
              </a>
              
            </div>
          </div>
        </div> 
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div class="container">
        <div className="row-container">
            <div className="column-container shadow p-3 mb-5 bg-body rounded">
              <a  href="/python" className="text-decoration-none text-dark">

              <img src={`${process.env.PUBLIC_URL}/img/python.png`} className="rounded popular-hover"  alt="Python" />
              <div className="caption-container">
                <h4 style={{color: "rgb(2, 2, 105)", fontSize: "25px", fontWeight: "bold"}}>$130</h4>
                  <h4 style={{color: "rgb(2, 2, 105)", fontSize: "18px", fontWeight: "bold"}}>Python</h4>
                  <h5 style={{fontWeight: "normal", opacity: 0.8, fontSize: "12px"}}>Basic to professional python</h5>
              </div>
              </a>
              
            </div>
            <div className="column-container shadow p-3 mb-5 bg-body rounded">
              <a  href="/c++" className="text-decoration-none text-dark">

              <img src={`${process.env.PUBLIC_URL}/img/c++.png`} className="rounded popular-hover" alt="c++" />
              <div class="caption-container">
                <h4 style={{color: "rgb(2, 2, 105)", fontSize: "25px", fontWeight: "bold"}}>$140</h4>
                  <h4 style={{color: "rgb(2, 2, 105)", fontSize: "18px", fontWeight: "bold"}}>C++</h4>
                  <h5 style={{fontWeight: "normal", opacity: 0.8, fontSize: "12px"}}>Basic to professional c++</h5>
              </div>
              </a>
              
            </div>
            <div class="column-container shadow p-3 mb-5 bg-body rounded">
              <a  href="/java" className="text-decoration-none text-dark">

              <img src={`${process.env.PUBLIC_URL}/img/java.jpg`} class="rounded popular-hover" alt="java" /> 
              <div class="caption-container">
                <h4 style={{color: "rgb(2, 2, 105)", fontSize: "25px", fontWeight: "bold"}}>$200</h4>
                  <h4 style={{color: "rgb(2, 2, 105)", fontSize: "18px", fontWeight: "bold"}}>Java</h4>
                  <h5 style={{fontWeight: "normal", opacity: 0.8, fontSize: "12px"}}>Basic to professional java</h5>
              </div>
              </a>
              
            </div>
          </div>
        </div> 

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
    </Carousel>
</section>
<br />
{/* Newsletter */}
<div class="custom-footer">
  <section class="subscription bg-white mt-4  justtify-content-center">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="subscription-wrapper">
                    <div class="d-flex subscription-content justify-content-between align-items-center flex-column flex-md-row text-center text-md-left">
                        <h3 class="flex-fill subText">Subscribe <br /> to our newsletter</h3>
                        <form action="#" class="row flex-fill">
                            <div class="col-lg-7 my-md-2 my-2"> <input type="email" class="form-control px-4 border-0 w-100 text-center text-md-left" id="email" placeholder="Your Email" name="email" /> </div>
                            <div class="col-lg-5 my-md-2 my-2"> <button type="submit" class="btn btnBgP btn-lg border-0 w-100 btnBgS">Subscribe Now</button> </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</div>

<br />
<br />
</div>
    );
}

export default Cards;