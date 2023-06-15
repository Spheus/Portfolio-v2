//@ts-nocheck
"use client"; // This is a client component 👈🏽

import React, { useCallback, useState, useMemo, useEffect } from "react";
import { Pt, Group, Line, Create, Sound, Triangle, Const, Geom } from "pts";
import { PtsCanvas } from "react-pts-canvas";

export const AnimatedCanvas = ({ name, background, play }) => {
  const [pts, setPts] = useState([]);

  const handleStart = useCallback(
    (bound, space) => {
      const points = Create.distributeRandom(space.innerBound, 20);
      setPts(points);
    },
    [setPts]
  );

  const handleAnimate = useCallback(
    (space, form, time) => {
      if (!space) return;
      let perpend = new Group(new Pt(), new Pt(space.width, 0)).op(
        Line.perpendicularFromPt
      );
      pts.rotate2D(0.0005, space.center);
      pts.forEach((p, i) => {
        // for each point, find the perpendicular to the line
        let lp = perpend(p);

        form.strokeOnly("#88eedf99", 1).line([p, lp.$subtract([lp.x / 2, 0])]);

        form.fillOnly(["#88eedf99"]).point(p, 1);
      });
    },
    [pts]
  );

  const handleResize = useCallback(
    (space) => {
      const points = Create.distributeRandom(space.innerBound, 20);
      setPts(points);
    },
    [setPts]
  );

  return (
    <PtsCanvas
      name={name}
      background={background}
      play={true}
      onStart={handleStart}
      onResize={handleResize}
      onAnimate={handleAnimate}
    />
  );
};
