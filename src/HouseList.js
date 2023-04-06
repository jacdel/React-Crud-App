import React, { useState } from "react";
import HouseItem from "./HouseItem";
import 'bootstrap/dist/css/bootstrap.min.css';
 //renders a list of HouseItem components, which display information about each house.
 //basically sets up state variables to track which house is currently being edited (editingId) 
 //and the data of the edited house (editFormData)
 // allows the component to manage the editing functionality for each house in the list.

function HouseList(props) {
  const { houses, onDelete } = props;
  const [editingId, setEditingId] = useState(null); // state to keep track of which house is currently being edited
  const [editFormData, setEditFormData] = useState({ houseName: "", price: "" }); // state to keep track of the edited house data

  const handleDelete = (id) => {
    const updatedHouses = houses.filter((house) => house.id !== id);
    onDelete(updatedHouses);
  };

  const handleEdit = (id) => {
    setEditingId(id); // set the id of the house being edited
    const houseToEdit = houses.find((house) => house.id === id);
    setEditFormData({ houseName: houseToEdit.houseName, price: houseToEdit.price }); // set the initial values of the edit form to the current house name and price
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedHouses = houses.map((house) => {
      if (house.id === editingId) {
        return { ...house, ...editFormData }; // update the edited fields of the house object
      } else {
        return house;
      }
    });
    setEditingId(null); // reset the editing id state
    setEditFormData({ houseName: "", price: "" }); // reset the edit form data state
    props.onEdit(updatedHouses); // pass the updated houses array to the onEdit prop function
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value }); // update the edit form data state based on the input change
  };

  return (
    <div className="container">
      <div className="row">
        {houses.map((house, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <HouseItem
              house={house}
              onDelete={handleDelete}
              onEdit={handleEdit}
              isEditing={editingId === house.id} // pass a prop to the HouseItem component to indicate whether this house is being edited or not
              editFormData={editFormData}
              handleEditChange={handleEditChange}
              handleEditSubmit={handleEditSubmit}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HouseList;





