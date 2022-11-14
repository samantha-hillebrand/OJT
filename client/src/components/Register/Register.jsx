import React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

const Register = () => {

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
    console.log("click");
    e.preventDefault();
    if (userInfo.password !== userInfo.confirm) {
      alert("The passwords do not match!");
    } else {
      axios.post("http://localhost:8800/signup", userInfo).then((response) => {
        if (response.data.success) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
          navigate(response.data.redirectUrl, userInfo);
        } else {
          console.log(response.data);
        }
      });
    }
  };
  return (
    <div id="register-div">
      <h1 id="ojt">
        On The Job <br />
        Tracker
      </h1>
      <form id="registerForm" onSubmit={submitHandler}>
        <h1 id="reg-here">New User</h1>
        <h3 className="tags">First Name</h3>
        <input
          onClick={handleChange}
          type="text"
          name="firstname"
          id="first-name"
          required
        />
        <br />
        <h3 className="tags">Last Name</h3>
        <input
          onClick={handleChange}
          type="text"
          name="lastname"
          id="last-name"
          required
        />
        <br />
        <h3 className="tags">Email</h3>
        <input
          onClick={handleChange}
          type="text"
          name="email"
          id="email"
          required
        />
        <br />
        <h3 className="tags">Password</h3>
        <input
          className="input"
          id="reg-pass"
          onClick={handleChange}
          type="password"
          name="password"
          required
        />
        <br />
        <h3 className="tags">Confirm Password</h3>
        <input
          className="input"
          id="con-pass"
          onClick={handleChange}
          type="password"
          name="confirm"
          required
        />
        <br />
        <button id="submit2" name="submit" type="submit">
          <Link to="/main">Register</Link>
        </button>
      </form>
    </div>
  );
};

export default Register;
