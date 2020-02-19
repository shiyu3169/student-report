import React from 'react';

import './StudentGrade.styles.scss';

const StudentGrade = ({ grade: { grade, course }, index }) => {
  const getLevel = grade => {
    const intGrade = parseInt(grade);
    if (intGrade >= 90) {
      return 'A';
    } else if (intGrade >= 80) {
      return 'B';
    } else if (intGrade >= 70) {
      return 'C';
    } else if (intGrade >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  };
  return (
    <tr className='student-grade'>
      <td className='course'>
        {index}. {course}
      </td>
      <td className='result'>
        <span
          className={`grade-level ${getLevel(grade) === 'F' ? 'bg-red' : null}`}
        >
          {getLevel(grade)}
        </span>
        <span className='grade-value'>({grade})</span>
      </td>
    </tr>
  );
};

export default StudentGrade;
