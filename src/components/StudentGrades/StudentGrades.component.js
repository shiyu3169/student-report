import React from 'react';

import StudentGrade from '../StudentGrade/StudentGrade.component';

import './StudentGrades.styles.scss';

const StudentGrades = ({ studentGrades }) => {
  if (!studentGrades || studentGrades.length === 0) {
    return <div>You don't have exam records yet.</div>;
  }
  return (
    <div className='student-grades'>
      <table>
        <thead>
          <tr>
            <th>COURSES</th>
            <th>RESULTS</th>
          </tr>
        </thead>
        <tbody>
          {studentGrades.map((grade, i) => (
            <StudentGrade key={i} grade={grade} index={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentGrades;
