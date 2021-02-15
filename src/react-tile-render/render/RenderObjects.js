import React, { Children } from "react";

function RenderObjects({ children, top, left, together, onClick }) {
  return !together ? (
    <div style={{ position: "absolute", top, left }} onClick={onClick}>
      {children}
    </div>
  ) : (
    Children.toArray(children).map((child, i) => {
      return (
        <div style={{ position: "absolute", top, left }} key={i}>
          {child}
        </div>
      );
    })
  );
}

RenderObjects.displayName = "RenderObjects";
export default RenderObjects;
