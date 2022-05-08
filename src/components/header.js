import React, { Component } from 'react'
import './header.css'

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                {/*generated code*/}
                <header id="home">
                    <header className="App-header">
                        <div className="context">

                            <ul className="headerright">
                                <li className="helpme"><a className="smoothscroll rmunder" href="mailto:dannydoan43@gmail.com">Contact</a></li>
                                <li className="helpme"><a href="#about" className="rmunder">About Me</a></li>
                                <li className="helpme"><a href="DDresume.pdf" target="_blank" className="button1">Résumé</a></li>
                                <li className="helpme"><a href="#portfolio" className="rmunder">Projects</a></li>
                            </ul>
                            </div>
                            <div className="container">
                                <img className="mypic" src="circle-cropped.png" alt="shit is broken"/>
                                <h2 className="contentp1"> Hey! My name is </h2>
                                <h3 className="contentp2"> Danny Doan </h3>
                                <h1 className="contentp3"> Software Developer</h1>
                            </div>

                    </header> {/* end s-header */}
                        <ul class="circles">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                </header>
            </React.Fragment>
        );
    }
}