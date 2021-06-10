import React, { Component } from "react";

// style
import "./style/personal.css"


export default class CardMultimedia extends Component {
    render() {
        return (
            <div className="card-3 card">
                <h3 className="card-3-title">Personal Information</h3>
                <hr />
                <div>
                    <div>
                        <h4>
                            Name:
                        </h4>
                    </div>
                    <div>
                        Renz Jaskin Agmata
                    </div>
                </div>
                <hr />
                <div>
                    <div>
                        <h4>
                            Email:
                        </h4>
                    </div>
                    <div>
                        jaskin.agmata@gmail.com
                    </div>
                </div>
                <hr />
                <div>
                    <div>
                        <h4>
                            Number:
                        </h4>
                    </div>
                    <div>
                        (+63)938-0296-142
                    </div>
                </div>
                <hr />
                <div>
                    <div>
                        <h4>
                            Address:
                        </h4>
                    </div>
                    <div>
                        Poblacion, Kabacan, North Cotabato
                    </div>
                </div>
            </div>
        );
    }
}