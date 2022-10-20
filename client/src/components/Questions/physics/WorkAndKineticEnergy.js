import React from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function WorkAndKineticEnergy() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid mt-5 mb-5 p-3">
        <h6>Work And Kinetic Energy </h6>
        <div>
          <ol>
            {/* Q1 */}
            <li>
              <p>
                In what ways is the word “work” as used in everyday language the
                same as it is defined in physics? In what ways is it different?
                Give examples of both.
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
                              Some physical tasks, especially those that require
                              lifting objects, like shoveling dirt or carrying
                              shingles to a roof, qualify as "work" in the sense
                              of physics. Alternatively, pushing a lawnmower
                              would qualify as work under the physics
                              definition. There is frequently no sense of
                              physical labor or of pushing something through a
                              distance by force when we use the word "work" in
                              terms of employment, such as "go to work" or
                              "school work."
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
              <p>Can a centripetal force ever do work on an object? Explain.</p>
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
                              Since "centripetal" refers to "pointing toward the
                              center of curvature," a centripetal force will not
                              be able to move an object because, by definition,
                              when an object moves along a curved path, the
                              direction toward the center of curvature is always
                              perpendicular to the direction of motion. A force
                              must have a component in the direction of
                              displacement in order to perform work.
                              Consequently, the centripetal force is inert.v
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
              <p>Can the normal force on an object ever do work? Explain.</p>
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
                              If the normal force has a component in the
                              direction of the object's displacement, it can
                              exert force on the object. If a person leaped into
                              the air, the floor's upward force (the usual
                              force) would work in their favor and boost their
                              kinetic energy. Likewise, the force of the floor
                              pushing upwards (the normal force) would do
                              negative work and reduce the person's kinetic
                              energy when they hit the ground coming down.
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
                You have two springs that are identical except that spring 1 is
                stiffer than spring 2 On which spring is more work done: (a) if
                they are stretched using the same force; (b) if they are
                stretched the same distance?
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
                              (a) In this instance, both springs are subjected
                              to the same force. Since spring 1 will stretch
                              less, spring 2 receives more attention.
                              <br />
                              (b) In this instance, the length of both springs
                              is the same. Spring 1 undergoes more work because
                              stretching it requires more force.
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
                What happens to the gravitational potential energy when water at
                the top of a waterfall falls to the pool below?
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
                              Gravitational potential energy (PE) is initially
                              converted into kinetic energy when water at the
                              top of a waterfall falls into a pool below. When
                              the pool water is struck by that kinetic energy,
                              some of it is given energy, which causes it to
                              splash upward and outward and produces outgoing
                              water waves that carry energy. Due to viscous
                              friction between the water in the pool and the
                              falling water, some of the energy will be
                              converted to heat. As some of the energy is
                              converted to kinetic energy of air molecules,
                              sound waves are produced, giving the waterfall its
                              audible "roar."
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
                Describe the energy transformations when a child hops around on
                a pogo stick (there is a spring inside).
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
                              Start your description with the youngster hovering
                              in the air at the end of a hop. At that time, all
                              energy is gravitational potential energy (PE). The
                              child then drops and gains kinetic energy. Most of
                              the energy is kinetic when the child reaches the
                              ground. Elastic PE is created as the spring starts
                              to compress from the kinetic energy. With each
                              compression of the spring, the child descends a
                              little bit further, converting more gravitational
                              PE into elastic PE. All of the energy at the
                              bottom of a hop is elastic PE. The elastic PE then
                              transforms into gravitational PE and kinetic
                              energy as the child rebounds. The entire elastic
                              is released once the child reaches the peak of the
                              bounce.The energy is all elastic PE at the very
                              bottom of a hop. The elastic PE then becomes
                              kinetic as the child recovers. both gravitational
                              PE and energy. Since the child has a speed of zero
                              at the top of the bounce, all of the elastic PE
                              has been transformed into gravitational PE. then
                              the cycle restarts from scratch. The youngster
                              must also add energy to the system by pressing
                              down on in order to reduce friction. the pogo
                              stick on the ground to elicit a stronger response
                              from the surface.
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
                Describe the energy transformations that take place when a skier
                starts skiing down a hill, but after a time is brought to rest
                by striking a snowdrift.
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
                              Due to friction between the skis and the snow and
                              air, most of the gravitational potential energy
                              (PE) is converted into kinetic energy as the skier
                              descends the hill, and a small amount is converted
                              into heat energy. The skier's kinetic energy is
                              converted into the snow's kinetic energy as they
                              make contact with the snowdrift, as well as some
                              heat from friction as they move through the
                              snowdrift.
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
                Seasoned hikers prefer to step over a fallen log in their path
                rather than stepping on top and jumping down on the other side.
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
                              Stepping on the log necessitates lifting the
                              entire body mass up the height of the log,
                              requiring work proportional to the entire body
                              mass (work that is not recoverable). Only the legs
                              must be raised in order to step over the log,
                              which results in a small mass being raised and
                              less effort. Additionally, energy is used to stop
                              the "fall" from the log when jumping down. Coming
                              down from the log uses up all of the potential
                              energy you had at the top.
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
                Analyze the motion of a simple swinging pendulum in terms of
                energy, (a) ignoring friction, and (b) taking friction into
                account. Explain why a grandfather clock has to be wound up.
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
                              (A) Assume that there is no friction to cause any
                              energy to be lost. Start the pendulum at the top
                              of the swing, and designate the swing's lowest
                              point as the gravitational PE zero location. The
                              top of a swing is where the pendulum experiences
                              the most gravitational PE. The gravitational PE
                              then transforms into kinetic energy as it falls.
                              The energy is entirely kinetic at the swing's
                              bottom. As the pendulum rises, gravitational
                              potential energy (PE) replaces kinetic energy.
                              Since there is no dissipation, all of the
                              gravitational potential energy (PE) that was
                              initially created is transformed into kinetic
                              energy, and vice versa.Every swing's pendulum
                              rises to the same height on both sides and comes
                              to a stop at the same maximum speed.
                              <br />
                              (B) The pendulum will have less kinetic energy at
                              the bottom of each downward swing than it did at
                              the top if friction is present to dissipate the
                              energy. Because energy is lost through frictional
                              dissipation whenever the pendulum is moving, the
                              pendulum will not swing up as high with each swing
                              as it did with the previous swing. This means that
                              its maximum displacement decreases with each
                              swing. When a grandfather clock is wound, a weight
                              that has some PE is raised. The weight then drops
                              at the right rate, reintroducing energy into the
                              pendulum to make up for that lost to dissipation.
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
                When a "superball" is dropped, can it rebound to a height
                greater than its original height? Explain.
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
                              When dropped, the superball cannot rise higher
                              than it was at the time. If it did, it would go
                              against energy conservation. A ball's KE is
                              changed into elastic PE when it strikes the floor,
                              deforming the ball in a manner similar to
                              compressing a spring. The elastic PE is then
                              changed back into KE as the ball springs back to
                              its original shape. However, it's a "lossy"
                              process because not all of the elastic PE is
                              converted back to KE. PE is lost in some cases,
                              mainly due to friction. Because it is less "lossy"
                              in its rebound than many other materials, the
                              superball rebounds higher than many other balls.
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

export default WorkAndKineticEnergy;
