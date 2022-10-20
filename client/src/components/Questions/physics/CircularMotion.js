import React from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function CircularMotion() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid mt-5 mb-5 p-3">
        <h6>Circular Motion and Other Application Of Newton's Law </h6>
        <div>
          <ol>
            {/* Q1 */}
            <li>
              <p>
                Sometimes it is said that water is removed from clothes in the
                spin dryer by centrifugal force throwing the water outward. Is
                this correct? Discuss.
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
                              The statement has a flaw in that nothing is
                              creating an outward force, so the water that has
                              been removed from the clothes is not being thrown
                              outward. Instead, the water and clothes are pushed
                              INWARD by the rotating drum. However, where the
                              drum has holes, the drum cannot push against the
                              water, and as a result Water isn't forced in.
                              Instead, the water exits the holes in a direction
                              tangential to the rotation. the water is separated
                              from the clothing in a straight line.
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
                Will the acceleration of a car be the same when a car travels
                around a sharp curve at a constant as when it travels around a
                gentle curve at the same speed? Explain.
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
                              Given a constant speed a = (v<sup>2</sup> / r),
                              the centripetal acceleration of an object moving
                              in a circle is inversely proportional to the
                              radius of the curve. Thus, the acceleration is
                              smaller for a gentle curve (i.e., a large radius)
                              and greater for a sharp curve (i.e., a small
                              radius).
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
                Describe all the forces acting on a child riding a horse on a
                merry-go-round. Which of these forces provides the centripetal
                acceleration of the child?
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
                              The child is being influenced by at least three
                              different powerful forces. The child is being
                              pulled downward by the force of gravity. Normal
                              upward force is exerted on the child by the
                              horse's seat. The child must also be in contact
                              with the horse's seat in order for the horse to
                              accelerate the child. The centripetal acceleration
                              is produced by that friction. Smaller forces might
                              also exist, like a reaction force acting on a
                              child's hands if the child is holding onto a piece
                              of the horse. The centripetal acceleration is a
                              result of all forces that have an inward
                              component.
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
                A bucket of water can be whirled in a vertical circle without
                the water spilling out, even at the top of the circle when the
                bucket is upside down. Explain.
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
                              There must be a centripetal force pushing the
                              water to move in a circle with the bucket in order
                              for it to stay in the bucket. Since F<sub>R</sub>{" "}
                              = mv<sup>2</sup> / r, the centripetal force
                              increases with the tangential velocity of the
                              water. Gravity's downward pull and the bucket's
                              normal downward force on the water combine to
                              create the centripetal force at the top of the
                              motion. The water will remain in the bucket if the
                              bucket is moving faster than some minimum speed.
                              The water will spill out if the bucket is moving
                              too slowly because there isn't enough force to
                              keep it moving in a circular motion.
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
                How many “accelerators” do you have in your car? There are at
                least three controls in the car which can be used to cause the
                car to accelerate. What are they? What accelerations do they
                produce?
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
                              The accelerator pedal, brake pedal, and steering
                              wheel are the three main "accelerators." By
                              depressing the pedal, the accelerator pedal (also
                              known as the gas pedal) can be used to increase or
                              decrease speed in conjunction with friction (by
                              releasing the pedal). Depressing the brake pedal
                              will cause the vehicle to move more slowly. The
                              steering wheel is used to accelerate as well as
                              change direction. There are some additional
                              controls that could be categorized as
                              accelerators.By applying the parking brake, you
                              can slow down your vehicle. By downshifting, the
                              gear shift lever can be used to reduce speed. If
                              the vehicle has a manual transmission, reducing
                              speed can be accomplished by depressing the clutch
                              (friction will slow the car). And finally, you can
                              slow the car down by turning it off. An object
                              accelerates whenever its speed or direction
                              change.
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
                A girl is whirling a ball on a string around her head in a
                horizontal plane. She wants to let go at precisely the right
                time so that the ball will hit a target on the other side of the
                yard. When should she let go of the string?
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
                              When the ball is in a position where the extended
                              tangent line to the circle at the ball's location
                              passes through the target's position, she should
                              let go of the string. If the centripetal force is
                              removed, the ball will follow that line
                              horizontally because the tangent line indicates
                              the direction of the velocity at that instant.
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
                Does an apple exert a gravitational force on the Earth? If so,
                how large a force? Consider an apple (a) attached to a tree and
                (b) falling
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
                              There is a gravitational pull from the apple
                              toward the Earth. According to Newton's third law,
                              the force that an apple exerts on the Earth is
                              equal to the force that the apple exerts on the
                              Earth, or its weight. Additionally, the force is
                              unaffected by the apple's motion. Therefore, the
                              force exerted by an apple on Earth when it is
                              falling or hanging is equal to the weight of the
                              apple.
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
                Would it require less speed to launch a satellite (a) toward the
                east or (b) toward the west? Consider the Earth’s rotation
                direction and explain your choice.
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
                              A satellite must reach an orbital speed with
                              respect to the Earth's center before it can begin
                              to orbit. Due to the Earth's rotation, the
                              satellite is already moving east when it is
                              launched, so adding speed to launch it eastward to
                              reach the desired orbital speed is not as
                              necessary.
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
              <p>What keeps a satellite up in its orbit around the Earth?</p>
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
                              The gravitational pull of the orbital center on a
                              satellite and the tangential speed of the
                              satellite work together to keep the satellite in
                              orbit. First, a force other than gravity had to be
                              used to determine the correct tangential speed.
                              The satellite will then maintain its circular
                              motion if it has the proper speed and radius such
                              that the force necessary for circular motion is
                              equal to the force of gravity on the satellite.
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
                Explain how a runner experiences "free fall" or "apparent weightlessness" between steps.
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
                              There is no normal force from the ground acting on
                              the runner when both of their feet are off the
                              ground; only gravity is acting on them. It is said
                              that this lack of normal force causes "free fall"
                              and "apparent weightlessness."
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

export default CircularMotion;
