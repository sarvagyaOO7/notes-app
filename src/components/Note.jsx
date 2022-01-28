import React from "react";
import { MdDelete } from "react-icons/md";

export default function Note({ title, text, date, id, deleteNote }) {
  return (
    <div className="note">
      <input
        className="title-input"
        value={title}
        placeholder="Title"
        onChange={(e) => e.target.value}
      />

      <span>{text}</span>
      <div className="footer">
        <span>{date} </span>
        
        <MdDelete
          className="delete-btn"
          size="1.3rem"
          onClick={() => deleteNote(id)}
        />
      </div>
    </div>
  );
}
