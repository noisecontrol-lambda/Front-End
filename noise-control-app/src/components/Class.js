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
  const [classes, setClasses] = useState([])
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
  console.log('tclasses', tClasses);
  console.log(tClasses[0]);
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
              <p>Class : </p>
              <p>Class Grade : </p>
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
