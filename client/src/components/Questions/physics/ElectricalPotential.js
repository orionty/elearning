import React from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function ElectricPotential() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid mt-5 mb-5 p-3">
        <h6>Electric Potential </h6>
        <div>
          <ol>
            {/* Q1 */}
            <li>
              <p>
                If two points are at the same potential, does this mean that no
                net work is done in moving a test charge from one point to the
                other? Does this imply that no force must be exerted? Explain.
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
                              No NET work was done when a test charge was moved
                              from one point to another if the two points were
                              at the same potential. Positive work may have been
                              completed along some of the path's segments, but
                              negative work would have also been completed along
                              other portions of the path. A equipotential line
                              would have prevented any work from being done
                              along any part of the path if the object had been
                              moved along it. There would have to be a force
                              applied along any section of the path where
                              positive or negative work was done. In the event
                              that the object was moved along an equipotential
                              line, there would have been no force applied to
                              any individual path segment.
                              <br />
                              This is comparable to moving from one location to
                              another on the same floor of a building by
                              ascending and then descending a set of stairs.
                              Going up the stairs caused the gravitational
                              potential to rise, and going down the stairs
                              caused it to fall. Both climbing and descending
                              the stairs required a force. Instead, if you moved
                              from one point to another while staying level, the
                              gravitational potential would remain constant and
                              wouldn't need to be changed by any external
                              forces.
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
                If a negative charge is initially at rest in an electric field,
                will it move toward a region of higher potential or lower
                potential? What about a positive charge? How does the potential
                energy of the charge change in each instance? Explain.
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
                              An area of higher potential is where a negative
                              charge will gravitate. An area of lower potential
                              will attract a positive charge. Each will have
                              less potential energy.
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
                State clearly the difference (a) between electric potential and
                electric field, (b) between electric potential and electric
                potential energy.
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
                              (a) The electric potential energy per unit charge
                              at a point in space is known as a scalar, or
                              electric potential. The electric force per unit
                              charge at a point in space is known as an electric
                              field, which is a vector.
                              <br />
                              (b) The work against the electric force required
                              to move a charge from one location with zero
                              potential energy to another is known as the
                              electric potential energy. The electric potential
                              energy per charge is known as electric potential.
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
                An electron is accelerated from rest by a potential difference
                of 0.20 V. How much greater would its final speed be if it is
                accelerated with four times as much voltage? Explain.
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
                              The electron's potential energy is inversely
                              correlated with the voltage applied to accelerate
                              it. As a result, if the voltage is multiplied by a
                              factor of 4, the potential energy will also be
                              multiplied by a factor of 4. Then, based on the
                              principle of energy conservation, we assume that
                              during the acceleration process, all of the
                              potential energy is transformed into kinetic
                              energy. As a result, there has also been a 4-fold
                              increase in kinetic energy. The speed must finally
                              increase by a factor of 2, as the speed is
                              proportional to the square root of kinetic energy.
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
                Is there a point along the line joining two equal positive
                charges where the electric field is zero? Where the electric
                potential is zero? Explain.
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
                              At the intersection of the line segment connecting
                              the two equally positive charges, the electric
                              field is zero. Because the location is equally
                              spaced from both charges, the electric field
                              produced by each charge has the same magnitude
                              there, but the two fields are pointing in
                              different directions. Therefore, there is no net
                              electric field. With the exception of infinity,
                              the electric potential is never zero along that
                              line. The total potential, which is the algebraic
                              sum of the two potentials, is always positive
                              because the electric potential resulting from each
                              charge is positive.
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
                Can a particle ever move from a region of low electric potential
                to one of high potential and yet have its electric potential
                energy decrease? Explain.
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
                              If a negative particle moves from a region of low
                              electric potential to one of high potential, its
                              electric potential energy will decrease. The
                              change in potential energy will be negative and
                              consequently decrease if the charge is negative
                              and the potential difference is positive.
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
              <p>Can two equipotential lines cross? Explain.</p>
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
                              Equipped lines cannot cross over one another. That
                              would suggest that a region of space had two
                              distinct potential values. For instance, the
                              potential at the point of crossing would be both
                              40 V and 50 V, which is not possible if two lines
                              of different potentials crossed. The equipotential
                              lines and the electric field are both parallel. If
                              two lines crossed, the electric field there would
                              simultaneously point in both directions, which is
                              not possible.
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
                When a battery is connected to a capacitor, why do the two
                plates acquire charges of the same magnitude? Will this be true
                if the two plates are different sizes or shapes?
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
                              Any potential charge imbalance would be quickly
                              corrected. Assume that the positive plate, which
                              is attached to the battery's positive terminal, is
                              more charged than the negative plate. The more
                              charged positive plate would then be drawn to the
                              negative plate by the negative charges coming from
                              the negative battery terminal. Only so long as the
                              negative plate was equally charged as the positive
                              plate would this process continue.
                              <br />
                              Once again, until equilibrium was reached, the
                              opposite charge transfer would occur if the
                              negative plate became "over charged." The fact
                              that neither the battery nor the capacitor can
                              produce or deplete charge is another way to
                              explain the balance of charge. They must remain
                              neutral after being connected because they were
                              neutral prior to being connected. The excess
                              charge that was removed from one plate is visible
                              on the other plate. No matter how big or how small
                              the conductor is, this is true.
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
                A satellite orbits the Earth along a gravitational equipotential
                line. What shape must the orbit be ?
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
                              A circle must define the orbit. The gravitational
                              potential, also known as potential energy, is a
                              function of the distance from the Earth's center.
                              The orbit is circular if the potential is constant
                              (equipotential line). If the potential is
                              constant, then the distance from the Earth's
                              center must also be constant.
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
                If V = 0 at a point in space, must E = 0? If E = 0 at some
                point, must V = 0 at that point? Explain. Give examples for
                each.
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
                              The value of V and the value of E do not generally
                              correlate. Instead, the size of E is determined by
                              how quickly V drops off over a short distance.
                              Think about the region that lies between two
                              positive charges. There, E is 0, but V is high.
                              Alternatively, think about the area halfway
                              between two negative charges. There, E is also 0,
                              but because V is negative, it is low. Consider the
                              location that lies halfway between charges of
                              equal magnitude on the positive and negative
                              sides. V is 0 but E is not because it points in
                              the direction of the negative charge.
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

export default ElectricPotential;
