import React from "react";

import "./Row.scss";

export default function Row(props) {
  return (
    <>
      <div className="flex flex-row justify-between align-item-center">
        {props.children}
      </div>
    </>
  );
}
