import React from 'react';

import StudentImage from '../StudentImage/StudentImage.component';
import StudentInfo from '../StudentInfo/StudentInfo.component';
import StudentGrades from '../StudentGrades/StudentGrades.component';

import './Student.styles.scss';

const Student = ({ curStudent }) => {
  const {
    studentImageUrl,
    studentName,
    studentCountryImageUrl,
    studentGrades
  } = curStudent;

  return (
    <div className='student'>
      <StudentImage studentImageUrl={studentImageUrl} />
      <section>
        <StudentInfo
          studentName={studentName}
          studentCountryImageUrl={studentCountryImageUrl}
        />
        <StudentGrades studentGrades={studentGrades} />
      </section>
    </div>
  );
};

export default Student;
