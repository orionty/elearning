import React from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function TemperatureAndKineticTheory() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid mt-5 mb-5 p-3">
        <h6>Temperature And Kinetic Theory </h6>
        <div>
          <ol>
            {/* Q1 */}
            <li>
              <p>
                Which has more atoms: 1 kg of lead or 1 kg of copper? Explain.
                why
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
                              An atom of aluminum has less mass than an atom of
                              iron because aluminum's atomic mass is smaller
                              than iron's. A kg of aluminum will therefore
                              contain more atoms than a kg of iron.
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
                Name several properties of materials that could be used to make
                a thermometer
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
                              Properties of materials that can be exploited for
                              the making of a thermometer include: <br />
                              1) Volume of a liquid (mercury thermometer) <br />
                              2) Electrical resistance <br />
                              3) Color (frequency) of emitted light from a
                              heated object
                              <br />
                              4) Volume of a gas
                              <br />
                              5) Expansion of a metal (bimetallic strip)
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
                Freezing a can of soda will cause its bottom and top to bulge so
                badly the can will not stand up. What has happened?
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
                              Most of the soda is water. When water cools to
                              below 4<sup>o</sup>C, it expands. As the soda
                              cools below 4<sup>o</sup>Cand begins to freeze, it
                              expands more than the space it has in the can can
                              hold it, and as a result, the soda's freezing
                              expansion pushes against the can's surfaces
                              forcefully enough to cause them to bulge outward.
                              The can's top and bottom are obviously its weakest
                              points.
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
                Will the buoyant force on an aluminum sphere submerged in water
                increase, decrease, or remain the same, if the temperature is
                increased from 20°C to 40°C? Explain.
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
                              The weight of the water displaced by the aluminum
                              sphere, which is equal to the sphere's volume
                              times the water's density times g, exerts a
                              buoyant force on it. The volume of the sphere
                              expands as the materials heat up, while the
                              density of the water decreases. The fractional
                              decrease in the water density is greater than the
                              fractional increase in the aluminum volume because
                              the volume expansion coefficient of water is
                              nearly three times greater than that of aluminum.
                              As a result, the buoyant force is reduced and the
                              product of the sphere's volume and the water's
                              density increases.
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
                Explain in words how Gay-law, Lussac's fellow from kinetic
                theory.
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
                              According to Gay-law, Lussac's a gas's absolute
                              pressure and temperature are inversely
                              proportional at constant volume. According to the
                              kinetic molecular theory, given a fixed container
                              size, the average force that gas particles apply
                              when they collide with the container boundaries is
                              proportional to their kinetic energy. The force on
                              the walls must increase in order for the pressure
                              to rise, which calls for an increase in kinetic
                              energy. However, because the kinetic energy of the
                              particles is proportional to the absolute
                              temperature, the temperature must also rise in
                              order for the pressure to rise.
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
                As you go higher in the Earth's atmosphere, the ratio of N
                <sub>2</sub>
                molecules to O<sub>2</sub> molecules increase. Why?
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
                              At the same temperature (and consequently with the
                              same kinetic energy), N<sub>2</sub> molecules will
                              generally move at a faster rate than O<sub>2</sub>{" "}
                              molecules because they have less mass. If both
                              types of molecules were to be "launched" from the
                              surface of the Earth, the faster-moving N
                              <sub>2</sub> would rise higher before coming to a
                              stop and returning to Earth. As a result, higher
                              altitudes will have proportionally more N
                              <sub>2</sub> molecules than lower altitudes.
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
                Alcohol evaporates more quickly than water at room temperature.
                What can you infer about the molecular properties of one
                relative to the other?
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
                              Alcohol molecules are able to escape "easier" than
                              water molecules because alcohol evaporates more
                              quickly. The fact that alcohol and water have
                              weaker intermolecular forces (bonds) is one
                              possible explanation. The fact that alcohol
                              molecules are moving more quickly than water
                              molecules suggests that they are less massive than
                              water molecules, which is another possible
                              explanation. Mass is probably not the cause,
                              though, as the simplest alcohol (CH<sub>3</sub>OH)
                              has a molecular mass greater than that of water.
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
                Explain why a hot humid day is far more uncomfortable than a hot
                dry day at the same temperature.
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
                              Because the air is already saturated with water
                              vapor on a hot, humid day, a person's perspiration
                              evaporation is minimal. Humans will experience
                              increased discomfort if their ability to perspire
                              is restricted because it is a key cooling
                              mechanism. A hot, dry day makes it easier for
                              water molecules to evaporate into the air, where
                              they carry their kinetic energy, cooling the body.
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
                Is it possible to boil water at room temperature (20<sup>o</sup>
                C) without heating it. Explain.
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
                              When the saturated vapor pressure of a liquid
                              equals the atmospheric pressure, the liquid boils.
                              At 20<sup>o</sup>C, water has a saturated vapor
                              pressure of approximately 0.023 atm. The water
                              will therefore boil if the external pressure is
                              reduced to that point (roughly 2.3% of standard
                              air pressure).
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
                Explain why it is dangerous to open the radiator cap of an
                overheated automobile engine
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
                              An automobile engine that has overheated has
                              pressure on the water in the radiator. The water
                              is quite hot—hotter than 100<sup>o</sup>C—but the high
                              pressure maintains it in a liquid state, much like
                              a pressure cooker. The pressure is abruptly
                              reduced when the cap is opened, causing the
                              superheated water to boil quickly and violently.
                              If that hot steam comes into contact with your
                              skin, it could burn you badly.
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

export default TemperatureAndKineticTheory;
