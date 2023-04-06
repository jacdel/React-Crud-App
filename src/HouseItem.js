import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

//renders the name and price of the house object(passed in as a prop) It also renders two buttons - "Delete" and "Edit".

const HouseItem = ({ house, onDelete, onEdit, isEditing, editFormData, handleEditChange, handleEditSubmit }) => {
  return (
    <div className="card my-3">
      <div className="card-body">
        {isEditing ? (
          <form onSubmit={handleEditSubmit}>
            <div className="form-group">
              <label htmlFor="houseName">House Name</label>
              <input
                type="text"
                className="form-control"
                id="houseName"
                name="houseName"
                value={editFormData.houseName}
                onChange={handleEditChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                className="form-control"
                id="price"
                name="price"
                value={editFormData.price}
                onChange={handleEditChange}
              />
            </div>
            <button type="submit" className="btn btn-primary mr-2">Save</button>
            <button className="btn btn-secondary" onClick={() => onEdit(null)}>Cancel</button>
          </form>
        ) : (
          <>
            <h5 className="card-title">{house.houseName}</h5>
            <p className="card-text">Price: ${house.price}</p>
            <button className="btn btn-danger mr-2" onClick={() => onDelete(house.id)}>Delete</button>
            <button className="btn btn-primary" onClick={() => onEdit(house.id)}>Edit</button>
          </>
        )}
      </div>
    </div>
  );
};

export default HouseItem;














































