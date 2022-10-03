import React from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function PhysicsAndMeasurement() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid mt-5 mb-5 p-3">
        <h6>Physics and Measurement Questions</h6>
        <div>
          <ol>
            {/* Q1 */}
            <li>
              <p>
                Show that the expression v = at, where v represents speed,
                acceleration, and t an instant of time, is dimensionally
                correct.
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
                              Identify the dimensions of v : <br />
                              [v] = L/T <br />
                              Identify the dimensions of v and multiply by the
                              dimension of t: <br />
                              [at] = L/T<sup>2</sup> x T = L/T <br />
                              Therefore, v = at is dimensionally correct because
                              we have the same dimensions on both sides. (If the
                              expression were given as v = at
                              <sup>2</sup>, it would be dimensionally incorrect.
                              Try it and see!)
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
                The mass of a solid cube is 856 g, and each edge has a length of
                5.35 cm. Determine the density &#961; of the cube in basic SI
                units.
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
                              Because 1g = 10<sup>3</sup>kg and 1cm = 10
                              <sup>2</sup>m, the mass m and volume V in basic
                              SI units are: <br />m = 856g x 10<sup>-3</sup>
                              kg/g = 0.856kg <br />V = L<sup>3</sup> = (5.35cm
                              x 10
                              <sup>-2</sup> m/cm)
                              <sup>3</sup>
                              <br />&nbsp;&nbsp;&nbsp;=(5.35)<sup>3</sup> x 10 <sup>-6</sup>m{" "}
                              <sup>3</sup> <br />
                              V = 1.53 x 10 <sup>-4</sup>m
                              <sup>3</sup>
                              <br />
                              &#961; = <i>m</i>/V <br />
                              &nbsp;&nbsp;&nbsp; = 0.856 kg / 1.53 x 10
                              <sup>-4</sup>m <sup>3</sup><br />
                              &#961; = 5.59 x 10
                              <sup>3</sup> kg/m<sup>3</sup>
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
                A rectangular plate has a length of (21.3 &#177; 0.2) cm and a
                width of (9.80 &#177; 0.1) cm. Find the area of the plate and
                the uncertainty in the calculated area.
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
                              Area = <i>length x width</i> <br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = (21.3 &#177; 0.2 cm) x (9.80
                              &#177; 0.1 cm) <br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; = (21.3 x 9.80 x 21.3 0.1
                              &#177; 0.2 x 9.80) cm<sup>2</sup> <br />
                              Area = (209 4) cm{" "}
                              <sup>2</sup> <br />
                              Because the input data were given to only three
                              significant figures, we cannot claim any more in
                              our result. Do you see why we did not need to
                              multiply the uncertainties 0.2 cm and 0.1 cm?
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
                If you began walking along one of Earth's lines of longitude and
                walked until you changed latitude by 1 minute of arc (there are
                60 minutes per degree), how far would you have walked (in
                miles)? This distance is called a "nautical mile."
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
                              Utilize the fact that walking totally around the
                              Earth along the meridian would trace out a circle
                              whose full 360 degrees would equal the
                              circumference of the Earth. <br /> <br />
                              (1 minute)(1 degree / 60 minute)(2&#960;(6.38 x 10
                              <sup>3</sup> km) / 360 degrees)(0.621 m / 1km) =
                              1.15 m
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

export default PhysicsAndMeasurement;
