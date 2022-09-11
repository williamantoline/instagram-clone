import React from "react";
import Header from "components/Header";

import "./Home.scss";
import Container from "components/Container";
import StoryContainer from "components/StoryContainer";
import Scrollable from "components/Scrollable";
import Story from "components/Story";
import HomePostContainer from "components/HomePostContainer";
import HomeSuggestionContainer from "components/HomeSuggestionContainer";

export default function Home(props) {
  return (
    <>
      <Header />
      <Container
        className="mt-28 mobile-mt-0 mobile-full"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        mobileFlexDirection="column"
        maxWidth={830}
      >
        <Container className="mr-28 mobile-mr-auto mobile-full" maxWidth={472}>
          <StoryContainer>
            <Scrollable className="flex flex-row">
              <Container className="my-14" display="flex" flexDirection="row">
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
              </Container>
            </Scrollable>
          </StoryContainer>
          <HomePostContainer></HomePostContainer>
        </Container>
        <Container className="mobile-view-none" maxWidth={328}>
          <HomeSuggestionContainer />
        </Container>
      </Container>
    </>
  );
}
