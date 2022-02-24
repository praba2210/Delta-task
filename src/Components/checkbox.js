import React from "react";

const Checkbox = ({ id, type, handleClick, isChecked }) => {
  return (
    <input
      id={id}
      type={type}
      onChange={handleClick}
      checked={isChecked}
    />
  );
};

export default Checkbox;