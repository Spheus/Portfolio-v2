import React, { useEffect, useLayoutEffect } from "react";
import { CanvasSpace, Circle, Pt, Group, Line, Create } from "pts";
import { Links, Space, Link, Mail } from "./styles";
import useStores from "hooks/useStores";
import theme from "lib/styles/theme";
import { FiTriangle, FiCodepen, FiMail } from "react-icons/fi";
import { AiFillGithub, AiFillLinkedin, AiOutlineCodepen } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";

function CanvasBanner() {
  let canvasSpace: CanvasSpace;

  const {
    useTheme: { palette, isDark },
  } = useStores();
  const { darkTheme, lightTheme } = theme;
  const backgroundColor = isDark ? "#abc4ff" : darkTheme.palette.body;

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
    space.innerBound.anchorTo(space.innerBound.width);
    space.background = backgroundColor;
    space.add({
      start: (bound) => {
        pts = Create.distributeRandom(space.innerBound, 8);
      },

      animate: (time, ftime) => {
        pts.rotate2D(0.005, space.center);

        pts.forEach((p, i) => {
          const c = Circle.fromCenter(space.center, p.magnitude() / 2);
          form.fillOnly(["#fcfcfc"][i]).point(p, 1.5, "circle").fill(false);
          let point = new Pt(space.center);
          point.rotate2D(0.0005, space.center);
          const grad = form.gradient([
            "rgba(254, 102, 125, 0.671)",
            "rgba(255, 163, 117, 0.541)",
          ]);

          form.stroke(grad(c), 2).circle(c);
          form.fill(true);
        });
      },
    });

    //// ----
    return space.play();
  }

  return (
    <>
      <Space id="canvas"></Space>
      <Links>
        <Link>
          <AiFillGithub />
        </Link>
        <Link>
          <FiCodepen />
        </Link>
        <Link>
          <AiFillLinkedin />
        </Link>
        <Link>
          <FiMail />
        </Link>
        <hr />
      </Links>
      <Mail>
        'Samg2583@hotmail.com' <hr />
      </Mail>
    </>
  );
}

export default CanvasBanner;
