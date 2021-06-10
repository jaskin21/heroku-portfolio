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
                        <button className="button-message">Message</button>
                        <button className="button-resume">Resume</button>
                    </div>
                </div>
            </div>
        )
    }
}

