import {Col, Container, Row} from "react-bootstrap";
import last1 from "../images/last/last1.jpg";
import last2 from "../images/last/last2.jpg";
import last3 from "../images/last/last3.jpg";
import last4 from "../images/last/last4.jpg";
import last5 from "../images/last/last5.jpg";
import React, {useState} from "react";


function FeaturesBlocks() {
    const [showWeakness, setShowWeakness] = useState(false);
    const [showSummary, setShowSummary] = useState(false);
    const [showStrength, setShowStrength] = useState(false);

    const upSummary = () => setShowSummary(true);
    const upWeakness = () => setShowWeakness(true);
    const upStrength = () => setShowStrength(true);

    const downStrength = () => setShowStrength(false);
    const downWeakness = () => setShowWeakness(false);
    const downSummary = () => setShowSummary(false);

    return (
        <section className="relative max-w-6xl mx-auto px-4 sm:px-6">

            <Container className="bg-color-main-rg">
                <div className={"div30LeftRightTopBottom"}>
                    <Row>
                        <Col>
                            <p onMouseLeave={downSummary} onMouseMove={upSummary} className="font18"> Summary </p>

                        </Col>
                        <Col>
                            <p onMouseLeave={downWeakness} onMouseMove={upWeakness} className="font18"> Weakness </p>

                        </Col>
                        <Col>
                            <p onMouseLeave={downStrength} onMouseMove={upStrength} className="font18"> Strength </p>

                        </Col>

                    </Row>
                    <div style={{
                        height: "100px"
                    }}>
                        {showSummary ? <SummaryText/> : null}
                        {showWeakness ? <WeakNessText/> : null}
                        {showStrength ? <StrengthText/> : null}
                    </div>

                </div>
                <div className={"div30LeftRight"}>
                    <Row>
                        <h4 style={{
                            textDecoration: "underline",
                            paddingTop: "30px",
                            paddingBottom: "30px"
                        }}>TOP INGREDIENTS FOR YOUR SKIN</h4>
                        <Col>
                            <div className="bg-color-main-rg-image-div">
                                <div className="text-center pb-12 md:pb-8" style={{
                                    backgroundImage: `url(${last1})`,
                                    backgroundSize: "100%",
                                    borderRadius: "15px 15px 15px 15px",
                                    color: "white",
                                    height: "75px",
                                    width: "75px",
                                    backgroundRepeat: "no-repeat"
                                }
                                }>

                                </div>
                                <div className="rg-div-size">
                                    <p className="font14">Салициловая кислота</p>
                                    <p style={{
                                        textAlign: "justify"
                                    }}>Для сужения пор</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="bg-color-main-rg-image-div">
                                <div className="text-center pb-12 md:pb-8" style={{
                                    backgroundImage: `url(${last2})`,
                                    backgroundSize: "100%",
                                    borderRadius: "15px 15px 15px 15px",
                                    color: "white",
                                    height: "75px",
                                    width: "75px",
                                    backgroundRepeat: "no-repeat"
                                }
                                }>
                                </div>
                                <div className="rg-div-size">
                                    <p className="font14">Ретинол</p>
                                    <p style={{
                                        textAlign: "justify"
                                    }}>Для уменьшения морщин</p>
                                </div>
                            </div>

                        </Col>
                        <Col>
                            <div className="bg-color-main-rg-image-div">
                                <div className="text-center pb-12 md:pb-8" style={{
                                    backgroundImage: `url(${last3})`,
                                    backgroundSize: "100%",
                                    borderRadius: "15px 15px 15px 15px",
                                    color: "white",
                                    height: "75px",
                                    width: "75px",
                                    backgroundRepeat: "no-repeat"
                                }
                                }>
                                </div>
                                <div className="rg-div-size">
                                    <p className={"font14"}>Гиалуроновая кислота
                                    </p>
                                    <p style={{
                                        textAlign: "justify"
                                    }}>Для увлажнения</p>
                                </div>
                            </div>

                        </Col>
                        <Col>
                            <div className="bg-color-main-rg-image-div">
                                <div style={{
                                    backgroundImage: `url(${last4})`,
                                    backgroundSize: "100%",
                                    borderRadius: "15px 15px 15px 15px",
                                    backgroundRepeat: "no-repeat",
                                    height: "75px",
                                    width: "75px",
                                }
                                }>
                                </div>
                                <div className="rg-div-size">
                                    <p className={"font14"}>Антиоксиданты</p>
                                    <p style={{
                                        textAlign: "justify"
                                    }}>Для защиты от негативного воздействия окружающей среды</p>
                                </div>
                            </div>


                        </Col>
                        <Col>
                            <div className="bg-color-main-rg-image-div" style={{}}>
                                <div style={{
                                    backgroundImage: `url(${last5})`,
                                    position: "center",
                                    backgroundSize: "100%",
                                    borderRadius: "15px 15px 15px 15px",
                                    backgroundRepeat: "no-repeat",
                                    height: "75px",
                                    width: "75px",
                                }
                                }>
                                </div>
                                <div className="rg-div-size">
                                    <p className={"font14"}>Lactic acid</p>
                                    <p style={{
                                        textAlign: "justify"
                                    }}>
                                        Targets your: clogged pores
                                    </p>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </div>
            </Container>

        </section>
    );


}

export default FeaturesBlocks;
const WeakNessText = () =>
    <div className="divTrans">Иконка Weakness
        На время беременности и кормления нельзя использовать косметику с ретинолом, трениноидом, адапаленом.
        Использование средства с салициловой кислотой и бензоилпероксидом возможно в ограниченном количестве, советуем
        дополнительно обсудить этот вопрос с гинекологом.
    </div>;

const SummaryText = () => <div className="divTrans">Иконка Summary
    На время беременности и кормления нельзя использовать косметику с ретинолом, трениноидом, адапаленом.
    Использование средства с салициловой кислотой и бензоилпероксидом возможно в ограниченном количестве, советуем
    дополнительно обсудить этот вопрос с гинекологом.</div>;

const StrengthText = () => <div className="divTrans">Иконка Strength
    На время беременности и кормления нельзя использовать косметику с ретинолом, трениноидом, адапаленом.
    Использование средства с салициловой кислотой и бензоилпероксидом возможно в ограниченном количестве, советуем
    дополнительно обсудить этот вопрос с гинекологом.</div>;