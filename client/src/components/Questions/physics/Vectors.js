import React from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function Vectors() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid mt-5 mb-5 p-3">
        <h6>Vectors </h6>
        <div>
          <ol>
            {/* Q1 */}
            <li>
              <p>
                Two vectors have length V<sub>1</sub> = 3.5 km and V<sub>2</sub>{" "}
                = 4.0 km. What are the maximum and minimum magnitudes of their
                vector sum?
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
                              The sum of the two vectors will have a maximum
                              magnitude of 7.5 km if they are both pointing in
                              the same direction.
                              <br />
                              The magnitude of their sum will be at its lowest
                              point, which is 0.5 km, if the two vectors are
                              moving in the opposite direction.
                              <br />
                              The magnitude of the two vectors' sum if they are
                              oriented in any other way will range from 0.5 km
                              to 7.5 km.
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
                A car is driven 225 km west and then 78 km southwest (45
                degrees). What is the displacement of the car from the point of
                origin (magnitude and direction)?
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
                              Dispalcement(d) is given by;
                              <br /> d = √(d<sub>1</sub>
                              <sup>2</sup> + d<sub>2</sub>
                              <sup>2</sup> + 2* d<sub>1</sub> * d<sub>2</sub> *
                              cosθ)
                              <br /> = √(2252 + 782 + 2* 225 * 78 * cos 450)
                              <br />
                              d = 285.55 km direction is given by
                              <br /> tanα = d<sub>2</sub> * sinθ / ( d1+ d2 *
                              cosθ)
                              <br /> = 78 * sin 450/ ( 225 + 78 * cos450) =
                              0.197
                              <br /> α = tan-10.197 = 11.140 from West towards
                              South
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
                The position of a particular particle as a function of time is
                given by ? = (9.601 i + 8.85j - 1.00t<sup>2</sup>k)m. Determine
                the particle’s velocity and acceleration as a function of time.
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
                              Given r=(9.601 i + 8.85 j - 1.00 t<sup>2</sup>k)m
                              velocity v <br />
                              = dr / dt = (-2t k ) m / s <br />
                              accleration a = dv / dt = -2 k m / s<sup>2</sup>
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
                A dog searching for a bone walks 3.50 m south, then 8.20 m at an
                angle 30.0° north of east, and finally 15.0 m west. Using
                graphical techniques, find the dog’s resultant displacement
                vector.
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
                              src={`${process.env.PUBLIC_URL}/img/vq5.png`}
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
            {/* Q6 */}
            <li>
              <p>
                A displacement vector lying in the xy plane has a magnitude of
                50.0 m and is directed at an angle of 120° to the positive x
                axis. Find the x and y components of this vector and express the
                vector in unit–vector notation.
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
                              src={`${process.env.PUBLIC_URL}/img/vq6.png`}
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
            {/* Q7 */}
            <li>
              <p>
                One car travels due east at and a second car travels north at
                Are their velocities equal? Explain.
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
                              Because the two velocities are traveling in
                              different directions, their velocities are not
                              equal.
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
                Give several examples of an object’s motion in which a great
                distance is traveled but the displacement is zero.
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
                              (a) The Earth travels the same amount as the
                              circumference of its orbit in a year, but it moves
                              the same amount in relation to the Sun.
                              <br />
                              (b) The space shuttle covers a lot of ground on
                              each flight, but there is no displacement between
                              launches.
                              <br />
                              (c) Any cross-country air travel that is a "round
                              trip" would entail a considerable distance
                              traveled but no displacement.
                              <br />
                              (d) A race car's displacement during the Indy 500
                              is zero from the start to the finish line.
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
                Can the displacement vector for a particle moving in two
                dimensions be longer than the length of path traveled by the
                particle over the same time interval? Can it be less? Discuss.
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
                              The path that was taken in a "straight line" from
                              the starting point to the ending point is the
                              displacement. Given that the displacement is the
                              shortest distance between the two locations, the
                              length of the path will always be greater than or
                              equal to the displacement. As a result, the
                              displacement can only ever be less than the length
                              of the path. The length of the path will always be
                              greater than the displacement for any path that
                              does not consist of a single straight line
                              segment.
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
                During baseball practice, a player hits a very high fly ball and
                then runs in a straight line and catches it. Which had the
                greater displacement, the player or the ball? Explain.
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
                              Both the batter and the ball had the same
                              displacement because their motions began and ended
                              at the same places (where the ball was hit and
                              where it was caught, respectively).
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
                Can two vectors, of unequal magnitude, add up to give the zero
                vector? Can three unequal vectors? Under what conditions?
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
                              The zero vector can never be obtained by adding
                              two vectors of unequal magnitude. The zero vector,
                              however, can be produced by adding three vectors
                              of different intensities. The vector sum will be
                              zero if the closed triangle formed by their
                              geometric sum using the tail-to-tip method.
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

export default Vectors;
