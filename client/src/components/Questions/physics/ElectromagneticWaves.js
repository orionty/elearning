import React from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function ElectromagneticWaves() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid mt-5 mb-5 p-3">
        <h6>Electromagnetic Waves </h6>
        <div>
          <ol>
            {/* Q1 */}
            <li>
              <p>
                The electric field in an EM wave traveling north oscillates in
                an east–west plane. Describe the direction of the magnetic field
                vector in this wave. Explain.
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
                              The magnetic field must oscillate up and down if
                              the electric field oscillates east-west and the EM
                              wave travels in a northerly direction. The
                              electric field, magnetic field, and wave direction
                              must all be perpendicular to one another for an
                              electromagnetic wave to exist.
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
              <p>Is sound an EM wave? If not, what kind of wave is it?</p>
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
                              Audio waves are not electromagnetic waves, though.
                              A mechanical (pressure) wave is what sound is.
                              Actually, the sound wave's energy causes the
                              medium it travels through to oscillate (air, in
                              this case). An EM wave's energy is contained in
                              its electric and magnetic fields, so it does not
                              require a medium to travel through.
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
                Can EM waves travel through a perfect vacuum? Can sound waves?
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
                              Yes, even in a perfect vacuum, EM waves can still
                              propagate. No medium is necessary for the energy
                              to travel because it is carried by the oscillating
                              electric and magnetic fields. No, a perfect vacuum
                              cannot allow sound waves to pass through. A
                              perfect vacuum lacks the medium necessary to
                              transport the energy of mechanical waves like
                              sound.
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
                When you flip a light switch on, does the light go on
                immediately? Explain.
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
                              When you turn on a light switch, electrons in the
                              filament wire need to move in order to illuminate
                              the bulb, and they require energy in order to
                              start moving. Although it does take some time for
                              the energy to move through the wires from the
                              switch to the bulb, this time is incredibly brief
                              because the energy moves through the wires with
                              the EM fields almost as quickly as light.
                              <br />
                              Little time passes because it takes some time for
                              the EM (light) waves to travel from the bulb to
                              your eye, even though they do so at the speed of
                              light. Your eyes can typically detect some delay
                              because it takes the filament a little while to
                              heat up to a temperature where it emits visible
                              light. Additionally, the length of time it takes
                              for you to see the light turn on may vary
                              depending on the circuit's inductance (inductance
                              acts like an electrical inertia). So, no, the
                              light does not turn on instantly when the switch
                              is flipped, but there is only a very slight delay.
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
                Are the wavelengths of radio and television signals longer or
                shorter than those detectable by the human eye?
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
                              Compared to visible light, radio and television
                              signals have much longer wavelengths. The range of
                              radio waves is between 3 and 30,000 meters. TV
                              waves range from 0.3 to 3 meters. The wavelength
                              of visible waves is around 10<sub>-7 m</sub>.
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
                When you connect two loudspeakers to the output of a stereo
                amplifier, should you be sure the lead-in wires are equal in
                length to avoid a time lag between speakers? Explain.
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
                              The lead-in wires to your speakers don't have to
                              be exactly the same length. The difference in time
                              between the signals reaching the various speakers
                              will be too small for your ears to notice because
                              energy in the wires moves at a speed that is
                              almost as fast as light. [It is much more crucial
                              to check that the resistance of your speaker wires
                              is accurate.]
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
                Can radio waves have the same frequencies as sound waves (20
                Hz–20,000 Hz)?
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
                              The frequencies of radio waves can indeed match
                              those of sound waves. When compared to sound
                              waves, these 20–20,000 Hz EM waves would have
                              incredibly long wavelengths (like ELF waves for
                              submarine communication). The wavelength of a 5000
                              Hz sound wave is roughly 70 mm, whereas the
                              wavelength of a 5000 Hz electromagnetic wave is
                              roughly 60 km.
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
                Can two radio or TV stations broadcast on the same carrier
                frequency? Explain.
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
                              The signals will be "scrambled" if two TV or radio
                              stations broadcast on the same carrier frequency
                              and their signals are similar in strength in the
                              same area. The receiver distinguishes between
                              various stations using the carrier frequency. The
                              receiver's circuitry then goes to work
                              demodulating the data being transmitted on that
                              carrier frequency after it has locked on to a
                              specific carrier frequency. In the event that two
                              stations used the same carrier frequency, the
                              receiver would attempt to decode both signals
                              simultaneously, resulting in a jumbled signal
                              rather than a clear one.
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
                If a radio transmitter has a vertical antenna, should a
                receiver’s antenna (rod type) be vertical or horizontal to
                obtain best reception?
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
                              For the best reception, the receiver antenna
                              should also be vertical. A vertical antenna would
                              "pick up" the oscillating carrier electric field
                              signal better because the electrons in the metal
                              antenna would be forced to oscillate up and down
                              along the entire length of the vertical antenna,
                              resulting in a stronger signal. This has a similar
                              effect to polarized light, which was covered in
                              chapter 24.
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
                The carrier frequencies of FM broadcasts are much higher than
                for AM broadcasts. On the basis of what you learned about
                diffraction in Chapter 11, explain why AM signals can be
                detected more readily than FM signals behind low hills or
                buildings.
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
                              Only when the wavelength of the wave is greater
                              than the size of the object do diffraction effects
                              (the bending of waves around the edge of an
                              object) become visible. While FM waves have
                              wavelengths of about 3 m, AM waves have
                              wavelengths that are about 300 m long. Since hills
                              and buildings are much larger than FM waves, FM
                              waves will not diffract around them. As a result,
                              the FM signal won't be picked up behind hills or
                              structures. However, because these objects are
                              smaller than AM waves, they will easily cause AM
                              waves to diffract around them. You can pick up the
                              AM signal from behind the objects.
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

export default ElectromagneticWaves;
