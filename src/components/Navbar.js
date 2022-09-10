import React from "react";

import "./Navbar.scss";

import Icon from "elements/Icon";

import ic_home_filled from "../assets/icons/ic_home_filled.svg";
import ic_add from "../assets/icons/ic_add.svg";
import ic_like from "../assets/icons/ic_like.svg";
import ic_messenger from "../assets/icons/ic_messenger.svg";
import ic_search from "../assets/icons/ic_search.svg";
import profile from "../assets/icons/profile.svg";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <div className="nav-item">
        <Icon img={ic_home_filled} />
      </div>
      <div className="nav-item">
        <Icon img={ic_messenger} />
      </div>
      <div className="nav-item">
        <Icon img={ic_add} />
      </div>
      <div className="nav-item">
        <Icon img={ic_search} />
      </div>
      <div className="nav-item">
        <Icon img={ic_like} />
      </div>
      <div className="nav-item">
        <Icon img={profile} />
      </div>
    </div>
  );
}
