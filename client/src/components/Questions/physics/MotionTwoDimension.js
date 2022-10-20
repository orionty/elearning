import React from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function MotionTwoDimension() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid mt-5 mb-5 p-3">
        <h6>Motion In Two Dimensions </h6>
        <div>
          <ol>
            {/* Q1 */}
            <li>
              <p>
                A person sitting in an enclosed train car, moving at constant
                velocity, throws a ball straight up into the air in her
                reference frame. (a) Where does the ball land? What is your
                answer if the car (b) accelerates, (c) decelerates, (d) rounds a
                curve, (e) moves with constant velocity but is open to the air?
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
                              (a) The ball lands in the thrower's hand at the
                              same spot inside the train car from which it was
                              launched.
                              <br /> (b) The ball will land behind the point
                              from which it was thrown if the car accelerates.
                              <br />
                              (c) The ball will touch down in front of the point
                              it was thrown from if the car decelerates.
                              <br /> (d) The ball will land to the left of the
                              car if it rounds a curve (assume it curves to the
                              right). where it was thrown; point.
                              <br /> (e) Because of air resistance, the ball
                              will land farther away from its original point.
                              thrown.
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
                A projectile is launched at an angle of 30 degrees to the
                horizontal with a speed of 30 m/s. How does the horizontal
                component of its velocity 1.0 s after launch compare with its
                horizontal component of velocity 2.0 s after launch ?
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
                              Horizontal forces are absent in this situation!
                              Nothing here!!
                              <br />
                              Consequently, there isn't any horizontal
                              acceleration.
                              <br />
                              Therefore, the horizontal velocity component's
                              rate of change is zero.
                              <br />
                              Therefore, the answer to this silly trick question
                              is that the projectile's horizontal velocity
                              remains unchanged until it collides with an
                              object.
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
                If you are riding on a train that speeds past another train
                moving in the same direction on an adjacent track, it appears
                that the other train is moving backward. Why?
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
                              The train you are riding is your frame of
                              reference. You will perceive your reference frame
                              as being at rest if you are moving at a relatively
                              constant speed (not going over a hill, around a
                              curve, or changing speed significantly). The other
                              train is moving backwards in relation to you
                              because you are moving forward more quickly than
                              it is. The other train appears to be moving
                              backwards when passing by your window from front
                              to rear. This is comparable to passing a semi
                              truck on the freeway; from the passenger window,
                              the truck appears to be moving backwards.
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
                In archery, should the arrow be aimed directly at the target?
                How should your angle of aim depend on the distance to the
                target?
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
                              Gravity will cause the arrow's downward trajectory
                              to be deflected from its horizontal flight path,
                              so the arrow should be aimed above the target. As
                              the distance from the target grows, the angle of
                              aim (above the horizontal) should also grow
                              because gravity will have more time to act to
                              divert the arrow from a straight line. The range
                              formula is applicable if we assume that the arrow
                              will be shot at the same height as the target:{" "}
                              <br />
                              Rg = v<sub>o</sub>
                              <sup>2</sup>sin2&#952;<sub>o</sub> / g = 1/2 sin
                              <sup>-1</sup> (Rg / v<sub>o</sub>
                              <sup>2</sup>). The angle grows as the inverse sine
                              function's argument and thus its range do.
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
                Two rowers, who can row at the same speed in still water, set
                off across a river at the same time. One heads straight across
                and is pulled downstream somewhat by the current. The other one
                heads upstream at an angle so as to arrive at a point opposite
                the starting point. Which rower reaches the opposite side first?
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
                              The distance needed to "cross the river" must be
                              covered by both rowers. The rower who crosses the
                              river first will be the one who is moving the
                              fastest in that direction. Since neither of the
                              boats can move across the river with the current's
                              assistance, it has no impact on the issue. As a
                              result, the rower who is traveling straight across
                              will get there first. His entire rowing effort has
                              been devoted to getting across the river. The
                              upstream rower's "cross river" speed will be only
                              a small portion of his rowing speed because some
                              of his rowing effort is spent fighting the
                              current.
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
                If you stand motionless under an umbrella in a rainstorm where
                the drops fall vertically, you remain relatively dry. However,
                if you start running, the rain begins to hit your legs even if
                they remain under the umbrella. Why?
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
                              You are in a cylinder-shaped volume where there is
                              no rain when you are standing still under an
                              umbrella in a vertical downpour. Rain cannot enter
                              that cylinder from outside because it lacks a
                              horizontal component of velocity. You're kept dry.
                              However, as you run, you move forward in relation
                              to the rain, which causes the rain to move
                              backward in relation to you. It is the same as if
                              you were still standing underneath the umbrella
                              but the rain was moving horizontally in your
                              direction. The umbrella wouldn't completely
                              protect you even if it were vertical.
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
                A tiger leaps horizontally from a 6.5-m-high rock with a speed
                of3.5 m/s. How far from the base of the rock will she land?
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
                              Choose downward to be the positive y direction.
                              The origin will be at the point where the tiger
                              leaps from the rock. In the horizontal direction,
                              v<sub>xo</sub>3.5 ms and a<sub>x</sub> = o . In
                              the vertical direction, v<sub>yo</sub> = o , a
                              <sub>y</sub> = 9.80 m/s<sup>2</sup> , y
                              <sub>o</sub> = 0 , and the final location y = 6.5
                              m. <br />y = y<sub>o</sub> v<sub>yo</sub>t + 1/2at
                              <sup>2</sup> <br />
                              t = 1.15 sec.
                              <br />
                              The horizontal displacement is calculated from the
                              constant horizontal velocity.
                              <br />
                              &Delta;x = v<sub>x</sub>t <br />
                              &Delta;x = (3.5 m/s)(1.15 sec)
                              <br />
                              &Delta;x = 4.0m
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
                Two cannonballs, A and B, are fired from the ground with
                identical initial speeds, but with larger than (a)Which
                cannonball reaches a higher elevation? (b) Which stays longer in
                the air? (c) Which travels farther? Explain.
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
                              (a) Cannonball A will reach a higher elevation
                              because of its greater angle. It will rise higher
                              before the vertical component of velocity reaches
                              zero because it has a higher initial vertical
                              velocity.
                              <br /> (b) Cannonball A will stay in the air
                              longer due to its greater angle. It takes longer
                              for it to decelerate to 0 and begin to fall
                              because it has a higher initial vertical velocity.
                              <br />
                              (c) The cannonball that is fired with the angle
                              that is closest to 45 degrees will travel the
                              farthest. When the launch angle is greater than or
                              equal to 45 degrees, the range is at its maximum
                              and decreases for smaller or larger angles.
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
                It was reported in World War I that a pilot flying at an
                altitude of 2 km caught in his bare hands a bullet fired at the
                plane! Using the fact that a bullet slows down considerably due
                to air resistance, explain how this incident occurred.
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
                              Assume that the airplane was shot from below and
                              behind when the bullet was fired. Gravity and air
                              resistance would both slow the bullet's vertical
                              motion as it rose through the air, and air
                              resistance would slow its horizontal motion. If
                              the plane's altitude was just a little bit lower
                              than the bullet's maximum height, the bullet would
                              be moving very slowly up in the air at that
                              altitude. The bullet's velocity in relation to the
                              airplane would be low if its horizontal speed had
                              also slowed down to a level that roughly matched
                              that of the aircraft. The bullet could be safely
                              hand-caught because it was moving slowly.
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
                At some amusement parks, to get on a moving "car" the riders
                first loop hop onto a moving walkway and then onto the cars
                themselves. Why is this done?
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
                              The moving walkway will be moving at the same
                              speed as the “car”. Thus, if you are on the
                              walkway, you are moving the same speed as the car.
                              Your velocity relative to the car is 0, and it is
                              easy to get into the car. But it is very difficult
                              to keep your balance while trying to sit down into
                              a moving car from a stationary platform. It is
                              easier to keep your balance by stepping on to the
                              moving platform while walking, and then getting
                              into the car with a velocity of 0 relative to the
                              car.
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
            {/* Q11 */}
            <li>
              <p>
                How do you think a baseball player "judges" the flight of a fly
                ball? Which equation in this Chapter becomes part of the player's intuition?
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
                              The range formula of R = v<sub>o</sub>
                              <sup>2</sup> sin2&#952;<sub>o</sub> / g is particularly
                              relevant because the baseball is hit and caught at
                              roughly the same height. As a result, the baseball
                              player is estimating the ball's initial speed and
                              initial hitting angle.
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

export default MotionTwoDimension;
