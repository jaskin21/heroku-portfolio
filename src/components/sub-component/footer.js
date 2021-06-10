import React, { Component } from "react";

// style
import "./style/footer.css";

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="footer">
                    <div className="footer-tag">
                        Renz Jaskin Agmta Portfolio &copy; {new Date().getFullYear()}
                    </div>
                </footer>
            </div >
        )
    }
}