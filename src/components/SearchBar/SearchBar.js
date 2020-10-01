import React from 'react';
import './SearchBar.scss';

const SearchBar = (props) => {
  return (
    <form onSubmit={props.getWeather}>
      <div className="input-boxes">
        <input type="text" placeholder="City" name="city" />
        <input type="text" placeholder="Country" name="country" />
        <button>SUBMIT</button>
      </div>
    </form>
  );
};

export default SearchBar;
