import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import logo from '../Imagesps/Psadviserlogo.png';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/video/video-2.mp4' autoPlay loop muted />
      <h1>Welcome to PSAdviser</h1>
      {/* <img src={logo} alt="logo" /> */}
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
       
      </div>
    </div>
  );
}

export default HeroSection;