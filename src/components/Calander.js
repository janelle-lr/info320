// // Calendar.js TESTING HERE

// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'; // Import the default CSS

// function MyCalendar() {
//   const [date, setDate] = useState(new Date());

//   const handleDateChange = (newDate) => {
//     setDate(newDate);
//   };

//   return (
//     <div>
//       <h1>Interactive Calendar</h1>
//       <Calendar
//         onChange={handleDateChange}
//         value={date}
//       />
//       <p>Selected date: {date.toDateString()}</p>
//     </div>
//   );
// }

// export default MyCalendar;

// DatePicker.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function MyDatePicker() {
  const [startDate, setStartDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          onClick={() => setShowCalendar(!showCalendar)}
          placeholder="Selected date DD/MM/YYYY"
          readOnly
        />
        {showCalendar && (
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            dateFormat="MM/dd/yyyy"
            isClearable
            inline
          />
        )}
      </div>
      <br></br>
      {startDate && <p>Selected date: {startDate.toDateString()}</p>}
    </div>
  );
}

export default MyDatePicker;



