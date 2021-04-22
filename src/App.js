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
//import HomePage from './Components/Pages/HomePage';




function App() {
  return (
    // <div className="App">
      /* <header className="App-header">
        
      <img src={logo} alt="logo" />;
        <Button>Get Started</Button>
      </header> */
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
</Switch>
      </Router>
      
  </div>
  );
}

export default App;
