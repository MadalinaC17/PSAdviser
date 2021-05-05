import React from "react";
//import '../../App.css';
import "../DesignCSS/Forms.css";
import { Form, Button } from "react-bootstrap";

export default function BriefingNotes() {
  return (
    <div class="card">
      <div class="card-header">BRIEFING NOTES</div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="input_id_14">
              INSTRUCTIONS GIVEN BY CLIENT - MEDICAL
            </label>
            <input
              type="text"
              class="form-control"
              name="input_id_14"
              id="input_id_14"
            />
          </div>

          <div class="form-group">
            <label>
              Does the client have any medical complaint (including any injury)?
            </label>
            <div>
              <div class="custom-control custom-switch custom-control-inline">
                <input
                  class="custom-control-input"
                  type="checkbox"
                  name="ic_id_15"
                  id="ic_id_15"
                  value="1"
                />
                <label class="custom-control-label" for="ic_id_15">
                  Yes
                </label>
              </div>
              <div class="custom-control custom-switch custom-control-inline">
                <input
                  class="custom-control-input"
                  type="checkbox"
                  name="ic_id_16"
                  id="ic_id_16"
                  value="2"
                />
                <label class="custom-control-label" for="ic_id_16">
                  No
                </label>
              </div>
            </div>
          </div>

          <div class="form-group">
            <input
              type="text"
              class="form-control form-control-sm"
              name="input_id_15"
              id="input_id_15"
            />
            <small class="text-muted form-text">
              If the answer is "Yes", give details here.
            </small>
          </div>

          <div class="form-group">
            <label for="input_id_16">
              What is the nature of the medical complaint?
            </label>
            <input
              type="text"
              class="form-control"
              name="input_id_16"
              id="input_id_16"
            />
          </div>

          <div class="form-group">
            <label for="input_id_17">
              What is, or was, the cause of the medical complaint?
            </label>
            <input
              type="text"
              class="form-control"
              name="input_id_17"
              id="input_id_17"
            />
          </div>

          <div class="form-group">
            <label for="input_id_19">
              Are there any witnesses to the causation or effects?
            </label>
            <input
              type="text"
              class="form-control"
              name="input_id_19"
              id="input_id_19"
            />
          </div>

          <div class="form-group">
            <label for="input_id_20">
              Details of any medication prescribed
            </label>
            <input
              type="text"
              class="form-control"
              name="input_id_20"
              id="input_id_20"
            />
          </div>

          <div class="form-group">
            <label>Are the above on custody record?</label>
            <div>
              <div class="custom-control custom-switch custom-control-inline">
                <input
                  class="custom-control-input"
                  type="checkbox"
                  name="ic_id_17"
                  id="ic_id_17"
                  value="1"
                />
                <label class="custom-control-label" for="ic_id_17">
                  Yes
                </label>
              </div>
              <div class="custom-control custom-switch custom-control-inline">
                <input
                  class="custom-control-input"
                  type="checkbox"
                  name="ic_id_18"
                  id="ic_id_18"
                  value="2"
                />
                <label class="custom-control-label" for="ic_id_18">
                  No
                </label>
              </div>
            </div>
          </div>

          <div class="form-group">
            <input
              type="text"
              class="form-control form-control-sm"
              name="input_id_21"
              id="input_id_21"
              placeholder="Comments"
            />
          </div>

          <div class="form-group">
            <label>Has the police doctor been called?</label>
            <div>
              <div class="custom-control custom-switch custom-control-inline">
                <input
                  class="custom-control-input"
                  type="checkbox"
                  name="ic_id_19"
                  id="ic_id_19"
                  value="1"
                />
                <label class="custom-control-label" for="ic_id_19">
                  Yes
                </label>
              </div>
              <div class="custom-control custom-switch custom-control-inline">
                <input
                  class="custom-control-input"
                  type="checkbox"
                  name="ic_id_20"
                  id="ic_id_20"
                  value="2"
                />
                <label class="custom-control-label" for="ic_id_20">
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
              placeholder="Comments"
            />
          </div>

          <div class="form-group">
            <label>Has client already been seen?</label>
            <div>
              <div class="custom-control custom-switch custom-control-inline">
                <input
                  class="custom-control-input"
                  type="checkbox"
                  name="ic_id_21"
                  id="ic_id_21"
                  value="1"
                />
                <label class="custom-control-label" for="ic_id_21">
                  Yes
                </label>
              </div>
              <div class="custom-control custom-switch custom-control-inline">
                <input
                  class="custom-control-input"
                  type="checkbox"
                  name="ic_id_22"
                  id="ic_id_22"
                  value="2"
                />
                <label class="custom-control-label" for="ic_id_22">
                  No
                </label>
              </div>
            </div>
          </div>

          <div class="form-group">
            <input
              type="text"
              class="form-control form-control-sm"
              name="input_id_23"
              id="input_id_23"
              placeholder="Comments"
            />
          </div>

          <div class="form-group">
            <label for="input_id_24">Client’s g.p. And practice </label>
            <input
              type="text"
              class="form-control"
              name="input_id_24"
              id="input_id_24"
            />
            <small class="text-muted form-text">(If known)</small>
          </div>

          <div class="form-group">
            <label for="input_id_25">
              Give details of any perceived likely effects on detention or
              interview
            </label>
            <input
              type="text"
              class="form-control"
              name="input_id_25"
              id="input_id_25"
            />
          </div>
        </form>
      </div>
      <div class="card-header">INSTRUCTIONS GIVEN BY CLIENT- INVESTIGATION SO FAR</div>
	<div class="card-body">

		<form>
<div class="form-group">
	<label>Previously interviewed in this case?</label>
	<div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_23" id="ic_id_23" value="1"/>
			<label class="custom-control-label" for="ic_id_23">Yes</label>
		</div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_24" id="ic_id_24" value="2"/>
			<label class="custom-control-label" for="ic_id_24">No</label>
		</div>
	</div>
</div>

<div class="form-group">
	<input type="text" class="form-control form-control-sm" name="input_id_26" id="input_id_26" placeholder="Comments"/>
</div>

<div class="form-group">
	<label>Made any significant statement?</label>
	<div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_25" id="ic_id_25" value="1"/>
			<label class="custom-control-label" for="ic_id_25">Yes</label>
		</div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_26" id="ic_id_26" value="2"/>
			<label class="custom-control-label" for="ic_id_26">No</label>
		</div>
	</div>
</div>

<div class="form-group">
	<input type="text" class="form-control form-control-sm" name="input_id_27" id="input_id_27" placeholder="Comments"/>
</div>

<div class="form-group">
	<label>Searched (other than on detention)?</label>
	<div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_27" id="ic_id_27" value="1"/>
			<label class="custom-control-label" for="ic_id_27">Yes</label>
		</div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_28" id="ic_id_28" value="2"/>
			<label class="custom-control-label" for="ic_id_28">No</label>
		</div>
	</div>
</div>

<div class="form-group">
	<input type="text" class="form-control form-control-sm" name="input_id_28" id="input_id_28" placeholder="Comments"/>
</div>

<div class="form-group">
	<label>Any samples taken?</label>
	<div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_29" id="ic_id_29" value="1"/>
			<label class="custom-control-label" for="ic_id_29">Yes</label>
		</div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_30" id="ic_id_30" value="2"/>
			<label class="custom-control-label" for="ic_id_30">No</label>
		</div>
	</div>
</div>

<div class="form-group">
	<input type="text" class="form-control form-control-sm" name="input_id_29" id="input_id_29" placeholder="Comments"/>
</div>

		</form>


	</div>
    <div class="card-header">INSTRUCTIONS GIVEN BY CLIENT – GENERAL</div>
	<div class="card-body">

		<form>
<div class="form-group">
	<label>Previous convictions or cautions?</label>
	<div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_31" id="ic_id_31" value="1"/>
			<label class="custom-control-label" for="ic_id_31">Yes</label>
		</div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_32" id="ic_id_32" value="2"/>
			<label class="custom-control-label" for="ic_id_32">No</label>
		</div>
	</div>
</div>

<div class="form-group">
	<label>Any other current matters on going?</label>
	<div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_33" id="ic_id_33" value="1"/>
			<label class="custom-control-label" for="ic_id_33">Yes</label>
		</div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_34" id="ic_id_34" value="2"/>
			<label class="custom-control-label" for="ic_id_34">No</label>
		</div>
	</div>
</div>

<div class="form-group">
	<label>On bail for any other offences?</label>
	<div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_35" id="ic_id_35" value="1"/>
			<label class="custom-control-label" for="ic_id_35">Yes</label>
		</div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_36" id="ic_id_36" value="2"/>
			<label class="custom-control-label" for="ic_id_36">No</label>
		</div>
	</div>
</div>

<div class="form-group">
	<label>Social worker appointed?</label>
	<div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_38" id="ic_id_38" value="1"/>
			<label class="custom-control-label" for="ic_id_38">Yes</label>
		</div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_39" id="ic_id_39" value="2"/>
			<label class="custom-control-label" for="ic_id_39">No</label>
		</div>
	</div>
</div>

<div class="form-group">
	<label for="input_id_30">If the answer to any of the above is ‘yes’, give details here</label>
	<input type="text" class="form-control" name="input_id_30" id="input_id_30"/>
</div>

		</form>


	</div>
    <div class="card-header">INSTRUCTIONS FROM CLIENT - THIS ALLEGATION.</div>
	<div class="card-body">

		<form>
<div class="form-group">
	<label for="input_id_31">ADVICE</label>
	
</div>

<div class="form-group">
	<label>Role of appropriate adult?</label>
	<div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_40" id="ic_id_40" value="1"/>
			<label class="custom-control-label" for="ic_id_40">Yes</label>
		</div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_41" id="ic_id_41" value="2"/>
			<label class="custom-control-label" for="ic_id_41">N/A</label>
		</div>
	</div>
</div>

<div class="form-group">
	<label>Non-intimate investigative samples?</label>
	<div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_42" id="ic_id_42" value="1"/>
			<label class="custom-control-label" for="ic_id_42">Yes</label>
		</div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_43" id="ic_id_43" value="2"/>
			<label class="custom-control-label" for="ic_id_43">N/A</label>
		</div>
	</div>
</div>

<div class="form-group">
	<label>Intimate investigative samples?</label>
	<div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_44" id="ic_id_44" value="1"/>
			<label class="custom-control-label" for="ic_id_44">Yes</label>
		</div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_45" id="ic_id_45" value="2"/>
			<label class="custom-control-label" for="ic_id_45">N/A</label>
		</div>
	</div>
</div>

<div class="form-group">
	<label for="input_id_32">If the answer to any of the above is ‘yes’, give details here.</label>
	<input type="text" class="form-control" name="input_id_32" id="input_id_32"/>
</div>

<div class="form-group">
	<label for="input_id_33">ADVICE GIVEN - INTERVIEW PROCEDURE</label>
	
</div>

<div class="form-group">
	<label>To exercise the right to silence</label>
	<div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_46" id="ic_id_46" value="1"/>
			<label class="custom-control-label" for="ic_id_46">Yes</label>
		</div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_47" id="ic_id_47" value="2"/>
			<label class="custom-control-label" for="ic_id_47">N/A</label>
		</div>
	</div>
</div>

<div class="form-group">
	<label>With regard to an alibi</label>
	<div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_48" id="ic_id_48" value="1"/>
			<label class="custom-control-label" for="ic_id_48">Yes</label>
		</div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_49" id="ic_id_49" value="2"/>
			<label class="custom-control-label" for="ic_id_49">N/A</label>
		</div>
	</div>
</div>

<div class="form-group">
	<label>About possible special warning</label>
	<div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_50" id="ic_id_50" value="1"/>
			<label class="custom-control-label" for="ic_id_50">Yes</label>
		</div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_51" id="ic_id_51" value="2"/>
			<label class="custom-control-label" for="ic_id_51">N/A</label>
		</div>
	</div>
</div>

<div class="form-group">
	<label for="input_id_34">If the answer to any of the above is 'yes', give details here.</label>
	<input type="text" class="form-control" name="input_id_34" id="input_id_34"/>
</div>

<div class="form-group">
	<label for="input_id_35">ADVICE GIVEN - IDENTIFICATION ISSUES</label>
	
</div>

<div class="form-group">
	<label>Is identification in issue?</label>
	<div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_52" id="ic_id_52" value="1"/>
			<label class="custom-control-label" for="ic_id_52">Yes</label>
		</div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_53" id="ic_id_53" value="2"/>
			<label class="custom-control-label" for="ic_id_53">No</label>
		</div>
	</div>
</div>

<div class="form-group">
	<label>What type of id procedure is proposed</label>
	<div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_54" id="ic_id_54" value="1"/>
			<label class="custom-control-label" for="ic_id_54">N/A</label>
		</div>
	</div>
</div>

<div class="form-group">
	<input type="text" class="form-control form-control-sm" name="input_id_36" id="input_id_36" placeholder="Other"/>
</div>

<div class="form-group">
	<label>Client advised to consent</label>
	<div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_55" id="ic_id_55" value="1"/>
			<label class="custom-control-label" for="ic_id_55">Yes</label>
		</div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_56" id="ic_id_56" value="2"/>
			<label class="custom-control-label" for="ic_id_56">No</label>
		</div>
	</div>
</div>

<div class="form-group">
	<label>Implications of refusal explained?</label>
	<div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_57" id="ic_id_57" value="1"/>
			<label class="custom-control-label" for="ic_id_57">Yes</label>
		</div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_58" id="ic_id_58" value="2"/>
			<label class="custom-control-label" for="ic_id_58">No</label>
		</div>
	</div>
</div>

<div class="form-group">
	<label>Procedure carried out correctly</label>
	<div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_500" id="ic_id_500" value="1"/>
			<label class="custom-control-label" for="ic_id_500">Yes</label>
		</div>
		<div class="custom-control custom-switch custom-control-inline">
			<input class="custom-control-input" type="checkbox" name="ic_id_502" id="ic_id_502" value="2"/>
			<label class="custom-control-label" for="ic_id_502">No</label>
		</div>
	</div>
</div>

<div class="form-group">
	<label for="input_id_37">OUTCOME</label>
	
</div>

<div class="form-group">
	<label for="input_id_38">Is The Client To Face Further Action</label>
	<input type="text" class="form-control" name="input_id_38" id="input_id_38"/>
</div>

		</form>


	</div>

    </div>
  );
}
