import ProfileBadge from "elements/ProfileBadge";
import React from "react";
import Container from "./Container";

import "./HomeSuggestionContainer.scss";

import Link from "elements/Link";
import Text from "./Text";
import Row from "./Row";
import SuggestionList from "./suggestions/list";

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
            <Link href="google.com">
              <Text className="font-primary" fs={12} fw={700}>
                Switch
              </Text>
            </Link>
          </div>
          <div className="home-suggestion-divider mt-12">
            <Row>
              <Text className="text-secondary" fs={14} fw={700}>
                Suggestions For You
              </Text>
              <Text fs={12} fw={600}>
                See All
              </Text>
            </Row>
          </div>
          <div className="home-suggestion-items mt-8">
            <SuggestionList />
            <SuggestionList />
            <SuggestionList />
          </div>
          <div className="home-suggestion-links mt-16">
            <Text className="links">
              <Link className="my-3">
                <Text fs={11} fw={600}>
                  About
                </Text>
              </Link>
              •
              <Link className="my-3">
                <Text fs={11} fw={600}>
                  Help
                </Text>
              </Link>
              •
              <Link className="my-3">
                <Text fs={11} fw={600}>
                  Press
                </Text>
              </Link>
              •
              <Link className="my-3">
                <Text fs={11} fw={600}>
                  API
                </Text>
              </Link>
              •
              <Link className="my-3">
                <Text fs={11} fw={600}>
                  Jobs
                </Text>
              </Link>
              •
              <Link className="my-3">
                <Text fs={11} fw={600}>
                  Privacy
                </Text>
              </Link>
              •
              <Link className="my-3">
                <Text fs={11} fw={600}>
                  Terms
                </Text>
              </Link>
              •
              <Link className="my-3">
                <Text fs={11} fw={600}>
                  Locations
                </Text>
              </Link>
              •
              <Link className="my-3">
                <Text fs={11} fw={600}>
                  Language
                </Text>
              </Link>
            </Text>
          </div>
          <div className="home-suggestion-footer mt-18">
            <Text fs={11} fw={600}>
              © 2022 INSTAGRAM FROM META
            </Text>
          </div>
        </div>
      </Container>
    </>
  );
}
