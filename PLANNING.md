# From Scratch #3: Fast-Food Order Builder


**Visit Abriels Live Netlify site here:** [Netlify Live Site](https://abriels-fastfood-order-tool.netlify.app)


---
## The Golden Rule:
🦸 🦸‍♂️ Stop starting and start finishing. 🏁

***If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.***

---
### Terminal Commands
- npm i
- npm start
- npm test
- git status
- git commit -m "
- git push origin -u dev
- git reset --soft HEAD~1 
    - removes the last commit from the current branch - use only if commit hasn't been pushed
    - use if the commit being reset ONLY exists locally. This command changes the commit history and it might overwrite history 

- git revert < commit to revert >
    - find the name of the commit you want to revert using git log
    - creates a new commit that undoes the changes, so if the commit to revert has already been pushed to a shared repository, it is best to use revert as it doesn't overwrite commit history.

---

### Keyboard shortcuts
- cmd + D selects same word
---

### CSS
* {
  --color-1: #FEE8D5;
  --color-2: #3F7929;
  --color-3: #806342;
  --color-4: #1A3815;
  --color-5: #283618;
  --color-6: #6b705c;
  }


### To-do:
- [x] npm i
- [x] make dev branch
- [x] generate netlify deploy site
- [x] add netlify link to github repo
- [ ] create components files
  - [x] import to /App
  - [x] add images
    
  
- [x] write functions for dropdowns
  - [x] drink
  - [x] food
  - [x] side
    - [x] add props for id to function
    - [x] add handleChange function to select
    - [x] add value to each option

- /App
  - [x] tracks state for `drinkId`, `foodId`, `sideId`, `instructions`, and `orderName`
  - [ ] passes state as props correctly to 
    - [X] `OrderNameInput` and 
    - [x] `OrderImages`, 
    - [ ] `InstructionsForm`, 
    - [ ] `InstructionsList` 
- /OrderImages
  - [x] use the 3 props to render the correct images that live in the `public` directory

- /OrderNameInput({ setOrderName }) : 
  - [x] on change, call setOrderName with the new e.target.value to change App.js state

- image changes when selected from dropdown
  - [x] food
  - [x] side
  - [x] drink


- /InstructionsForm
  - `InstructionsForm({ setInstructions, instructions })`
    - [x] tracks state for the current slogan being typed
     - [x] OnChange of the input, this state changes
    - [x] On submit of the form, this instruction is injected into `App.js` state using a callback state handler passed down as a prop
- /InstructionsList
  - `InstructionsList({ instructions })`
    - [x] maps through the `instructions` prop and renders an `Instruction` for each item in the array
- /Instruction
  - `Instruction({ instruction })`
    - [x] renders the `instruction` prop

  --- 



| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Visit the deployed app on Netlify, with link in the About section of the Github repo |  **required for grading** |

| Events                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| On typing in the name input, the order name changes with each keystroke  |        1 |
| On changing the food dropdown, the image for the food changes appropriately  |        1 |
| On changing the side dropdown, the image for the side changes appropriately  |        1 |
| On changing the drink dropdown, the image for the drink changes appropriately  |        1 |
| On submitting a new extra instruction, it is displayed with all the other extra instructions in a list |        2 |

| Components                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| `App()` : tracks state for `foodId`, `sideId`, `drinkId`, `instructions`, and `orderName` |2|
| `App()` : passes state as props correctly to `OrderNameInput` and `OrderImages`, `InstructionsForm`, `InstructionsList` |2|
| `OrderNameInput({ setOrderName })` : on change, call `setOrderName` with the new `e.target.value` to change `App.js` state |1|
| `OrderImages({ foodId, sideId, drinkId })` : use the 3 props to render the correct images that live in the `public` directory |2|
| `InstructionsForm({ setInstructions, instructions })` : tracks state for the current instruction being typed. OnChange of the input, this state changes.  |2|
| `InstructionsForm({ setInstructions, instructions })` : On submit of the form, this slogan is injected into `App.js` state using a callback state handler passed down as a prop. |2|
| `InstructionsList({ instructions })` : maps through the `instructions` prop and renders an `Instruction` for each item in the array |2|
| `Instruction({ instruction } )` : renders the `instruction` prop however you like |1|

### Stretch goal ideas:
- Write two components: `OrderForm` (to hold all the input components) and `OrderDisplay` (to show the user what is selected). Import the appropriate components into these components so that App.js is only responsible for: 
  1) initializing state 
  2) calling `OrderForm` and `OrderDisplay` and
  3) passing the correct props to `OrderForm` and `OrderDisplay`.
- Write a component called `Dropdown`. Use this component to replace all 3 of your dropdowns. Ask yourself: what differs between these 3 dropsdowns? The answer to that question will tell you what props your abstracted `Dropdown` component will need to be passed. This is a challenge :)
- Add a `Submit Order` button. The app will clear the current order and keep track of all past orders and render them to the page (like soccer scorekeeper).
- Try moving all your App.js state and state handlers into a custom hook in another file
