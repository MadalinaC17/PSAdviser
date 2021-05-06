// import React from 'react';
// import '../../App.css';

// export default function HomePage() {
//   // return <h1 className='homepage'>HomePage</h1>;
// return (

//   <h1 className='homepage'>HomePage</h1>

// );

// }
import React from "react";
import "../../App.css";
import { Container } from "../PopUp/Container";
import { Button } from "../Button";
import '../Button.css';
import logo from '../../Imagesps/Psadviserlogo.png';
import { Link } from "react-router-dom";
const HomePage = () => {
  const triggerText = "New Client";
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log(event.target.address.value);
  };
  return (
    <div className="homepage">

   <img src={logo} alt="logo" class="Logo"/>

      <div class="btn-group-vertical">
        {<Container triggerText={triggerText} onSubmit={onSubmit} />}
       <Link to = '/viewclients' >
        <button
          className="buttonViewClients btn-outline-secondary btn-block" 
      
        >
          View Clients
        </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
