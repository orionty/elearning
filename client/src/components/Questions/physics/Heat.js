import React from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function Heat() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid mt-5 mb-5 p-3">
        <h6>Heat </h6>
        <div>
          <ol>
            {/* Q1 */}
            <li>
              <p>
                What happens to the work done on a jar of orange juice when it
                is vigorously shaken?
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
                              By raising the average kinetic energy of the
                              molecules that make up the orange juice, the work
                              primarily aims to raise the temperature of the
                              orange juice.
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
                When a hot object warms a cooler object, does temperature flow
                between them? Are the temperature changes of the two objects
                equal? Explain.
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
                              Energy is transferred from a hot object to a
                              cooler object when they warm each other. There is
                              no flow of temperature. The magnitude of the two
                              objects' temperature changes may not always be
                              equal. They may, however, be of equal magnitude in
                              some situations. In an ideal situation, the heat
                              gained by the cooler object equals the heat lost
                              by the warmer object.
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
                (a) If two objects of different temperatures are placed in
                contact, will heat naturally flow from the object with higher
                internal energy to the object with lower internal energy? (b) Is
                it possible for heat to flow even if the internal energies of
                the two objects are the same? Explain.
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
                              (A) Internal energy is a function of the
                              material's temperature and molecular composition.
                              The object with the higher temperature will
                              naturally transfer heat to the object with the
                              lower temperature. The object with the higher
                              internal energy may or may not also have the
                              higher temperature.
                              <br />
                              (b) One of the two objects may have a higher
                              temperature and fewer molecules, while the other
                              may have a lower temperature and more molecules.
                              Even if the internal energies of the two objects
                              are equal in this scenario, heat will still
                              transfer from the object with the higher
                              temperature to the one with the lower temperature.
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
                In warm regions where tropical plants grow but the temperature
                may drop below freezing a few times in the winter, the
                destruction of sensitive plants due to freezing can be reduced
                by watering them in the evening. Explain.
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
                              Plants will be covered in water, so the cold air
                              will only come into contact with the water and not
                              the plants. As a result, the water cools before
                              the plant does as the air cools, acting as
                              insulation for the plant. The water releases
                              energy as it cools, increasing the temperature of
                              its surroundings, including the plant. Due to the
                              relatively high heat of fusion for water,
                              particularly if the water freezes, relatively
                              large amounts of heat are released.
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
                The specific heat of water is quite large. Explain why this fact
                makes water particularly good for heating systems (that is,
                hot-water radiators).
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
                              With a relatively small increase in temperature,
                              water can store a significant amount of thermal
                              energy per unit mass due to its high specific
                              heat. Since water is a liquid, it can be moved
                              from one place to another with relative ease. As a
                              result, large amounts of energy can be moved by
                              water with relative ease.
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
                Why does water in a metal canteen stay cooler if the cloth
                jacket surrounding the canteen is kept moist?
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
                              Energy (the latent heat of vaporization) is needed
                              for the mechanism of evaporating the water from
                              the moist cloth jacket; some of this energy will
                              come from the canteen's interior. The canteen's
                              interior is kept cool by the removal of energy
                              from the interior. Additionally, since the metal
                              canteen is a good conductor of heat, cooling
                              energy can be transferred from the water to the
                              cloth jacket.
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
                Explain why burns caused by steam at 100°C on the skin are often
                more severe than burns caused by water at 100°C
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
                              Steam has a higher thermal energy content at 100
                              °C than water does. The latent heat of
                              vaporization, which is quite high for water, is
                              what causes the difference. More severe burns are
                              produced as a result of the energy released as the
                              steam touches the skin and condenses.
                              Additionally, since the condensed water is still
                              hot (100 °C), more burning may happen as it cools.
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
                Explain why water cools (its temperature drops) when it
                evaporates, using the concepts of latent heat and internal
                energy.
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
                              Water molecules escape the intermolecular bonds
                              holding them together in the liquid state during
                              evaporation. For the molecules to break those
                              bonds (to overcome the bonding forces), energy is
                              required. The latent heat of vaporization is this
                              energy. The molecules with the highest kinetic
                              energy—those moving at the fastest speeds—will be
                              able to supply the most energy to counteract the
                              bonding forces. The molecules that move more
                              slowly continue to exist, which lowers the average
                              kinetic energy and lowers the liquid's internal
                              energy and temperature.
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
                Will pasta cook faster if the water boils more vigorously?
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
                              If the water boils more quickly, the potatoes
                              won't cook any quicker. Whether the water is
                              boiling quickly or slowly, it is always the same
                              temperature.
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
                Does an ordinary electric fan cool the air? Why or why not? If
                not, why use it?
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
                              Normal fans do not directly cool the air. The
                              motor used to power the fan will release some heat
                              into the air, and the increase in average kinetic
                              energy actually warms the air a little. by the fan
                              blades pushing the air molecules, which results in
                              an increase in air temperature. slightly. The fan
                              is used because it keeps the air moving. The air
                              is warmed by a person. assuming the air is
                              initially cooler than the body, immediately
                              surrounding it.
                              <br />
                              if the heated air remains After the air is warmed
                              and comes into contact with the body, the body
                              will lose little more heat. by the fan By moving
                              the air around, heated air that is near the body
                              is removed and replaced with cooler air.
                              Similarly, the evaporation of water from the skin
                              also helps to cool the body. In light of the
                              relative humidity of As the air around the body
                              gets warmer, less water can evaporate, making
                              evaporative cooling less effective. decreased. The
                              fan circulates the air, removing the humid air
                              from near the body and substituting it with it
                              with air that is less humid so that evaporation
                              can proceed.
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

export default Heat;
