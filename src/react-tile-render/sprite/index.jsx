import React from "react";
// import m1 from "./m1.png";

export default function Sprite({
  image,
  data,
  children,
  onClick,
  hover,
  text,
  ...props
}) {
  const { y, x, h, w } = data;
  return (
    <>
      <div
        style={{
          height: `${h}px`,
          width: `${w}px`,
          backgroundImage: "url(" + image + ")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: `-${x}px -${y}px`,
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxSizing: "border-box",
          ...props.style,
        }}
        onClick={onClick}
        className={`${hover && "sprite-hover"}`}
      >
        {text && <p>{text}</p>}
      </div>
      {children}
    </>
  );
}
