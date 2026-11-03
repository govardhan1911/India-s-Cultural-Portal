import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({
    placeholder = "Search...",
    onSearch
}) => {

    const [value, setValue] = useState("");

    const handleChange = (e) => {

        const text = e.target.value;

        setValue(text);

        if (onSearch) {
            onSearch(text);
        }
    };

    const clearSearch = () => {

        setValue("");

        if (onSearch) {
            onSearch("");
        }
    };

    return (

        <div className="search-container">

            <span className="search-icon">
                ⌕
            </span>

            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
            />

            {value && (
                <button
                    className="search-clear"
                    onClick={clearSearch}
                >
                    ×
                </button>
            )}

        </div>

    );
};

export default SearchBar;