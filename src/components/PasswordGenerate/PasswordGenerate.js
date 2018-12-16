import React from 'react';

const PasswordGenerate = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="generate_btn">
      {children}
    </button>
  );
};

export default PasswordGenerate;
