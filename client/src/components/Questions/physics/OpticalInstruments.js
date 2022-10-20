import React from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function OpticalInstruments() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid mt-5 mb-5 p-3">
        <h6>Optical Instruments </h6>
        <div>
          <ol>
            {/* Q1 */}
            <li>
              <p>
                Why is the depth of field greater, and the image sharper, when a
                camera lens is “stopped down” to a larger <i>f</i>-number?
                Ignore diffraction.
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
                              Only light rays entering the lens's center are
                              accepted when a lens is stopped down to a higher
                              f-number, which results in a smaller lens opening.
                              A wider range of object distances will be sharply
                              focused because these rays create smaller circles
                              of confusion.
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
                Why are bifocals needed mainly by older persons and not
                generally by younger people?
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
                              People's eyes lose their ability to adjust as they
                              age. With age, the lens loses flexibility, making
                              it more difficult for the muscles to change its
                              shape. People's near points grow larger and
                              surpass the ideal value of 25 cm as they age. For
                              a far point at infinity, they may still require
                              the "regular" upper portion of their lenses (most
                              people require these at much younger ages), but an
                              older person will now require a bifocal in the
                              lower portion of their lenses to create a near
                              point back at 25 cm for seeing close objects. As a
                              result, as people age, their far point becomes too
                              small and their near point becomes excessively
                              large. These two issues can both be resolved with
                              bifocals.
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
                Will a nearsighted person who wears corrective lenses in her
                glasses be able to see clearly underwater when wearing those
                glasses? Use a diagram to show why or why not.
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
                              No, wearing corrective lenses underwater will not
                              allow a nearsighted person to see clearly. A
                              nearsighted person needs corrective lenses to
                              bring the image of a distant object to their far
                              point so they can see it clearly because their far
                              point is closer to infinity than infinity. See the
                              first set of illustrations.
                              <br />
                              The thing is infinite. The image is at the far end
                              in the air. The person's eyes and glasses will not
                              bend light as much as they did in the air if they
                              are submerged in water because glass has a
                              refraction index that is closer to that of water
                              than to air. As a result, the distant object's
                              image will now be located beyond the person's far
                              point. Now the picture will be out of focus.
                            </p>
                            <br />
                            <img
                              src={`${process.env.PUBLIC_URL}/img/oq3.png`}
                              alt="figure 112"
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
            <br />
            {/* Q4 */}
            <li>
              <p>
                In attempting to discern distant details, people will sometimes
                squint. Why does this help?
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
                              Your eye muscles should be relaxed in order to see
                              distant objects clearly, which makes your lens
                              relatively flat (large focal length). Squinting
                              causes you to only use the center of your lens,
                              which is where it is flattest, when you f-stop
                              your eye down. This reduces the lens's circle of
                              confusion, making it easier for you to see distant
                              objects clearly.
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
                Is the image formed on the retina of the human eye upright or
                inverted? Discuss the implications of this for our perception of
                objects.
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
                              When we look at something, real and inverted
                              images of that thing are created on our retinas.
                              The implication is that in order for us to see
                              things upright, our brains must flip this inverted
                              image for us.
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
                The human eye is much like a camera yet, when a camera shutter
                is left open and the camera is moved, the image will be blurred.
                But when you move your head with your eyes open, you still see
                clearly. Explain.
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
                              Because your brain "refreshes" the image from the
                              retina about 30 times per second, you can keep
                              your eyes open while moving your head and still
                              see clearly. To put it another way, the way your
                              brain and retina work together is very different
                              from the way a still camera and film work
                              together. It is more like the way a motion picture
                              camera and film work together.
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
                Reading glasses use converging lenses. A simple magnifier is
                also a converging lens. Are reading glasses therefore
                magnifiers? Discuss the similarities and differences between
                converging lenses as used for these two different purposes.
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
                              Reading glasses are indeed magnifiers. They are
                              both converging lenses, so they are similar. A
                              magnifying lens tries to place the image of the
                              object at infinity so that it is extremely large
                              and it subtends as large an angle as possible on
                              our retina, whereas glasses try to place the image
                              of the object at a person's near point so that it
                              is clear to see. The main distinction is that the
                              magnifying lens requires the object to be directly
                              at the focal point, whereas the glasses require
                              the object to be closer to the lens than the focal
                              point.
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
                Inexpensive microscopes for children’s use usually produce
                images that are colored at the edges. Why?
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
                              A cheap, low-quality lens will not be properly
                              shaped to correct chromatic aberrations. As a
                              result, rather than all of the different colors of
                              light being focused at the same point, the colors
                              you see around the edges of these lenses are
                              caused by the different colors of light being
                              focused at different points.
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
                Which aberrations present in a simple lens are not present (or
                are greatly reduced) in the human eye?
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
                              A simple lens may have spherical aberrations.
                              Numerous lenses are typically used in combination
                              to reduce the bending at each of the surfaces in
                              order to correct this in a simple lens. Your eye
                              reduces spherical aberrations by also diffusing
                              light at numerous interfaces as it passes through
                              the various eye structures, each with its own n
                              (cornea, aqueous humor, lens, vitreous humor,
                              etc.). Aside from that, the lens is less dense at
                              the edges than it is in the center, and the cornea
                              is less curved there than it is in the center. and
                              most blue and violet wavelengths, where chromatic
                              aberrations are most prevalent, are not very
                              sensitive to the retina. occur. <br />
                              Both of these lessen spherical aberrations in the
                              eye by weakening the bending of light at the
                              edges. When the focal plane is not flat, there is
                              a curvature of the field. In contrast to a flat
                              piece of film in a camera, for example, our curved
                              retina helps with this distortion. The variation
                              in magnification at various distances from the
                              optical axis leads to distortion. Wide-angle
                              lenses are most frequently affected by this, and
                              they need to be corrected for. Here is due to the
                              small lens and curved retina of the human eye,
                              which is compensated. Chromatic Because the lens
                              absorbs shorter wavelengths, the human eye can
                              mostly correct for aberrations.
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
                Explain why chromatic aberration occurs for thin lenses but not
                for mirrors.
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
                              Chromatic aberrations are caused by dispersion,
                              where different colors (or wavelengths) of light
                              are bent at different angles because the index of
                              refraction of most materials varies with
                              wavelength. Dispersion is the cause of chromatic
                              aberrations in lenses. Therefore, not all of the
                              various colors of light that pass through a lens—a
                              curved transparent material—come out of the lens
                              at the same angle, but rather, they are all
                              focused at different positions.
                              <br />
                              In contrast, a mirror reflects light off of a
                              polished metallic surface. There is no refraction,
                              dispersion, or chromatic aberration because this
                              surface reflects all colors of light at the exact
                              same angle. Of course, the metallic reflector is
                              covered by a piece of glass in the majority of
                              mirrors. There is no dispersion and no chromatic
                              aberration because the two faces of this piece of
                              glass are parallel to one another, so even though
                              refraction and dispersion occur inside the glass,
                              when the light exits from the parallel face, all
                              of the different colors are once again traveling
                              in the same direction.
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

export default OpticalInstruments;
