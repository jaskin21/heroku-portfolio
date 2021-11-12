import React, { Component } from "react";

// style
import "./style/profile.css";

// import profile picture
import profile from "../images/displayPicture.jpg";

export default class CardProfile extends Component {
    render() {
        return (
            <div className="card-1 card" >
                <div className="profile">
                    <img src={profile} alt="Admin"
                        className="rounded-circle" width="250" />
                    <h4 className="name">Renz Jaskin Agmata</h4>
                    <p className="position">IT Specialist</p>
                    <p className="description">Philippine Rubber Testing Center</p>
                    <div className="button">
                        <a className="button-message" href="https://m.me/DontWasteMyyyTime/" target="blank">Message</a>
                        <a className="button-resume"
                            href="https://drive.google.com/file/d/1FA8Hn8ebUoQ_T6AGEQpVTe-HiPrp1Sdk/view?usp=sharing"
                            target="blank">Resume</a>
                    </div>
                </div>
            </div >
        )
    }
}

