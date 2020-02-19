import React from 'react';

import Indicator from '../Indicator/Indicator.component';

import './Indicators.styles.scss';

const Indicators = ({ students, curStudent, updateStudent }) => {
  return (
    <div className='indicators'>
      {students.map(({ studentId }) => (
        <Indicator
          key={studentId}
          activate={studentId === curStudent.studentId}
          studentId={studentId}
          updateStudent={updateStudent}
        />
      ))}
    </div>
  );
};

export default Indicators;
