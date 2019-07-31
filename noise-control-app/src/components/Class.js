import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from 'semantic-ui-react'
import ClassButton from './ClassButton'


function Class (props) {
  props = props.teacher
  const [id, setID] = useState(0)

  const [classes, setClasses] = useState([])
  console.log(classes);

  const classSelector = event => {
    setID(event.target.value)
    console.log(id);
  }

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`https://noise-controller-backend.herokuapp.com/api/classes`)
      .then(res => {
        setClasses(res.data)
        setData(res.data[`${id}`])
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
            <p>Welcome back Teacher name from login!</p>
            <p>Class : {data.name}</p>
            <p>Class Size : {data.numberOfKids}</p>
            <p>Current Streak : {data.streak}</p>
          </div>
        </div>
        <Button>Begin Safari!</Button>
      </div>
    )
  }

export default Class
