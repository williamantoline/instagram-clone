import React from "react";

import "./LoadingScreen.scss";

import instagramLogo from "../assets/images/instagram-logo.png";
import fromMeta from "../assets/images/from-meta.png";

export default function LoadingScreen(props) {
    return (
        <div className="loading-screen">
            <img className="instagram-logo" src={instagramLogo} />
            <img className="from-meta" src={fromMeta} />
        </div>
    )
}