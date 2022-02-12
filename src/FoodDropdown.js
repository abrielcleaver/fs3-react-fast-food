import React from 'react';

{/* this component should have a prop called setDrinkId, which is a function */}
{/* on change, this component should use e.target.value to pass the correct id to the setFoodId function */}
{/* note that the options will need value properties (1, 2, or 3) that correspond to the photo filenames in the public directory */}
export default function FoodDropdown({ setFoodId }) {
  function handleChange(e) {
    setFoodId(e.target.value);
  }
   
  return <div>
    <select onChange={handleChange}>
      <option value="1">Burger</option>
      <option value="2">Pizza</option>
      <option value="3">Sandwich</option>
    </select>
  </div>;
}
