import React from "react";

const SearchBox = ({ value, searchChange }) => {
    return <div className="pa2">
        <input
            className="pa3 ba b--green bg-light-green"
            type="text"
            placeholder="search Robots"
            value={value}
            onChange={searchChange} />
    </div>
}
export default SearchBox;