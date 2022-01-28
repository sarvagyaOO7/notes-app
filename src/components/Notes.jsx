import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

export default function Notes({ notes, saveNote, deleteNote }) {
  return (
    <div className="notes">
      <AddNote saveNote={saveNote} />
      {notes.map((note) => (
        <Note
          title={note.title}
          text={note.text}
          date={note.date}
          id={note.id}
          key={note.id}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
}

