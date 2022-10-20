import React from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function Elasticity() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid mt-5 mb-5 p-3">
        <h6>Static Equilibrium And Elasticity </h6>
        <div>
          <ol>
            {/* Q1 */}
            <li>
              <p>
                Describe several situations in which an object is not in
                equilibrium, even though the net force on it is zero.
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
                              The center of mass of the object does not
                              accelerate if there is no net force acting on it.
                              But because it is out of equilibrium, it must have
                              a net torque and an angular acceleration as a
                              result. Examples include: a) A compact disk in a
                              player that has just been inserted, as it starts
                              up.
                              <br />
                              b) A hard drive on a computer that is initially
                              powered on.
                              <br />
                              c) A window fan right after the power has been
                              turned off to it.
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
                A bungee jumper momentarily comes to rest at the bottom of the
                dive before he springs back upward. At that moment, is the
                bungee jumper in equilibrium? Explain.
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
                              The net force acting on the bungee jumper is not
                              zero, so the jumper is not in equilibrium.
                              According to Newton's first law, the jumper would
                              remain at rest if the net force was zero and the
                              jumper was at rest. At the bottom of the dive, the
                              jumper experiences a net upward force, which
                              causes the jumper to be pulled back upwards.
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
                You can find the center of gravity of a meter stick by resting
                it horizontally on your two index fingers, and then slowly
                drawing your fingers together. First the meter stick will slip
                on one finger, and then on the other, but eventually the fingers
                meet at the CG. Why does this work?
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
                              If the fingers are not spaced equally from the
                              center of gravity (CG), the finger closer to the
                              CG will support a greater portion of the meter
                              stick's weight, resulting in zero net torque on
                              the stick. Because of the greater vertical force,
                              there will be more friction between the stick and
                              the closer finger, making it easier to move the
                              finger farther from the center of gravity. The
                              finger that is farther away will slide more easily
                              and approach the CG. That finger will have more
                              friction and "stick" when it is the one that is
                              closest to the CG. After that, the other finger
                              will slide. The procedure is then repeated. When
                              the two fingers eventually meet at the CG, the
                              finger that is further away from it will move
                              closer to it.
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
                A ladder, leaning against a wall, makes a 60° angle with the
                ground. When is it more likely to slip: when a person stands on
                the ladder near the top or near the bottom? Explain.
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
                              src={`${process.env.PUBLIC_URL}/img/Eq4.png`}
                              alt="elasticity"
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
            {/* Q5 */}
            <li>
              <p>
                Explain why touching your toes while you are seated on the floor
                with outstretched legs produces less stress on the lower spinal
                column than when touching your toes from a standing position.
                Use a diagram.
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
                              The pivot point for turning the upper half of the
                              body is close to the waist and hips. Due to their
                              lower mass in that position, the arms have a
                              relatively low torque even when extended, and the
                              more massive trunk-head combination has a very
                              short lever arm, which also results in a
                              relatively low torque. Therefore, the force of
                              gravity on your upper body produces only a small
                              amount of torque about your hips, which tends to
                              rotate you forward. As a result, your back muscles
                              only need to produce a small amount of torque to
                              prevent you from rotating forward. The back
                              muscles' influence on the upper half of the body
                              is minimal, so the (partially rightward) force at
                              the base of the spinal column, to keep the spine
                              in equilibrium, will be small.
                            </p>
                            <img
                              src={`${process.env.PUBLIC_URL}/img/Eq5.png`}
                              alt="elasticity"
                              className="protect-image"
                              style={{ width: "10%" }}
                            />
                            <p>
                              Standing and bending over results in a much larger
                              torque because the upper body's lever arm is much
                              larger than it is when sitting. Additionally,
                              because the CM of the arms is farther from the
                              support point, there is more torque. The lever arm
                              of the back muscles, which are thought to work in
                              the middle of the back, is not very long. As a
                              result, your back muscles will need to work very
                              hard to generate the countertorque that prevents
                              you from toppling over. As a result, a strong
                              force (mostly to the right in the illustration)
                              will be needed at the base of the spine to
                              maintain equilibrium.
                            </p>
                            <img
                              src={`${process.env.PUBLIC_URL}/img/Eq6.png`}
                              alt="elasticity"
                              className="protect-image"
                              style={{ width: "10%" }}
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
            {/* Q6 */}
            <li>
              <p>
                Place yourself facing the edge of an open door. Position your
                feet astride the door with your nose and abdomen touching the
                door’s edge. Try to rise on your tiptoes. Why can’t this be
                done?
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
                              Your CM advances as you stand on your tiptoes.
                              Your CM can't move forward because you are already
                              facing the door with your nose and belly. As a
                              result, gravity pulls you down, making it
                              impossible for you to stay on your tiptoes;
                              instead, you will fall back to the ground
                              flat-footed.
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
                Why is it not possible to sit upright in a chair and rise to
                your feet without first leaning forward?
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
                              Gravity will cause you to rotate back into the
                              chair when you attempt to stand up from a normal
                              sitting position because your CM is not over your
                              point of support (your feet). To be able to stand
                              up, you must lean forward so that your CM is over
                              your feet.
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
                Why is it more difficult to do sit-ups when your knees are bent
                than when your legs are stretched out?
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
                              While performing a sit-up, your abdominal muscles
                              create a torque that rotates you up and away from
                              the floor, while gravity's pull on your upper half
                              of your body tends to pull you back down, making
                              sit-ups challenging. The torque produced by the
                              force of gravity on your lower half of your body
                              counteracts the torque produced by the force of
                              gravity on your upper half of your body, making
                              the sit-up a little simpler. Less counter-torque
                              is available because the lever arm for the lower
                              half of the body is shorter when the legs are
                              bent.
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
                Is the Young's modulus for a bungee cord smaller or larger than
                that for an ordinary rope?
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
                              In comparison to regular rope, bungee cords have a
                              much lower Young's modulus. We can infer from its
                              behavior that the bungee cord stretches more
                              readily than regular rope. The amount of a
                              material's length change under tension is
                              inversely proportional to the value of the Young's
                              modulus. When all other factors (stressing force,
                              length when not stretched, and cross-sectional
                              area of the rope or cord are the same), the change
                              in length of a bungee cord is much greater than
                              that of a regular rope, so it must have a lower
                              Young's modulus.
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
                The amount of a material's length change under tension is
                inversely proportional to the value of the Young's modulus. When
                all other factors (stressing force, length when not stretched,
                and cross-sectional area of the rope or cord are the same), the
                change in length of a bungee cord is much greater than that of a
                regular rope, so it must have a lower Young's modulus.
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
                              Equal and opposing forces are applied across a
                              sheared object. While the other arm of the
                              scissors pushes upward, one blade of the scissors
                              pushes down on the cardboard. The cardboard is
                              sheared between the two blades by these two
                              forces. Therefore, the name "shears" is
                              appropriate.
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

export default Elasticity;
