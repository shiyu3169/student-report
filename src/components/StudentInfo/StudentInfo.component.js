import React from 'react';

import './StudentInfo.styles.scss';

const StudentInfo = ({ studentName, studentCountryImageUrl }) => {
  return (
    <div className='student-info'>
      <h4 className='title'>Exam Results</h4>
      <span
        className={`student-name ${
          studentName.length > 9 ? 'long-name' : null
        }`}
      >
        {studentName}
      </span>
      <img src={studentCountryImageUrl} alt='country' />
    </div>
  );
};

export default StudentInfo;
