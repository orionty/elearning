import React from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function RotationalMotion() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid mt-5 mb-5 p-3">
        <h6>Rotational Motion </h6>
        <div>
          <ol>
            {/* Q1 */}
            <li>
              <p>
                A bicycle odometer (which counts revolutions and is calibrated
                to report distance traveled) is attached near the wheel axle and
                is calibrated for 27-inch wheels. What happens if you use it on
                a bicycle with 24-inch wheels?
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
                              Every time the wheel turns, the odometer built for
                              27-inch wheels increases its reading by the
                              circumference of a 27-inch wheel, or 27". The
                              odometer will still read 27 inches for every
                              revolution if a 24-inch wheel is used, but only 24
                              inches of linear distance will have been covered.
                              As a result, the odometer will display a distance
                              that is multiplied by the amount you actually
                              traveled. 27 / 24 = 1.125 . The mileage will be
                              12.5% exaggerated.
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
                Suppose a disk rotates at constant angular velocity. (a) Does a
                point on the rim have radial and or tangential acceleration? (b)
                If the disk’s angular velocity increases uniformly, does the
                point have radial and or tangential acceleration? (c) For which
                cases would the magnitude of either component of linear
                acceleration change?
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
                              If a disk rotates at constant angular velocity, a
                              point on the rim has radial acceleration only – no
                              tangential acceleration. If the disk’s angular
                              velocity increases uniformly, the point will have
                              both radial and tangential acceleration. If the
                              disk rotates at constant angular velocity, neither
                              component of linear acceleration is changing –
                              both radial and tangential acceleration are
                              constant. If the disk rotates with a uniformly
                              increasing angular velocity, then the radial
                              acceleration is changing, but the tangential
                              acceleration is a constant non-zero value.
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
                Can a small force ever exert a greater torque than a larger
                force? Explain.
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
                              A small force can exert a greater torque than a
                              larger force if the small force has a large enough
                              lever arm because the torque is the result of the
                              product of the force and the lever arm.
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
                Why is it more difficult to do a sit-up with your hands behind
                your head than when your arms are stretched out in front of you?
                A diagram may help you to answer this
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
                              When you perform a sit-up, the upper body must
                              rotate from a lying-down position to a sitting-up
                              position under the force of your abdominal
                              muscles. The difficulty of performing a sit-up
                              increases with the upper body's moment of inertia
                              because more torque is required. The moment of
                              inertia of the upper body is greater with the
                              hands behind the head than with the hands extended
                              in front.
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
                If the net force on a system is zero, is the net torque also
                zero? If the net torque on a system is zero, is the net force
                zero?
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
                              The net torque need not be zero just because there
                              is no net force acting on a system. Consider the
                              uniform object in the first diagram, which has two
                              equal forces acting on it. Although there is a net
                              counterclockwise torque about the rod's center,
                              the net force on the object is zero (it would not
                              begin to translate under the influence of these
                              forces) (it would start to rotate under the action
                              of these forces).
                              <br />
                              The net force need not be zero just because the
                              net torque on a system is zero. Consider the
                              object in the second diagram, which has two equal
                              forces acting on it. However, there is a net
                              downward force acting on the rod, which would
                              cause it to begin translating under the influence
                              of these forces. The net torque on the object is
                              zero (it would not begin to rotate under the
                              action of these forces).
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
                We claim that momentum and angular momentum are conserved. Yet
                most moving or rotating objects eventually slow down and stop.
                Explain.
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
                              For closed systems—systems in which no external
                              forces or torques are applied to the
                              system—momentum and angular momentum are
                              conserved. There are probably no truly closed
                              macroscopic systems on Earth, so external forces
                              and torques (like those produced by air friction,
                              for example) have an ongoing impact on the
                              systems.
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
                If there were a great migration of people toward the Earth's
                equator, how would this affect the length of the day?
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
                              If a lot of people traveled to the equator, they
                              would be farther away from the axis of rotation,
                              increasing the Earth's rotational inertia. Since
                              angular momentum would be conserved in such an
                              interaction, the Earth would "slow down" slightly
                              as the rotational inertia increased and the
                              angular velocity decreased. As a result, a day
                              would grow longer.
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
                Two spheres look identical and have the same mass. However, one
                is hollow and the other is solid. Describe an experiment to
                determine which is which.?
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
                              The rotational inertias of the two spheres would
                              be different. In comparison to the solid sphere,
                              the hollow sphere will have a higher rotational
                              inertia. The sphere with the smaller moment of
                              inertia—the solid one—will arrive at the bottom of
                              the ramp first if the two are allowed to roll down
                              an incline without slipping. 
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
                In what direction is the Earth’s angular velocity vector as it
                rotates daily about its axis, north or south?
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
                              Point the fingers in the west-to-east direction of
                              the Earth's rotation using the right hand rule.
                              The thumb then denotes north. Thus, the Earth's
                              angular velocity is directed toward the North Star
                              along its axis of rotation.
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
                Suppose you are standing on the edge of a large freely rotating
                turntable.What happens if you walk toward the center ?
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
                              Since no external torques are being applied as the
                              person moves toward the center of the turntable,
                              the angular momentum of the turntable-person
                              system will be conserved. The system's overall
                              moment of inertia decreases as the person moves
                              toward the center because they are getting closer
                              to the axis of rotation. The angular velocity must
                              rise because the angular momentum is constant. As
                              you move closer to the center, the turntable will
                              start to spin more quickly. The spinning ice
                              skater who pulls her arms in to increase her
                              angular speed does something similar.
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

export default RotationalMotion;
