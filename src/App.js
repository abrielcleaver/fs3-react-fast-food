import './App.css';
import { useState } from 'react';
import DrinkDropdown from './DrinkDropdown';
import FoodDropdown from './FoodDropdown';
import SideDropdown from './SideDropdown';
import OrderImage from './OrderImage';
import OrderNameInput from './OrderNameInput';
import InstructionsList from './InstructionsList';
import InstructionsForm from './InstructionForm';

import Header from './services/Header/Header';

function App() {
    // track some state here.
    // You'll need to keep track of a foodId, sideId, and drinkId. All these start out as 1
  const [drinkId, setDrinkId] = useState(1);
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
    // you'll need to track a order name, which starts as the order of your choice.
  const [orderName, setOrderName] = useState('Yay');
    // finally, you'll need an array of instructions, which could start out as ['extra mayo'] for example
  const [instructions, setInstructions] = useState(['No tomato', 'No cheese']);

  return (
    <div className="App">
      <Header />
      
      {/* here, the OrderNameInput component takes in the setOrderName state handler function */}
      <OrderNameInput setOrderName={setOrderName}/>
      
      {/* 
          render all three Dropdown components (FoodDropdown, SideDropdown, DrinkDropdown) here. 
          In each Dropdown, pass as props the state handler functions defined above, so that these child components can manipulate parent state 
          */}
      <div className='dropdowns'>
        <DrinkDropdown setDrinkId={setDrinkId} />
        <FoodDropdown setFoodId={setFoodId}/>
        <SideDropdown setSideId={setSideId} />
      </div>
      {/* here, the InstructionsForm component takes in the setInstructions state handler function and the slogans array that live in state */}
      <div>
        <InstructionsForm 
          instructions={instructions} 
          setInstructions={setInstructions} />
        <div>
          <InstructionsList instructions={instructions} />
        </div>
      </div>
      {/* dynamically update the order name here using state */}
      {orderName}, your order is ready!
      {/* here, the OrderImage component takes in foodId, sideId, drinkId as props. It'll use those ids to render pictures correctly. */}
      <OrderImage 
        drinkId={drinkId}
        foodId={foodId}
        sideId={sideId} 
      />
 
      {/* here, the InstructionList component takes the array of slogans that lives in state */}

    </div>
  );
}

export default App;
