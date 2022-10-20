import React from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function Magnetism() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid mt-5 mb-5 p-3">
        <h6>Magnetism </h6>
        <div>
          <ol>
            {/* Q1 */}
            <li>
              <p>
                A compass needle is not always balanced parallel to the Earth’s
                surface, but one end may dip downward. Explain.
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
                              The magnetic field of the Earth occasionally has a
                              component that is perpendicular to the surface; it
                              is not always parallel to the surface. One end of
                              the compass will dip downward as it tends to align
                              with the magnetic field's local direction. The
                              term "angle of dip" refers to the angle that the
                              Earth's magnetic field makes with the horizontal.
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
                Draw the magnetic field lines around a straight section of wire
                carrying a current horizontally to the left.
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
                              As you move further away from the wire, the
                              magnetic field lines encircle it and become
                              weaker. The Right Hand Rule should be used to
                              determine the direction. Observe that the magnetic
                              field lines would point into the paper above the
                              wire and come out of the paper below the wire if
                              the wire were laid horizontally on this piece of
                              paper in a left-to-right direction and the current
                              was flowing to the left. The magnetic fields would
                              point counterclockwise around the wire if it were
                              positioned perpendicular to this page with the
                              current exiting the wire end facing us.
                              <br />
                              <img
                                src={`${process.env.PUBLIC_URL}/img/mq2.png`}
                                alt="magnetism"
                                className="protect-image"
                                style={{ width: "100%" }}
                              />
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
                In what direction are the magnetic field lines surrounding a
                straight wire carrying a current that is moving directly away
                from you? Explain.
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
                              The wire serves as the center of clockwise circles
                              formed by the magnetic field lines.
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
                A horseshoe magnet is held vertically with the north pole on the
                left and south pole on the right. A wire passing between the
                poles, equidistant from them, carries a current directly away
                from you. In what direction is the force on the wire? Explain.
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
                              The right-hand rule demonstrates that the force
                              acting on a wire is directed downward if the wire
                              is in a magnetic field that is oriented from left
                              to right and the current in the wire is pointing
                              directly away from you.
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
                Will a magnet attract any metallic object, such as those made of
                aluminum or copper? (Try it and see.) Why is this so?
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
                              Any metallic object will not be drawn to a magnet.
                              A magnet, for instance, will draw paper clips and
                              nails but not coins or scraps of aluminum foil.
                              This is so because ferromagnetic materials (such
                              as iron, cobalt, nickel, gadolinium, and some of
                              their oxides and alloys) are the only ones that
                              magnets will draw to themselves. The only widely
                              used materials are iron and its alloys. When a
                              powerful magnet is brought close to these
                              ferromagnetic materials, the magnetic domains
                              within them can be made to temporarily align. The
                              strong magnet's south pole and the domain's north
                              pole are pointed in opposite directions by the
                              alignment, which produces the attraction.
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
                Two iron bars attract each other no matter which ends are placed
                close together. Are both magnets? Explain.
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
                              Both of the bars cannot be magnets. If both were
                              magnets, the bars would repel one another if like
                              poles were positioned close together. A magnet can
                              only be found in one of the bars.
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
                The magnetic field due to current in wires in your home can
                affect a compass. Discuss the effect in terms of currents,
                including if they are ac or dc.
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
                              A typical household circuit uses 60 Hz AC current.
                              The compass needle's reaction to 60 Hz (changing
                              direction back and forth at 60 full cycles per
                              second) won't likely be felt because of its mass.
                              Depending on the relative orientation of the wire
                              and the compass, the strength of the current, and
                              the distance between the wire and the compass, a
                              DC current in a single wire may have an impact on
                              the compass. The compass needle would not be
                              significantly affected by a DC current flowing in
                              opposite directions along two very close wires
                              because the magnetic fields created by the two
                              currents have a tendency to cancel one another
                              out.
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
                If a negatively charged particle enters a region of uniform
                magnetic field which is perpendicular to the particle’s
                velocity, will the kinetic energy of the particle increase,
                decrease, or stay the same? Explain your answer. (Neglect
                gravity and assume there is no electric field.)
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
                              The direction of motion and the magnetic force
                              will both be exactly perpendicular to each other.
                              The work done by the magnetic force will be zero
                              and the particle's kinetic energy won't change
                              because there isn't a component of force acting in
                              the direction of motion. Although the particle's
                              speed won't change, its direction will.
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
                A positively charged particle in a nonuniform magnetic field
                follows the trajectory shown in Fig. 20–49. Indicate the
                direction of the magnetic field at points near the path,
                assuming the path is always in the plane of the page, and
                indicate the relative magnitudes of the field in each region.
                Explain your answers.
                <br />
                <img
                  src={`${process.env.PUBLIC_URL}/img/mq9.png`}
                  alt="fig. 21"
                  className="protect-image"
                  style={{ width: "40%" }}
                />
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
                              According to the right-hand rule, if the positive
                              particle is deflected upward, the magnetic field
                              must be inside the paper, and if it is deflected
                              downward, the magnetic field must be outside the
                              paper, as the positive particle moves to the
                              right. Additionally, the charged particle will
                              turn more tightly the stronger the magnetic field
                              is. At the initial bend, the magnetic field must
                              be relatively weak and directed into the paper. At
                              the second bend, the magnetic field must be
                              moderate in size and directed away from the paper.
                              At the third bend, the magnetic field must be
                              relatively strong and directed into the paper.
                              <br />
                              <img
                                src={`${process.env.PUBLIC_URL}/img/mq9a.png`}
                                alt="fig. 23"
                                className="protect-image"
                                style={{ width: "100%" }}
                              />
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
                Suppose you have three iron rods, two of which are magnetized
                but the third is not. How would you determine which two are the
                magnets without using any additional objects?
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
                              Place one rod's end next to the end of another
                              rod. Either the ends will attract or repel.
                              Continue attempting various rod and end
                              combinations until two ends start to repel one
                              another. The magnets are then used as the two rods
                              in that scenario.
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

export default Magnetism;
