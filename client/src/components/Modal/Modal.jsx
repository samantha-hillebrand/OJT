import React, { useState } from "react";
import ModalStates from "./ModalStates";
import ModalTes from "./ModalTes";
import ModalCaseMan from "./ModalCaseMan";
import { InternsContext } from "../Main/Main";
import axios from "axios";
import { useContext } from "react";

const Modal = () => {
  const { interns, setInterns } = useContext(InternsContext);
  const [inputs, setInputs] = useState({});
  const [graduatedValue, graduatedInputProps] =
    useRadioButtons("graduatedPersevere");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "telNumber") {
      if (
        e.nativeEvent.data >= 0 &&
        e.nativeEvent.data <= 9 &&
        value.length <= 10
      ) {
        setInputs((values) => ({ ...values, [name]: value }));
      }
    } else setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8800/newIntern", inputs)
      .then((res) => {
        console.log("res", res);
        setInterns(prev => [...prev, inputs])
      })
      .catch((err) => console.log(err));
  };

  function useRadioButtons(name) {
    const [value, setState] = useState(null);

    const handleInputChange = (e) => {
      setState(e.target.value);
    };

    const inputProps = {
      name,
      id: "radio_one",
      className: "form-check-input",
      type: "radio",
      onChange: handleInputChange,
    };

    return [value, inputProps];
  }

  // console.log("inputs", inputs);

  return (
    <div className="modal" id="myModal">
      <div className="modal-lg modal-dialog modal-dialog-scrollable">
        <div className="modal-content" style={{ height: "75vh" }}>
          <div className="modal-header">
            <h4 className="modal-title">OJT Tracker Candidate Form</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 mt-3">
                <label htmlFor="name" className="form-label">
                  Candidate:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="First Name"
                  name="firstName"
                  onChange={handleChange}
                  required
                />
                <br />
                <input
                  type="text"
                  className="form-control mb-2"
                  id="lastName"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="status" className="form-label">
                  Status:
                </label>
                <select
                  className="form-select mb-2"
                  name="status"
                  onChange={handleChange}
                  defaultValue={"DEFAULT"}
                >
                  <option disabled value={"DEFAULT"}>
                    --Please select an option--
                  </option>
                  <option name="status_active" id="status_active">
                    Active
                  </option>
                  <option name="status_not_active" id="status_not_active">
                    Not Active
                  </option>
                  <option name="status_pending" id="status_pending">
                    Pending
                  </option>
                </select>
                <div onChange={handleChange}>
                  <label htmlFor="graduated" className="form-label">
                    Graduated:
                  </label>
                  <div className="form-check">
                    <input
                      value="Yes"
                      defaultChecked={graduatedValue === "Yes"}
                      {...graduatedInputProps}
                    />
                    <label className="form-check-label" htmlFor="radio_one">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="radio_two">
                      <input
                        value="No"
                        defaultChecked={graduatedValue === "Yes"}
                        {...graduatedInputProps}
                      />
                      No
                    </label>
                  </div>
                </div>
                <label htmlFor="release" className="form-label">
                  Prison Release Date:
                </label>
                <div className="mb-3">
                  <input
                    id="datetime"
                    type="date"
                    name="prisonRelease"
                    className="form-control"
                    onChange={handleChange}
                    required
                  />
                </div>
                <label htmlFor="program" className="form-label">
                  Program Start Date:
                </label>
                <div className="mb-3">
                  <input
                    id="datetime"
                    type="date"
                    name="programStartDate"
                    className="form-control"
                    onChange={handleChange}
                    required
                  />
                </div>
                <label htmlFor="banyan" className="form-label">
                  Banyan Start Date:
                </label>
                <div className="mb-3">
                  <input
                    id="datetime"
                    type="date"
                    name="banyanStartDate"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
                <label htmlFor="banyanEndDate" className="form-label">
                  End Date:
                </label>
                <div className="mb-3">
                  <input
                    id="datetime"
                    type="date"
                    name="banyanEndDate"
                    className="form-control"
                    required
                    onChange={handleChange}
                  />
                </div>
                <label htmlFor="dob" className="form-label">
                  Date of Birth:
                </label>
                <div className="mb-3">
                  <input
                    id="datetime"
                    type="date"
                    name="dob"
                    className="form-control"
                    onChange={handleChange}
                    required
                  />
                </div>
                <label htmlFor="number" className="form-label">
                  Phone Number:
                </label>
                <input
                  id="number"
                  type="tel"
                  className="form-control"
                  placeholder="Number"
                  name="telNumber"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                  value={inputs.telNumber || ""}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="stateOfResidence" className="form-label">
                  State Of Residence:
                </label>
                <select
                  className="form-select"
                  defaultValue={"DEFAULT"}
                  name="stateOfResidence"
                  onChange={handleChange}
                  required
                >
                  <option disabled value={"DEFAULT"}>
                    --State Of Residence--
                  </option>
                  {ModalStates.map((state, index) => (
                    <option key={index} value={state} name={state}>
                      {state}
                    </option>
                  ))}
                </select>
                <label htmlFor="address" className="form-label">
                  Address:
                </label>
                <input
                  id="address"
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  name="address"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="personalEmail" className="form-label">
                  Personal Email:
                </label>
                <input
                  id="personalEmail"
                  type="email"
                  className="form-control"
                  placeholder="Personal email"
                  name="personalEmail"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="banyanEmail" className="form-label">
                  Banyan Email:
                </label>
                <input
                  id="banyanEmail"
                  type="email"
                  className="form-control"
                  placeholder="Banyan email"
                  name="banyanEmail"
                  onChange={handleChange}
                  required
                />
                {/* need to make a select with options to click */}
                <label htmlFor="caseManager" className="form-label">
                  Case Manager:
                </label>
                <select
                  id="caseManager"
                  className="form-select"
                  name="caseManager"
                  defaultValue={"DEFAULT"}
                  onChange={handleChange}
                  required
                >
                  <option disabled value={"DEFAULT"}>
                    --Case Manager--
                  </option>
                  {ModalCaseMan.map((caseMan, index) => (
                    <option key={index} value={caseMan} name={caseMan}>
                      {caseMan}
                    </option>
                  ))}
                </select>
                <label htmlFor="tes" className="form-label">
                  TES:
                </label>
                <select
                  className="form-select"
                  defaultValue={"DEFAULT"}
                  name="tes"
                  onChange={handleChange}
                >
                  <option disabled value={"DEFAULT"}>
                    --Technical Employment Specialist--
                  </option>
                  {ModalTes.map((tes, index) => (
                    <option key={index} value={tes} name={tes}>
                      {tes}
                    </option>
                  ))}
                </select>
                <label htmlFor="workBuddy" className="form-label">
                  Work Buddy:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="workBuddy"
                  placeholder="Work Buddy Name"
                  name="workBuddy"
                  onChange={handleChange}
                  required
                />
                {/* rubric link goes where?*/}
                <label htmlFor="rubric" className="form-label">
                  Rubric:
                </label>
                <br />
                <a href="#" target="#" name="rubric" id="rubric">
                  Rubric
                </a>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>

          {/* Modal footer */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
