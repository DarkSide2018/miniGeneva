import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import backGroundImageMain from '../images/backGround.svg';
import skin1 from '../images/skin/skin1.png';
import skin2 from '../images/skin/skin2.png';
import skin3 from '../images/skin/skin3.png';
import skin4 from '../images/skin/skin4.png';
import {Col, Container, Row} from "react-bootstrap";

function HeroHome() {

    return (
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Hero content */}
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    {/* Section header */}
                    <div className="text-center pb-12 md:pb-16" style={{
                        backgroundImage: `url(${backGroundImageMain})`,
                        backgroundSize: "cover",
                    }
                    }>
                        <p className="text-3xl md:text-3xl font-extrabold leading-tighter tracking-tighter left-side"
                           data-aos="zoom-y-out">Hello, Fhb</p>
                        <p className="text-1xl md:text-1xl font-extralight leading-tighter tracking-tighter left-side"
                           data-aos="zoom-y-out">your skins journey starts here </p>

                    </div>

                    {/* Hero image */}
                    <div>
                        <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
                            <p className="text-1xl md:text-1xl font-extralight leading-tighter tracking-tighter left-side"
                               data-aos="zoom-y-out">YOUR SKIN TYPE </p>

                        </div>

                        <Container>
                            <Row>
                                <Col>
                                    <div className="text-center pb-12 md:pb-8" style={{
                                        backgroundImage: `url(${skin1})`,
                                        backgroundSize: "100%",
                                        position: "absolute",
                                        color: "white",
                                        height: "50px",
                                        width: "50px",
                                        backgroundRepeat: "no-repeat"
                                    }
                                    }>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="text-center pb-12 md:pb-8" style={{
                                        backgroundImage: `url(${skin2})`,
                                        backgroundSize: "100%",
                                        position: "absolute",
                                        color: "white",
                                        height: "50px",
                                        width: "50px",
                                        backgroundRepeat: "no-repeat"
                                    }
                                    }>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="text-center pb-12 md:pb-8" style={{
                                        backgroundImage: `url(${skin3})`,
                                        backgroundSize: "100%",
                                        position: "absolute",
                                        color: "white",
                                        height: "50px",
                                        width: "50px",
                                        backgroundRepeat: "no-repeat"
                                    }
                                    }>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="text-center pb-12 md:pb-8" style={{
                                        backgroundImage: `url(${skin4})`,
                                        backgroundSize: "100%",
                                        backgroundPosition: "top center",
                                        display: "flex",
                                        position: "absolute",
                                        color: "white",
                                        backgroundRepeat: "no-repeat",
                                        width: "50px",
                                        height: "50px"
                                    }
                                    }>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroHome;