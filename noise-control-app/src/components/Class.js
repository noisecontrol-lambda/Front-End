import React, { useState } from "react";
// import axios from "axios";
// import axiosWithAuth from '../axiosWithAuth';
import { Button } from 'semantic-ui-react'
import ClassButton from './ClassButton'
import { Link } from 'react-router-dom';

function Class (props) {
  const teachersList = props.teachers[0];
  console.log(props);
  console.log('teachersList', teachersList);
  const [id, setID] = useState(0)
  const [classInfo, setClassInfo] = useState([0])
  const [classes, setClasses] = useState([])
  const classSelector = event => {
    setID(event.target.value)
  }

return (
  <div>
    <div className="class-page">
      <p>Welcome back teacher.name!</p>
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
            <p>Class : {classInfo.name}</p>
            <p>Class Size : {classInfo.numberOfKids}</p>
            <p>Current Streak : {classInfo.streak}</p>
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
