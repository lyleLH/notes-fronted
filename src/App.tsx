import React, { useEffect, useState } from "react";
import axios from "axios";
import Note from "./components/Note";

function App() {
  console.log(
    "app main"
  )
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const hook = () => {
    console.log("effect11111");
    axios.get("http://localhost:3001/notes").then((response) => {
      console.log("promise fulfilled",response.data);
      setNotes(response.data);
    });
  };

  useEffect(hook, []);

  console.log("render", notes.length, "notes");

  return (
    <div className="App">
      {notes.map((noteIn) => (
        <Note note={noteIn} />
      ))}
    </div>
  );
}

export default App;
