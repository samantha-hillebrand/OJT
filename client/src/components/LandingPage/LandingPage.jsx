import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./LandingPage.css";

const LandingPage = ({ userInfo, setUserInfo }) => {
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8800/login", userInfo).then((response) => {
      if (response.data.success) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate(response.data.redirectUrl, userInfo);
      } else {
        alert("Invalid Password!");
      }
    });
  };
  return (
    <div className="landingPage">
      <h1 id="tracker">
        On The Job <br />
        Tracker
      </h1>
      <form id="landing-Page">
        <h1 id="signin">Sign In</h1>
        <h6 id="email">Email Address</h6>
        <input
          onClick={handleChange}
          type="text"
          name="email"
          id="reg-email"
          required
        ></input>
        <br />
        <h6 id="emailaddress">Password</h6>
        <input
          onClick={handleChange}
          className="input"
          id="reg-pass"
          type="password"
          name="password"
          required
        ></input>
        <br />
        {/* <h6 id='email'>Confirm Password</h6>
                <input className="input" id='con-pass' type="password" placeholder='   Confirm' name='confirm' required></input>                <br /> */}
        <button id="submit" name="submit" type="submit" onClick={submitHandler}>
          Sign In
        </button>
        <br />
        <Link to="/register" id="newUser">
          <h4 id= 'user'>New User?</h4>
        </Link>
      </form>
    </div>
  );
};

export default LandingPage;
