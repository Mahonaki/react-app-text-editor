import "./styles.css";
import { SaveBtn } from "./SaveBtn"
import { useState } from "react";
import { ToggleButton } from "./ToggleBtn";

function App() {

  const [newItem, setNewItem] = useState("")

  const handleSubmit = () => {
    // code to go here ...
    console.log("This button doesn't do anything yet :( ");
    alert("This button doesn't do anything yet :( ");
  };

  const logState = (state) => {
      console.log("Toggled:", state);
  };

  return (
    <>
      <h1 className="header">Text editor</h1>
      <section className="input-wrapper">
          <ToggleButton label="Enable settings" toggled={true} onClick={logState} />
          <textarea type="text" id="input" name="input" placeholder="Text generator" value={newItem} onChange={e => setNewItem(e.target.value)}></textarea>
          <input type="submit" id="generate-btn" className="button" name="generate" value="Generate" onClick={handleSubmit}></input>
      </section>
      <SaveBtn />
    </>
  )  
}

export default App;
