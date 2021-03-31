import React, { Component } from 'react';
import './resume.css';
export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                {/*generated code*/}
                <header id="home">
                    <section id="resume" className="s-resume target-section">
                                <h1 className="left">Career</h1>
                                        <h4 className="h3">UTSA CS Department</h4>
                                        <p className="resume-block__header-meta">
                                            <span>Computer Science Tutor - Janurary 2019 to May 2019 </span>
                                        </p>
                                    <p>
                                        Aided students on their assignments in a one-on-one situation.
                                    </p>
                        <br></br>
                                        <h4 className="h3">Kung Fu Tea</h4>
                                        <p className="">
                                            <span>BoH/Barista - June 2018 to March 2020</span>
                                        </p>
                                    <p>
                                        Managed time properly to ensure products are kept fresh, also to attend to customers in a prompt and friendly manner.
                                    </p>
                        <br></br>
                                <h1 className="left">Education</h1>
                                    <div className="">
                                        <table className="centeredu">
                                        <tr className="">
                                            <td><h4 className="edupadding">University of Texas at San Antonio</h4></td>
                                            <td><img className="rrpic" src="unnamed.jpg" alt="shit is broken"/></td>
                                        </tr>
                                            <tr>
                                            <td>
                                                <span className="edupadding">Bachelor's in Computer Science </span>
                                                <span className="edupadding2"> December 2020</span>
                                            </td>
                                        </tr>
                                        </table>
                                    </div>
                                    <hr />

                    </section> {/* end s-resume */}

                </header>
            </React.Fragment>
        );
    }
}