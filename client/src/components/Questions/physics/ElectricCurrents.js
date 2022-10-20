import React from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function ElectricCurrents() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid mt-5 mb-5 p-3">
        <h6>Electric Currents </h6>
        <div>
          <ol>
            {/* Q1 */}
            <li>
              <p>
                What quantity is measured by a battery rating given in
                ampere-hours Explain.
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
                              Charge is measured in amp-hours. The product is
                              charged because the ampere is a charge per unit
                              time and the hour is a unit of time. 3600 Coulombs
                              of charge equal 1 Ampere-hour.
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
                When an electric cell is connected to a circuit, electrons flow
                away from the negative terminal in the circuit. But within the
                cell, electrons flow to the negative terminal. Explain.
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
                              Electrons move from high potential energy (at the
                              negative terminal) to low potential energy in the
                              circuit, not in the battery (at the positive
                              terminal). The chemical reaction inside the
                              battery does change the electrons' low potential
                              energy to high potential energy (to the negative
                              terminal). The chemical reaction occurring at the
                              negative electrode leaves electrons on the
                              terminal, and the positive ions produced at the
                              negative electrode pull electrons away from the
                              positive electrode, according to a more detailed
                              chemical explanation.
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
                When a flashlight is operated, what is being used up: battery
                current, battery voltage, battery energy, battery power, or
                battery resistance? Explain.
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
                              The "used up" energy is actually battery energy.
                              Charges have a high potential energy as they exit
                              the battery terminal. The potential energy of the
                              charges is then lost as they pass through the
                              flashlight bulb. By reducing its chemical
                              potential energy, the battery uses a chemical
                              reaction to replace the potential energy of the
                              charges. A battery can no longer provide potential
                              energy to charges when it has "used up."
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
                One terminal of a car battery is said to be connected to
                “ground.” Since it is not really connected to the ground, what
                is meant by this expression?
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
                              The car's metal engine block, chassis, and frame
                              are all connected to the battery's one terminal,
                              which is typically the negative one. This implies
                              that all voltages applied to the vehicle's
                              electrical systems are determined with reference
                              to the frame of the vehicle. The frame's
                              substantial metal mass also allows it to provide
                              current charges without significantly altering its
                              electrical potential.
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
                The equation P = V<sup>2</sup> / R indicates that the power
                dissipated in a resistor decreases if the resistance is
                increased, whereas the equation P = I<sup>2</sup>R implies the
                opposite. Is there a contradiction here? Explain.
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
                              It is implied that the voltage is constant when it
                              is stated that P = V<sup>2</sup> / R shows a
                              decrease in power as resistance rises. It is
                              implied that the current is constant when it is
                              said that P = V<sup>2</sup>R shows an increase in
                              power as resistance increases. For any given
                              circumstance, only one of those can be accurate.
                              The voltage must change if the resistance
                              fluctuates while remaining constant. The voltage
                              must change as well if the resistance shifts but
                              the current stays the same.
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
              <p>What happens whenever a lightbulb burns out?</p>
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
                              A light bulb's filament splits in half when it
                              burns out. Since the filament is a component of
                              the conducting path for the electricity passing
                              through the bulb, once the filament is broken,
                              current cannot flow through the bulb and the bulb
                              ceases to function as a source of light.
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
                Explain why lightbulbs almost always burn out just as they are
                turned on and not after they have been on for some time.
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
                              A light bulb's filament will have less resistance
                              when it is cool, as opposed to when it is hot,
                              when it is first turned on. Since the resistance
                              is lower, the bulb will conduct more current while
                              it is cooling. The filament will become quite hot
                              due to this brief high current. The filament will
                              vaporize at an excessive temperature, which will
                              prevent current from flowing through the bulb.
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
                Which draws more current, a 100-W lightbulb or a 75-W bulb?
                Which has the higher resistance?
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
                              Since P = IV, the higher power bulb will draw the
                              most current if the voltage of the two light bulbs
                              is the same. The higher power bulb will also have
                              the lower resistance, assuming that both light
                              bulbs have the same voltage, because P = V
                              <sup>2</sup> / R. Therefore, the 75 W bulb will
                              have a higher resistance and the 100 W bulb will
                              draw the most current.
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
                A 15-A fuse blows out repeatedly. Why is it dangerous to replace
                this fuse with a 25-A fuse?
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
                              The circuit is carrying more current than 15 A,
                              which is why the 15-A fuse is blowing. The circuit
                              is most likely only intended to support 15 A, so
                              there may have been a "short" or some other issue
                              that caused the current to exceed 15 A. The wires
                              carrying the current will become hotter if the
                              15-A fuse is changed out for a 25-A fuse, which
                              will enable more current to flow. There could be
                              damage to some types of electrical equipment or a
                              fire. The circuit is malfunctioning, as indicated
                              by the blown fuse.
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
                When electric lights are operated on low-frequency ac (say, 5
                Hz), they flicker noticeably. Why?
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
                              The metal filament in the wire will turn on and
                              off 20 times per second at just 10 Hz. (At the
                              maximum current in each direction, it has a
                              maximum magnitude of current.) During the low
                              current portions of the cycle, the metal filament
                              has time to cool down and become dim, which your
                              eye can see. The filament never cools down to the
                              point where it significantly dims at 50 or 60 Hz.
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

export default ElectricCurrents;
