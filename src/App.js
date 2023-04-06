import { useState } from "react";
import HouseList from "./HouseList";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddHouse from './AddHouse';

function App() {
  const [houses, setHouses] = useState([      //state variable

  //hard coded houses
    { id: 1, houseName: "Victorian 10 Bed 5 Bath", price: 20000000 },
    { id: 2, houseName: "Colonial 5 Bed 2 Bath", price: 550000 },
    { id: 3, houseName: "Farmhouse 6 Bed 2.5 Bath", price: 300000 },
  ]);

  
 //adds a new house to the houses state
 //It creates a copy of the current houses array using the spread operator,
 // adds the new house to the end of the copied array (newHouse) and updates the houses state with the new array
  const addHouse = (newHouse) => {
    const updatedHouses = [...houses, newHouse];
    setHouses(updatedHouses);
  };

//removes house from house state
//akes the updated houses array as an argument and updates the houses state with it
  const deleteHouse = (updatedHouses) => {
    setHouses(updatedHouses);
  };
//takes the updated houses array as an argument and updates the houses state with it
  const editHouse = (updatedHouses) => {
    setHouses(updatedHouses);
  };
//renders the AddHouse component, which is a form to add a new house, and the HouseList component, 
//which displays a list of houses with buttons to delete or edit each house
  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 text-center">
            <h1>Real Estate Listings</h1>
          </div>
        </div>
      </div>
      <AddHouse onAdd={addHouse} />
      <HouseList houses={houses} onDelete={deleteHouse} onEdit={editHouse} />
    </div>
  );
} //onAdd calls the addHouse function when the form is submitted
//passed in the HouseList comp. w the houses state as a prop
//also the deleteHouse function as a prop using onDelete={deleteHouse}, and the editHouse function as a prop using onEdit={editHouse}
export default App;



































// import { useState } from "react";
// import HouseList from "./HouseList";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import AddHouse from './AddHouse';

// function App() {
//   const [houses, setHouses] = useState([      //state variable

//   //hard coded houses
//     { id: 1, houseName: "Victorian 10 Bed 5 Bath", price: 200000 },
//     { id: 2, houseName: "Colonial 5 Bed 2 Bath", price: 350000 },
//     { id: 3, houseName: "Farmhouse 6 Bed 2.5 Bath", price: 500000 },
//   ]);

//   const addHouse = (newHouse) => {
//     const updatedHouses = [...houses, newHouse];
//     setHouses(updatedHouses);
//   };

//   const deleteHouse = (updatedHouses) => {
//     setHouses(updatedHouses);
//   };

//   return (
//     <div className="App">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-sm-12 text-center">
//             <h1>Real Estate Listings</h1>
//           </div>
//         </div>
//       </div>
//       <AddHouse onAdd={addHouse} />
//       <HouseList houses={houses} onDelete={deleteHouse} />
//     </div>
//   );
// }

// export default App;




































