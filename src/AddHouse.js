import React, { useState } from 'react';

//renders a form for adding a new house

//state variables that can be updated based on input from the user
const AddHouse = ({ onAdd }) => { //takes a prop called onAdd which is a function that will be called when the form is submitted
  //state variables
const [houseName, setHouseName] = useState('');
  const [price, setPrice] = useState('');

  //function to handle the form submission
  const handleSubmit = (e) => { // handleSubmit handles the form submission
    e.preventDefault();
    if (!houseName) {
      alert('Please enter a house name'); //msg to PREVENT A validation error when submitting empty fields
      return;
    }
    onAdd({ houseName, price }); //onAdd function is called with an object w the houseName and price
    setHouseName('');
    setPrice(''); //and the resets it
  };

//returns a form with 2 input fields for houseName and address bound to the state variable
//updates on event ONCHANGE
return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="col-6">
        <div className="form-group">
          <label>House Name</label>
          <input type="text" className="form-control" value={houseName} onChange={(e) => setHouseName(e.target.value)} /> 
        </div>
        <div className="form-group">
          <label>Price</label>
          <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Add House</button>
      </form>
    </div>
  );
};

export default AddHouse;