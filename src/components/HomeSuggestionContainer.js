import ProfileBadge from "elements/ProfileBadge";
import React from "react";
import Container from "./Container";

import "./HomeSuggestionContainer.scss";

import Text from "./Text";

export default function HomeSuggestionContainer(props) {
  return (
    <>
      <Container>
        <div className="home-suggestion-container">
          <div className="home-suggestion-my-profile">
            <ProfileBadge className="mr-16" size={5} />
            <Text fs={14} fw={600} width={200}>
              williamantoline
            </Text>
            <Text fs={12} fw={700}>
              Switch
            </Text>
          </div>
        </div>
      </Container>
    </>
  );
}
