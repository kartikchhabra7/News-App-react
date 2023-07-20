import React from "react";
import "./Button.css"
function Button({ href, target, className }) {
  return (
    <>
      <a href={href} target={target} className={className}>Read More</a>
    </>
  );
}

export default Button;
