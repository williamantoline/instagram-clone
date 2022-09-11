import React from "react";

import "./Header.scss";

import Navbar from "./Navbar";

export default function Header(props) {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-left">
          <p className="header-text-logo">Instagram</p>
        </div>
        <div className="header-right">
          <Navbar location={props.location} />
        </div>
      </div>
    </div>
  );
}
