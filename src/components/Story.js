import React from "react";

import "./Story.scss";

import ProfileBadge from "elements/ProfileBadge";
import Text from "./Text";

export default function Story(props) {
  return (
    <>
      <div className="story mr-4">
        <ProfileBadge size={5} />
        <Text className="mt-6" fs={12} fw={400} width={74} align="center">
          shaniayanofc
        </Text>
      </div>
    </>
  );
}
