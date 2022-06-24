import React from "react";
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter} from "react-icons/ti";

export default function Footer() {
    return (
        <footer>
            <div className="footer--brand">
                <h1>talently<span>.</span></h1>
            </div>
            <p>Talently International LTD 2022</p>
            <div className="footer--logos">
                <span><TiSocialFacebook/></span>
                <span><TiSocialInstagram/></span>
                <span><TiSocialTwitter/></span>
                </div>
        </footer>
    );
}