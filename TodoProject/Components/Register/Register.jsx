import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Register/Register.css";

function Register() {
  const defaultFormData = {
    fname: "",
    lname: "",
    username: "",
    gender: "",
    role: "",
    address: "",
    email: "",
    pass: "",
    repass: "",
  };

  const [formData, setFormData] = useState(defaultFormData);

  const handleOnChange = (e) => {
    var name = e.target.name;
    var val = e.target.value;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: val,
      };
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (formData.pass !== formData.repass) {
      alert("Password does not match");
    } else {
      console.log(formData);
      setFormData(defaultFormData);
    }
  };
  return (
    <div className="main-div">
      <div className="login-form">
        <div className="title">Register</div>
        <label>Username:</label>
        <input
          type="text"
          required
          name="username"
          size="15"
          onChange={handleOnChange}
          value={formData.username}
          placeholder="Enter Username"
        />
        <label>Gender:</label>
        Male :
        <input
          type="radio"
          name="gender"
          onChange={handleOnChange}
          value="Male"
        />{" "}
         Female:
        <input
          type="radio"
          name="gender"
          onChange={handleOnChange}
          value="Female"
        />{" "}
        Email:
        <input
          type="email"
          required
          id="email"
          name="email"
          onChange={handleOnChange}
          value={formData.email}
          placeholder="Enter Email"
        />{" "}
        Password:
        <input
          type="Password"
          required
          id="pass"
          name="pass"
          onChange={handleOnChange}
          value={formData.pass}
          placeholder="Enter Password"
        />{" "}
        Re-type password:
        <input
          type="Password"
          required
          id="repass"
          name="repass"
          onChange={handleOnChange}
          value={formData.repass}
          placeholder="Enter Password Again"
        />{" "}
        <button
          onClick={handleOnSubmit}
          name="submit"
          value="Login"
          className="btn btn-primary"
        >
          Submit
        </button>
        <Link href="http://localhost:3000/login"> Click here if already register</Link>
      </div>
    </div>
  );
}

export default Register;
