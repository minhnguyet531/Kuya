import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Button from "./Button";
function Footer() {
    return (
        <footer className="footer container">
            <img
                src={require("../assets/image/kuyaDownload.jpg")}
                alt=""
                className="game-download"
            />
            <div className="title">
                <h1>Thanks for watching</h1>
                <h4>Net marble design team</h4>
            </div>
            <div className="downloads">
                <Button
                    href="https://apps.apple.com/app/id1625027068"
                    target="_blank"
                    className="btn-down download-game"
                >
                    <FaApple className="icon-down" />
                    <div className="text__align--start">
                        <h6>Download on the</h6>
                        <h5>App Store</h5>
                    </div>
                </Button>

                <Button
                    href="https://play.google.com/store/apps/details?id=com.netmarble.mkglobal"
                    target="_blank"
                    className="btn-down download-game"
                >
                    <FaGooglePlay className="icon-down" />
                    <div className="text__align--start">
                        <h6>Get it on</h6>
                        <h5>Google Play</h5>
                    </div>
                </Button>
            </div>
        </footer>
    );
}

export default Footer;
