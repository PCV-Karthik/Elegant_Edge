import React from "react";
import { useState } from "react";

const Form = () => {
  const [errors, setErrors] = useState(["", ""]);
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");

  const handleClick = () => {
    const phoneNumRegex = /^[0-9]{10}$/;
    if (phoneNum.trim() === "" || !phoneNumRegex.test(phoneNum.trim())) {
        setErrors([errors[0], "Phone number is not valid"]);
        return;
    }

    if (errors[0] === "" && errors[1] === "") {
      setErrors(["", ""]);
      let url =
        "https://wa.me/919999999999?text=Name:%20" +
        name +
        "%0APhone%20Number:%20" +
        phoneNum;
      window.open(url, "_blank").focus();
    }
  };

  return (
    <>
      <div className="form">
        <div className="wrapper">
          <h3 className="title">Designs for Every Budget</h3>
          <div className="inputField flex-col">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              onChange={(e) => {
                if (e.target.value.trim() === "") {
                  setErrors(["Name cannot be empty", errors[1]]);
                } else {
                  setErrors(["", errors[1]]);
                }
                setName(e.target.value.trim());
              }}
            />
            <div className="error">{errors[0]}</div>
          </div>
          <div className="inputField flex-col">
            <input
              type="text"
              name="phoneNum"
              id="phoneNum"
              placeholder="Phone Number"
              maxLength={10}
              onChange={(e) => {
                if (e.target.value === "") {
                  setErrors([errors[0], "Phone number cannot be empty"]);
                } else {
                  setErrors([errors[0], ""]);
                }
                setPhoneNum(e.target.value);
              }}
            />
            <div className="error">{errors[1]}</div>
          </div>
          <button className="btn" onClick={handleClick}>
            Get Free Quote
          </button>
          <div className="message">
            By submitting this form, you agree to the{" "}
            <span className="red">privacy policy</span> &{" "}
            <span className="red">terms and conditions</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
