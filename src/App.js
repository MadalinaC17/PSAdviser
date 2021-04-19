import React from 'react';
import './App.css';
import logo from'../src/Assets/logo.png';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <img src={logo} alt="logo" />;
        <Button>Get Started</Button>
      </header>
    </div>
  );
}

export default App;
