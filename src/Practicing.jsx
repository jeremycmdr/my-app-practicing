import React, { useState } from "react";
//import "./Practicing.css";
import Toggle from "./Toggle";

const Practicing = () => {
  const [toggleActiv, setToggleActive] = useState(false);

  return (
    <div style={{ margin: "10vh" }}>
      <Toggle setToggleActive={setToggleActive}></Toggle>
    </div>
  );
};

export default Practicing;
