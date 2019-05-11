import React from 'react';

const arrayGenerator = array => (
  array.map((link, idx) => (
    <span>"{link}"{idx === array.length - 1 ? '' : ', '}</span>
  ))
)

export default arrayGenerator;
