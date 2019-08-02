import React, { useState, useEffect } from "react";
import { Button } from 'semantic-ui-react'
import ClassButton from './ClassButton'
import { Link } from 'react-router-dom';

function Class(props) {

  const { currentTeacher } = props;
  const [classes, setClasses] = useState(currentTeacher.classes || []);
  const [currentClass, setCurrentClass] = useState([])
  console.log('classes', classes);
  const [id, setID] = useState(0)
  console.log('id', id);
  const classSelector = event => {
    setID(event.target.value)
  }

  if (classes[id] === undefined) {
      return null
  }

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
              <p>Class: {classes[id].name} </p>
              <p>Grade: {classes[id].grade} </p>
              <p>Number of Students: {classes[id].numberOfKids} </p>
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
