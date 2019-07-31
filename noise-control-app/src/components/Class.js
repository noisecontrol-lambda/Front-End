import React, { useEffect, useState } from "react";
// import axios from "axios";
import axiosWithAuth from '../axiosWithAuth';
import { Button } from 'semantic-ui-react'
import ClassButton from './ClassButton'
import PreviousSafaris from './PreviousSafaris'


function Class (props) {
  props = props.teacher
  const [id, setID] = useState(0)

  const [classes, setClasses] = useState([])


  const classSelector = event => {
    setID(event.target.value)

  }

  const [data, setData] = useState([])

  useEffect(() => {
    axiosWithAuth
      .get(`https://noise-controller-backend.herokuapp.com/api/classes`)
      .then(res => {

        setClasses(res.data)
        setData(res.data[`${id}`])
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
              <p>Class : {data.name}</p>
              <p>Class Size : {data.numberOfKids}</p>
              <p>Current Streak : {data.streak}</p>
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
