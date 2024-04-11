import React, { useState } from "react";
import "./Toggle.css";

const Toggle = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    adress: "",
    zipCode: "",
  });

  const toggleHandler = () => {
    setIsActive(!isActive);
    props.setToggleActive(!isActive);
  };

  const handleFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //can use like this too
  /* const handleFormChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }; */

  //can use like this too
  /* const handleFormChange = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }; */

  return (
    <>
      <div
        className={`toggle ${isActive ? "active" : ""}`}
        onClick={toggleHandler}
      >
        <div className="slider"></div>
      </div>
      <div>
        <form>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="form_input"
            onChange={handleFormChange}
          ></input>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="form_input"
            onChange={handleFormChange}
          ></input>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="form_input"
            onChange={handleFormChange}
          ></input>
          <input
            type="text"
            name="adress"
            placeholder="Adress"
            className="form_input"
            onChange={handleFormChange}
          ></input>
          <input
            type="text"
            name="zipCode"
            placeholder="Zip Code"
            className="form_input"
            onChange={handleFormChange}
          ></input>
        </form>
      </div>
    </>
  );
};

export default Toggle;
