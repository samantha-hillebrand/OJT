import React from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

const Logout = () => {
  // const navigate = useNavigate();
  const logoutHandler = () => {
    console.log("hi");
    axios.get("http://localhost:8800/logout").then((response) => {
      localStorage.setItem("user", null);
      // navigate(response.data.redirectUrl);
    });
  };
  return (
    <span
      className="dropdown-item bg-danger-soft-hover"
      onClick={logoutHandler}
    >
      <BiLogOut className="m-2" />
      Sign Out
    </span>
  );
};
export default Logout;
