import { useState } from "react";
import "./App.css";
import NameCard from "./components/NameCard";
import Navigation from "./components/Navigation";

function App() {
  let [name, setName] = useState("");
  let [listOfName, setlist] = useState([]);
  /*
  This method will handle submission of form. It will prevent auto submit of form.
  It will prevent null values and alert the user about it.
  It will update the list when valid value is passed.
  */
  function handleSubmit(e) {
    if(name==='')
      alert(`name text field can't be empty`);
    else{
      setlist([...listOfName, name]);
      setName("");
    }
    e.preventDefault();
  }
  // This deleteName method will delete the respective name from the list.
  function deleteName(index) {
    console.log("deleteName is working" + index);
    setlist((items) => items.filter((_, i) => i !== index));
    console.log(listOfName);
  }

  return (
    <div>
      <Navigation />
      <div className="App">
      <h1>Todo List Manager</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            id='name'
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button id="submitBtn" style={{ borderRadius: "10px" }}>Add</button>
        </form>
        <hr/>
      </div>
        <div className="myList">
          <h1>List Of Names</h1>
          <hr/>
          {listOfName.map((val, index) => (
            <NameCard
              name={val}
              index={index}
              doDelete={deleteName}
              key={index}
            />
          ))}
        </div>
    </div>
  );
}

export default App;
