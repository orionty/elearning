import React from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function OscillationAndWaves() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid mt-5 mb-5 p-3">
        <h6>Oscillation And Waves </h6>
        <div>
          <ol>
            {/* Q1 */}
            <li>
              <p>
                Is the acceleration of a simple harmonic oscillator ever zero?
                If so, where?
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
                              When the oscillating object is in the equilibrium
                              position, the acceleration of a simple harmonic
                              oscillator is zero.
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
                Real springs have mass. Will the true period and frequency be
                larger or smaller than given by the equations for a mass
                oscillating on the end of an idealized massless spring? Explain
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
                              Given that the actual spring has mass, its moving
                              mass is greater than its final mass. Since f = 1
                              / 2&pi;&radic; k / m, a smaller frequency
                              corresponds to a larger mass. The actual frequency
                              will therefore be lower than the "massless spring"
                              approximation. The true period will also be longer
                              than the "massless spring" approximation because
                              the true frequency is smaller. The spring's mass
                              makes up about one-third of the total mass.
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
                Explain why the motion of a piston in an automobile engine is
                approximately simple harmonic.
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
                              Simple harmonic motion can be used to approximate
                              the piston's motion. First off, when the engine is
                              running at a constant speed, the piston will have
                              a constant period. At its two extreme points of
                              motion, the top and bottom of the stroke, the
                              piston's speed will be zero, just like in simple
                              harmonic motion. The combustion of the fuel
                              mixture exerts a significant force on the piston
                              at one of its motion's extremes, and simple
                              harmonic motion exerts the greatest force there.
                              Additionally, the piston receives the crankshaft's
                              one-dimensional motion component as it rotates in
                              a circle.
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
                How could you double the maximum speed of a simple harmonic
                oscillator (SHO)?
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
                              Given by v<sub>max</sub> = A &radic;k / m is the
                              maximum speed. The maximum speed can be doubled by
                              changing A, k, and/or m in different ways. For
                              instance, doubling the amplitude will result in a
                              doubling of the maximum speed if k and m are kept
                              constant. Alternately, if A and k remain constant,
                              cutting the mass in half will increase the top
                              speed by twofold. It should be noted that altering
                              k or m will also alter the oscillator's
                              frequency.Since f = 1 / 2&pi;&radic; k / m
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
                Why can you make water slosh back and forth in a pan only if you
                shake the pan at a certain frequency?
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
                              Shaking the water (and the pan) at the frequency
                              of the water waves in the pan will cause the water
                              to "slosh." When this happens, the water is in
                              resonance or is forming a standing wave pattern,
                              and the oscillation's amplitude increases. The
                              size of the pan affects this natural frequency
                              because smaller pans will slosh at higher
                              frequencies with shorter standing wave
                              wavelengths. A water wave must travel "round-trip"
                              in the pan in the same amount of time as the
                              shaking period.
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
              <p>Give several everyday examples of resonance.</p>
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
                              Resonance examples include:
                              <br />
                              When pushing a child on a swing in a playground,
                              push at the swing's frequency.
                              <br />
                              observing a stop sign that is constantly moving in
                              the wind.
                              <br />
                              Certain notes will ring out louder than others
                              when singing in the shower.
                              <br />
                              Due to the wind, utility lines next to roads can
                              have significant amplitudes.
                              <br />
                              rubbing a wineglass with your finger to make it
                              "sing."
                              <br />
                              blowing across a bottle's top.
                              <br />
                              Rumbling in a car
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
              <p>Is a rattle in a car ever a resonance phenomenon? Explain.</p>
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
                              A car rattle is frequently a resonance phenomenon.
                              Wheels rotating, pistons moving up and down,
                              valves opening and closing, transmission gears
                              spinning, driveshaft spinning, and other periodic
                              motions cause the car to vibrate in many different
                              parts. As the car is driven, irregularities in the
                              road surface, like running over a pothole, cause
                              vibrations as well. If a part is loose and its
                              natural frequency is close to one of the
                              frequencies present during the normal operation of
                              the car, it will rattle and have a larger than
                              usual oscillation amplitude. This explains why
                              some rattles only appear when driving at
                              particular speeds.
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
                Is the frequency of a simple periodic wave equal to the
                frequency of its source? Why or why not?
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
                              A simple periodic wave has a frequency that is the
                              same as that of its source. The source moves the
                              wave medium that is in contact with the source,
                              which produces the wave. When you move your hand
                              at a frequency of 2 Hz while holding a taut string
                              end in your hand, the string end in your hand will
                              also move at this frequency because it is in
                              contact with your hand. The medium's moving
                              portions then exert forces on nearby portions,
                              causing those portions to oscillate.
                              <br />
                              These two areas of the medium must move at the
                              same frequency because they remain in contact with
                              one another. The entire wave in the medium has the
                              same frequency as the source because that can be
                              repeated along the entire length of the medium.
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
                Explain the difference between the speed of a transverse wave
                traveling down a cord and the speed of a tiny piece of the cord.
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
                              How quickly the wave disturbance travels along the
                              cord is determined by the transverse wave's speed.
                              This speed is constant for uniform cords and is
                              determined by the cord's mass density and tension.
                              A small piece of the cord's speed is determined by
                              how quickly the piece moves perpendicular to the
                              cord as the disturbance passes by. The speed of
                              each piece of the cord will be determined by the
                              speed relationship of a simple harmonic oscillator
                            , which depends on the wave's
                              amplitude, frequency, and the precise time of
                              observation if a sinusoidal wave is moving along
                              the cord.
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
                Give two reasons why circular water waves decrease in amplitude
                as they travel away from the source.
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
                              (a) The circumference of a circular wave grows as
                              it expands. As the wave's circumference grows, its
                              intensity must decrease in order for the wave's
                              energy to remain constant. The square of the
                              amplitude determines the wave's intensity. <br />(b) The
                              energy from the water's viscosity dissipates,
                              causing the waves to become smaller in size
                              (dissipative or frictional energy loss)
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

export default OscillationAndWaves;
