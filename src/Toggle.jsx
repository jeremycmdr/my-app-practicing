import React, { useState } from "react";
import "./Toggle.css";

const Toggle = (props) => {
  const [isActive, setIsActive] = useState(false);

  const toggleHandler = () => {
    setIsActive(!isActive);
    props.setToggleActive(!isActive);
  };

  return (
    <div
      className={`toggle ${isActive ? "active" : ""}`}
      onClick={toggleHandler}
    >
      <div className="slider"></div>
    </div>
  );
};

export default Toggle;
