import React from "react";
import instagramLogo from "../assets/icons/instagram-logo.png";
import fromMeta from "../assets/icons/from-meta.png";

import "./LoadingScreen.scss";

export default function LoadingScreen(props) {
  return (
    <div className="loading-screen">
      <img className="instagram-logo" src={instagramLogo}></img>
      <img className="from-meta" src={fromMeta}></img>
    </div>
  );
}
