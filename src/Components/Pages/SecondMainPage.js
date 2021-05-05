import React from "react";
import "../DesignCSS/SecondMainPage.css";
import logo from "../../Imagesps/Psadviserlogo.png";
import { Link } from "react-router-dom";
import "../../App.css";

export default function SecondMainPage() {
  return (
    <div className="secondpage">
      <div className="Logo2">
        <img src={logo} alt="logo" />
      </div>
      
      <div class="align">
        <div class="btn-group-vertical">
          <Link to="/clientdetails">
            <button className="button btn-outline-secondary btn-block">
              Client details & Risk Assesment
            </button>
          </Link>
          <Link to="/policestation">
            <button className="button btn-outline-secondary btn-block">
              Police Station Section
            </button>
          </Link>

          <Link to = "/briefingnotes">
          <button className="button btn-outline-secondary btn-block">
            Briefing Notes
          </button>
          </Link>
          <Link to = "/codesofconduct">
          <button className="button btn-outline-secondary btn-block ">
            Police Codes of Conduct
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
