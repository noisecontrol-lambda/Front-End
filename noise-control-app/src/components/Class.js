import React, { useState, useEffect } from "react";
import { Button } from 'semantic-ui-react'
import ClassButton from './ClassButton'
import { Link } from 'react-router-dom';

function Class(props) {
  const { currentTeacher } = props;
  // console.log('props', props);
  // console.log('props.teachers', props.teachers);
  // const currentTeacher = props.teachers[0] 
  console.log('currentTeacher', currentTeacher);
  const [id, setID] = useState(0)
  // const [classInfo, setClassInfo] = useState([0])
  const [classes, setClasses] = useState([])
  // const [currentClass, setCurrentClass] = useState()
  const classSelector = event => {
    setID(event.target.value)
  }

  useEffect(() => {
    console.log('current', currentTeacher);
    if (currentTeacher.length) setClasses(currentTeacher.classes);
  }, [currentTeacher]);


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

