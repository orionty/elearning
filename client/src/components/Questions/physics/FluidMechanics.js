import React from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function FluidMechanics() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid mt-5 mb-5 p-3">
        <h6>Fluid Mechanics </h6>
        <div>
          <ol>
            {/* Q1 */}
            <li>
              <p>
                If one material has a higher density than another, must the
                molecules of the first be heavier than those of the second?
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
                              The ratio of mass to volume is known as density. A
                              higher density could result from lighter molecules
                              being packed closer together, which would result
                              in a given mass occupying a smaller volume.
                              Because gold has a lower atomic mass than lead, an
                              atom of gold weighs less than an atom of lead, but
                              gold has a higher density than lead.
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
                Airplane travelers sometimes note that their cosmetics bottles
                and other containers have leaked during a flight. What might
                cause this?
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
                              The sensation in the ears as the plane descends
                              and the cabin's air pressure returns to normal is
                              proof that the air pressure inside an airplane's
                              cabin is lower than typical sea-level air
                              pressure. The pressure inside the container is
                              normal air pressure if the container was opened at
                              normal air pressure before the flight. Since there
                              is a force acting from the inside of the container
                              outward during flight because the outside pressure
                              is lower than the inside pressure, the contents
                              may be forced out of the container.
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
                Consider what happens when you push both a pin and the blunt end
                of a pen against your skin with the same force. Decide what
                determines whether your skin is cut—the net force applied to it
                or the pressure.
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
                              When pushed into the skin with a certain minimum
                              force, the pin's sharp end (which has a smaller
                              area) will pierce the skin, but when the same
                              force is used to push the pen's blunt end (which
                              has a larger area), the skin will not be
                              penetrated. Therefore, whether or not the skin is
                              pierced depends on pressure (force per unit area).
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
                A small amount of water is boiled in a 1-gallon metal can. The
                can is removed from the heat and the lid put on. As the can
                cools, it collapses and looks crushed. Explain.
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
                              Inside the can, the boiling water generates a
                              sizable amount of steam. Despite being at
                              atmospheric pressure and containing steam, the gas
                              inside the can will be much warmer than the
                              surrounding air. The pressure drops significantly
                              as the steam condenses and the gas inside the
                              sealed can cools. Because the pressure inside the
                              can has decreased, the outside air pressure, which
                              is greater than the pressure inside, crushes the
                              can. When water is boiled to a vapor, the water
                              molecules appear to be moving very quickly at the
                              microscopic level. Although many water molecules
                              escape the can, the ones that remain can keep the
                              can in its original shape because of how hard the
                              walls are hit by their high speed. The water vapor
                              molecules slow down (some will condense) once the
                              lid is on and the can has cooled, so that no gas
                              can enter from the outside. Slow molecules exert
                              less force on the interior walls because they are
                              moving more slowly. greater force coming from the
                              The can is then crushed by the outside air
                              pressure.
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
                When blood pressure is measured, why must the jacket be held at
                the level of the heart?
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
                              It is important to gauge the heart's impact on
                              blood pressure. The effects of gravity will cause
                              the blood pressure to be <i>pgh</i> higher than
                              the pressure at the heart if it is measured at a
                              location <i>h</i> lower than the heart. The blood
                              pressure will also be lower than the pressure at
                              the heart by an amount <i>pgh</i> if it is
                              measured at a location h higher than the heart.
                              This is again a result of the effects of gravity.
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
                An ice cube floats in a glass of water filled to the brim. What
                can you say about the density of ice? As the ice melts, will the
                water overflow? Explain.
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
                              Given that ice floats, ice must have a lower
                              density than water. Regardless of whether it is
                              solid or liquid, the mass of the ice displaces a
                              volume of water equal to its weight. As a result,
                              the level in the glass doesn't change as the ice
                              melts. The melted volume is displaced by the ice.
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
                Will an ice cube float in a glass of alcohol? Why or why not?
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
                              The ice cube won't float in an alcoholic beverage
                              because ice has a higher density than alcohol.
                              Alcohol will cause the ice cube to float.
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
                A submerged can of Coke® will sink, but a can of Diet Coke® will
                float. (Try it!) Explain
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
                              Due to the carbonation process, gas has been
                              dissolved in both products, lowering their
                              respective densities relative to water. Because
                              there is a sizable amount of sugar dissolved in
                              the Coke, its density is higher than that of
                              water. Since there is no dissolved sugar in Diet
                              Coke, its density is still lower than that of
                              water. As a result, the Diet Coke floats while the
                              Coke sinks.
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
              <p>Why don’t ships made of iron sink?</p>
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
                              Iron ships aren't made of pure iron. If they were,
                              they would inevitably sink. However, the ships'
                              volume has a lot of open space (such as the volume
                              between the deck and the hull), which lowers their
                              overall density compared to water. The boat floats
                              because the ratio of the total mass of iron to the
                              total volume of the boat is less than the density
                              of water.
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
                A barge filled high with sand approaches a low bridge over the
                river and cannot quite pass under it. Should sand be added to,
                or removed from, the barge? [Hint: Consider Archimedes’
                principle.]
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
                              Sand is denser than water, so filling a barge with
                              a given volume of sand (equal to the area of the
                              barge times the depth of added sand) will result
                              in the need to displace even more water to support
                              the added weight. As a result, the additional
                              depth that the barge must be submerged to in order
                              for it to float will more than make up for the
                              additional height that the sand addition caused to
                              the barge. Sand removal would have the opposite
                              result, raising the barge.
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

export default FluidMechanics;
