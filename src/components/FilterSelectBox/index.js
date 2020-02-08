import React, { useState } from 'react';
import './style.css';

function FilterSelectBox({ width, placeholder, datasource }) {

  const [closed, setClosed] = useState(true);

  const dropDownStyle = {
    height: datasource.length * 48,
    bottom: datasource.length * 48 * (-1),
  };

  const closeDropdown = () => setClosed(!closed);

  return (
      <div className='filter select-box' style={{width}}>
        <label
          className='placeholder'
          onClick={closeDropdown}>
            {placeholder}
        </label>
        {
          !closed ?
          <div className='dropdown' style={dropDownStyle}>
            {
              datasource.map(option =>
                <div
                  className='dropdown-item'
                  key={option.value}
                  value={option.value}>
                    <input type='checkbox'></input>
                    {option.text}
                </div>
              )
            }
          </div> : null
        }
      </div>
  );
}

export default FilterSelectBox;