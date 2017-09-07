import React, { PropTypes } from 'react';

const SearchBar = ({ onTextChange }) => (
  <div>
    <input type="text" onChange={e => onTextChange(e.target.value)} />
  </div>
);
SearchBar.propTypes = {
  onTextChange: PropTypes.func.isRequired,
};

export default SearchBar;
