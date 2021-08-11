import React, {useState, useRef, useEffect} from 'react';

import {Col, Container, Row} from "react-bootstrap";

import skin1 from "../images/yourSkin/yourSkin1.png";
import skin2 from "../images/yourSkin/yourSkin2.png";
import skin3 from "../images/yourSkin/yourSkin3.png";
import skin4 from "../images/yourSkin/yourSkin4.png";

import summary1 from "../images/summary/summary1.jpg";
import summary2 from "../images/summary/summary2.jpg";
import summary3 from "../images/summary/summary3.jpg";
import summary4 from "../images/summary/summary4.jpg";



function Features() {

    return (
        <section className="relative">

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 md:pt-20">

                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <p className="text-xl text-gray-600">ВАША КОЖА</p>
                    </div>

                    <Container>
                        <Row>

                            <Col>
                                <div className="text-center pb-12 md:pb-8" style={{
                                    backgroundImage: `url(${skin1})`,
                                    backgroundSize: "100%",
                                    color: "black",
                                    height: "80px",
                                    width: "90px",
                                    backgroundRepeat: "no-repeat"
                                }
                                }>

                                </div>
                                <div>
                                    <p>Комибинированная</p>
                                    <p style={{
                                        textAlign: "justify"
                                    }}>У вас самый распространенный тип кожи. Его характерные черты жирная Т-зона и
                                        нормальные или сухие щеки. Подобрать средства, которые одинаково хорошо подойдут
                                        для обеих зон возможно, но не так просто.</p>
                                </div>

                            </Col>
                            <Col>
                                <div className="text-center pb-12 md:pb-8" style={{
                                    backgroundImage: `url(${skin2})`,
                                    backgroundSize: "100%",
                                    color: "black",
                                    height: "80px",
                                    width: "90px",
                                    backgroundRepeat: "no-repeat"
                                }
                                }>

                                </div>
                                <div>
                                    <p>Чувствительная</p>
                                    <p style={{
                                        textAlign: "justify"
                                    }}>Ваша кожа требует особого ухода и заботы. Обязательно делайте патч-тест перед
                                        применением новых средств. И избегайте средств с высоким содержанием активов,
                                        особенно, кислот и ретинола.</p>
                                </div>

                            </Col>
                            <Col>
                                <div className="text-center pb-12 md:pb-8" style={{
                                    backgroundImage: `url(${skin3})`,
                                    backgroundSize: "100%",
                                    color: "black",
                                    height: "80px",
                                    width: "90px",
                                    backgroundRepeat: "no-repeat"
                                }
                                }>

                                </div>
                                <div>
                                    <p>Сильно Обезвожена</p>
                                    <p style={{
                                        textAlign: "justify"
                                    }}>Коже не хватает влаги, она обезвожена. Ей нужен мягкий уход с хорошей увлажяющей
                                        сывороткой и кремом. </p>
                                </div>

                            </Col>
                            <Col>
                                <div className="text-center pb-12 md:pb-8" style={{
                                    backgroundImage: `url(${skin4})`,
                                    backgroundSize: "100%",
                                    color: "black",
                                    backgroundRepeat: "no-repeat",
                                    height: "80px",
                                    width: "90px",
                                }
                                }>

                                </div>
                                <div>
                                    <p>Реактивная</p>
                                    <p style={{
                                        textAlign: "justify"
                                    }}>Главная задача Вашего ухода это восстановления защитного барьера. Это невидимая
                                        мантия, которая защищает кожу от негативного воздействия окружающей среды. Когда
                                        защитный барьер поврежден, кожа быстро теряет влагу и более остро реагирует на
                                        косметику и другие раздражители. </p>
                                </div>

                            </Col>

                        </Row>

                        <Row>

                            <Col>
                                <div className="text-center pb-12 md:pb-8" style={{
                                    backgroundImage: `url(${summary1})`,
                                    fontSize: "4.2vw",
                                    backgroundSize: "100%",
                                    color: "black",
                                    height: "80px",
                                    width: "90px",
                                    backgroundRepeat: "no-repeat"
                                }
                                }>

                                </div>
                                <div>
                                    <p>Комибинированная</p>
                                    <p style={{
                                        textAlign: "justify"
                                    }}>У вас самый распространенный тип кожи. Его характерные черты жирная Т-зона и
                                        нормальные или сухие щеки. Подобрать средства, которые одинаково хорошо подойдут
                                        для обеих зон возможно, но не так просто.</p>
                                </div>

                            </Col>
                            <Col>
                                <div className="text-center pb-12 md:pb-8" style={{
                                    backgroundImage: `url(${summary2})`,
                                    fontSize: "4.2vw",
                                    backgroundSize: "100%",
                                    color: "black",
                                    height: "80px",
                                    width: "90px",
                                    backgroundRepeat: "no-repeat"
                                }
                                }>

                                </div>
                                <div>
                                    <p>Чувствительная</p>
                                    <p style={{
                                        textAlign: "justify"
                                    }}>Ваша кожа требует особого ухода и заботы. Обязательно делайте патч-тест перед
                                        применением новых средств. И избегайте средств с высоким содержанием активов,
                                        особенно, кислот и ретинола.</p>
                                </div>

                            </Col>
                            <Col>
                                <div className="text-center pb-12 md:pb-8" style={{
                                    backgroundImage: `url(${summary3})`,
                                    fontSize: "4.2vw",
                                    backgroundSize: "100%",
                                    color: "black",
                                    height: "80px",
                                    width: "90px",
                                    backgroundRepeat: "no-repeat"
                                }
                                }>

                                </div>
                                <div>
                                    <p>Сильно Обезвожена</p>
                                    <p style={{
                                        textAlign: "justify"
                                    }}>Коже не хватает влаги, она обезвожена. Ей нужен мягкий уход с хорошей увлажяющей
                                        сывороткой и кремом. </p>
                                </div>

                            </Col>
                            <Col>
                                <div className="text-center pb-12 md:pb-8" style={{
                                    backgroundImage: `url(${summary4})`,
                                    backgroundSize: "100%",
                                    color: "black",
                                    backgroundRepeat: "no-repeat",
                                    height: "80px",
                                    width: "90px",
                                }
                                }>

                                </div>
                                <div>
                                    <p>Реактивная</p>
                                    <p style={{
                                        textAlign: "justify"
                                    }}>Главная задача Вашего ухода это восстановления защитного барьера. Это невидимая
                                        мантия, которая защищает кожу от негативного воздействия окружающей среды. Когда
                                        защитный барьер поврежден, кожа быстро теряет влагу и более остро реагирует на
                                        косметику и другие раздражители. </p>
                                </div>

                            </Col>

                        </Row>

                    </Container>
                </div>
            </div>
        </section>
    );
}

export default Features;
