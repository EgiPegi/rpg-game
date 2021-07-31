import React from "react";

export const Sprite = ({ data, img, position }) => {
  const { w, h, x, y } = data;
  // console.log(x, y);
  return (
    <div
      style={{
        // display: "inline-block",
        position: "absolute",
        top: position.y,
        left: position.x,
        width: w,
        height: h,
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: `-${x}px -${y}px`,
      }}
    />
  );
};
