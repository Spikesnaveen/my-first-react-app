import React from "react";
import "./index.css";

const SearchItem = ({SearchItem, setSearchTerm}) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault}>
        <label htmlFor="Search">Search</label>
        <input
            id="searchItem"
            type="text"
            placeholder="searchItem"
            role="searchbox"
            required
            value={SearchItem}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    </form>
  )
}

export default SearchItem