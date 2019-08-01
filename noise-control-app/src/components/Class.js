import React, { useEffect, useState } from "react";
// import axios from "axios";
import axiosWithAuth from '../axiosWithAuth';
import { Button } from 'semantic-ui-react'
import ClassButton from './ClassButton'
import PreviousSafaris from './PreviousSafaris'
import { Route } from 'react-router-dom';

function Class (props) {

  const [id, setID] = useState(0)
  const [classInfo, setClassInfo] = useState([])
  const [classes, setClasses] = useState([])

  const classSelector = event => {
    setID(event.target.value)

  }

  useEffect(() => {
    axiosWithAuth
      .get(`https://noise-controller-backend.herokuapp.com/api/classes`)
      .then(res => {
        setClasses(res.data)
        setClassInfo(res.data[`${id}`])
      })
      .catch(err => {
        console.log(err);
      })
  },[id])

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
            <Button>View Previous Safaris!</Button>
          </div>
      </div>
      
      <PreviousSafaris />
    </div>
    )
  }

export default Class
