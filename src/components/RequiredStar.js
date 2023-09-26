import React from 'react';

const RequiredStar = ({ isRequired }) => {
  return (
    <span
      style={{
        color: 'red',
        fontSize: '1.2rem',
        marginLeft: '4px',
      }}
    >
      {isRequired ? '*' : ''}
    </span>
  );
};

export default RequiredStar;
