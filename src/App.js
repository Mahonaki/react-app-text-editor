import "./styles.css";
import { SaveBtn } from "./SaveBtn"
import { useState } from "react";
import { ToggleButton } from "./ToggleBtn";

function App() {

  const [newItem, setNewItem] = useState("")

  function handleSubmit() {
      // code to go here ...
  }

  const logState = (state) => {
      console.log("Toggled:", state);
  };

  return (
    <>
      <h1 className="header">Text editor</h1>
      <section className="input-wrapper">
          <ToggleButton label="Enable settings" toggled={true} onClick={logState} />
          <textarea type="text" id="input" name="input" placeholder="Text generator" value={newItem} onChange={e => setNewItem(e.target.value)}></textarea>
          <input type="submit" id="generate-btn" className="button" name="generate" value="Generate" onSubmit={handleSubmit}></input>
      </section>
      <SaveBtn />
    </>
  )  
}

export default App;
