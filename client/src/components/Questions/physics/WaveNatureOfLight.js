import React from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function WaveNatureOfLight() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid mt-5 mb-5 p-3">
        <h6>Wave Nature Of Light </h6>
        <div>
          <ol>
            {/* Q1 */}
            <li>
              <p>
                Does Huygens’ principle apply to sound waves? To water waves?
                Explain how Huygens’ principle makes sense for water waves,
                where each point vibrates up and down.
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
                              The Huygens' principle holds true for both water
                              and sound waves. All waves that form a wave crest
                              are subject to Huygens' principle. This method can
                              be used to represent both sounds and water waves.
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
              <p>What is the evidence that light is energy?</p>
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
                              The ability to focus solar light with a magnifying
                              glass on a piece of paper and burn a hole in it is
                              proof that light is energy. The paper has received
                              so much energy from you that you have caused an
                              ignition-causing temperature increase.
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
                Why is light sometimes described as rays and sometimes as waves?
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
                              There are some circumstances (like lenses) where
                              describing light as rays works well, and there are
                              other circumstances (like space) where describing
                              light as waves works well (for example,
                              diffraction). In reality, the ray model fails
                              miserably to explain diffraction. As a result, we
                              must be aware of the limitations of the "models"
                              we employ to describe nature.
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
                We can hear sounds around corners but we cannot see around
                corners; yet both sound and light are waves. Explain the
                difference.
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
                              Diffraction is primarily to blame for the fact
                              that we can hear sounds around corners but cannot
                              see them. When compared to light waves, sound
                              waves have extremely long wavelengths, which makes
                              diffraction effects much more noticeable. Once the
                              object that the wave is diffracting around is
                              roughly the same size as the wave's wavelength,
                              the effects of diffraction become very apparent.
                              Light has a wavelength of about 0.1 m, compared to
                              sound's approximate wavelength of 1 m. Reflection
                              is a secondary justification. Light reflects off
                              of walls in a very diffuse way while sound waves
                              reflect off of them specularly and can bounce
                              around corners.
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
                Why was the observation of the double-slit interference pattern
                more convincing evidence for the wave theory of light than the
                observation of diffraction?
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
                              One reason was that the double-slit experiment
                              enabled measurement of an actual wavelength, which
                              was not possible with diffraction observations at
                              the time. Another reason was that by describing
                              how particles bounced off the edges of the
                              diffracting object or the two edges of a single
                              slit, you could qualitatively explain diffraction
                              using a particle model. The particle model had a
                              much harder time explaining why there are now dark
                              spots where the particles could previously strike
                              with only one slit open when a second slit is
                              added.
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
                Compare a double-slit experiment for sound waves to that for
                light waves.Discuss the similarities and differences.
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
                              Similarities between conducting a double-slit
                              experiment with sound and light include the need
                              for coherent sources in order to see the
                              interference pattern, the production of a pattern
                              of high and low intensity at a distance from the
                              double slit (bright and dark for sound, and loud
                              and quiet for light), and the fact that
                              single-frequency sources are best for both. There
                              are some differences between conducting a
                              double-slit experiment with light and sound. For
                              example, you don't actually need slits for sound,
                              whereas the slits for light must be very close
                              together (just use two speakers).
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
                Why doesn’t the light from the two headlights of a distant car
                produce an interference pattern?
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
                              Because they are not coherent light sources, the
                              two headlights of a faraway car do not produce an
                              interference pattern (they have random phases).
                              Therefore, it is impossible to create zones of
                              destructive and positive interference where the
                              crests and troughs or the crests and crests
                              coincide. Additionally, even if the headlights
                              were coherent, their separation would prevent the
                              interference pattern from being visible to the
                              unaided eye due to how tightly packed it would be.
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
                Hold one hand close to your eye and focus on a distant light
                source through a narrow slit between two fingers. (Adjust your
                fingers to obtain the best pattern.) Describe the pattern that
                you see.
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
                              You begin to notice vertical, parallel to your
                              fingers, bright and dark bands as you clench your
                              fingers together. As you bring your fingers closer
                              together, the dark bands grow wider until, at one
                              point, when your fingers are still not touching,
                              the dark bands suddenly appear and darken the
                              entire space.
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
                What is the difference in the interference patterns formed by
                two slits apart as compared to a diffraction grating containing
                10<sup>4</sup> slits / cm?
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
                              In comparison to the interference pattern produced
                              by the two slits spaced 10<sup>-4</sup> cm apart,
                              the interference pattern produced by the
                              diffraction grating with 10<sup>4</sup> lines/cm
                              has bright maxima that are more clearly defined
                              and narrower.
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
                For a diffraction grating, what is the advantage of <br />
                (a) many slits, <br />
                (b) closely spaced slits?
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
                              (a) A diffraction grating's advantage of having
                              numerous slits is that the interference pattern's
                              bright maxima become more clearly defined,
                              brighter, and narrower.<br /> (b) The bright maxima in
                              the interference pattern are spread out and made
                              easier to measure by having closely spaced slits
                              in a diffraction grating.
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

export default WaveNatureOfLight;
