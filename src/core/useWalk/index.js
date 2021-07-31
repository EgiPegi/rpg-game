import { useState } from "react";

export const useWalk = (maxSteps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dir, setDir] = useState(0);
  const [step, setStep] = useState(0);

  const direction = {
    down: 0,
    left: 1,
    right: 2,
    up: 3,
  };

  const jarakLangkah = 16;

  const gerak = {
    down: { x: 0, y: jarakLangkah },
    left: { x: -jarakLangkah, y: 0 },
    right: { x: jarakLangkah, y: 0 },
    up: { x: 0, y: -jarakLangkah },
  };

  const walk = (d) => {
    // console.log(direction[d]);
    if (direction[d] !== undefined) {
      setDir((prev) => {
        if (direction[d] === prev) {
          move(d);
        }
        return direction[d];
      });
      setStep((prev) => (prev < maxSteps - 1 ? prev + 1 : 0));
    } else {
      console.log("gunakan Arrow Keys");
    }
  };

  const move = (d) => {
    setPosition((prev) => ({
      x: prev.x + gerak[d].x,
      y: prev.y + gerak[d].y,
    }));
  };

  return { dir, step, walk, position };
};
