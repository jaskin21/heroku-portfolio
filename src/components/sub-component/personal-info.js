import React, { Component } from "react";

// style
import "./style/personal.css"


export default class CardMultimedia extends Component {
    render() {
        return (
            <div className="card-3 card">
                <h3 className="card-3-title">Personal Information</h3>
                <hr />
                <div className="re">
                    <div className="re">
                        <h4 className="re">
                            Name:
                        </h4>
                    </div>
                    <div className="re">
                        Renz Jaskin Agmata
                    </div>
                </div>
                <hr />
                <div className="re">
                    <div className="re">
                        <h4 className="re">
                            Email:
                        </h4>
                    </div>
                    <div className="re">
                        jaskin.agmata@gmail.com
                    </div >
                </div>
                <hr />
                <div className="re">
                    <div className="re">
                        <h4 className="re">
                            Number:
                        </h4>
                    </div>
                    <div className="re">
                        (+63)938-0296-142
                    </div>
                </div>
                <hr />
                <div className="re">
                    <div className="re">
                        <h4 className="re">
                            Address:
                        </h4>
                    </div>
                    <div className="re">
                        Poblacion, Kabacan, North Cotabato
                    </div>
                </div>
            </div>
        );
    }
}