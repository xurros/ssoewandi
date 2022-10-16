import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Thumbnail from "../../components/thumbnail";
import aboutData from '../../data/about-me'

const AboutMe = ({ type }) => {
    return (
        <div className={type !== 'page' ? 'section-padding section' : null}>
            <Container>
                <Row className={'align-items-center'} style={{marginTop: "50px"}}>
                    <Col lg={6}>
                        <Thumbnail classes={'about-thumbnail mb-md-30 mb-sm-30 mb-xs-30'} thumb={`about/${aboutData.thumb}`} />
                    </Col>

                    <Col lg={6}>
                    <h3 className="block-title" style={{marginBottom: "30px"}}>HELLO!</h3>

                        <div className="content">
                            {type !== 'page' ? (<h3 className="block-title">ABOUT</h3>) : null}
                            <p style={{marginBottom: "90px"}}>{aboutData.bio}</p>
                            

                            {/* <ul className="personal-info">
                                <li><span>Github:</span>{aboutData.github}</li> */}
                                {/* <li><span>Freelance:</span>{aboutData.availability ? "Available" : "Not Available"}</li> */}
                                {/* <li>
                                    <span>Language:</span>
                                    {aboutData.languages.map((language, index) => (
                                        <p key={index} style={{ display: "inline-block" }}>{"."} {`${language}`} </p>
                                    ))}
                                </li> */}
                            {/* </ul> */}

                            {/* <h3 className="block-title" style={{marginTop: "50px"}}>TOOLS</h3> */}

                            {/* <div className="skill-wrap">
                                {aboutData.skill.map(skill => (
                                    <Skill
                                        key={skill.id}
                                        title={skill.title}
                                        percentage={skill.percentage}
                                    />
                                ))}
                            </div> */}
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutMe;