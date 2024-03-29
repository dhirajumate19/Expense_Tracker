import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginComponent.css";
import Authentication from "../Authentication.jsx";
const LoginComponent = () => {
  const navigate = useNavigate();
  
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const ChangeHandler = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
    // console.log(value);
  };
  const onSubmit = () => {
    // console.log("click hai");
    if (data.username === "dhiraju" && data.password === "12345") {
      Authentication.SavingUserDetail(data.username,data.password);
      navigate("/home");
    } else {
      console.log("not accpeted");
    }
  };
  return (
    <div className="main-div">
      <div className="login-form">
        <div className="title">Login</div>
        Username:{" "}
        <input
          type="text"
          name="username"
          placeholder="Enter UserName"
          value={data.username}
          onChange={ChangeHandler}
        />
        Password:{" "}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={data.password}
          onChange={ChangeHandler}
        />
        <button onClick={onSubmit}>Login</button>
        <div className="row">
            <div className="col-sm-4 mt-2"></div>
            <div className="col-sm-4 right">
              <a href="http://localhost:3000/register">Not a account! Click here</a>
            </div>
            <div className="col-sm-4 mt-2"></div>
          </div>
      </div>
    </div>
  );
};

export default LoginComponent;
