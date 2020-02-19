import React from 'react';

import Student from '../components/Student/Student.component';
import Indicators from '../components/Indicators/Indicators.component';

import './Card.styles.scss';

const Card = ({ students, curStudent, updateStudent }) => {
  if (!curStudent) return <div>Loading...</div>;
  return (
    <div className='card'>
      <Student curStudent={curStudent} />
      <Indicators
        students={students}
        updateStudent={updateStudent}
        curStudent={curStudent}
      />
    </div>
  );
};

export default Card;
