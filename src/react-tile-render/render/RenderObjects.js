import React, { Children } from "react";

export default function RenderObjects({ children, top, left, together }) {
  return !together ? (
    <div style={{ position: "absolute", top, left }}>{children}</div>
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
