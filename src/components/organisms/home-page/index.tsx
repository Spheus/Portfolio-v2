import React from "react";
import AnimatedBanner from "components/molecules/animation-banner";
import { Parragraph, About, Main, Name, SubHeader } from "./styles";
import { OutlinedButton } from "components/atoms/outline-button";
// styles

// markup
const HomePageComponent = () => {
  return (
    <>
      <Main>
        <About>
          <Name>Hello, I'm Sam</Name>
          <SubHeader>I build things for the web.</SubHeader>
          <Parragraph>
            I'm a software Engineer who enjoys building everything from small
            business products to highly interactive web and mobile apps.
            <br />
            If you are looking for a web presence or improvement to your site,
            you can get in touch with me here.
          </Parragraph>
          <OutlinedButton>
            Check out my profile
          </OutlinedButton>
        </About>
      </Main>
    </>
  );
};

export default HomePageComponent;
