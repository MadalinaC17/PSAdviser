import React from "react";
import "../DesignCSS/Forms.css";
import { Container } from 'react-bootstrap';

export default function FormcontentClient() {
  return (
    <div className ="clientdetails">


    <Container>
    <div class="card ">
      <div class="card-header">CLIENT DETAILS & RISK ASSESSMENT </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <div class="form-row align-items-center">
              <div class="col-md-6 mb-3">
                <label for="input_id_100">Adviser</label>
                <input
                  type="text"
                  class="form-control"
                  name="input_id_100"
                  id="input_id_100"
                />
              </div>

              <div class="col-md-6 mb-3">
                <label for="input_id_101">Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="input_id_101"
                  id="input_id_101"
                />
              </div>
            </div>
          </div>

          <div class="form-group">
            <div class="form-row align-items-center">
              <div class="col-md-6 mb-3">
                <label for="input_id_103">DUTY</label>
                <input
                  type="text"
                  class="form-control"
                  name="input_id_103"
                  id="input_id_103"
                />
              </div>
            </div>
          </div>

          <div class="form-group">
            <div class="form-row align-items-center">
              <div class="col-md-6 mb-3">
                <label for="input_id_104">OFFENCE-</label>
                <input
                  type="text"
                  class="form-control"
                  name="input_id_104"
                  id="input_id_104"
                />
              </div>

              <div class="col-md-6 mb-3">
                <label for="input_id_10">DATE OF OFFENCE</label>
                <input
                  type="date"
                  class="form-control"
                  name="input_id_10"
                  id="input_id_10"
                />
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="input_id_12">CUSTODY NUMBER</label>
            <input
              type="text"
              class="form-control"
              name="input_id_12"
              id="input_id_12"
            />
          </div>

          <div class="form-group">
            <label>CUSTODY RECORD SEEN?</label>
            <div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radio_name16"
                  id="ir_id16"
                  value="1"
                  checked
                />
                <label class="form-check-label" for="ir_id16">
                  YES
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radio_name16"
                  id="ir_id17"
                  value="2"
                />
                <label class="form-check-label" for="ir_id17">
                  NO
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radio_name16"
                  id="ir_id18"
                  value="3"
                />
                <label class="form-check-label" for="ir_id18">
                  N/A
                </label>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>CLIENT UNDER ARREST?</label>
            <div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radio_name18"
                  id="ir_id19"
                  value="1"
                  checked
                />
                <label class="form-check-label" for="ir_id19">
                  YES
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radio_name18"
                  id="ir_id20"
                  value="2"
                />
                <label class="form-check-label" for="ir_id20">
                  NO
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radio_name18"
                  id="ir_id21"
                  value="3"
                />
                <label class="form-check-label" for="ir_id21">
                  N/A
                </label>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="input_id_14">OFFENCE(S) UNDER INVESTIGATION </label>
            <input
              type="text"
              class="form-control"
              name="input_id_14"
              id="input_id_14"
            />
          </div>
        </form>
      </div>

      <div class="card-header">RELEVANT TIMES</div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <div class="form-row align-items-center">
              <div class="col-md-6 mb-3">
                <label for="input_id_20">TIME OF ARREST</label>
                <input
                  type="text"
                  class="form-control"
                  name="input_id_20"
                  id="input_id_20"
                />
              </div>

              <div class="col-md-3 mb-3">
                <label for="input_id_21">TIME OF ARRIVAL</label>
                <input
                  type="text"
                  class="form-control"
                  name="input_id_21"
                  id="input_id_21"
                />
              </div>

              <div class="col-md-3 mb-3">
                <label for="input_id_22">TIME OF DETENTION</label>
                <input
                  type="text"
                  class="form-control"
                  name="input_id_22"
                  id="input_id_22"
                />
              </div>
            </div>

            <label>RIGHT TO LEGAL ADVICE DELAYED?</label>
            <div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radio_name23"
                  id="ir_id23"
                  value="1"
                  checked
                />
                <label class="form-check-label" for="ir_id23">
                  YES
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radio_name23"
                  id="ir_id24"
                  value="2"
                />
                <label class="form-check-label" for="ir_id24">
                  NO
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radio_name23"
                  id="ir_id25"
                  value="3"
                />
                <label class="form-check-label" for="ir_id25">
                  N/A
                </label>
              </div>
            </div>

            <label>RIGHT TO INTIMATION DELAYED?</label>
            <div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radio_name25"
                  id="ir_id26"
                  value="1"
                  checked
                />
                <label class="form-check-label" for="ir_id26">
                  YES
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radio_name25"
                  id="ir_id27"
                  value="2"
                />
                <label class="form-check-label" for="ir_id27">
                  NO
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radio_name25"
                  id="ir_id28"
                  value="3"
                />
                <label class="form-check-label" for="ir_id28">
                  N/A
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="card-header">
        IF THE ANSWER TO EITHER OF THE ABOVE TWO 'YES', GIVE DETAILS HERE
      </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label>REPRESENT CLIENT AT THE POLICE STATION STAGE?</label>
            <div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radio_name30"
                  id="ir_id30"
                  value="1"
                  checked
                />
                <label class="form-check-label" for="ir_id30">
                  YES
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radio_name30"
                  id="ir_id31"
                  value="2"
                />
                <label class="form-check-label" for="ir_id31">
                  NO
                </label>
              </div>
            </div>
            <small class="text-muted form-text">
              if yes then complete the following
            </small>
          </div>

          <div class="form-group">
            <label for="input_id_32">SURNAME:</label>
            <input
              type="text"
              class="form-control"
              name="input_id_32"
              id="input_id_32"
            />
          </div>
          <div class="form-group">
            <label for="input_id_32">FIRST NAMES:</label>
            <input
              type="text"
              class="form-control"
              name="input_id_32"
              id="input_id_32"
            />
          </div>
          <div class="form-group">
            <label for="input_id_10">DATE OF BIRTHDAY</label>
            <input
              type="date"
              class="form-control"
              name="input_id_10"
              id="input_id_10"
            />
          </div>

          <div class="form-group">
            <label for="input_id_32">ADDRESS:</label>
            <input
              type="text"
              class="form-control"
              name="input_id_32"
              id="input_id_32"
            />
          </div>
          <div class="form-group">
            <label for="input_id_32">HOME TELEPHONE NUMBER:</label>
            <input
              type="text"
              class="form-control"
              name="input_id_32"
              id="input_id_32"
            />
          </div>
          <div class="form-group">
            <label for="input_id_32">MOBILE TELEPHONE NUMBER:</label>
            <input
              type="text"
              class="form-control"
              name="input_id_32"
              id="input_id_32"
            />
          </div>

          <div class="form-group">
            <label for="input_id_32">EMAIL ADDRESS:</label>
            <input
              type="text"
              class="form-control"
              name="input_id_32"
              id="input_id_32"
            />
          </div>
          <div class="form-group">
            <label for="input_id_32">NATIONAL INSURANCE NUMBER:</label>
            <input
              type="text"
              class="form-control"
              name="input_id_32"
              id="input_id_32"
            />
          </div>
          <div class="form-group">
            <label for="input_id_32">MARITAL STATUS:</label>
            <input
              type="text"
              class="form-control"
              name="input_id_32"
              id="input_id_32"
            />
          </div>
          <div class="form-group">
            <label for="input_id_32">TOTAL HOUSEHOLD INCOME (APPROX):</label>
            <input
              type="text"
              class="form-control"
              name="input_id_32"
              id="input_id_32"
            />
          </div>
          <div class="form-group">
            <label>ANY APPARENT CONFLICT OF INTEREST?</label>
            <div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radio_name33"
                  id="ir_id34"
                  value="1"
                  checked
                />
                <label class="form-check-label" for="ir_id34">
                  YES
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radio_name33"
                  id="ir_id35"
                  value="2"
                />
                <label class="form-check-label" for="ir_id35">
                  NO
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radio_name33"
                  id="ir_id36"
                  value="3"
                />
                <label class="form-check-label" for="ir_id36">
                  N/A
                </label>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="input_id_35">Date of conflict check</label>
            <input
              type="date"
              class="form-control"
              name="input_id_35"
              id="input_id_35"
            />
          </div>

          <div class="form-group">
            <label>Client ID confirmed by Pol Stn or Court?</label>
            <div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radio_name36"
                  id="ir_id38"
                  value="1"
                  checked
                />
                <label class="form-check-label" for="ir_id38">
                  YES
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radio_name36"
                  id="ir_id39"
                  value="2"
                />
                <label class="form-check-label" for="ir_id39">
                  NO
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radio_name36"
                  id="ir_id40"
                  value="3"
                />
                <label class="form-check-label" for="ir_id40">
                  N/A
                </label>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="input_id_38">
              If not, ID checked? If so, please state
            </label>
            <input
              type="text"
              class="form-control"
              name="input_id_38"
              id="input_id_38"
            />
          </div>

          <div class="form-group">
            <label for="input_id_35">Date of Risk Assesment</label>
            <input
              type="date"
              class="form-control"
              name="input_id_35"
              id="input_id_35"
            />
          </div>

          <div class="form-group">
            <label>
              I confirm that I have assessed this matter against the risk
              factors set out below and I have decided:
            </label>
            <div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="ic_id_39"
                  id="ic_id_39"
                  value="1"
                  
                />
                <label class="form-check-label" for="ic_id_39">
                  to decline to act for the reason identified in the checklist
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="ic_id_40"
                  id="ic_id_40"
                  value="2"
                  
                />
                <label class="form-check-label" for="ic_id_40">
                  to continue with the file as the matter is low risk
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="ic_id41"
                  id="ic_id41"
                  value="3"
                  
                />
                <label class="form-check-label" for="ic_id41">
                  to refer the matter to the Risk Partner for review as a high
                  risk case
                </label>
              </div>
            </div>
          </div>
        </form>

        <div class="card-header">HIGH RISK CRITERIA</div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label>
                if any of the following applies to your matter then it is
                automatically high risk
              </label>
              <div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="ic_id_41"
                    id="ic_id_41"
                    value="1"
                    
                  />
                  <label class="form-check-label" for="ic_id_41">
                    Client is particularly hostile/violent and/or has a mental
                    condition which gives rise to increased risk
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="ic_id_42"
                    id="ic_id_42"
                    value="2"
                    
                  />
                  <label class="form-check-label" for="ic_id_42">
                    Case transferred from another firm due to complaint or
                    professional problems
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="ic_id43"
                    id="ic_id43"
                    value="3"
                 
                  />
                  <label class="form-check-label" for="ic_id43">
                    Case with legal complexity
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="ic_id44"
                    id="ic_id44"
                    value="4"
                    
                  />
                  <label class="form-check-label" for="ic_id44">
                    Case with money laundering risk
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="ic_id46"
                    id="ic_id46"
                    value="5"
                    
                  />
                  <label class="form-check-label" for="ic_id46">
                    Client has complained previously (about this or another
                    firm)
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="ic_id47"
                    id="ic_id47"
                    value="6"
                    
                  />
                  <label class="form-check-label" for="ic_id47">
                    Crown court case involving complex issues of law
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="ic_id48"
                    id="ic_id48"
                    value="7"
                    
                  />
                  <label class="form-check-label" for="ic_id48">
                    Privately funded case and client has unreasonable
                    expectations
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="ic_id49"
                    id="ic_id49"
                    value="8"
                   
                  />
                  <label class="form-check-label" for="ic_id49">
                    Case subject to the Conflicts Exception Form
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <button type="button" class="buttonp btn-outline-success ">Submit</button>
    </div>
   
    </Container>
  </div>
  );
}
