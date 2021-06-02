import React, { useEffect, useLayoutEffect } from "react";
import { CanvasSpace, Circle, Pt, Group, Line, Create } from "pts";
import { Name, Space, SubHeader } from "./styles";
import useStores from "hooks/useStores";
import theme from "lib/styles/theme";

function CanvasBanner() {
  let canvasSpace: CanvasSpace;

  const {
    useTheme: { palette, isDark },
  } = useStores();
  const { darkTheme, lightTheme } = theme;
  const color = isDark ? lightTheme.palette.body : darkTheme.palette.body;

  useLayoutEffect(() => {
    if (typeof window !== "undefined" && !canvasSpace) {
      canvasSpace = playAnimation();
    }
    return function cleanup() {
      if (canvasSpace) canvasSpace.dispose();
    };
  }, [isDark]);

  function playAnimation() {
    const space = new CanvasSpace("canvas");
    let pts: Group;
    let form = space.getForm();
    space.background = color;
    space.add({
      start: (bound) => {
        pts = Create.distributeRandom(space.innerBound, 50);
      },

      animate: (time, ftime) => {
        pts.rotate2D(0.003, space.center);

        pts.forEach((p, i) => {
          const c = Circle.fromCenter(space.center, p.magnitude());
          form.fillOnly(["#b2b2b2"][i]).point(p, 1.5, "circle").fill(false);
          let point = new Pt(space.center);
          point.rotate2D(0.0005, space.center);

          form.stroke("#666666").circle(c);
          form.fill(true);
        });
      },
    });

    //// ----
    return space.bindMouse().bindTouch().play();
  }

  return (
    <>
      <Space id="canvas"></Space>
      <Name>SAM MEJIA</Name>
      <SubHeader>Product Builder</SubHeader>
    </>
  );
}

export default CanvasBanner;
