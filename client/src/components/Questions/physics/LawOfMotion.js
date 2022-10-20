import React from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function LawOfMotion() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid mt-5 mb-5 p-3">
        <h6>The Law Of Motion </h6>
        <div>
          <ol>
            {/* Q1 */}
            <li>
              <p>
                Why does a child in a wagon seem to fall backward when you give
                the wagon a sharp pull forward?
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
                              Unless a force acts on the child, Newton's First
                              Law states that she tends to stay at rest. It
                              appears as though the child is falling backwards
                              relative to the wagon because the force is applied
                              to the wagon rather than the child, which causes
                              the wagon to accelerate out from under the child.
                              When a child is standing inside a wagon, the force
                              of friction between the child's feet and the
                              wagon's bottom causes an acceleration of the feet,
                              which causes the child to fall backwards.
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
                If the acceleration of an object is zero, are no forces acting
                on it? Explain.
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
                              According to Newton's second law, if an object's
                              acceleration is zero, then its net force must also
                              be zero. As long as the vector sum of the forces
                              is zero, the object can be under forces.
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
                Only one force acts on an object. Can the object have zero
                acceleration? Can it have zero velocity? Explain.
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
                              The net force cannot be zero if an object is
                              subjected to only one force. Newton's second law
                              states that the object cannot have zero
                              acceleration. For a split second, the object's
                              velocity could be zero. For instance, a
                              straight-up object propelled by gravity has zero
                              velocity at the top of its path but non-zero net
                              force and non-zero acceleration the entire time it
                              is in flight.
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
                When a golf ball is dropped to the pavement, it bounces back up.
                (a) Is a force needed to make it bounce back up? (b) If so, what
                exerts the force?
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
                              (a) Because the ball accelerates as it changes
                              direction, a force is required to raise it back
                              up. A force must exist for the ball to accelerate.
                              <br />
                              (b) The golf ball experiences the force from the
                              pavement.
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
                If you walk along a log floating on a lake, why does the log
                move in the opposite direction?
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
                              You push the ground (or, in this case, the log)
                              with a westward force when attempting to move
                              east. The massive Earth moves imperceptibly when
                              you push it in a westward direction, but thanks to
                              Newton's third law, you experience an eastward
                              force that moves you forward. When you push the
                              log westward while walking on it, it moves
                              westward as you move eastward because it is
                              relatively light and unrestricted.
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
                Why might your foot hurt if you kick a heavy desk or a wall?
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
                              According to Newton's third law, the desk or wall
                              applies a force to your foot that is equal to the
                              force you used to strike the object. Your foot
                              will feel pain if you strike the desk or wall hard
                              enough to apply a lot of force to it. The only
                              thing that hurts your foot is a force.
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
                (a) You pull a box with a constant force across a frictionless
                table using an attached rope held horizontally. If you now pull
                the rope with the same force at an angle to the horizontal (with
                the box remaining flat on the table), does the acceleration of
                the box increase, decrease, or remain the same? Explain. (b)
                What if there is friction?
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
                              Only the horizontal component of the pulling force
                              will accelerate the box across the table when you
                              pull the rope at an angle. The box's horizontal
                              acceleration will decrease because this is a lower
                              horizontal force than was initially applied.
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
                When you stand still on the ground, how large a force does the
                ground exert on you? Why doesn’t this force make you rise up
                into the air?
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
                              The net force acting on you is zero when you are
                              at rest. As a result, the force the ground applies
                              to you is exactly equal to your weight. You don't
                              accelerate because the two forces pulling on you
                              add up to zero. According to Newton's third law,
                              if you squat down and then push harder against the
                              ground, the ground will push back harder against
                              you, allowing you to jump into the air.
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
                Whiplash sometimes results from an automobile accident when the
                victim’s car is struck violently from the rear. Explain why the
                head of the victim seems to be thrown backward in this
                situation. Is it really?
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
                              The car is violently pushed forward when someone
                              suffers from whiplash. The victim's back moves
                              with the car because it is pressed up against the
                              seat. However, because there is no direct
                              horizontal force pushing the head, it "lags
                              behind." The victim's head is not thrown
                              backwards; rather, their body is physically pushed
                              forward and out from under them. The head must
                              eventually be pulled forward by the neck muscles,
                              which results in whiplash. Use the headrests in
                              the car to prevent this.
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
                A heavy crate rests on the bed of a flatbed truck. When the
                truck accelerates, the crate stays fixed on the truck, so it,
                too, accelerates. What force causes the crate to accelerate?
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
                              The crate accelerates as a result of static
                              friction caused by the truck bed.
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

export default LawOfMotion;
