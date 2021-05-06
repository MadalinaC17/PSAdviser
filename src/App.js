import React from 'react';
import './App.css';
import logo from'./Imagesps/Psadviserlogo.png';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/NavBar';
import FirstPage from './Components/Pages/FirstPage';
import HomePage from './Components/Pages/HomePage';
import Comments from './Components/Pages/Comments';
import SignIn from './Components/Pages/SignIn';
import Register from './Components/Pages/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  LinK
} from "react-router-dom";
import SecondMainPage from './Components/Pages/SecondMainPage';
import ClientDetails from './Components/Forms/ClientDetails';
import BriefingNotes from './Components/Forms/BriefingNotes';
import CodesOfConducts from './Components/Forms/CodesOfConduct';
import PoliceF from './Components/Forms/PoliceF';
import ViewClients from './Components/Pages/ViewClients';





function App() {
  return (
  
<div>
<Router>
      <Navbar />
<Switch>
  <Route path  = '/' exact component =
  {FirstPage} />
  <Route path = '/homepage' component ={HomePage} />
  <Route path = '/comments' component ={Comments} />
  <Route path = '/signin' component ={SignIn} />
  <Route path = '/register' component ={Register} />
  <Route path = '/secondmainpage' component = {SecondMainPage} />
  <Route path = '/clientdetails' component = {ClientDetails} />
  <Route path = '/briefingnotes' component = {BriefingNotes} />
  <Route path = '/codesofconduct' component ={CodesOfConducts} />
  <Route path = '/policestation' component = {PoliceF} />
  <Route path = '/viewclients' component ={ViewClients} />
</Switch>
      </Router>
      
  </div>
  );
}

export default App;
