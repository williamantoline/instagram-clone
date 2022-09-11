import Container from "components/Container";
import Icon from "elements/Icon";
import React from "react";

import "./Explore.scss";

import ic_search from "../assets/icons/ic_search.svg";
import ic_close from "../assets/icons/ic_close.svg";
import Text from "components/Text";
import Scrollable from "components/Scrollable";
import ProfileBadge from "elements/ProfileBadge";
import Row from "components/Row";
import Column from "components/Column";
import SearchResultList from "components/search-result/list";

export default function Explore() {
  return (
    <>
      <Container maxWidth={940}>
        <div className="explore-search-bar">
          <Icon className="mr-12" img={ic_search} width={16} />
          <input placeholder="Search..." />
        </div>

        <div className="explore-search-result">
          <div className="explore-search-result-title">
            <Text fs={16} fw={700}>
              Recent
            </Text>
          </div>
          <div className="explore-search-result-items">
            <Scrollable>
              <SearchResultList />
              <SearchResultList />
              <SearchResultList />
              <SearchResultList />
              <SearchResultList />
              <SearchResultList />
              <SearchResultList />
              <SearchResultList />
              <SearchResultList />
            </Scrollable>
          </div>
        </div>

        <div className="explore-posts">
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
        </div>
      </Container>
    </>
  );
}
