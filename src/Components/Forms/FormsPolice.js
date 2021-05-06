import React from "react";
import { Container } from 'react-bootstrap';
import '../DesignCSS/Forms.css';

export default function FormsPolice() {
  return (
    <div className="police">
    <Container>
   
      <div class="card">
        <div class="card-header">CONTACT AND ATTENDANCE DETAILS</div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="input_id_0">Time paged </label>
              <input
                type="text"
                class="form-control"
                name="input_id_0"
                id="input_id_0"
              />
              <small class="text-muted form-text">
                \ if difference &gt;45 mins, / give reasons bel
              </small>
            </div>

            <div class="form-group">
              <label for="input_id_1">Time of first contact with client</label>
              <input
                type="text"
                class="form-control"
                name="input_id_1"
                id="input_id_1"
              />
              <small class="text-muted form-text">
                \ if difference &gt;45 mins, / give reasons bel
              </small>
            </div>

            <div class="form-group">
              <label>Attendance requested?</label>
              <div>
                <div class="custom-control custom-switch custom-control-inline">
                  <input
                    class="custom-control-input"
                    type="checkbox"
                    name="ic_id_20"
                    id="ic_id_20"
                    value="1"
                    checked
                  />
                  <label class="custom-control-label" for="ic_id_20">
                    Yes
                  </label>
                </div>
                <div class="custom-control custom-switch custom-control-inline">
                  <input
                    class="custom-control-input"
                    type="checkbox"
                    name="ic_id_21"
                    id="ic_id_21"
                    value="2"
                  />
                  <label class="custom-control-label" for="ic_id_21">
                    No
                  </label>
                </div>
              </div>
            </div>

            <div class="form-group">
              <input
                type="text"
                class="form-control form-control-sm"
                name="input_id_22"
                id="input_id_22"
                placeholder="Other "
              />
            </div>

            <div class="form-group">
              <label>Client to be interviewed?</label>
              <div>
                <div class="custom-control custom-switch custom-control-inline">
                  <input
                    class="custom-control-input"
                    type="checkbox"
                    name="ic_id_1"
                    id="ic_id_1"
                    value="1"
                    checked
                  />
                  <label class="custom-control-label" for="ic_id_1">
                    Yes
                  </label>
                </div>
                <div class="custom-control custom-switch custom-control-inline">
                  <input
                    class="custom-control-input"
                    type="checkbox"
                    name="ic_id_2"
                    id="ic_id_2"
                    value="2"
                  />
                  <label class="custom-control-label" for="ic_id_2">
                    No
                  </label>
                </div>
              </div>
            </div>

            <div class="form-group">
              <input
                type="text"
                class="form-control form-control-sm"
                name="input_id_25"
                id="input_id_25"
                placeholder="Other / Additional comments"
              />
              <small class="text-muted form-text">
                Other / If the answer is{" "}
              </small>
            </div>

            <div class="form-group">
              <label>Id parade to take place?</label>
              <div>
                <div class="custom-control custom-switch custom-control-inline">
                  <input
                    class="custom-control-input"
                    type="checkbox"
                    name="ic_id_3"
                    id="ic_id_3"
                    value="1"
                    checked
                  />
                  <label class="custom-control-label" for="ic_id_3">
                    Yes
                  </label>
                </div>
                <div class="custom-control custom-switch custom-control-inline">
                  <input
                    class="custom-control-input"
                    type="checkbox"
                    name="ic_id_4"
                    id="ic_id_4"
                    value="2"
                  />
                  <label class="custom-control-label" for="ic_id_4">
                    No
                  </label>
                </div>
              </div>
            </div>

            <div class="form-group">
              <input
                type="text"
                class="form-control form-control-sm"
                name="input_id_30"
                id="input_id_30"
                placeholder="Other / Additional comments"
              />
              <small class="text-muted form-text">
                If the answer is "Yes" and you did not attend, gives reasons
                here.
              </small>
            </div>

            <div class="form-group">
              <label>Complaint of serious maltreatment?</label>
              <div>
                <div class="custom-control custom-switch custom-control-inline">
                  <input
                    class="custom-control-input"
                    type="checkbox"
                    name="ic_id_5"
                    id="ic_id_5"
                    value="1"
                    checked
                  />
                  <label class="custom-control-label" for="ic_id_5">
                    Yes
                  </label>
                </div>
                <div class="custom-control custom-switch custom-control-inline">
                  <input
                    class="custom-control-input"
                    type="checkbox"
                    name="ic_id_6"
                    id="ic_id_6"
                    value="2"
                  />
                  <label class="custom-control-label" for="ic_id_6">
                    No
                  </label>
                </div>
              </div>
            </div>

            <div class="form-group">
              <input
                type="text"
                class="form-control form-control-sm"
                name="input_id_31"
                id="input_id_31"
                placeholder="Other / Additional comments"
              />
              <small class="text-muted form-text">
                If the answer is "Yes" and you did not attend, gives reasons
                here.
              </small>
            </div>

            <div class="form-group">
              <label>Client is a youth or person at risk?</label>
              <div>
                <div class="custom-control custom-switch custom-control-inline">
                  <input
                    class="custom-control-input"
                    type="checkbox"
                    name="ic_id_7"
                    id="ic_id_7"
                    value="1"
                    checked
                  />
                  <label class="custom-control-label" for="ic_id_7">
                    Yes
                  </label>
                </div>
                <div class="custom-control custom-switch custom-control-inline">
                  <input
                    class="custom-control-input"
                    type="checkbox"
                    name="ic_id_8"
                    id="ic_id_8"
                    value="2"
                  />
                  <label class="custom-control-label" for="ic_id_8">
                    No
                  </label>
                </div>
              </div>
            </div>

            <div class="form-group">
              <input
                type="text"
                class="form-control form-control-sm"
                name="input_id_34"
                id="input_id_34"
                placeholder="Other / Additional comments"
              />
              <small class="text-muted form-text">
                If the answer is "Yes" and you did not attend, gives reasons
                here.
              </small>
            </div>

            <div class="form-group">
              <label for="input_id_3">Time attendance was requested</label>
              <input
                type="text"
                class="form-control"
                name="input_id_3"
                id="input_id_3"
              />
              <small class="text-muted form-text">
                \ if difference &gt;45 mins, / give reasons below.
              </small>
            </div>

            <div class="form-group">
              <label for="input_id_4">Time attended police station</label>
              <input
                type="text"
                class="form-control"
                name="input_id_4"
                id="input_id_4"
              />
              <small class="text-muted form-text">
                \ if difference &gt;45 mins, / give reasons below.
              </small>
            </div>
          </form>
        </div>

        <div class="card-header">DETAILS OF OTHER PARTIES</div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="input_id_5">Officer in the case</label>
              <input
                type="text"
                class="form-control"
                name="input_id_5"
                id="input_id_5"
                required
              />
            </div>

            <div class="form-group">
              <label for="input_id_6">Custody officer(s)</label>
              <input
                type="text"
                class="form-control"
                name="input_id_6"
                id="input_id_6"
                required
              />
            </div>

            <div class="form-group">
              <label for="input_id_7">Appropriate adult</label>
              <input
                type="text"
                class="form-control"
                name="input_id_7"
                id="input_id_7"
                placeholder="N/A"
              />
            </div>

            <div class="form-group">
              <label for="input_id_8">Notified person</label>
              <input
                type="text"
                class="form-control"
                name="input_id_8"
                id="input_id_8"
              />
            </div>

            <div class="form-group">
              <label for="input_id_9">Other (give role or position)</label>
              <input
                type="text"
                class="form-control"
                name="input_id_9"
                id="input_id_9"
              />
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col">
                  <label>Co-defendant(s)</label>
                  <input
                    type="text"
                    name="i_gird_3"
                    id="i_gird_3"
                    class="form-control"
                    placeholder="-"
                  />
                </div>
                <div class="col">
                  <label>.</label>
                  <input
                    type="text"
                    name="i_gird_4"
                    id="i_gird_4"
                    class="form-control"
                    placeholder="-"
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col">
                  <label>Co-defendant(s’) solicitors</label>
                  <input
                    type="text"
                    name="i_gird_7"
                    id="i_gird_7"
                    class="form-control"
                    placeholder="-"
                  />
                </div>
                <div class="col">
                  <label>.</label>
                  <input
                    type="text"
                    name="i_gird_8"
                    id="i_gird_8"
                    class="form-control"
                    placeholder="-"
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="input_id_10">Briefing details</label>
              <input
                type="text"
                class="form-control form-control-sm"
                name="input_id_10"
                id="input_id_10"
              />
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col">
                  <label>Time of briefing</label>
                  <input
                    type="text"
                    name="i_gird_16"
                    id="i_gird_16"
                    class="form-control"
                    placeholder="/"
                  />
                </div>
                <div class="col">
                  <label>.</label>
                  <input
                    type="text"
                    name="i_gird_17"
                    id="i_gird_17"
                    class="form-control"
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label>Has there been a prior interview details</label>
              <div>
                <div class="custom-control custom-switch custom-control-inline">
                  <input
                    class="custom-control-input"
                    type="checkbox"
                    name="ic_id_9"
                    id="ic_id_9"
                    value="1"
                    checked
                  />
                  <label class="custom-control-label" for="ic_id_9">
                    Yes
                  </label>
                </div>
                <div class="custom-control custom-switch custom-control-inline">
                  <input
                    class="custom-control-input"
                    type="checkbox"
                    name="ic_id_10"
                    id="ic_id_10"
                    value="2"
                  />
                  <label class="custom-control-label" for="ic_id_10">
                    No
                  </label>
                </div>
              </div>
            </div>

            <div class="form-group">
              <input
                type="text"
                class="form-control form-control-sm"
                name="input_id_11"
                id="input_id_11"
              />
              <small class="text-muted form-text">
                If the answer is "Yes", give details here.
              </small>
            </div>

            <div class="form-group">
              <label>
                Is there any search that has been,or is to be, undertaken or
                requested? (other than standard ones when reported){" "}
              </label>
              <div>
                <div class="custom-control custom-switch custom-control-inline">
                  <input
                    class="custom-control-input"
                    type="checkbox"
                    name="ic_id_11"
                    id="ic_id_11"
                    value="1"
                    checked
                  />
                  <label class="custom-control-label" for="ic_id_11">
                    Yes
                  </label>
                </div>
                <div class="custom-control custom-switch custom-control-inline">
                  <input
                    class="custom-control-input"
                    type="checkbox"
                    name="ic_id_12"
                    id="ic_id_12"
                    value="2"
                  />
                  <label class="custom-control-label" for="ic_id_12">
                    No
                  </label>
                </div>
              </div>
            </div>

            <div class="form-group">
              <input
                type="text"
                class="form-control form-control-sm"
                name="input_id_12"
                id="input_id_12"
              />
              <small class="text-muted form-text">
                If the answer is "Yes", give details here.
              </small>
            </div>

            <div class="form-group">
              <label>
                Is there any sample that has been, or is to be,taken or
                requested?(other than standard ones when reported)
              </label>
              <div>
                <div class="custom-control custom-switch custom-control-inline">
                  <input
                    class="custom-control-input"
                    type="checkbox"
                    name="ic_id_13"
                    id="ic_id_13"
                    value="1"
                    checked
                  />
                  <label class="custom-control-label" for="ic_id_13">
                    Yes
                  </label>
                </div>
                <div class="custom-control custom-switch custom-control-inline">
                  <input
                    class="custom-control-input"
                    type="checkbox"
                    name="ic_id_14"
                    id="ic_id_14"
                    value="2"
                  />
                  <label class="custom-control-label" for="ic_id_14">
                    No
                  </label>
                </div>
              </div>
            </div>

            <div class="form-group">
              <input
                type="text"
                class="form-control form-control-sm"
                name="input_id_13"
                id="input_id_13"
              />
              <small class="text-muted form-text">
                If the answer is "Yes", give details here.
              </small>
            </div>
          </form>
        </div>
        <button type="button" class="buttonp btn-outline-success ">Save</button>
      </div>
      </Container>
    </div>
    
   
   
  );
}
