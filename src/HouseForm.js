import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const HouseForm = ({ onAdd }) => {
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!address || !price) { //checks if the address and price variables are filled in
      alert("Please fill out all fields."); //if not sends a prompt
      return;
    }

    //newHouse is created with the address and price values
    const newHouse = { address, price}; //newHouse variable to hold the info
    onAdd(newHouse); //then passed to the onAdd function that was passed as a prop
    setAddress("");
    setPrice(""); //reset state variables back to empty
    
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Address:</label>
        <input
          type="text"
          placeholder="Enter address"
          value={address} //set to the sate variables //will be updated whenever the state variables changes
          onChange={(e) => setAddress(e.target.value)} //updates the variables, usinge.target.value to get new value
        />
      </div>
      <div className="form-control">
        <label>Price:</label>
        <input
          type="number"
          placeholder="Enter price"
          value={price} //set to the sate variables
          onChange={(e) => setPrice(e.target.value)}
        />
        

      </div>
      <button type="submit" className="btn btn-primary">
        Add House
      </button>
    </form>
  );
};//add house button

export default HouseForm;
