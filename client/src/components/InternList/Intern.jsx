import React from "react";

const Intern = ({ intern, index }) => {
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
      <td className="email">{intern.email}</td>
      <td className="id">{intern.release}</td>
      <td className="date">{intern.start}</td>
      <td className="status">
        <span
          className="lozenge bg-green-400 text-white text-center"
          style={{ width: "4rem" }}
        >
          {intern.status}
        </span>
      </td>
    </tr>
  );
};

export default Intern;