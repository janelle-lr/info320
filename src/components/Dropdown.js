import React, { useState } from 'react';

function Dropdown() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className='dropdown-container'>
      {/* <label htmlFor="dropdown">Area of Request</label> */}
      <select id="dropdown" value={selectedValue} onChange={handleChange}>
        <option value="">Area of Request </option>
        <option value="Hawea River (The wave)"> Hawea River (The wave)</option>
        <option value="Camphill"> Camphill</option>
        <option value="Albert CHECK"> Albert Name - CHECK W CONTACT LADS</option>
      </select>
      {/* <p>Selected option: {selectedValue}</p> */}
    </div>
  );
}

export default Dropdown;
