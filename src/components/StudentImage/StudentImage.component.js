import React from 'react';

import './StudentImage.styles.scss';

const StudentImage = ({ studentImageUrl }) => {
  return (
    <div className='student-image'>
      <img src={studentImageUrl} alt='student' />
    </div>
  );
};

export default StudentImage;
