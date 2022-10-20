import React from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function LinearMomentum() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid mt-5 mb-5 p-3">
        <h6>Linear Momentum </h6>
        <div>
          <ol>
            {/* Q1 */}
            <li>
              <p>
                We claim that momentum is conserved. Yet most moving objects
                eventually slow down and stop. Explain.
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
                              The system under analysis must be "closed"—that
                              is, free from external forces—for momentum to be
                              conserved. For instance, air friction and road
                              friction on a coasting car both act as "outside"
                              forces and lower the car's momentum. If the earth
                              and the atmosphere considered a component of the
                              system, their velocities are examined, and the
                              system's overall momentum is calculated. would be
                              conserved, but perhaps not the momentum of any
                              particular component, such as the car.
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
            {/* Q2 */}
            <li>
              <p>
                When a person jumps from a tree to the ground, what happens to
                the momentum of the person upon striking the ground?
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
                              Think of this issue as a very light object
                              colliding with a very heavy object and becoming
                              stuck to it. After the collision, the combination
                              of the Earth and the jumper would have some
                              momentum, but because of the Earth's enormous
                              mass, the velocity of the combination is so low
                              that it cannot be measured. As a result, nothing
                              further occurs after the jumper touches down on
                              Earth.
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
                When you release an inflated but untied balloon, why does it fly
                across the room?
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
                              The gas inside an inflated, untied balloon that is
                              at rest rushes out the open end of the balloon
                              when it is released. Since the balloon and the
                              escaping gas form a closed system, the system's
                              momentum is conserved. The balloon and remaining
                              gas pick up momentum that is both equal to and
                              opposed to that of the escaping gas, moving in the
                              opposite direction.
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
                It is said that in ancient times a rich man with a bag of gold
                coins was stranded on the surface of a frozen lake. Because the
                ice was frictionless, he could not push himself to shore and
                froze to death. What could he have done to save himself had he
                not been so miserly?
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
                              If the rich man would have faced away from the
                              shore and thrown the bag of coins directly away
                              from the shore, he would have acquired a velocity
                              towards the shore by conservation of momentum.
                              Since the ice is frictionless, he would slide all
                              the way to the shore.
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
            {/* Q5 */}
            <li>
              <p>
                How can a rocket change direction when it is far out in space
                and essentially in a vacuum?
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
                              A rocket exerts force on the gas it is launching
                              in the desired direction. Since the momentum of
                              the gasrocket system is constant, Newton's third
                              law dictates that if the gas is pushed to the
                              left, the rocket will be pushed to the right.
                              Therefore, in order to change course, the rocket
                              must carry some sort of material that can be
                              ejected (typically engine exhaust).
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
                Cars used to be built as rigid as possible to withstand
                collisions. Today, though, cars are designed to have “crumple
                zones” that collapse upon impact. What is the advantage of this
                new design?
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
                              "Crumple zones" work similarly to air bags in that
                              they lengthen the time of contact during a
                              collision, which reduces the average force needed
                              to change the momentum of the car.
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
              <p>Describe a collision in which all kinetic energy is lost.</p>
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
                              Consider two moving objects that have equal
                              amounts of momentum but are going in different
                              directions. They have zero momentum overall. Their
                              final common speed must be zero if they collide in
                              an entirely inelastic collision that causes them
                              to stick together in order for momentum to be
                              conserved. However, since they are no longer in
                              motion following the collision, they have lost all
                              of their kinetic energy.
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
            {/* Q8 */}
            <li>
              <p>
                At a hydroelectric power plant, water is directed at high speed
                against turbine blades on an axle that turns an electric
                generator. For maximum power generation, should the turbine
                blades be designed so that the water is brought to a dead stop,
                or so that the water rebounds?
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
                              It is ideal if the water rebounds off of the
                              turbine blades. If the water bounces back, it has
                              undergone a greater change in momentum than if it
                              had simply stopped. Additionally, the blades will
                              spin faster if there is a greater momentum change
                              for the water than there is for the blades.
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
            {/* Q9 */}
            <li>
              <p>
                A rocket following a parabolic path through the air suddenly
                explodes into many pieces. What can you say about the motion of
                this system of pieces?
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
                              Both before and after the explosion, the rocket's
                              center of mass will continue to move along its
                              original parabolic trajectory. After the
                              explosion, each individual piece of the rocket
                              will travel along a different path, but because
                              the rocket itself was the source of the explosion,
                              the center of mass of every piece that was
                              fragmented will travel along the same path.
                            </p>
                            <br />
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
                Why do you tend to lean backward when carrying a heavy load in
                your arms?
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
                              Your CM must be directly above your feet for you
                              to stay balanced. Your CM will be out in front of
                              your body rather than above your feet if you are
                              carrying a heavy load in your arms. To get your CM
                              directly above your feet, you therefore lean
                              backwards. You would otherwise collapse forward.
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default LinearMomentum;
