import React, { useEffect, useState } from "react";
// import axios from "axios";
import axiosWithAuth from '../axiosWithAuth';
import { Button } from 'semantic-ui-react'
import ClassButton from './ClassButton'
import { Link } from 'react-router-dom';

function Class (props) {
  console.log('props', props);
  console.log('props.teachers', props.teachers);
  const currentTeacher = props.teachers[0]
  console.log('currentTeacher', currentTeacher);

  const [id, setID] = useState(0)
  const [classInfo, setClassInfo] = useState([0])
  const [classes, setClasses] = useState([
  //   {"name": "Morning Kindergarten",
  //   "teacherID": 1,
  //   'theme': 'safari',
  //   'grade': 'Kindergarten',
  //   'numberOfKids': 15,
  //   'streak': 3},
  //   {"name": "Afternoon Kindergarten",
  //   "teacherID": 1,
  //   'theme': 'ocean',
  //   'grade': 'Kindergarten',
  //   'numberOfKids': 22,
  //   'streak': 4},
   ])
  console.log('classes', classes);
  const [currentClass, setCurrentClass] = useState()

  const classSelector = event => {
    setID(event.target.value)
  }

  if (currentTeacher === undefined) {
    return null
  }
  if (currentTeacher.classes === undefined) {
    return null
  }

  const tClasses = currentTeacher.classes;
  if (classes.length === 0) {
    setClasses(tClasses)
  }
  console.log('classes', classes);

  console.log('tclasses', tClasses);
  console.log('tclasses0', tClasses[0]);
  // setClasses(tClasses)



  return (
    <div>
      <div className="class-page">
        <p>Welcome back {currentTeacher.title} {currentTeacher.lastName}!</p>
        <div className="class-buttons">
          { classes.map((iClass, i) =>
            <ClassButton
              key={i}
              name={iClass.name}
              onClick={classSelector}
              value={`${i}`}
            />)}
          </div>
          <div className="class-stats-wrapper">
            <div className="class-stats">
              <p>Class : {classes.name} </p>
              {/* <p>Grade :{classes[0].grade} </p> */}
              {/* <p>Number of Students :{classes[0].numberOfKids} </p> */}
            </div>
          </div>
          <div className="class-buttons">
            <Button>Begin Safari!</Button>
            <Link to="/class/previoussafaris">
            <Button>View Previous Safaris!</Button>
          </Link>
        </div>
      </div>
    </div>
  )

}

export default Class
