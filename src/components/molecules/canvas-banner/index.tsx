import React, { useEffect } from "react";
import { CanvasSpace, Circle, Pt, Group, Line, Create } from "pts";
import { Space } from "./styles";
import useStores from "hooks/useStores";

function CanvasBanner() {
  const {
    useTheme: { palette },
  } = useStores();
  useEffect(() => {
    if (typeof window !== "undefined") {
      playAnimation();
    }
  }, []);

  function playAnimation() {
    const space = new CanvasSpace("canvas");
    var pts = new Group();
    let form = space.getForm();

    space.background = '#ffffff';
    space.add({
      // creatr 200 random points
      start: (bound) => {
        pts = Create.distributeRandom(space.innerBound, 50);
        console.log(space.ctx);
      },
      resize: (bound) => {
        space.play();
      },

      animate: (time, ftime) => {
        // make a line and turn it into an "op" (see the guide on Op for more)
        let perpend = new Group(space.center.$subtract(0.1), space.pointer).op(
          Line.perpendicularFromPt
        );
        pts.rotate2D(0.003, space.center);

        pts.forEach((p, i) => {
          // for each point, find the perpendicular to the line
          let ln = p.$subtract(space.center.$add(0.1));
          let mag = ln.magnitude();
          let lp = perpend(p);
          const c = Circle.fromCenter(space.center, p.magnitude());
          form.fillOnly(["#b2b2b2"][i]).point(p, 1).fill(false);
          let point = new Pt(space.center);
          point.rotate2D(0.0005, space.center);
          form.stroke("#666666").circle(c);
          form.fill(false);
        });
      },
    });

    //// ----
    space.play();
  }

  return <Space id="canvas"></Space>;
}

export default CanvasBanner;
