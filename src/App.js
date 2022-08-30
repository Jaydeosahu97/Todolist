import { useState } from "react";
import "./App.css";
import NameCard from "./components/NameCard";
import Navigation from "./components/Navigation";

function App() {
  let [name, setName] = useState("");
  let [listOfName, setlist] = useState([]);
  function handleSubmit(e) {
    setlist([...listOfName, name]);
    setName("");
    e.preventDefault();
  }

  function deleteName(index) {
    console.log("deleteName is working" + index);
    setlist((items) => items.filter((_, i) => i !== index));
    console.log(listOfName);
  }

  // useEffect(()=>{},[listOfName])
  return (
    <div className="App">
      <Navigation />
      <h1>Todo List Manager</h1>
      <div>
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
        <div>
          <h1>List Of Names</h1>
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
    </div>
  );
}

export default App;
