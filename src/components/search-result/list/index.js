import React from "react";

import "./index.scss";

import Text from "components/Text";
import Row from "components/Row";
import Column from "components/Column";
import ProfileBadge from "elements/ProfileBadge";
import Icon from "elements/Icon";
import ic_close from "../../../assets/icons/ic_close.svg";  

export default function SearchResultList() {
  return (
    <>
      <div className="search-result-list">
        <Row>
          <div className="flex align-item-center">
            <ProfileBadge size={4} className="mr-8" />
            <Column>
              <Text fs={14} fw={700}>
                shaniayanofc
              </Text>
              <Text className="mt-4" fs={14} fw={400}>
                Shania Yan Official 善善
              </Text>
            </Column>
          </div>
          <Icon img={ic_close} />
        </Row>
      </div>
    </>
  );
}
