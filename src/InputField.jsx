import React from "react";

const InputField = ({fieldName, placeholder, className, onChange}) => {
  return (
    <>
      <label>
        {fieldName}
        <input
          type="number"
          placeholder={placeholder}
          className={className}
          onChange={onChange}
          required
        />
      </label>
    </>
  );
};

export default InputField;
