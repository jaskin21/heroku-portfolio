import React, { Component } from "react";
import "./style/home.css";

// import profile picture

class Home extends Component {
    render() {
        return (
            <div className="App">
                <div className="flexbox-container">
                    {/* main body */}
                    <div className="main-body">

                        {/* first col */}
                        <div>

                            {/* card 1 */}
                            <div className="card-1">
                                <div></div>
                                <div>
                                    {/* <image src={require("./images/displayPicture.jpg")} width="50" height="50" alt="image" /> */}

                                    <h4 className="name">Renz Jaskin Agmata</h4>
                                    <p className="position">IT Specialist</p>
                                    <p className="description">Philippine Rubber Testing Center</p>
                                    <button className="button-message">Message</button>
                                    <button className="button-resume">Resume</button>
                                </div>
                            </div>

                            {/* card 2 */}
                            <div className="card-2">

                            </div>

                        </div>

                        {/* second col */}
                        <div>

                            {/* card 3 */}
                            <div className="card-3">
                            </div>

                            {/* card 4 */}
                            <div className="card-4">

                            </div>

                        </div>



                    </div>

                </div>
            </div >
        )
    }
}

export default Home;