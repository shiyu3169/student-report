import React, { useState, useEffect } from 'react';
import { fetchStudents, fetchGrades, fetchCourses } from './MoackedAPI';

import Card from './pages/Card.page';

import './App.scss';

function App() {
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [curStudent, setCurStudent] = useState(null);
  const [grades, setGrades] = useState([]);
  const [curGrades, setCurGrades] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCourses = async () => {
      const fetchedCourses = await fetchCourses();
      setCourses(fetchedCourses);
    };
    const getStudents = async () => {
      const fetchedStudents = await fetchStudents();
      setStudents(fetchedStudents);
      if (fetchedStudents.length > 0) setCurStudent(fetchedStudents[0]);
    };
    try {
      getCourses();
      getStudents();
    } catch (error) {
      alert('Something wrong with the server, please try again later');
      console.log(error);
    }
  }, []);

  useEffect(() => {
    // usually we can fetch grades by given student id, so we don't need to get all grades at start.
    const getGrades = async () => {
      const fetchedGrades = await fetchGrades();
      setGrades(fetchedGrades);
    };
    try {
      getGrades();
    } catch (error) {
      alert('Something wrong with the server, please try again later');
      console.log(error);
    }
  }, [students]);

  useEffect(() => {
    const getGradesByStudentId = () => {
      const studentGrades = [];
      for (let grade of grades) {
        if (curStudent.studentId === grade.studentId) {
          studentGrades.push({ course: grade.courseId, grade: grade.grade });
        }
      }
      studentGrades.map(grade => {
        for (let course of courses) {
          if (grade.course === course.courseId) {
            grade.course = course.courseName;
          }
        }
        return grade;
      });
      setCurGrades(studentGrades);
    };
    if (curStudent) {
      getGradesByStudentId();
      setLoading(false);
    }
  }, [grades, curStudent, courses]);

  const updateStudent = async studentId => {
    const fetchedStudents = await fetchStudents();
    setStudents(fetchedStudents);
    const newStudent = fetchedStudents.find(
      student => student.studentId === studentId
    );
    setCurStudent(newStudent);
  };

  if (!students || !curStudent || loading) return <div>Loading...</div>;
  return (
    <div className='app'>
      <Card
        curStudent={{ ...curStudent, studentGrades: curGrades }}
        students={students}
        updateStudent={updateStudent}
      />
    </div>
  );
}

export default App;
