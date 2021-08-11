import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import backGroundImageMain from '../images/backGround.svg';
import skin1 from '../images/skin/image1.svg';
import skin2 from '../images/skin/image2.svg';
import skin3 from '../images/skin/image3.svg';
import skin4 from '../images/skin/image4.svg';
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
                        backgroundSize: "100%",
                        backgroundRepeat: "no-repeat",
                        height:"300px",
                        width:"100%"
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

                                </Col>
                                <Col>
                                    <div className="text-center pb-12 md:pb-8" style={{
                                        backgroundImage: `url(${skin1})`,
                                        backgroundSize: "100%",
                                        position: "absolute",
                                        color: "white",
                                        height: "75px",
                                        width: "75px",
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
                                        height: "75px",
                                        width: "75px",
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
                                        height: "75px",
                                        width: "75px",
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
                                        height: "75px",
                                        width: "75px",
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