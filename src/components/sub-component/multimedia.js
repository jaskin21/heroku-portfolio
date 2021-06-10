import React, { Component } from "react";
import "./style/multimedia.css";

export default class CardMultimedia extends Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div className="card-2 card">
                    <a href="https://www.facebook.com/DontWasteMyyyTime/" className="fa fa-facebook" target="blank"></a>
                    <a href="https://github.com/jaskin21" className="fa fa-github" target="blank"></a>
                    <a href="https://www.instagram.com/juskin.account/" className="fa fa-instagram" target="blank"></a>
                    <a href="https://www.linkedin.com/in/renz-jaskin-agmata-03284a18a/" className="fa fa-linkedin" target="blank"></a>
                </div >
            </div>

        );
    }
}





