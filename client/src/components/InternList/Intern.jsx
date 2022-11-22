import React from "react";
import "./Intern.css";

const Intern = ({ intern, index }) => {
  const active = "lozenge bg-green-400 text-white text-center";
  const notActive = "lozenge bg-red-400 text-white text-center";
  const pending = "lozenge bg-yellow-400 text-white text-center";
  return (
    <tr
      onClick={(e) => console.log(e.target)}
      className=""
      style={{ cursor: "pointer" }}
    >
      <td>
        <div className="avatar avatar-circle avatar-sm me-2">
          {intern.firstName[0] + intern.lastName[0]}
        </div>
        <span className="fw-bold">{`${intern.firstName} ${intern.lastName}`}</span>
      </td>
      <td className="email">{intern.personalEmail}</td>
      <td className="id">{intern.prisonRelease}</td>
      <td className="date">{intern.banyanStartDate}</td>
      <td className="status">
        <span
          className={
            intern.status === "Active"
              ? active
              : intern.status === "Pending"
              ? pending
              : notActive
          }
          style={{ width: "4rem" }}
        >
          {intern.status}
        </span>
      </td>
    </tr>
  );
};

export default Intern;
