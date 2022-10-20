import React from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function SoundWaves() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid mt-5 mb-5 p-3">
        <h6>Sound Waves </h6>
        <div>
          <ol>
            {/* Q1 */}
            <li>
              <p>What is the evidence that sound travels as a wave?</p>

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
                              Numerous phenomena that sound displays provide
                              proof that it is a wave. Wave interference is a
                              phenomenon that occurs, and sound causes
                              interference (such as beats). Sound can be
                              diffracted (for example, by being bent) because
                              diffraction is a wave phenomenon. in corners,
                              heard). Refraction is a phenomenon that occurs in
                              waves, and it occurs in sound when indirect
                              transition from one medium to another
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
              <p>What is the evidence that sound is a form of energy?</p>
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
                              The ability of sound to perform work serves as
                              proof that it is a type of energy. A sound wave
                              produced in one place can cause an object to
                              mechanically vibrate in another. For instance,
                              sound can cause glass to break, rattle windows, or
                              move eardrums.
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
                When a sound wave passes from air into water, do you expect the
                frequency or wavelength to change?
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
                              The two media could not communicate with one
                              another if the frequency changed. Particles from
                              the two media initially in contact could not
                              maintain contact if one medium vibrates at one
                              frequency while the other medium vibrates at a
                              different frequency. The frequency does not change
                              because particles must be in contact for a wave to
                              travel from one medium to another. We anticipate
                              the wavelength to change because the wave speed
                              alters as it transitions from air to water while
                              the frequency remains constant. We anticipate that
                              the wavelength in water will be roughly four times
                              longer than it is in air because the wave travels
                              through water at an approximately four-times
                              faster rate.
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
                What evidence can you give that the speed of sound in air does
                not depend significantly on frequency?
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
                              It can be demonstrated that the speed of sound in
                              air is independent of frequency by listening to
                              music while seated a long way from the source of
                              the sound. High and low sounds produced
                              simultaneously at the source would arrive at your
                              location at different times if the speed were
                              heavily frequency dependent, and the music would
                              sound very jumbled. The music "stays together,"
                              which is proof that speed is
                              frequency-independent.
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
                The voice of a person who has inhaled helium sounds very
                high-pitched. Why?
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
                              A person's body has many resonating cavities,
                              including the throat, which are involved in sound
                              production. The relatively fixed sound wavelengths
                              that a person can produce are determined by the
                              relatively fixed geometry of these cavities. Those
                              wavelengths will have corresponding frequencies,
                              which are provided by f = v / &#955;. The gas
                              filling the resonant cavities affects how quickly
                              sound travels. Since sound waves move about three
                              times as quickly in helium as they do in air, if
                              the person has inhaled any, the speed of sound
                              will be significantly higher than usual. The
                              individual's frequencies will therefore increase
                              by about a factor of 3. The person sounds very
                              high pitched because there has been a 1.5 octave
                              shift in pitch.
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
                Explain how a tube might be used as a filter to reduce the
                amplitude of sounds in various frequency ranges. (An example is
                a car muffler.)
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
                              At particular frequencies, a tube of a certain
                              length will resonate (allow standing waves). Only
                              frequencies close to resonant frequencies will
                              generate sound that lasts in a tube when a mixture
                              of frequencies is applied because standing waves
                              are produced for those frequencies. Frequencies
                              outside of resonant frequencies won't last very
                              long at all; they'll quickly "die out." For
                              instance, sound input near one of those
                              frequencies will persist and sound fairly loud if
                              there are two adjacent resonances of a tube at 100
                              Hz and 200 Hz.
                              <br />A sound input at about 150 Hz would quickly
                              fade out and, as a result, have a smaller
                              amplitude than the resonant frequencies. If the
                              filtered frequencies are far from the resonant
                              frequencies, the length of the tube can be chosen
                              to "filter" out those frequencies.
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
                A noisy truck approaches you from behind a building. Initially
                you hear it but cannot see it. When it emerges and you do see
                it, its sound is suddenly “brighter”—you hear more of the
                high-frequency noise. Explain. [Hint: See Section 11–14 on
                diffraction.]
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
                              You can't see the truck when you first hear it.
                              The distance between the truck and you is not a
                              straight line. As a result of diffraction, the
                              sound waves that you are hearing have reached your
                              location. You initially only hear sounds with long
                              wavelengths, which are low-frequency sounds,
                              because long wavelengths are diffracted more than
                              short wavelengths. Once you can see the truck, you
                              can pick up all of the frequencies it is emitting,
                              not just the lower ones. As a result of you
                              hearing more high frequency components, the sound
                              "brightens."
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
                Standing waves can be said to be due to “interference in space,”
                whereas beats can be said to be due to “interference in time.”
                Explain
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
                              Standing waves do not "travel" from one location
                              to another in their wave pattern. The positions of
                              the nodes are fixed in space. Any given point in
                              the medium always has the same amplitude. As a
                              result, the interference can be referred to as
                              "interference in space" because shifting the
                              observation point causes the interference to
                              switch from constructive (anti-node) to
                              destructive (node) (node). The position of
                              observation must change in order to experience the
                              entire range from node to anti-node, but multiple
                              observers may make all observations
                              simultaneously.
                              <br />
                              Beats do cause a wave pattern that moves from one
                              location to another. Any given point in the medium
                              will have a 0 amplitude (node) at one moment and a
                              maximum amplitude half a beat later (anti-node).
                              The interference is therefore a "interference in
                              time." When it comes to experiencing the full
                              spectrum of interference, from constructive
                              interference to destructive interference, All
                              observations could be made at the same location,
                              but observation must change.
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
                Traditional methods of protecting the hearing of people who work
                in areas with very high noise levels have consisted mainly of
                efforts to block or reduce noise levels. With a relatively new
                technology, headphones are worn that do not block the ambient
                noise. Instead, a device is used which detects the noise,
                inverts it electronically, then feeds it to the headphones in
                addition to the ambient noise. How could adding more noise
                reduce the sound levels reaching the ears?
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
                              The so-called active noise reduction technologies
                              operate on the interference theory. The original
                              noise and the created noise will roughly be in a
                              destructive interference relationship if the
                              electronics are quick enough to detect the noise,
                              invert it, and create the opposite wave (180o out
                              of phase with the original) in significantly less
                              time than one period of the noise components. A
                              very faint net sound signal will be audible to the
                              person using headphones.
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
                Is there a Doppler shift if the source and observer move in the
                same direction, with the same velocity? Explain.
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
                              If the source and observer move at the same speed
                              and in the same direction, there won't be any
                              Doppler shift. When the source and the observer
                              move in the same direction and at the same speed,
                              there is no relative motion, which is what causes
                              the doppler shift.
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

export default SoundWaves;
