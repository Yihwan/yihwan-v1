import React from 'react';

const StyledArray = ({ array }) => (
  <div>
    [{array.map((link, idx) => (
      <span key={`${link}-${idx}`}>"{link}"{idx === array.length - 1 ? '' : ', '}</span>
    ))}]
  </div>
)

export default StyledArray;
