import React, { useEffect, useState } from "react";
// import axios from "axios";
import axiosWithAuth from '../axiosWithAuth';
import { Button } from 'semantic-ui-react'
import ClassButton from './ClassButton'


function Class (props) {
  props = props.teacher
  const [id, setID] = useState(0)

  const [classes, setClasses] = useState([])


  const classSelector = event => {
    setID(event.target.value)
    console.log(id);

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
    <div className="class-page">
      { classes.map((iClass, i) =>
        <ClassButton
          key={i}
          name={iClass.name}
          onClick={classSelector}
          value={`${i}`}
        />)}
        <div className="class-stats-wrapper">
          <div className="class-stats">
            <p>
              Welcome back {props.title} {props.lastName}!
            </p>
            <p>
              Class Grade : {data.grade}
            </p>
            <p>
              Class Size : {data.numberOfKids}
            </p>
            <p>
              Current Streak : {data.streak}
            </p>
          </div>
        </div>
        <Button>Begin Safari!</Button>
      </div>
    )
  }

export default Class
