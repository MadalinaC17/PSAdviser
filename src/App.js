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
</Switch>
      </Router>
      
  </div>
  );
}

export default App;
