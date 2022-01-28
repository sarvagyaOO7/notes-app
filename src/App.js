import React, { useEffect, useState } from "react";
import "./App.css";
import Notes from "./components/Notes";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import Search from "./components/Search";


function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "Note Title",
      text: "create a new note to get started...",
      date: "06/19/21",
    },
  ]);
  const [darkTheme, setDarkTheme] = useState(false);
  const [searchValue, setSearchValue] = useState("");


  const saveNote = (text, title) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      date: date.toLocaleDateString(),
      title: title,
      text: text,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes-app-data", JSON.stringify(notes));
  }, [notes]);

  // const saveNote = (text, title) => {
  //   const date = new Date();
  //   const newNote = {
  //     id: nanoid(),
  //     date: date.toLocaleDateString(),
  //     title: title,
  //     text: text,
  //   };
  //   const newNotes = [...notes, newNote];
  //   setNotes(newNotes);
  // };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  

  return (
    <div className={`${darkTheme && "dark-theme"}`}>
      <div className="App">
        <Header setDarkTheme={setDarkTheme} />
        <Search searchValue={setSearchValue} />
        <Notes
          notes={notes.filter((note) =>
            note.text.toLocaleLowerCase().includes(searchValue)
          )}
          saveNote={saveNote}
          deleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
