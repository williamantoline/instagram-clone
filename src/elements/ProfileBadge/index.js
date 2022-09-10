import React from "react";

import "./index.scss";

import img_shania_yan from "../../assets/img/shania_yan.png";

export default function ProfileBadge(props) {
  const classNames = props.className ? props.className.split(" ") : [];
  classNames.push("");

  return (
    <div
      className={
        classNames.join(" ") +
        ` profile-badge profile-badge-active pb-${props.size ?? 5}`
      }
    >
      <div className="story-frame">
        <div className="divider">
          <div className="picture">{/* <img src={img_shania_yan} /> */}</div>
        </div>
      </div>
    </div>
  );
}
