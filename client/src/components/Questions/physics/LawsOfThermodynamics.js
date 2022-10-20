import React from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function LawsOfThermodynamics() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid mt-5 mb-5 p-3">
        <h6>The Laws Of Thermodynamics </h6>
        <div>
          <ol>
            {/* Q1 */}
            <li>
              <p>
                In an isothermal process, 3700 J of work is done by an ideal
                gas. Is this enough information to tell how much heat has been
                added to the system? If so, how much? If not, why not?
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
                              The internal energy of the gas remains unchanged
                              because the process is isothermal. Therefore, 
                              &Delta;U Q - W = 0 &rarr; Q = W, and the heat the
                              gas absorbs is equal to the work it does. As a
                              result, the gas gained 3700 J of heat.
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
                Can the temperature of a system remain constant even though heat
                flows into or out of it? If so, give examples. 4. Explain why
                the temperature of a gas increases when it is compressed
                adiabatically.
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
                              Heat can be produced entirely from mechanical
                              energy. When a moving object slides across an
                              uneven, level surface and eventually comes to a
                              stop, all of its mechanical energy has been
                              converted to heat. Additionally, if a moving
                              object were to compress a frictionless piston
                              filled with an insulated gas, the gas would absorb
                              the object's kinetic energy as internal energy. By
                              exerting force on its surroundings at the expense
                              of its internal energy, a gas that expands
                              adiabatically (without heat transfer) converts
                              internal energy into mechanical energy. That is
                              undoubtedly the ideal (reversible) process.
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
                Entropy is often called “time’s arrow” because it tells us in
                which direction natural processes occur. If a movie were run
                backward, name some processes that you might see that would tell
                you that time was “running backward.”
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
                              Observing a building or car transform from an
                              exploded state to an undamaged state in an action
                              film. When two colliding cars separate from one
                              another in a movie about car crashes, they stop
                              being wrecked. observing someone "un-write"
                              something on paper by moving a pen across the page
                              and erasing written marks as it does so.
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
                Living organisms, as they grow, convert relatively simple food
                molecules into a complex structure. Is this a violation of the
                second law of thermodynamics? Explain your answer.
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
                              Since the constituent molecules are now more
                              "structured" or "ordered," the entropy of the
                              simpler molecules does decrease during the
                              synthesis of complex molecules. The molecules,
                              however, are not a closed system. This process
                              doesn't start on its own or by itself. One element
                              of the environment that must be taken into account
                              for the overall change in entropy is the living
                              organism in which the synthesis process takes
                              place. Overall, the second law is still satisfied,
                              and the entropy of the entire system will increase
                              because the increase in entropy of the living
                              organism will be greater than the decrease in
                              entropy of the molecules.
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
                Suppose a lot of papers are strewn all over the floor; then you
                stack them neatly. Does this violate the second law of
                thermodynamics? Explain.
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
                              Although the papers' state has changed from
                              disarray to order, this did not happen on its own.
                              The rise in order was brought about by an external
                              force (you). Your entropy increased more than the
                              entropy of the papers did because you had to
                              provide energy for this (through your metabolic
                              processes). The overall result is that the
                              universe's entropy increased, in accordance with
                              the second law of thermodynamics.
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
                Think up several processes (other than those already mentioned)
                that would obey the first law of thermodynamics, but, if they
                actually occurred, would violate the second law.
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
                              (a) When an empty perfume bottle is placed in a
                              space filled with scent molecules, each scent
                              molecule simultaneously moves into the bottle from
                              all sides. <br />
                              (b) Droplets of water that have gathered on the
                              sidewalk are accelerated upward and rise into the
                              air. <br />
                              (c) When popcorn is put in the refrigerator, it
                              "unpops," turning into raw kernels.
                              <br /> (d) In the winter, a house warmed up while
                              the outside grew colder as a result of heat
                              transfer from the outside to the interior.
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
                You are asked to test a machine that the inventor calls an
                “in-room air conditioner”: a big box, standing in the middle of
                the room, with a cable that plugs into a power outlet. When the
                machine is switched on, you feel a stream of cold air coming out
                of it. How do you know that this machine cannot cool the room?
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
                              Any heat engine that is similar to an air
                              conditioner will remove heat from the space (Q
                              <sub>L</sub> - the low temperature input). The
                              device receives work (W) to enable it to remove
                              heat from the low temperature area. Due to energy
                              conservation and the second law of thermodynamics,
                              there must be a high-temperature exhaust heat Q
                              <sub>H</sub> that is greater than Q<sub>L</sub>.
                              It's possible that the inventor has a clever way
                              to direct that exhaust heat into a well-insulated
                              heat source, such as a container of water.
                              <br />
                              However, as more heat is introduced into the
                              device, it will eventually become warmer than the
                              room and heat will then be transferred to the
                              space. A fan blowing over a sizable block of ice
                              would be a very straightforward device that could
                              accomplish what is described in the problem. The
                              ice will absorb heat from the surrounding space,
                              but a fan can extract cool air from the ice's
                              surface. But once the ice has melted, all that
                              would remain is for the fan motor to heat the air.
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
                (a) What happens if you remove the lid of a bottle containing
                chlorine gas? <br />
                (b) Does the reverse process ever happen? Why or why not?
                <br /> (c) Can you think of two other examples of
                irreversibility?
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
                              (a) If the lid is taken off a chlorine gas bottle,
                              the gas molecules will diffuse out of the mouth
                              and eventually spread evenly throughout the space
                              they are contained in.
                              <br />
                              (b) Individual chlorine gas molecules entering a
                              small volume on their own volition never occurs in
                              a closed volume. In comparison to the likelihood
                              of the gas molecules being evenly distributed
                              throughout the room, the probability of all the
                              gas molecules entering the bottle is
                              infinitesimal. Entropy would have to spontaneously
                              decrease for the opposite process to occur.
                              <br />
                              (c) Other instances of irreversibility include the
                              shuffle of a deck of cards that has been arranged
                              in a certain order, the diffusion of color in a
                              liquid, and the collapse of structures during an
                              earthquake.
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
                Give three examples, other than those mentioned in this Chapter,
                of naturally occurring processes in which order goes to
                disorder. Discuss the observability of the reverse process.
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
                              (A) Soil erosion brought on by water flowing
                              across the ground.
                              <br />
                              (b) When exposed to air, different metals (such as
                              copper, zinc, iron, etc.) oxidize.
                              <br />
                              (c) The conversion of mechanical energy into heat
                              energy through friction, i.e., the slowing down
                              and eventual stopping of a sliding object while
                              the surfaces of contact warm up.
                              <br />
                              (d) A compost pile that is breaking down.
                              <br />
                              These processes don't appear to reverse
                              themselves.
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
                Which do you think has the greater entropy, 1 kg of solid iron
                or 1 kg of liquid iron? Why?
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
                              Because the atoms in liquid iron are less
                              "ordered" than those in solid iron, 1 kg of liquid
                              iron has more entropy. In addition, heat had to be
                              applied in order to melt solid iron, and &Delta;S = Q / T.
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

export default LawsOfThermodynamics;
