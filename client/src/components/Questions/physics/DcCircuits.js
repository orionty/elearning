import React from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function DcCircuits() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid mt-5 mb-5 p-3">
        <h6>Dc Circuits </h6>
        <div>
          <ol>
            {/* Q1 */}
            <li>
              <p>
                Explain why birds can sit on power lines safely, even though the
                wires have no insulation around them, whereas leaning a metal
                ladder up against a power line is extremely dangerous.
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
                              Because they are not grounded, the birds are
                              secure. Since the potential difference across
                              their legs is so small, there is no current flow
                              through their bodies since both of their legs are
                              essentially at the same voltage (the only
                              difference being caused by the tiny resistance of
                              the wire between their feet). You are essentially
                              creating a short circuit from the high potential
                              wire to the low potential ground if you lean a
                              metal ladder against a power line. At least
                              briefly, a large current will flow, and anyone
                              touching the ladder will be in grave danger from
                              that large current.
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
                Discuss the advantages and disadvantages of Christmas tree
                lights connected in parallel versus those connected in series.
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
                              If the lights are connected in parallel, the rest
                              of the string remains lit even if one bulb burns
                              out. That makes it simple to identify which light
                              has failed. Since two wires must be connected from
                              bulb to bulb, a parallel string requires more
                              effort to put together than a series string. If
                              the lights are wired in series, all of the bulbs
                              will burn out if just one of them does. Because of
                              this, it is challenging to determine which light
                              has failed. Since there is only one wire that
                              needs to be connected from bulb to bulb, a series
                              string is easier to put together than one that is
                              parallel. By cutting off the current, a "blinker
                              bulb" can make the entire string flash on and off.
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
                If all you have is a 120-V line, would it be possible to light
                several 6-V lamps without burning them out? How?
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
                              Each of the 20 6-V lamps would experience a
                              voltage drop of 6 V if they were wired in series
                              and connected to the 120 V line, preventing them
                              from overheating and burning out. Because they
                              were connected in series, if one light bulb failed
                              for any reason, the others would also.
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
                Two lightbulbs of resistance R<sub>1</sub> and R<sub>2</sub> (R
                <sub>1</sub> > R<sub>2</sub>) and a battery are all connected in
                series. Which bulb is brighter? What if they are connected in
                parallel? Explain.
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
                              Each lightbulb will have the same current if they
                              are connected in series. P = I<sub>2</sub>R
                              provides the power that the bulb uses to emit heat
                              and light. The bulb will therefore be brighter if
                              R<sub>2</sub> is higher. Each bulb will have the
                              same voltage if they are connected in parallel. P
                              = V<sub>2</sub> / R provides the power that the
                              lightbulb uses to emit heat and light. The bulb
                              will therefore be brighter if R<sub>1</sub> has a
                              lower value.
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
                Household outlets are often double outlets. Are these connected
                in series or parallel? How do you know?
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
                              Because you can use one outlet without using the
                              other, the outlets are connected in parallel. If
                              they were connected in series, a circuit would
                              need to be completed by using both outlets at
                              once. Additionally, because both outlets deliver
                              the same voltage to the connected device, they are
                              wired in parallel to the voltage source.
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
                With two identical lightbulbs and two identical batteries,
                explain how and why you would arrange the bulbs and batteries in
                a circuit to get the maximum possible total power to the
                lightbulbs. (Ignore internal resistance of batteries.)
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
                              P = V<sub>2</sub>/ R represents the power output
                              from a resistor. The voltage must be as high and
                              the resistance as low as possible to achieve the
                              highest value. This can be done by connecting the
                              two batteries in series and the two resistors in
                              parallel across the entire voltage of the two
                              batteries.
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
                If two identical resistors are connected in series to a battery,
                does the battery have to supply more power or less power than
                when only one of the resistors is connected? Explain.
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
                              The battery's output power is calculated by
                              multiplying its voltage by the sum of its current
                              flow. The current is reduced by half when two
                              resistors are connected in series. For the two
                              series resistors, the battery must therefore
                              provide 50% less power than for the single
                              resistor.
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
                You have a single 60-W bulb lit in your room. How does the
                overall resistance of your room’s electric circuit change when
                you turn on an additional 100-W bulb? Explain.
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
                              When both bulbs are on, the wiring in the room is
                              carrying more current, but the voltage stays the
                              same. As a result, the circuit in the room must
                              now have less resistance. Additionally, because
                              the bulbs are connected in series, connecting two
                              resistors in series always yields a net resistance
                              that is lower than both of the individual
                              resistances.
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
                When applying Kirchhoff’s loop rule, does the sign (or
                direction) of a battery’s emf depend on the direction of current
                through the battery? What about the terminal voltage?
                <br />
                <img
                  src={`${process.env.PUBLIC_URL}/img/dcq9.png`}
                  alt="Fig. 16"
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
                              No, the direction of the current passing through
                              the battery has no bearing on the battery's emf's
                              sign. Using the loop rule, the direction you pass
                              through the battery determines the battery's emf's
                              sign. The emf is added if you move from a negative
                              to a positive pole. The emf is subtracted if you
                              move from a positive pole to a negative pole.
                              However, the direction of the current through the
                              battery does affect the terminal voltage.
                              <br />
                              There is a voltage drop across the internal
                              resistance and the terminal voltage is less than
                              the emf if current is flowing through the battery
                              in the normal orientation (leaving the positive
                              terminal, traveling through the circuit, and
                              arriving at the negative terminal). The terminal
                              voltage rises across the terminal resistance and
                              is greater than the emf if the current flows in
                              the opposite direction (as when the battery is
                              being charged).
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
                For what use are batteries connected in series? For what use are
                they connected in parallel? Does it matter if the batteries are
                nearly identical or not in either case?
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
                              To increase the voltage that is available to a
                              device, batteries are connected in series. For
                              instance, the potential across the bulb in a
                              flashlight will be 3.0 V if two 1.5-V batteries
                              are connected in series. Batteries do not have to
                              be nearly identical. To increase the total amount
                              of current available to a device, batteries are
                              connected in parallel. The batteries should be
                              very similar to one another. The smaller voltage
                              batteries will be recharged by the larger voltage
                              batteries if they are not.
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

export default DcCircuits;
