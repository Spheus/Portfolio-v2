import * as React from "react";
import AnimatedBanner from "components/molecules/animation-banner";
import CanvasBanner from "components/molecules/canvas-banner";
import PageLayout from "components/layouts/page-layout";
// styles

// markup
const IndexPage = () => {
  return (
      <PageLayout>
        <CanvasBanner></CanvasBanner>
        <AnimatedBanner></AnimatedBanner>
      </PageLayout>
  );
};

export default IndexPage;
