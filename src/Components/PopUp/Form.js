import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";


export const Form = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("newclient")
      .add({
        name: name,
        email: email,
        address: address,
        phonenumber: phonenumber,
      })
      .then(() => {
        alert("Client was created");
      })
      .catch((error) => {
        alert(error.message);
      });
    setName("");
    setEmail("");
    setAddress("");
    setPhoneNumber("");
  };

  return (
    <form onSubmit={handleSubmit} onSubmit = { onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="Address">Address</label>
        <input
          type="Address"
          className="form-control"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="Phone Number">Phone Number</label>
        <input
          type="Phone Number"
          className="form-control"
          id="phonenumber"
          value={phonenumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="form-group">
       
          <button onClick={handleSubmit} className="form-control btn btn-light" type="submit">
          <Link to="/secondmainpage" >Submit</Link>   
          </button>
        
      </div>
    </form>
  );
};
export default Form;
