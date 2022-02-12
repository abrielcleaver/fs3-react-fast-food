import { useState } from 'react';
// This component takes in a prop called setInstructions, which is a function that takes in an array of slogans. 
// Also, this component also takes in a prop called instructions, which is an array of strings. //


export default function InstructionForm({ instructions, setInstructions }) {
  const [instructionsInput, setInstructionsInput] = useState('');

  // On submit call the setInstructions state with a new array that is a copy of the old array with the new instruction immutably added to the end 
  function handleSubmit(e) {
    e.preventDefault();
  
    setInstructions([...instructions, instructionsInput]);
    setInstructionsInput('');
  }

  return <div>
    {/* on submit, call the handleSubmit function, defined above */}
    <form onSubmit={handleSubmit}>
      <div>
      Any special instructions to add?
      </div>
      <input onChange={(e) => setInstructionsInput(e.target.value)} value={instructionsInput} />
      <button>Submit</button>
    </form>
  </div>;
}
