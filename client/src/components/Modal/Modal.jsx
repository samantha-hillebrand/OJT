import React, { useState } from "react";
import ModalStates from "./ModalStates";
import ModalTes from "./ModalTes";


const Modal = () => {
  const [inputs, setInputs] = useState({});
  const [graduatedValue, graduatedInputProps] =
    useRadioButtons("graduatedPersevere");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "telNumber") {
      console.log(e.nativeEvent)
      if (e.nativeEvent.data >= 0 && e.nativeEvent.data <= 9 && value.length <= 10) {
        setInputs((values) => ({ ...values, [name]: value }));
      }
    }
    else setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <div className="modal-content" style={{ height: "65vh" }}>
          <div className="modal-header">
            <h4 className="modal-title">OJT Tracker Candidate Form</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3 mt-3">
                <label htmlFor="name" className="form-label">
                  Candidate:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  placeholder="First Name"
                  name="firstname"
                  onChange={handleChange}
                  required
                />
                <br />
                <input
                  type="text"
                  className="form-control mb-2"
                  id="lastname"
                  placeholder="Last Name"
                  name="lastname"
                  onChange={handleChange}
                  required
                />
                {/* is this how u add name to an option? */}
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
                {/* is this how you add name to radio btns? */}
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
                <label htmlFor="enddate" className="form-label">
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
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  value={inputs.telNumber || ""}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="state" className="form-label">
                  State From:
                </label>
                {/* name and id needed- map thru the states*/}
                <select className="form-select" defaultValue={"DEFAULT"}>
                  <option name="state" disabled value={"DEFAULT"}>
                    --State From--
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
                <label htmlFor="email" className="form-label">
                  Personal Email:
                </label>
                <input
                  id="persemail"
                  type="email"
                  className="form-control"
                  placeholder="Personal email"
                  name="persemail"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email" className="form-label">
                  Banyan Email:
                </label>
                <input
                  id="banyanemail"
                  type="email"
                  className="form-control"
                  placeholder="Banyan email"
                  name="banyanemail"
                  onChange={handleChange}
                  required
                />
                {/* need to make a select with options to click */}
                <label htmlFor="case" className="form-label">
                  Case Manager:
                </label>
                <input
                  id="case"
                  type="text"
                  className="form-control"
                  placeholder="Case Manager Name"
                  name="case"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="tes" className="form-label">
                  TES:
                </label>
                {/* <input
                  id="tes"
                  type="text"
                  className="form-control"
                  placeholder="TES Name"
                  name="tes"
                  onChange={handleChange}
                  required
                /> */}
                <select className="form-select" defaultValue={"DEFAULT"}>
                  <option name="tes" disabled value={"DEFAULT"}>
                    --Technical Employment Specialist--
                  </option>
                  {ModalTes.map((tes, index) => (
                    <option key={index} value={tes} name={tes}>
                      {tes}
                    </option>
                  ))}
                </select>
                <label htmlFor="workbuddy" className="form-label">
                  Work Buddy:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="workbuddy"
                  placeholder="Work Buddy Name"
                  name="workbuddy"
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
