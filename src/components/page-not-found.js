import React, { Component } from "react";
import "./style/page-not-found.css";

import imager from "./images/displayPicture.jpg"

class PageNotFound extends Component {
    render() {
        return (
            <div className="Main-container">
                <div className="Content-container">   Page Not Found </div>
                <image src={imager} width="50" height="50" />
                <a href="/">HomePage</a>

            </div>
        );
    }
}

export default PageNotFound;

