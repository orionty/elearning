import React from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function GeometricOptics() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid mt-5 mb-5 p-3">
        <h6>Geometric Optics </h6>
        <div>
          <ol>
            {/* Q1 */}
            <li>
              <p>
                Archimedes is said to have burned the whole Roman fleet in the
                harbor of Syracuse, Italy, by focusing the rays of the Sun with
                a huge spherical mirror. Is this† reasonable?
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
                              No, it is not conceivable that a spherical mirror
                              could ignite all of the ships in a harbor at once.
                              However, you might be able to light them on fire
                              one at a time. With the aid of a spherical mirror,
                              Archimedes was able to concentrate the Sun's rays
                              on a single point, making it hot enough to ignite
                              a fire. However, this cannot be done over a large
                              area, such as an entire harbor. The spherical
                              mirror he had would only have one focal length,
                              which would require him to be at an equal distance
                              from each ship he set afire.
                              <br />
                              He would have to move closer to the harbor if one
                              ship was farther away than another in order to set
                              the farther ship afire. To start the ships on fire
                              one at a time would take a lot of time, and he
                              would have to move his mirror over considerable
                              distances. A large, extremely long-focal-length
                              mirror that is extremely precisely ground and
                              polished would also be necessary, which would have
                              been challenging in Archimedes' day.
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
                If a concave mirror produces a real image, is the image
                necessarily inverted? Explain.
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
                              Yes. The presence of a real image of a real object
                              in a concave mirror indicates that di and do are
                              positive. The image is inverted because of this,
                              according to the magnification equation (m = -d
                              <sub>i</sub> / d<sub>o</sub> ) (However, if a
                              virtual object were to be used to create a real
                              image, do would be negative and di would be
                              positive, giving us a positive m and an upright
                              image.)
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
                An object is placed along the principal axis of a spherical
                mirror. The magnification of the object is -3.0. Is the image
                real or virtual, inverted or upright? Is the mirror concave or
                convex? On which side of the mirror is the image located?
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
                              The image is real and inverted when an object is
                              placed in front of a spherical mirror and the
                              resulting magnification is 3.0. A negative
                              magnification indicates that, in relation to the
                              object, the image is inverted. The object distance
                              is positive for a real object. The magnification
                              equation (m = -d
                              <sub>i</sub> / d<sub>o</sub>) states that the
                              image distance is also positive because the
                              magnification is negative. Concave describes the
                              mirror. A magnified real object cannot be
                              reflected in a convex mirror as an image. On the
                              mirror's reflecting side is where the image is
                              located. The image is always located on the
                              reflecting (actual) side of the mirror when the
                              image distance is positive, as it is in this
                              instance.
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
                What is the angle of refraction when a light ray is incident
                perpendicular to the boundary between two transparent materials?
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
                              The angle of incidence and the angle of refraction
                              are both zero degrees when a light beam intersects
                              a boundary between two materials perpendicularly.
                              This holds true regardless of how the two
                              materials' refractive indices are combined,
                              according to Snell's law.
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
                When you look down into a swimming pool or a lake, are you
                likely to overestimate or underestimate its depth? Explain. How
                does the apparent depth vary with the viewing angle? (Use ray
                diagrams.)
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
                              You won't realize how deep a lake or pool is until
                              you look down into it. The light that is shining
                              on the pool's bottom will diffusely reflect off in
                              all directions. According to Snell's law, these
                              light rays will be bent away from the norm when
                              they reach the surface. You can "see" the pool
                              bottom because some of these rays reach your eyes.
                              Your brain interprets these rays as though they
                              all followed straight paths and did not arc,
                              leading you to "perceive" the pool's bottom as
                              being shallower than it actually is.
                              <br />
                              In the first illustration: 1 - The rock at the
                              center of the pool loses its illumination. 2 - As
                              light exits the water and enters the air, it
                              deviates from the norm. Three: Light reaches your
                              eye. 4 - The ray's return to a shallower point is
                              retraced by your brain. The pool appears to get
                              shallower as the viewing angle widens (when the
                              angle of refraction widens). Consider looking at a
                              submerged object from the two different
                              perspectives shown in the second diagram: a)
                              nearly straight above and b) from a wide viewing
                              angle. Due to Snell's law, when the viewing angle
                              is large compared to when it is small, your brain
                              "draws" a very shallow angle into the water.
                            </p>
                            <br />
                            <img
                              src={`${process.env.PUBLIC_URL}/img/gq5.png`}
                              alt="figure 64"
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
            {/* Q6 */}
            <li>
              <p>
                Draw a ray diagram to show why a stick or straw looks bent when
                part of it is under water.
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
                              Your brain interprets the bending rays as
                              indicating that the underwater portion of the
                              stick is shallower than it actually is, making it
                              appear bent. You perceive the underwater stick's
                              points as being closer to the surface than they
                              actually are.
                            </p>
                            <br />
                            <img
                              src={`${process.env.PUBLIC_URL}/img/gq6.png`}
                              alt="figure 103"
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
            {/* Q7 */}
            <li>
              <p>
                How can you “see” a round drop of water on a table even though
                the water is transparent and colorless?
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
                              Refraction is one of the mechanisms by which a
                              transparent, colorless drop of water on a surface
                              can be seen. Due to depth distortion and/or
                              magnification caused by the round drop, the
                              portion of the tabletop where the light is leaving
                              the tabletop and passing through it on its way to
                              your eye will appear to be raised up. Reflection
                              is a further explanation for your ability to see
                              the drop. The light sources in the space will
                              reflect off the drop at specific angles and reveal
                              the drop's location.
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
              <p>How can a spherical mirror have a negative object distance?</p>
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
                              If another set of lenses and/or mirrors creates an
                              image that is behind the spherical mirror, or on
                              the side of the mirror that does not reflect
                              light, then the spherical mirror may have negative
                              object distance. It is then customary to refer to
                              this as a negative object distance because the
                              object for our spherical mirror is on the back
                              side of the mirror.
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
                Light rays from stars (including our Sun) always bend toward the
                vertical direction as they pass through the Earth’s atmosphere.
                (a) Why does this make sense? (b) What can you conclude about
                the apparent positions of stars as viewed from Earth?
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
                              (a) Because the atmosphere's index of refraction
                              is slightly higher than that of the vacuum of
                              space, it makes sense that light rays from stars,
                              including our Sun, bend toward the vertical
                              direction as they travel through the atmosphere.
                              Snell's law states that as light from stars enters
                              the atmosphere, it slows down and bends toward the
                              vertical.
                              <br />
                              (b) In comparison to their actual positions, the
                              stars' apparent positions in the sky are too high.
                              Since light rays bend vertically as they enter the
                              atmosphere before entering our eyes, as well as
                              When we "follow" these rays back into space, which
                              ignores the bending, the stars appear higher than
                              they actually are.
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
                Where must the film be placed if a camera lens is to make a
                sharp image of an object far away? Explain.
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
                              The film of a camera must be positioned at the
                              focal length of the lens in order to capture a
                              sharp image of an object that is very far away.
                              Light rays from distant objects enter a camera
                              almost parallel, and they are bent and focused to
                              form an image at the focal point of the lens,
                              which is where the film should be in order to
                              capture a focused image.
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

export default GeometricOptics;
