import React from "react";
import { useKeypress, useWalk } from "../../core";
import Actor from "../Actor";

const Player = ({ chara }) => {
  const { dir, step, walk, position } = useWalk(2);
  const data = {
    w: 32,
    h: 32,
  };
  useKeypress((e) => {
    const dir = e.key.replace("Arrow", "").toLowerCase();
    walk(dir);
    // console.log(dir);
    e.preventDefault();
  });
  return (
    <Actor
      data={data}
      sprite={chara}
      step={step}
      dir={dir}
      position={position}
    />
  );
};

export default Player;
