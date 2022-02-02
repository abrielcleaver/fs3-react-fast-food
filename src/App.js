import './App.css';
// import DrinkDropdown from './DrinkDropdown';
// import FoodDropdown from './FoodDropdown';
// import SideDropdown from './SideDropdown';
// import InstructionsList from './InstructionsList';
// import InstructionsForm from './FoodImages';
// import Instruction from './Instruction';
// import NameInput from './OrderNameInput';




function App() {
    // track some state here.
    // You'll need to keep track of a foodId, sideId, and drinkId. All these start out as 1

    // you'll need to track a order name, which starts as the order of your choice.

    // finally, you'll need an array of instructions, which could start out as [' '] for example

  return (
    <div className="App">
      {/* here, the Order component takes in foodId, sideId, drinkId as props. It'll use those ids to render pictures correctly. */}
      {/* dynamically update the order name here using state */}

      {/* here, the OrderNameInput component takes in the setOrderName state handler function */}
      
      {/* 
          render all three Dropdown components (FoodDropdown, SideDropdown, DrinkDropdown) here. 
          In each Dropdown, pass as props the state handler functions defined above, so that these child components can manipulate parent state 
          */}

      {/* here, the InstructionsForm component takes in the setInstructions state handler function and the slogans array that live in state */}
 
      {/* here, the InstructionList component takes the array of slogans that lives in state */}

    </div>
  );
}

export default App;
