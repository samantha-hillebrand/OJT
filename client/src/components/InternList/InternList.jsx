import React from "react";
import "./InternList.css";
import Intern from "./Intern";

const info = [
  {
    firstName: "Randall",
    lastName: "Nelson",
    email: "randalln559@gmail.com",
    release: "10.03.2022",
    start: "10.17.2022",
    status: "active",
  },
  {
    firstName: "Samantha",
    lastName: "Hillebrand",
    email: "samanthah@gmail.com",
    release: "09.03.2022",
    start: "09.17.2022",
    status: "active",
  },
  {
    firstName: "Oneida",
    lastName: "Galvez",
    email: "gOneida@gmail.com",
    release: "10.03.2022",
    start: "10.17.2022",
    status: "active",
  },
  {
    firstName: "Vernon",
    lastName: "Henry",
    email: "vernonhgmail.com",
    release: "10.03.2022",
    start: "10.17.2022",
    status: "active",
  },
  {
    firstName: "Howard",
    lastName: "Irreland",
    email: "irrelandh@gmail.com",
    release: "10.03.2022",
    start: "10.17.2022",
    status: "done",
  },
  {
    firstName: "Kevin",
    lastName: "Juarez",
    email: "kevinj@gmail.com",
    release: "12.26.2022",
    start: "1.09.2022",
    status: "prison",
  },
  {
    firstName: "Randall",
    lastName: "Nelson",
    email: "randalln559@gmail.com",
    release: "10.03.2022",
    start: "10.17.2022",
    status: "active",
  },
  {
    firstName: "Samantha",
    lastName: "Hillebrand",
    email: "samanthah@gmail.com",
    release: "09.03.2022",
    start: "09.17.2022",
    status: "active",
  },
  {
    firstName: "Oneida",
    lastName: "Galvez",
    email: "gOneida@gmail.com",
    release: "10.03.2022",
    start: "10.17.2022",
    status: "active",
  },
  {
    firstName: "Vernon",
    lastName: "Henry",
    email: "vernonhgmail.com",
    release: "10.03.2022",
    start: "10.17.2022",
    status: "active",
  },
  {
    firstName: "Howard",
    lastName: "Irreland",
    email: "irrelandh@gmail.com",
    release: "10.03.2022",
    start: "10.17.2022",
    status: "done",
  },
  {
    firstName: "Kevin",
    lastName: "Juarez",
    email: "kevinj@gmail.com",
    release: "12.26.2022",
    start: "1.09.2022",
    status: "prison",
  },
  {
    firstName: "Randall",
    lastName: "Nelson",
    email: "randalln559@gmail.com",
    release: "10.03.2022",
    start: "10.17.2022",
    status: "active",
  },
  {
    firstName: "Samantha",
    lastName: "Hillebrand",
    email: "samanthah@gmail.com",
    release: "09.03.2022",
    start: "09.17.2022",
    status: "active",
  },
  {
    firstName: "Oneida",
    lastName: "Galvez",
    email: "gOneida@gmail.com",
    release: "10.03.2022",
    start: "10.17.2022",
    status: "active",
  },
  {
    firstName: "Vernon",
    lastName: "Henry",
    email: "vernonhgmail.com",
    release: "10.03.2022",
    start: "10.17.2022",
    status: "active",
  },
  {
    firstName: "Howard",
    lastName: "Irreland",
    email: "irrelandh@gmail.com",
    release: "10.03.2022",
    start: "10.17.2022",
    status: "done",
  },
  {
    firstName: "Kevin",
    lastName: "Juarez",
    email: "kevinj@gmail.com",
    release: "12.26.2022",
    start: "1.09.2022",
    status: "prison",
  },
];

const InternList = () => {
  return (
    <div className="row">
      <div className="col-10">
        <div className="card border-0 flex-fill p-2 bg-light" id="users">
          <div className="card-header border-0">
            <h2 className="h4 text-uppercase">Banyan Interns</h2>
          </div>

          <div className="table-responsive">
            <table className="table align-middle table-edge table-hover table-nowrap mb-0">
              <thead>
                <tr>
                  <th>
                    <span className="text-muted">Full name</span>
                  </th>
                  <th>
                    <span className="text-muted">Email</span>
                  </th>
                  <th>
                    <span className="text-muted">Release Date</span>
                  </th>
                  <th>
                    <span className="text-muted">Start Date</span>
                  </th>
                  <th className="w-150px min-w-150px">
                    <span className="text-muted">Status</span>
                  </th>
                </tr>
              </thead>

              <tbody className="list scroll">
                {info.map((intern, index) => (
                  <Intern key={index} intern={intern} index={index} />
                ))}
              </tbody>
            </table>
          </div>

          <div className="card-footer">
            <div className="d-flex justify-content-between align-items-center p-2">
              <div className="me-5 text-secondary small">
                Showing: {info.length}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col border"></div>
    </div>
  );
};

export default InternList;