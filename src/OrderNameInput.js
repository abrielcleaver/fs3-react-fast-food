import React from 'react';

{/* this component should have a prop called setOrderName, which is a function */}

export default function OrderNameInput({ setOrderName }) {
  function handleChange(e) {
    setOrderName(e.target.value);
  }
  return <div>
    <div>

   Enter name for the order below:
    </div>
    <input onChange={handleChange} />
  </div>;
}
