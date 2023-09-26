// import React, { useState } from 'react';

// function Dropdown() {
//   const [selectedValue, setSelectedValue] = useState('');

//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//   };

//   return (
//     <div className='dropdown-container'>
//       {/* <label htmlFor="dropdown">Area of Request</label> */}
//       <select id="dropdown" value={selectedValue} 
//        onChange={handleChange}>
//         <option value="">Area of Request</option>
//         <option value="Hawea River (The wave)"> Hawea River (The wave)</option>
//         <option value="Camphill"> Camphill</option>
//       </select>
//       {/* <p>Selected option: {selectedValue}</p> */}
//     </div>
//   );
// }

// export default Dropdown;


import React, { useState } from 'react';

function Dropdown() {
  const [selectedValue, setSelectedValue] = useState("");
  const [validationError, setValidationError] = useState("");

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
      {/* <label htmlFor="dropdown">Area of Request</label> */}
      <select id="dropdown" value={selectedValue} onChange={handleChange}>
        <option value="">Area of Request</option>
        <option value="Hawea River (The wave)">Hawea River (The wave)</option>
        <option value="Camphill">Camphill</option>
      </select>
      {validationError && <p className="error-message">{validationError}</p>}
    </div>
  );
}

export default Dropdown;
