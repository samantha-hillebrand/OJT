import React from "react";
import Logo from "../../assets/cropped-BL_LOGO-201x26.png";
import "./Nav.css";
// import Modal from "../Modal/Modal";
import Logout from "../Logout/Logout";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      {/* <Modal /> */}
      <div className="container-fluid">
        <div className="navbar-brand">
          <img src={Logo} alt="banyan labs" className="img-fluid m-2" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto mt-2">
            <li className="nav-item mb-2">
              <button
                className="createInternBtn"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                Create User
              </button>
            </li>
            <li className="nav-item ms-3">
              <div className="dropdown">
                <span
                  className="avatar text-bg-secondary fw-bolder"
                  id="profileDropdown"
                  role="button"
                  data-bs-auto-close="outside"
                  data-bs-display="static"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  RS
                </span>
                <ul
                  className="dropdown-menu dropdown-menu-end shadow pt-3"
                  aria-labelledby="profileDropdown"
                >
                  <li className="px-3 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar me-3">
                        <span className="avatar shadow text-bg-secondary fw-bolder">
                          RS
                        </span>
                      </div>
                      <div className="p-2">
                        <span className="h6">Randall Nelson</span>
                        <p className="small m-0">randalln559@gmail.com</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <span className="dropdown-item bg-danger-soft-hover">
                      <Logout />
                    </span>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
