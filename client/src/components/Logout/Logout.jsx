import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Logout.css";

const Logout = () => {
  const navigate = useNavigate();
  const logoutHandler = (e) => {
    e.preventDefault();
    axios.get("http://localhost:8800/logout").then((response) => {
      localStorage.setItem("user", null);
      navigate(response.data.redirectUrl);
    });
  };
  return (
    <div class="container">
      <button className="nav-link" onClick={logoutHandler} href="#">
        Logout
      </button>
    </div>
  );
};
export default Logout;
