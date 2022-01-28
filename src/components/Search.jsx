import React from "react";
import { MdSearch } from "react-icons/md";
export default function Search({ searchValue }) {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.5rem" />
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        onChange={(e) => searchValue(e.target.value)}
      />
    </div>
  );
}
