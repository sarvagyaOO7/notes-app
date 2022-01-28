import React, { useState } from "react";
import { MdSave } from "react-icons/md";

export default function AddNote({ saveNote }) {
  const [titleValue, setTitleValue] = useState("");
  const [noteValue, setNoteValue] = useState("");

  const limit = 200;

  const handleTitleChange = (e) => {
    if (limit - e.target.value.length >= 0) {
      setTitleValue(e.target.value);
    }
  };

  const handleChange = (e) => {
    if (limit - e.target.value.length >= 0) {
      setNoteValue(e.target.value);
      //   console.log("text");
    }
  };

  const handleSave = () => {
    if (noteValue.trim().length > 0) {
      saveNote(noteValue, titleValue);
    } else {
      alert("note cannot be blank");
    }
    setTitleValue("");
    setNoteValue("");
  };
  return (
    <div className="add note">
      <input
        className="add-input"
        placeholder="Title"
        value={titleValue}
        onChange={handleTitleChange}
      />

      <textarea
        placeholder="Take a note..."
        cols="8"
        rows="5"
        value={noteValue}
        onChange={handleChange}
      />
      <div className="footer">
        <span>{limit - noteValue.length} remaining</span>
        <MdSave className="save-btn" size="1.3rem" onClick={handleSave} />
      </div>
    </div>
  );
}
