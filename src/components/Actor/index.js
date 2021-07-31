import React from "react";
import { Sprite } from "../Sprite";

const Actor = ({ sprite, data, step = 0, dir = 0, position }) => {
  const { h, w } = data;
  return (
    <Sprite
      data={{
        x: step * w,
        y: dir * h,
        h,
        w,
      }}
      img={sprite}
      position={position}
    />
  );
};

export default Actor;
