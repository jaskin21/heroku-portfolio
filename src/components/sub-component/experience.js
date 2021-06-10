import React, { Component } from "react";

export default class CardMultimedia extends Component {
    render() {
        return (
            <div className="card-4 card">
                <h3>Work Experience</h3>
                <div className="experience-1">
                    <h4>Admin Support Staff</h4>
                    <i>Philippine Rubber Testing Center</i><br />
                    <small>(November 2019 - December 2020)</small>
                </div>
                <div className="experience-2">
                    <h4>Laboratory Aide</h4>
                    <i>Philippine Rubber Testing Center</i><br />
                    <small>(January 2021 - Present)</small>
                </div>
            </div>
        );
    }
}