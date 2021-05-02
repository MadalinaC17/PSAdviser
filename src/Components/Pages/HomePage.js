
// import React from 'react';
// import '../../App.css';

// export default function HomePage() {
//   // return <h1 className='homepage'>HomePage</h1>;
// return (

//   <h1 className='homepage'>HomePage</h1>
 
 
// );


// }
import React from 'react';
import '../../App.css';
import { Container } from './Container';


const HomePage = () => {
  const triggerText = 'Open form';
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log(event.target.address.value);
 };
  return (
    <div className="home">
      
      <Container triggerText={triggerText} onSubmit={onSubmit} />
      
    </div>
   // <h1 className='homepage'>HomePage</h1>
  );
};

export default HomePage;

