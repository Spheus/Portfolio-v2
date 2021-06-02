import React from "react";
import AnimatedBanner from "components/molecules/animation-banner";
import CanvasBanner from "components/molecules/canvas-banner";
import { Parragraph } from "./styles";
// styles

// markup
const HomePageComponent = () => {
  return (
    <>
      <CanvasBanner></CanvasBanner>
      <Parragraph>
        I am a software developer who enjoys building everything from small
        business products to highly interactive web and mobile apps. If you are
        looking for a web presence or improvement to your site, you can get in
        touch with me here.
      </Parragraph>
      <AnimatedBanner></AnimatedBanner>

    </>
  );
};

export default HomePageComponent;
