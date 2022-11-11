import React from "react";
// import CandidateModel from "../../../../backend/models/candidateModel";

const Modal = () => {
  // handleChange and submitHandler for all inputs
  return (
    <div>
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
                  <label htmlFor="name" className="form-label">
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
                  <label htmlFor="status" className="form-label">
                    Status:
                  </label>
                  <select className="form-select">
                    <option>---</option>
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
                  <label htmlFor="graduated" className="form-label">
                    Graduated:
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radio_one"
                      id="radio_one"
                    />
                    <label className="form-check-label" htmlFor="radio_one">
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
                    <label className="form-check-label" htmlFor="radio_two">
                      No
                    </label>
                  </div>

                  <label htmlFor="release" className="form-label">
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
                  <label htmlFor="program" className="form-label">
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
                  <label htmlFor="banyan" className="form-label">
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
                  <label htmlFor="enddate" className="form-label">
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
                  <label htmlFor="dob" className="form-label">
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
                  <label htmlFor="number" className="form-label">
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
                  <label htmlFor="state" className="form-label">
                    State From:
                  </label>
                  {/* name and id needed- map thru the states*/}
                  <select className="form-select">
                    <option value="q" name="state">
                      State From
                    </option>
                    <option value="q" name="1">
                      AL
                    </option>
                    <option value="q" name="2">
                      AK
                    </option>
                    <option value="q" name="3">
                      AZ
                    </option>
                    <option value="q" name="4">
                      AR
                    </option>
                    <option value="q" name="5">
                      CA
                    </option>
                    <option value="q" name="6">
                      CO
                    </option>
                    <option value="q" name="7">
                      CT
                    </option>
                    <option value="q" name="8">
                      DE
                    </option>
                    <option value="q" name="9">
                      FL
                    </option>
                    <option value="q" name="10">
                      GA
                    </option>
                    <option value="q" name="11">
                      HI
                    </option>
                    <option value="q" name="12">
                      ID
                    </option>
                    <option value="q" name="13">
                      IL
                    </option>
                    <option value="q" name="14">
                      IN
                    </option>
                    <option value="q" name="15">
                      IA
                    </option>
                    <option value="q" name="16">
                      KS
                    </option>
                    <option value="q" name="17">
                      KY
                    </option>
                    <option value="q" name="18">
                      LA
                    </option>
                    <option value="q" name="19">
                      ME
                    </option>
                    <option value="q" name="20">
                      MD
                    </option>
                    <option value="q" name="21">
                      MA
                    </option>
                    <option value="q" name="22">
                      MI
                    </option>
                    <option value="q" name="23">
                      MN
                    </option>
                    <option value="q" name="24">
                      MS
                    </option>
                    <option value="q" name="25">
                      MO
                    </option>
                    <option value="q" name="26">
                      MT
                    </option>
                    <option value="q" name="27">
                      NE
                    </option>
                    <option value="q" name="28">
                      NV
                    </option>
                    <option value="q" name="29">
                      NH
                    </option>
                    <option value="q" name="30">
                      NJ
                    </option>
                    <option value="q" name="31">
                      NM
                    </option>
                    <option value="q" name="32">
                      NY
                    </option>
                    <option value="q" name="33">
                      NC
                    </option>
                    <option value="q" name="34">
                      ND
                    </option>
                    <option value="q" name="35">
                      OH
                    </option>
                    <option value="q" name="36">
                      OK
                    </option>
                    <option value="q" name="37">
                      OR
                    </option>
                    <option value="q" name="38">
                      PA
                    </option>
                    <option value="q" name="39">
                      RI
                    </option>
                    <option value="q" name="40">
                      SC
                    </option>
                    <option value="q" name="41">
                      SD
                    </option>
                    <option value="q" name="42">
                      TN
                    </option>
                    <option value="q" name="43">
                      TX
                    </option>
                    <option value="q" name="44">
                      UT
                    </option>
                    <option value="q" name="45">
                      VT
                    </option>
                    <option value="q" name="46">
                      VA
                    </option>
                    <option value="q" name="47">
                      WA
                    </option>
                    <option value="q" name="48">
                      WV
                    </option>
                    <option value="q" name="49">
                      WI
                    </option>
                    <option value="q" name="50">
                      WY
                    </option>
                  </select>

                  <label htmlFor="address" className="form-label">
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
                  <label htmlFor="email" className="form-label">
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
                  <label htmlFor="email" className="form-label">
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
                  <label htmlFor="case" className="form-label">
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
                  <label htmlFor="tes" className="form-label">
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
    </div>
  );
};

export default Modal;
