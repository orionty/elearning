import React from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function MotionOneDimension() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid mt-5 mb-5 p-3">
        <h6>Motion In One Dimension </h6>
        <div>
          <ol>
            {/* Q1 */}
            <li>
              <p>
                How long does it take an object to travel a distance of 30m from
                rest at a constant acceleration of 2m/s<sup>2</sup>?
              </p>

              <>
                {["bottom"].map((placement) => (
                  <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                      <Popover
                        id={`popover-positioned-${placement}`}
                        className="container-fluid CustomPopover"
                      >
                        <Popover.Body>
                          <div className="container-fluid  p-1 mb-1 ">
                            <img
                              src={`${process.env.PUBLIC_URL}/img/m1q1.png`}
                              alt="motion in one dimension"
                              className="protect-image"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Button variant="success">solution</Button>
                  </OverlayTrigger>
                ))}
              </>
            </li>
            <br />
            {/* Q2 */}
            <li>
              <p>
                A stone is thrown vertically upwards with a initial speed of 10
                m/s from the edge of the roof of the house of Height H= 20m.(a)
                how long does it takes for the stone to hit the ground. (b) At
                what velocity it will hit the ground.
              </p>
              <>
                {["bottom"].map((placement) => (
                  <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                      <Popover
                        id={`popover-positioned-${placement}`}
                        className="container-fluid CustomPopover"
                      >
                        <Popover.Body>
                          <div className="container-fluid  p-1 mb-1 ">
                            <p>
                              (a) t=3.28s <br />
                              (b) v=-22.2 m/s
                            </p>
                          </div>
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Button variant="success">solution</Button>
                  </OverlayTrigger>
                ))}
              </>
            </li>
            <br />
            {/* Q3 */}
            <li>
              <p>
                A car brakes from a speed of 108 km/h to 72 km/h duing a
                displacement of 100m. What is its acceleration?
              </p>
              <>
                {["bottom"].map((placement) => (
                  <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                      <Popover
                        id={`popover-positioned-${placement}`}
                        className="container-fluid CustomPopover"
                      >
                        <Popover.Body>
                          <div className="container-fluid  p-1 mb-1 ">
                            <p>
                              This can be easily found using Third Kinematics
                              equations <br />v<sup>2</sup>= u<sup>2</sup>+ 2as{" "}
                              <br />a = -2.5 m/s<sup>2</sup>
                            </p>
                          </div>
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Button variant="success">solution</Button>
                  </OverlayTrigger>
                ))}
              </>
            </li>
            <br />
            {/* Q4 */}
            <li>
              <p>
                A person stands on the edge of a straight 20m-high cliff and
                holds a ball over the edge. The person tosses the ball directly
                upward with an initial speed of 5ms. How long will it take the
                ball to hit the ground at the base of the cliff, 20m below?
                Assume 10ms<sup>2</sup> for gravitational acceleration.
              </p>
              <>
                {["bottom"].map((placement) => (
                  <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                      <Popover
                        id={`popover-positioned-${placement}`}
                        className="container-fluid CustomPopover"
                      >
                        <Popover.Body>
                          <div className="container-fluid  p-1 mb-1 ">
                            <img
                              src={`${process.env.PUBLIC_URL}/img/m1q4.png`}
                              alt="motion in one dimension"
                              className="protect-image"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Button variant="success">solution</Button>
                  </OverlayTrigger>
                ))}
              </>
            </li>
            <br />
            {/* Q5 */}
            <li>
              <p>
                A car travels 100 km in 2 hours and 50 km in 1 hour in the same
                direction. (a) What is the Car's average speed for the whole
                journey? (b) What is the Car's average velocity for the whole
                journey?
              </p>
              <>
                {["bottom"].map((placement) => (
                  <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                      <Popover
                        id={`popover-positioned-${placement}`}
                        className="container-fluid CustomPopover"
                      >
                        <Popover.Body>
                          <div className="container-fluid  p-1 mb-1 ">
                            <p>
                              (a) 50km/h <br />
                              (b) 50km/h
                            </p>
                          </div>
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Button variant="success">solution</Button>
                  </OverlayTrigger>
                ))}
              </>
            </li>
            {/* Q6 */}
            <li>
              <p>
                Two balls of different masses (one lighter and other heavier)
                are thrown vertically upwards; with the same speed. Which one
                will pass through the point of projection in their downward
                direction with the greater speed?
              </p>
              <>
                {["bottom"].map((placement) => (
                  <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                      <Popover
                        id={`popover-positioned-${placement}`}
                        className="container-fluid CustomPopover"
                      >
                        <Popover.Body>
                          <div className="container-fluid  p-1 mb-1 ">
                            <p>
                              When moving under the influence of gravity, the
                              speed at which a body comes back down is always
                              the same as the speed at which it is propelled
                              upward. Both balls will reach the same speed
                              because mass is not a factor in the expression for
                              final speed.
                            </p>
                          </div>
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Button variant="success">solution</Button>
                  </OverlayTrigger>
                ))}
              </>
            </li>
            {/* Q7 */}
            <li>
              <p>
                A hockey puck of mass 0.2kg is sliding across an ice rink. If
                the puck loses 2ms of velocity over a distance of 20m, what is
                the coefficient of kinetic friction between the ice and the
                puck? g = 10ms<sup>2</sup>
              </p>
              <>
                {["bottom"].map((placement) => (
                  <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                      <Popover
                        id={`popover-positioned-${placement}`}
                        className="container-fluid CustomPopover"
                      >
                        <Popover.Body>
                          <div className="container-fluid  p-1 mb-1 ">
                            <img
                              src={`${process.env.PUBLIC_URL}/img/m1q7.png`}
                              alt="motion in one dimension"
                              className="protect-image"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Button variant="success">solution</Button>
                  </OverlayTrigger>
                ))}
              </>
            </li>
            {/* Q8 */}
            <li>
              <p>
                You are driving home from school steadily at 95 km/h for 130 km.
                It then begins to rain and you slow to 65 km/h. You arrive home
                after driving 3 hours and 20 minutes. (a) How far is your
                hometown from school? (b) What was your average speed?
              </p>
              <>
                {["bottom"].map((placement) => (
                  <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                      <Popover
                        id={`popover-positioned-${placement}`}
                        className="container-fluid CustomPopover"
                      >
                        <Popover.Body>
                          <div className="container-fluid  p-1 mb-1 ">
                            <img
                              src={`${process.env.PUBLIC_URL}/img/m1q8a.png`}
                              alt="motion in one dimension"
                              className="protect-image"
                              style={{ width: "100%" }}
                            />{" "}
                            <br />
                            
                            <img
                              src={`${process.env.PUBLIC_URL}/img/m1q8b.png`}
                              alt="motion in one dimension"
                              className="protect-image"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Button variant="success">solution</Button>
                  </OverlayTrigger>
                ))}
              </>
            </li>
            {/* Q9 */}
            <li>
              <p>
                A horse canters away from its trainer in a straight line, moving
                116 m away in 14.0 s. It then turns abruptly and gallops halfway
                back in 4.8 s. Calculate (a) its average speed and (b) its
                average velocity for the entire trip, using “away from the
                trainer” as the positive direction.
              </p>
              <>
                {["bottom"].map((placement) => (
                  <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                      <Popover
                        id={`popover-positioned-${placement}`}
                        className="container-fluid CustomPopover"
                      >
                        <Popover.Body>
                          <div className="container-fluid  p-1 mb-1 ">
                            <p>
                              First displacement = d1=116m <br />
                              First time period = t1=14s
                              <br /> Second displacement = d2=58m <br />
                              Second time period = t2=4.8s <br /> Total
                              displacement = D Total time =T=18.8 s<br /> a)
                              When calculating speed, we do not take direction
                              into account so:
                              <br />
                              b)When finding the velocity, the direction of the
                              movement matters: away from the trainer
                            </p>
                          </div>
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Button variant="success">solution</Button>
                  </OverlayTrigger>
                ))}
              </>
            </li>
            
            {/* Q10 */}
            <li>
              <p>
                A baseball is hit almost straight up into the air with a speed
                of about 20 m/s. (a) How high does it go? (b) How long is it in
                the air?
              </p>
              <>
                {["bottom"].map((placement) => (
                  <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                      <Popover
                        id={`popover-positioned-${placement}`}
                        className="container-fluid CustomPopover"
                      >
                        <Popover.Body>
                          <div className="container-fluid  p-1 mb-1 ">
                            <p>
                              initial speed , u = 20 m/s <br />
                              (a)the maximum height , h = u<sup>2</sup>/2g{" "}
                              <br />h = 20<sup>2</sup> /(2 * 9.81) <br />
                              h = 20.4 m <br />
                              (b) the time taken , t = 2 * u/g t = 2 * 20 /9.81
                              s <br />t = 4.1 s
                            </p>
                          </div>
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Button variant="success">solution</Button>
                  </OverlayTrigger>
                ))}
              </>
            </li>
           
          </ol>
        </div>
      </div>
      <br /> <br /><br /><br /><br /><br />
      <br /><br /> <br /><br /> <br /> <br /> <br /> <br />
      <br />
      <Footer />
    </div>
  );
}

export default MotionOneDimension;
