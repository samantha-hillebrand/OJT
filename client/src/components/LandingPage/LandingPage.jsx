import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./LandingPage.css";
import handleChange from "../../actions/handleChange";

const LandingPage = () => {

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});

  const changeHandler = (e) => setInputs(handleChange(inputs, e));

  const submitHandler = (e) => {
    console.log('HI');
    e.preventDefault();
     axios.get("http://localhost:8800/login", inputs)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   axios.post("http://localhost:8800/login", inputs).then((response) => {
  //     if (response.data.success) {
  //       localStorage.setItem("user", JSON.stringify(response.data.user));
  //       navigate(response.data.redirectUrl, inputs);
  //     } else {
  //       alert("Invalid Password!");
  //     }
  //   });
  // };

  // console.log('inputs', inputs);

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
          onChange={changeHandler}
          type="text"
          name="email"
          id="reg-email"
          required
        ></input>
        <br />
        <h6 id="email">Password</h6>
        <input
          onChange={changeHandler}
          className="input"
          id="reg-pass"
          type="password"
          name="password"
          required
        ></input>
        <br />
        {/* <h6 id='email'>Confirm Password</h6>
                <input className="input" id='con-pass' type="password" placeholder='   Confirm' name='confirm' required></input>                <br /> */}
        <button
          id="submit"
          name="submit"
          type="submit"
          onClick={submitHandler}
        >
          Sign In
        </button>
        <br />
        <Link to="/register" id="newUser">
          <h4>New User?</h4>
        </Link>
      </form>
    </div>
  );
};

export default LandingPage;
