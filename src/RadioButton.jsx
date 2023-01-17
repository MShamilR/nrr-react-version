import React from "react";

const RadioButton = ({ label, onChange, checked }) => {
  return (
    <label>
      <input type="radio" checked={checked} onChange={onChange}/>
      {label}
    </label>
  );
};

export default RadioButton;
