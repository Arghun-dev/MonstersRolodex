import React from 'react';
import './search-box.styles.css';

const SearchBox = ({placeholder, handlechange}) => (
	<input
	className="search"
    type="search"
    placeholder={placeholder}
    onChange={handlechange}
    />
)

export default SearchBox;

