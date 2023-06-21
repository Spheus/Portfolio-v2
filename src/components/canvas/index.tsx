"use client"; // This is a client component 👈🏽
//@ts-nocheck
import React, { useCallback, useState, useMemo, useEffect } from "react";
import {
  Pt,
  Group,
  Line,
  Create,
  Sound,
  CanvasForm as Form,
  Triangle,
  Const,
  Geom,
  Vec,
} from "pts";
import { PtsCanvas } from "react-pts-canvas";

export const AnimatedCanvas = ({ name, background, play }) => {
  const [pts, setPts] = useState([]);

  const handleStart = useCallback(
    (bound, space) => {
      const points = Create.distributeRandom(space.innerBound, 30).map(
        (p, i) => {
          p.brightness = 0.7;
          return p;
        }
      );

      setPts(points);
    },
    [setPts]
  );

  const handleAnimate = useCallback(
    (space, form: Form, time) => {
      let perpend = new Group(
        new Pt(space.width / 2, space.heigth * 1.5),
        new Pt(space.width * 1.5, window.innerHeight * 0.5)
      ).op(Line.perpendicularFromPt);
      if (!space) return;
      var center = space.size.$divide(1.8);

      pts.forEach((p: Pt, i) => {
        // for each point, find the perpendicular to the line
        p.rotate2D(Const.one_degree / 20, center);

        const ln = new Group(p, perpend(p));
        const distFromMouse = Math.abs(Line.distanceFromPt(ln, center));

        if (distFromMouse > 100) {
          if (p.brightness < 0.3) p.brightness += 0.015;
        } else {
          if (p.brightness > 0.1) p.brightness -= 0.01;
        }
        const color = "rgba(136,238,223," + p.brightness + ")";

        form.strokeOnly(color, 1).line(ln);
        form.fillOnly(["#88eedf99"]).point(p, 1);
      });
    },
    [pts]
  );

  const handleResize = useCallback(
    (space) => {
      const points = [];
      Create.distributeRandom(space.innerBound, 30).forEach((p, i) => {
        p.brightness = 0.5;
        points.push(p.rotate2D(0.2));
      });

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
