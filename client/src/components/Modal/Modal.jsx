import React from "react";
import CandidateModel from "../../../../backend/models/candidateModel";

const Modal = () => {
  // handleChange and submitHandler for all inputs
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
      >
        Create User
      </button>
      <div className="modal" id="myModal">
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
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
                  <label for="name" className="form-label">
                    Candidate:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    placeholder="First Name"
                    name="firstname"
                    required
                  />
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    placeholder="Last Name"
                    name="lastname"
                    required
                  />
                  {/* is this how u add name to an option? */}
                  <label for="status" className="form-label">
                    Status:
                  </label>
                  <select className="form-select">
                    <option selected>---</option>
                    <option name="status_active" id="status_active">
                      Active
                    </option>
                    <option
                      name="status_not_active"
                      id="status_not_active"
                    >
                      Not Active
                    </option>
                    <option name="status_pending" id="status_pending">
                      Pending
                    </option>
                  </select>

                  {/* is this how you add name to radio btns? */}
                  <label for="graduated" className="form-label">
                    Graduated:
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radio_one"
                      id="radio_one"
                    />
                    <label className="form-check-label" for="radio_one">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radio_two"
                      id="radio_two"
                    />
                    <label className="form-check-label" for="radio_two">
                      No
                    </label>
                  </div>

                  <label for="release" className="form-label">
                    Prison Release Date:
                  </label>
                  <div className="mb-3">
                    <input
                      type="date"
                      name="release"
                      className="form-control"
                      id="datetime"
                      required
                    />
                  </div>
                  <label for="program" className="form-label">
                    Program Start Date:
                  </label>
                  <div className="mb-3">
                    <input
                      type="date"
                      name="program"
                      className="form-control"
                      id="datetime"
                      required
                    />
                  </div>
                  <label for="banyan" className="form-label">
                    Banyan Start Date:
                  </label>
                  <div className="mb-3">
                    <input
                      type="date"
                      name="banyan"
                      className="form-control"
                      id="datetime"
                    />
                  </div>
                  <label for="enddate" className="form-label">
                    End Date:
                  </label>
                  <div className="mb-3">
                    <input
                      type="date"
                      name="enddate"
                      className="form-control"
                      id="datetime"
                      required
                    />
                  </div>
                  <label for="dob" className="form-label">
                    Date of Birth:
                  </label>
                  <div className="mb-3">
                    <input
                      type="date"
                      name="dob"
                      className="form-control"
                      id="datetime"
                      required
                    />
                  </div>
                  <label for="number" className="form-label">
                    Phone Number:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="number"
                    placeholder="Number"
                    name="number"
                    required
                  />
                  <label for="state" className="form-label">
                    State From:
                  </label>
                  {/* name and id needed- map thru the states*/}
                  <select className="form-select">
                    <option name='state'selected>State From</option>
                    <option name="1">AL</option>
                    <option name="2">AK</option>
                    <option name="3">AZ</option>
                    <option name="4">AR</option>
                    <option name="5">CA</option>
                    <option name="6">CO</option>
                    <option name="7">CT</option>
                    <option name="8">DE</option>
                    <option name="9">FL</option>
                    <option name="10">GA</option>
                    <option name="11">HI</option>
                    <option name="12">ID</option>
                    <option name="13">IL</option>
                    <option name="14">IN</option>
                    <option name="15">IA</option>
                    <option name="16">KS</option>
                    <option name="17">KY</option>
                    <option name="18">LA</option>
                    <option name="19">ME</option>
                    <option name="20">MD</option>
                    <option name="21">MA</option>
                    <option name="22">MI</option>
                    <option name="23">MN</option>
                    <option name="24">MS</option>
                    <option name="25">MO</option>
                    <option name="26">MT</option>
                    <option name="27">NE</option>
                    <option name="28">NV</option>
                    <option name="29">NH</option>
                    <option name="30">NJ</option>
                    <option name="31">NM</option>
                    <option name="32">NY</option>
                    <option name="33">NC</option>
                    <option name="34">ND</option>
                    <option name="35">OH</option>
                    <option name="36">OK</option>
                    <option name="37">OR</option>
                    <option name="38">PA</option>
                    <option name="39">RI</option>
                    <option name="40">SC</option>
                    <option name="41">SD</option>
                    <option name="42">TN</option>
                    <option name="43">TX</option>
                    <option name="44">UT</option>
                    <option name="45">VT</option>
                    <option name="46">VA</option>
                    <option name="47">WA</option>
                    <option name="48">WV</option>
                    <option name="49">WI</option>
                    <option name="50">WY</option>
                  </select>

                  <label for="address" className="form-label">
                    Address:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Address"
                    name="address"
                    required
                  />
                  <label for="email" className="form-label">
                    Personal Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="persemail"
                    placeholder="Personal email"
                    name="persemail"
                    required
                  />
                  <label for="email" className="form-label">
                    Banyan Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="banyanemail"
                    placeholder="Banyan email"
                    name="banyanemail"
                    required
                  />
                  <label for="case" className="form-label">
                    Case Manager:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="case"
                    placeholder="Case Manager Name"
                    name="case"
                    required
                  />
                  <label for="tes" className="form-label">
                    TES:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tes"
                    placeholder="TES Name"
                    name="tes"
                    required
                  />
                  <label for="workbuddy" className="form-label">
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
                  <label for="rubric" className="form-label">
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
    </div>
  );
};

export default Modal;
