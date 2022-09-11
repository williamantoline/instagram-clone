import ProfileBadge from "elements/ProfileBadge";
import React from "react";

import "./index.scss";

import Column from "components/Column";
import Text from "components/Text";
import Link from "elements/Link";

export default function SuggestionList(props) {
  return (
    <>
      <div className="suggestion-list">
        <ProfileBadge size={2} className="mr-12" />
        <Column>
          <Text fs={14} fw={600}>
            shaniayanofc
          </Text>
          <Text className="mt-4" fs={12} fw={500}>
            Followed by keellychai + 8 more
          </Text>
        </Column>
        <Link className="ml-auto">
          <Text fs={12} fw={600}>
            Follow
          </Text>
        </Link>
      </div>
    </>
  );
}
