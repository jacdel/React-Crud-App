import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const House = ({ house, onDelete, onUpdate }) => { //takes house onDelete function and onUpdate function
  const [editing, setEditing] = React.useState(false); //set to false to show the house info
  const [formData, setFormData] = React.useState(house); //updates the house

//used to update the state of the component's formData when there is a change in the input field
//takes an event object as its parameter
  const handleChange = (e) => { //e holds the info about the info changed
    setFormData({ ...formData, [e.target.name]: e.target.value }); //e.target.name retrieves the name of the input field
  }; //e.target.vale retrieve the new value


  //handles what to do when the form is submitted it calls the functions if the editing state is true
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
    setEditing(false);
  }; //calls the onUpdate function w/ the updated formData, then sets the editing state back to false.

  
  //form
  //When the user clicks the "Update" button, the "handleSubmit" function is called

  return (
    <div className="card mb-3">
      <div className="card-body">
        {editing ? (
          <form onSubmit={handleSubmit}> 
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange} //called whenever the user types something in any of the input fields
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={formData.description} 
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary mr-2">
              Update
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </form>
        ) : (
          <React.Fragment>
       
            
            <p className="card-text">{house.address}</p>
            <button
              type="button"
              className="btn btn-danger mr-2"
              onClick={() => onDelete(house.id)}
            >
              Delete
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default House;
