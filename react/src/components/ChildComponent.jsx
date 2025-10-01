import React from 'react';

const ChildComponent = ({ onButtonClick }) => {
  return (
    <button onClick={onButtonClick}>
      Click me
    </button>
  );
};

export default ChildComponent;
