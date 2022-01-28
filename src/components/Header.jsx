import React from "react";
import { MdBrush } from "react-icons/md";

export default function Header({ setDarkTheme }) {
  return (
    <div className="header">
      <h1>My Notes</h1>

      <MdBrush
        className="theme-btn"
        size="1.5rem"
        onClick={() => setDarkTheme((prev) => !prev)}
      />
    </div>
  );
}

