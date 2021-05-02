import React from 'react';

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
      </div>

      <div className="form-group">
        <label htmlFor="Address">Address</label>
        <input
          type="Address"
          className="form-control"
          id="address"
          
        />
      </div>
      <div className="form-group">
        <label htmlFor="Phone Number">Phone Number</label>
        <input
          type="Phone Number"
          className="form-control"
          id="phonenumber"
          
        />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;