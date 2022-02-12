import React from 'react';

{/* this component should have a prop called setSideId, which is a function */}
{/* on change, this component should use e.target.value to pass the correct id to the setDrinkId function */}
{/* note that the options will need value properties (1, 2, or 3) that correspond to the photo filenames in the public directory */}
export default function SideDropdown({ setSideId }) {
  function handleChange(e) {
    setSideId(e.target.value);
  }
  return <div>
    <select onChange={handleChange}>
      <option value="1">Potato Wedges</option>
      <option value="2">Onion Rings</option>
      <option value="3">Salad</option>
    </select>
  </div>;
}
