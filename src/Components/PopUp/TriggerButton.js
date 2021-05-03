import React from 'react';
import '../Button.css';



const TriggerButton = ({ triggerText, buttonRef, showModal }) => {
  return (
    <button
    className='buttonPop'
   // buttonStyle='btn--outline'
    //buttonSize='btn--large'
      ref={buttonRef}
      onClick={showModal}
    >
      {triggerText}
    </button>
    
  );
};
export default TriggerButton;
