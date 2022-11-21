import React, { useContext } from "react";
import Intern from "./Intern";
import { InternsContext } from "../Main/Main";

const InternList = () => {
  const { interns } = useContext(InternsContext);
  return (
    <div className="row">
      <div className="col-12">
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
                {interns.map((intern, index) => (
                  <Intern key={index} intern={intern} index={index} />
                ))}
              </tbody>
            </table>
          </div>

          <div className="card-footer">
            <div className="d-flex justify-content-between align-items-center p-2">
              <div className="me-5 text-secondary small">
                Showing: {interns.length}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col border"></div> */}
    </div>
  );
};

export default InternList;
