import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

import Icon from "elements/Icon";

import ic_home from "../assets/icons/ic_home.svg";
import ic_home_filled from "../assets/icons/ic_home_filled.svg";
import ic_add from "../assets/icons/ic_add.svg";
import ic_add_filled from "../assets/icons/ic_add_filled.svg";
import ic_like from "../assets/icons/ic_like.svg";
import ic_like_filled from "../assets/icons/ic_like_filled.svg";
import ic_messenger from "../assets/icons/ic_messenger.svg";
import ic_messenger_filled from "../assets/icons/ic_messenger_filled.svg";
import ic_search from "../assets/icons/ic_search.svg";
import ic_search_filled from "../assets/icons/ic_search_filled.svg";
// import profile from "../assets/icons/profile.svg";

export default function Navbar(props) {
  console.log(props.location);
  return (
    <div className="navbar">
      <div className="nav-item">
        <Link to="/">
          {props.location === "/" ? (
            <Icon img={ic_home_filled} />
          ) : (
            <Icon img={ic_home} />
          )}
        </Link>
      </div>
      <div className="nav-item">
        <Link to="messenger">
          {props.location === "/messenger" ? (
            <Icon img={ic_messenger_filled} />
          ) : (
            <Icon img={ic_messenger} />
          )}
        </Link>
      </div>
      <div className="nav-item">
        {props.location === "/add" ? (
          <Icon img={ic_add_filled} />
        ) : (
          <Icon img={ic_add} />
        )}
      </div>
      <div className="nav-item">
        {props.location === "/explore" ? (
          <Icon img={ic_search_filled} />
        ) : (
          <Icon img={ic_search} />
        )}
      </div>
      <div className="nav-item">
        {props.location === "/notification" ? (
          <Icon img={ic_like_filled} />
        ) : (
          <Icon img={ic_like} />
        )}
      </div>
      <div className="nav-item">
        <Icon img={profile} />
      </div>
    </div>
  );
}
