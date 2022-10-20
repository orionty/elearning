import React from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function ElectricFields() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid mt-5 mb-5 p-3">
        <h6>Electric Charge And Electric Field </h6>
        <div>
          <ol>
            {/* Q1 */}
            <li>
              <p>
                If you charge a pocket comb by rubbing it with a silk scarf, how
                can you determine if the comb is positively or negatively
                charged?
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
                              A cloth is used to rub a plastic ruler that is
                              strung up by a thread. The ruler has a bad charge.
                              Get the charged comb as close to the ruler as
                              possible. The comb is negatively charged if the
                              ruler is attracted to it. The comb must be
                              positively charged if it attracts the ruler.
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
                Why does a shirt or blouse taken from a clothes dryer sometimes
                cling to your body?
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
                              In the tumbling motion of the dryer, frictional
                              contact charges the clothing. Because the dryer's
                              air is dry, the clothes can withstand a sizable
                              static charge. This charged object will polarize
                              your clothing and become electrostatically
                              attracted to you as a result.
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
                Explain why fog or rain droplets tend to form around ions or
                electrons in the air.
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
                              Water is a polar molecule, meaning that it has
                              both a positive and a negative side. As a result,
                              it is easily drawn to other charged objects in the
                              air, such as ions or electrons.
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
                A positively charged rod is brought close to a neutral piece of
                paper, which it attracts. Draw a diagram showing the separation
                of charge in the paper, and explain why attraction occurs.
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
                              The molecules in the paper become slightly
                              polarized by the positively charged rod. The area
                              of the paper closest to the rod is slightly
                              attracted by the negative charges in the paper,
                              whereas this area is slightly repelled by the
                              positive charges in the paper. There is a net
                              attraction between the rod and the paper because
                              the opposite charges are now closer together and
                              the like charges are now farther apart.
                            </p>
                            <br />
                            <img
                              src={`${process.env.PUBLIC_URL}/img/EFq4.png`}
                              alt="electric charge"
                              className="protect-image"
                              style={{ width: "100%" }}
                            />
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
                Why does a plastic ruler that has been rubbed with a cloth have
                the ability to pick up small pieces of paper? Why is this
                difficult to do on a humid day?
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
                              The plastic ruler now has a net negative charge
                              because it picked up some electrons from the
                              fabric. This charge polarizes the charge on the
                              sheet of paper, attracting positive charges and
                              repelling negative charges in opposite directions.
                              On the piece of paper, this polarization produces
                              a net attractive force. The paper can be lifted
                              because the electric force produced by a small
                              charge is strong enough to overcome gravity.
                              <br />
                              Due to the polar nature of the air's water
                              molecules on humid days, this is more challenging.
                              Some of the free charges can be drawn away from
                              the plastic ruler by those polar water molecules.
                              As a result, the paper is less polarized, the
                              ruler has a smaller charge, and there isn't enough
                              electric force to lift the paper.
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
                Contrast the net charge on a conductor to the “free charges” in
                the conductor.
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
                              After neutrality has been established, the
                              unbalanced or excess charge is known as the net
                              charge on the conductor. The conductor's total
                              positive and negative charges make up the net
                              charge. The net charge is negative when extra
                              electrons are incorporated into a neutral
                              conductor. If electrons are taken out of a neutral
                              conductor, the net charge is positive. The net
                              charge is zero if the positive and negative
                              charges on a neutral conductor are equal. Free
                              charges in a conductor are electrons that are so
                              weakly attracted to the nucleus that they can move
                              freely within the conductor in response to an
                              external electric force (usually one or two
                              electrons per atom). These free electrons are
                              present in neutral conductors.
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
                When an electroscope is charged, its two leaves repel each other
                and remain at an angle. What balances the electric force of
                repulsion so that the leaves don’t separate further?
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
                              The leaves are being pulled downward by gravity,
                              which is causing them to incline back toward
                              vertical.
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
                The form of Coulomb’s law is very similar to that for Newton’s
                law of universal gravitation. What are the differences between
                these two laws? Compare also gravitational mass and electric
                charge.
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
                              Newton's law's constant has a very small
                              magnitude, whereas Coulomb's law's constant has a
                              much larger magnitude. In contrast to Coulomb's
                              law, which states that electrical force is
                              proportional to the product of the two charges,
                              Newton's law states that gravitational force is
                              proportional to the product of the two masses.
                              Since there is only one type of gravitational
                              mass, Newton's law only generates attractive
                              forces. Since there are two types of electrical
                              charge, Coulomb's law generates both attractive
                              and repellent forces.
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
                We are not normally aware of the gravitational or electric force
                between two ordinary objects. What is the reason in each case?
                Give an example where we are aware of each one and why.
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
                              Due to the very small values of G, the
                              gravitational constant, and ordinary masses, the
                              gravitational force is so weak that we are not
                              aware of it. Because most common objects are
                              electrically neutral to a very high degree, we
                              don't notice the electric force. Due to the
                              enormous mass of the Earth, which creates a strong
                              gravitational force, we can feel our weight (the
                              force of gravity). When an object has a static
                              charge, such as from the dryer's static cling,
                              there is an electric force that can be felt.
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
                When a charged ruler attracts small pieces of paper, sometimes a
                piece jumps quickly away after touching the ruler. Explain.
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
                              The surface of the charged plastic ruler has a
                              negative charge. The neutral paper's neutral
                              charge is polarized by that charge, creating a net
                              attractive force. The paper may become charged
                              when it comes into contact with the ruler and
                              acquire a net negative charge. The comb then
                              repels the paper because like charges repel one
                              another.
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

export default ElectricFields;
