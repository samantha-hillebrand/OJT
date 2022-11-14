import React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";
import handleChange from "../../actions/handleChange";
import { useState } from "react";
// import { login } from "../../../../backend/controllers/userControllers";

const Register = () => {
  const [inputs, setInputs] = useState({})
  // const navigate = useNavigate();
  const changeHandler = (e) => {
    e.preventDefault();
    setInputs(handleChange(inputs, e))
  };
  console.log("inputs", inputs);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("click", inputs);
    if (inputs.password !== inputs.confirmpsw) {
      alert("The passwords do not match!");
    } else {
      console.log("help");
      axios.post("http://localhost:8800/signup", inputs).then((response) => {
        console.log("response",response);
        if (response.data.success) {
          console.log("fuck yeah");
          // localStorage.setItem("user", JSON.stringify(response.data.user));
          // navigate(response.data.redirectUrl, inputs);
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
          onChange={changeHandler}
          type="text"
          name="firstname"
          id="first-name"
          required
        />
        <br />
        <h3 className="tags">Last Name</h3>
        <input
          onChange={changeHandler}
          type="text"
          name="lastname"
          id="last-name"
          required
        />
        <br />
        <h3 className="tags">Email</h3>
        <input
          onChange={changeHandler}
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
          onChange={changeHandler}
          type="password"
          name="password"
          required
        />
        <br />
        <h3 className="tags">Confirm Password</h3>
        <input
          className="input"
          id="con-pass"
          onChange={changeHandler}
          type="password"
          name="confirmpsw"
          required
        />
        <br />
        <button id="submit2" name="submit" type="submit">
          Register
          {/* <Link to="/main">Register</Link> */}
        </button>
      </form>
    </div>
  );
};

export default Register;
