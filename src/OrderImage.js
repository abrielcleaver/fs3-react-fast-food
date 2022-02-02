import React from 'react';

{/* this component should take 3 props: drinkId, foodId, and sideId */}
{/* use these 3 ids inside img tags to load the appropriate images that live in the public directory */}
     
export default function OrderImage(props) {
  return <div>
    <img src={`drink-${props.drinkId}.jpg`} width={300} />
    {/* <img />
    <img /> */}
  </div>;
}

