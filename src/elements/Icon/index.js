import React from "react";

import "./index.scss";

export default function Icon(props) {
  return (
    <div className="icon">
      <img src={props.img} />
    </div>
  );
}
