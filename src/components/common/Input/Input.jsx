import React from "react";
import "./Input.css";
function Input({ type, value, onChange, placeholder }) {
  return (
    <>
      <div className="myDiv">
        <input
          type={type}
          value={value}
          onChange={onChange}
          className="mySearchBar"
          placeholder={placeholder}
        />
      </div>
    </>
  );
}

export default Input;
