import React, { useState } from 'react';

function Dropdown({ onChange, value }) {
  const [selectedValue, setSelectedValue] = useState("");
  const [, setValidationError] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);

    // Validation logic here
    if (newValue === "") {
      setValidationError("Please select an Area of Request");
    } else {
      setValidationError("");
    }
  };

  return (
    <div className="dropdown-container">
      <select className="text-box full-width" placeholder="Area of Request" name="Dropdown" value={value} onChange={onChange} >
        <option value="">Area of Request</option>
        <option value="Hawea River (The wave)">Hawea Flat Whitewater Waterpark (The wave)</option>
        <option value="Camphill">Albert Town Campground</option>
      </select>
    </div>
  );
}

export default Dropdown;