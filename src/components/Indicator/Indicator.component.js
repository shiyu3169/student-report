import React from 'react';

import './indicator.styles.scss';

const Indicator = ({ studentId, updateStudent, activate }) => {
  const handleClick = () => {
    updateStudent(studentId);
  };
  return (
    <span
      onClick={handleClick}
      className={`indicator ${activate ? 'active-indicator' : null}`}
    ></span>
  );
};

export default Indicator;
