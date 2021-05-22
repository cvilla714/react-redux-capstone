import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import filter from '../../redux/actions/filterAction';

const FilterByName = ({ filter, className }) => {
  const [filtering, setFiltering] = useState(false);
  const value = useRef('');

  const closeFilter = (e) => {
    if (e.keyCode === 27) {
      setFiltering((prev) => !prev);
    }
  };

  const handleChange = (e) => {
    filter(e.target.value);
  };

  const handleClick = () => {
    setFiltering(!filtering);
  };

  const renderFilterInput = () => {
    if (!filtering) {
      return (
        <button
          onClick={handleClick}
          onKeyDown={closeFilter}
          type="button"
          className="btn btn-dark btn-block"
        >
          <i className="fas fa-search fa-md">Filtering</i>
        </button>
      );
    }
    return (
      <input
        ref={value}
        onChange={handleChange}
        placeholder="Type the name"
        size="sm"
        className={className}
      />
    );
  };
  return renderFilterInput();
};

export default connect(null, { filter })(FilterByName);
