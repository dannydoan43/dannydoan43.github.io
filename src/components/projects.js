import React, { Component } from 'react';
import './projects.css'
export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                {/*generated code*/}
                <header id="portfolio" className="">
                    <div>
                        <h1 className="left">Projects</h1>
                    </div>
                    <br></br>
                    <div>
                        <table className="toolsused">
                        <tr >
                            <td><img className="pic1" src="homepage.png" alt="broken"/></td>
                            <td className="tablepad"><h1 className="boxcolor">PottyPicker <a href="https://github.com/dannydoan43/sigma" target="_blank" ><img src="github.png" className="githubpadding"/> </a></h1> <p className="pottytext">is a JavaFX application that makes use of the JavaMail API. Students are able to email janitorial staff which bathrooms are the best/worst. </p></td>
                        </tr>
                            <br></br><br></br><br></br>
                            <tr className="tablepadding">
                                <td><img className="postpage.png" src="" alt="here we go again"/></td>
                                <td className="tablepad"> <h1 className="boxcolor">Digital Recognition <a href="https://github.com/dannydoan43/sigma" target="_blank" ><img src="github.png" className="githubpadding"/> </a></h1> <p className="pottytext">is a machine learning project done in Python that uses numpy, pandas, keras, tensorflow and matplotlib with the MNIST handwritten digit dataset.</p></td>
                            </tr>
                        </table>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}