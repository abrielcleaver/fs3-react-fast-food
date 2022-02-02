import React from 'react';

{/* this component should have a prop called setDrinkId, which is a function */}
{/* on change, this component should use e.target.value to pass the correct id to the setDrinkId function */}
{/* note that the options will need value properties (1, 2, or 3) that correspond to the photo filenames in the public directory */}
export default function DrinkDropdown({ setDrinkId }) {
  function handleChange(e) {
    setDrinkId(e.target.value);
  }
   
  return <div>
    <select onChange={handleChange}>
      <option value="1">Water</option>
      <option value="2">Coffee</option>
      <option value="3">Soda</option>
    </select>
  </div>;
}



