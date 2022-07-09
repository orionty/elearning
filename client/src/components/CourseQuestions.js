import React from "react";
import { CardGroup,Card,Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./Navbar";



function CourseQuestions() { 
    return(
  <div>
    <NavBar />
    <br />
    <div className="container">
    <p className=" text-uppercase fw-bold borderBtn" style={{color:"navy"}}>questions for each program</p>
      
    </div>
     
      <br />
     <div className="container shadow p-3 mb-5 bg-body rounded">
      <section >
    <CardGroup className="container">
  <Card className=" shadow-lg p-0 mb-5 bg-body rounded me-2" style={{cursor:"pointer"}}> 
  <Link to ="/physics/questions"><Card.Img variant="top" src="img/physics-icon1.png" alt="Physics" className="rounded pt-2" style={{objectFit:"contain",height:150}}></Card.Img></Link>
    <Card.Body >
      <Card.Title className="fs-6 text-center"><Link to ="/physics/questions" className="text-decoration-none " style={{color:"navy"}}>PHYSICS</Link></Card.Title>
     
    </Card.Body>
    
  </Card>
  <Card className=" shadow-lg p-0 mb-5 bg-body rounded me-2" style={{cursor:"pointer"}}> 
    <Card.Img variant="top" src="/Img/chemistry-icon1.png" alt="Chemistry"  className="rounded" style={{objectFit:"contain",height:150}}></Card.Img>
    <Card.Body >
      <Card.Title className="fs-6 text-center" style={{color:"navy"}}>CHEMISTRY</Card.Title>
     
      </Card.Body>

  </Card>
  <Card className=" shadow-lg p-0 mb-5 bg-body rounded me-2" style={{cursor:"pointer"}}>
    <Card.Img variant="top" src="Img/math-icon1.png" alt="Maths" className="rounded" style={{objectFit:"contain",height:150}}></Card.Img>
    <Card.Body >
      <Card.Title className="fs-6 text-center" style={{color:"navy"}}>MATHEMATICS</Card.Title>
      
    </Card.Body>
    
  </Card>
  <Card className=" shadow-lg p-0 mb-5 bg-body rounded me-2" style={{cursor:"pointer"}}>
    <Card.Img variant="top" src="Img/biology-icon.png" alt="Biology" className="rounded pt-2"style={{objectFit:"contain",height:150}}></Card.Img>
    <Card.Body >
      <Card.Title className="fs-6 text-center" style={{color:"navy"}}>BIOLOGY</Card.Title>
      
    </Card.Body>
    
  </Card>
 

  
  <Card className=" shadow-lg p-0 mb-5 bg-body rounded me-2" style={{cursor:"pointer"}}> 
  <Link to ="/actuarial_science"><Card.Img variant="top" src="img/actuarial-icon.png"  alt="Actuarial Science" className="rounded"style={{objectFit:"contain",height:150}}></Card.Img></Link>
    <Card.Body >
    <Card.Title className="fs-6 text-center" style={{color:"navy"}}>ACTUARIAL SCIENCE</Card.Title>
    </Card.Body>
    
  </Card>

  <Card className=" shadow-lg p-0 mb-5 bg-body rounded me-2" style={{cursor:"pointer"}}> 
    <Card.Img variant="top" src="/Img/statistics.png" alt="Statistics" className="rounded "style={{objectFit:"contain",height:150}}></Card.Img>
    <Card.Body >
      <Card.Title className="fs-6 text-center" style={{color:"navy"}}>STATISTICS</Card.Title>
      
      </Card.Body>

  </Card>

</CardGroup>
    </section>
    <br />
    {/* second cards*/}
      <section>
    <CardGroup className="container ">
  <Card className=" shadow-lg p-0 mb-5 bg-body rounded me-2" style={{cursor:"pointer"}}>
    <Card.Img variant="top" src="Img/biochemistry-icon.png" alt="Biochemistry" className="rounded pt-2"style={{objectFit:"contain",height:150}} />
    <Card.Body >
      <Card.Title className="fs-6 text-center" style={{color:"navy"}}>BIOCHEMISTRY</Card.Title>
     
    </Card.Body>
    
  </Card>
  <Card className=" shadow-lg p-0 mb-5 bg-body rounded me-2" style={{cursor:"pointer"}}>
    <Card.Img variant="top" src="Img/electrical-engineering-icon1.png" alt="Electrical-engineering"  className="rounded"style={{objectFit:"contain",height:150}}/>
    <Card.Body>
      <Card.Title className="fs-6 text-center" style={{color:"navy"}}>ELECTRICAL ENGINEERING</Card.Title>
      
    </Card.Body>
    
  </Card>
 

  <Card className=" shadow-lg p-0 mb-5 bg-body rounded me-2" style={{cursor:"pointer"}}> 
  <Link to ="/computer_science"><Card.Img variant="top" src="img/computer-science.-icon1.png"  alt="Computer-Science" className="rounded pt-2"style={{objectFit:"contain",height:150}}/></Link>
    <Card.Body >
      <Card.Title className="fs-6  text-center"><Link to ="/computer_science" className="text-decoration-none " style={{color:"navy"}}>COMPUTER SCIENCE</Link></Card.Title>
      
    </Card.Body>
    
  </Card>
  
  <Card className=" shadow-lg p-0 mb-5 bg-body rounded me-2" style={{cursor:"pointer"}}> 
    <Card.Img variant="top" src="/Img/computer-engineering-icon.png" alt="Computer Engineering"  className="rounded"style={{objectFit:"contain",height:150}}/>
    <Card.Body>
      <Card.Title className="fs-6 text-center" style={{color:"navy"}}>COMPUTER ENGINEERING</Card.Title>
      
      </Card.Body>

  </Card>
  <Card className=" shadow-lg p-0 mb-5 bg-body rounded me-2" style={{cursor:"pointer"}}>
    <Card.Img variant="top" src="Img/Optometry-icon1.png"  alt="Optometry" className="rounded"style={{objectFit:"contain",height:150}}/>
    <Card.Body >
      <Card.Title className="fs-6 text-center" style={{color:"navy"}}>OPTOMETRY</Card.Title>
      
    </Card.Body>
    
  </Card>

  <Card className="shadow-lg p-0 mb-5 bg-body rounded me-2" style={{cursor:"pointer"}}>
    <Card.Img variant="top" src="Img/economics-icon1.png" alt="Economics"  className="rounded" style={{objectFit:"contain",height:150}}/>
    <Card.Body >
      <Card.Title className="fs-6 text-center" style={{color:"navy"}}>ECONOMICS</Card.Title>
      
    </Card.Body>
    
  </Card>
</CardGroup>
    </section>
      
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
              <img src={`${process.env.PUBLIC_URL}/img/web-design.jpg`} className="rounded popular-hover"  alt="" />
              <div className="caption-container">
                <h4 style={{color: "rgb(2, 2, 105)", fontSize: "25px", fontWeight: "bold"}}>$200</h4>
                  <h4 style={{color: "rgb(2, 2, 105)", fontSize: "18px", fontWeight: "bold"}}>Web Development</h4>
                  <h5 style={{fontWeight: "normal", opacity: 0.8, fontSize: "12px"}}>Basic to professional web development</h5>
              </div>
              
            </div>
            <div className="column-container shadow p-3 mb-5 bg-body rounded">
              <img src={`${process.env.PUBLIC_URL}/img/graphic-design.jpg`} className="rounded popular-hover" alt="" />
              <div class="caption-container">
                <h4 style={{color: "rgb(2, 2, 105)", fontSize: "25px", fontWeight: "bold"}}>$200</h4>
                  <h4 style={{color: "rgb(2, 2, 105)", fontSize: "18px", fontWeight: "bold"}}>Graphic Designing</h4>
                  <h5 style={{fontWeight: "normal", opacity: 0.8, fontSize: "12px"}}>Basic to professional graphic designing</h5>
              </div>
              
            </div>
            <div class="column-container shadow p-3 mb-5 bg-body rounded">
              <img src={`${process.env.PUBLIC_URL}/img/mobile-app-development.jpg`} class="rounded popular-hover" alt="" /> 
              <div class="caption-container">
                <h4 style={{color: "rgb(2, 2, 105)", fontSize: "25px", fontWeight: "bold"}}>$200</h4>
                  <h4 style={{color: "rgb(2, 2, 105)", fontSize: "18px", fontWeight: "bold"}}>App Development</h4>
                  <h5 style={{fontWeight: "normal", opacity: 0.8, fontSize: "12px"}}>Basic to professional app development</h5>
              </div>
              
            </div>
          </div>
        </div> 

  </Carousel.Item>


  <Carousel.Item>
  <div class="container">
        <div className="row-container">
            <div className="column-container shadow p-3 mb-5 bg-body rounded">
              <img src={`${process.env.PUBLIC_URL}/img/data-science.jpg`} className="rounded popular-hover"  alt="Data Science" />
              <div className="caption-container">
                <h4 style={{color: "rgb(2, 2, 105)", fontSize: "25px", fontWeight: "bold"}}>$200</h4>
                  <h4 style={{color: "rgb(2, 2, 105)", fontSize: "18px", fontWeight: "bold"}}>Data Science</h4>
                  <h5 style={{fontWeight: "normal", opacity: 0.8, fontSize: "12px"}}>Basic to professional data science</h5>
              </div>
              
            </div>
            <div className="column-container shadow p-3 mb-5 bg-body rounded">
              <img src={`${process.env.PUBLIC_URL}/img/Artificial-Intelligence.jpg`} className="rounded popular-hover" alt="Artificial Intelligence" />
              <div class="caption-container">
                <h4 style={{color: "rgb(2, 2, 105)", fontSize: "25px", fontWeight: "bold"}}>$200</h4>
                  <h4 style={{color: "rgb(2, 2, 105)", fontSize: "18px", fontWeight: "bold"}}>Artificial Intelligence</h4>
                  <h5 style={{fontWeight: "normal", opacity: 0.8, fontSize: "12px"}}>Basic to professional artificial intelligence</h5>
              </div>
              
            </div>
            <div class="column-container shadow p-3 mb-5 bg-body rounded">
              <img src={`${process.env.PUBLIC_URL}/img/machine-learning.jpg`} class="rounded popular-hover" alt="Machine Learning" /> 
              <div class="caption-container">
                <h4 style={{color: "rgb(2, 2, 105)", fontSize: "25px", fontWeight: "bold"}}>$200</h4>
                  <h4 style={{color: "rgb(2, 2, 105)", fontSize: "18px", fontWeight: "bold"}}>Machine Learning</h4>
                  <h5 style={{fontWeight: "normal", opacity: 0.8, fontSize: "12px"}}>Basic to professional machine learning</h5>
              </div>
              
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
              <img src={`${process.env.PUBLIC_URL}/img/python.png`} className="rounded popular-hover"  alt="Python" />
              <div className="caption-container">
                <h4 style={{color: "rgb(2, 2, 105)", fontSize: "25px", fontWeight: "bold"}}>$200</h4>
                  <h4 style={{color: "rgb(2, 2, 105)", fontSize: "18px", fontWeight: "bold"}}>Python</h4>
                  <h5 style={{fontWeight: "normal", opacity: 0.8, fontSize: "12px"}}>Basic to professional python</h5>
              </div>
              
            </div>
            <div className="column-container shadow p-3 mb-5 bg-body rounded">
              <img src={`${process.env.PUBLIC_URL}/img/c++.png`} className="rounded popular-hover" alt="c++" />
              <div class="caption-container">
                <h4 style={{color: "rgb(2, 2, 105)", fontSize: "25px", fontWeight: "bold"}}>$200</h4>
                  <h4 style={{color: "rgb(2, 2, 105)", fontSize: "18px", fontWeight: "bold"}}>C++</h4>
                  <h5 style={{fontWeight: "normal", opacity: 0.8, fontSize: "12px"}}>Basic to professional c++</h5>
              </div>
              
            </div>
            <div class="column-container shadow p-3 mb-5 bg-body rounded">
              <img src={`${process.env.PUBLIC_URL}/img/java.jpg`} class="rounded popular-hover" alt="java" /> 
              <div class="caption-container">
                <h4 style={{color: "rgb(2, 2, 105)", fontSize: "25px", fontWeight: "bold"}}>$200</h4>
                  <h4 style={{color: "rgb(2, 2, 105)", fontSize: "18px", fontWeight: "bold"}}>Java</h4>
                  <h5 style={{fontWeight: "normal", opacity: 0.8, fontSize: "12px"}}>Basic to professional java</h5>
              </div>
              
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
<Footer />
</div>
    );
}

export default CourseQuestions;