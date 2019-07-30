import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from 'semantic-ui-react'


function Class (props) {
  props = props.teacher
  const [id, setID] = useState(0)

  const classSelector = event => {
    setID(event.target.value)
  }

  const [data, setData] = useState([])


  const [teacher, setTeacher] = useState()
  const [currentClass, setCurrentClass] = useState()

  useEffect(() => {
    axios.get(`https://noise-controller-backend.herokuapp.com/api/classes`)
      .then(res => {
        setData(res.data[`${id}`])
      })
  },[id])


  return (
  <div className="class-page">
    <Button onClick={classSelector} value='0'>Class 1</Button>
    <Button onClick={classSelector} value='1'>Class 2</Button>
    <Button onClick={classSelector} value='2'>Class 3</Button>
    <div className="class-stats-wrapper">
      <div className="class-stats">
        <p>
          Class Name: {props.title} {props.lastName}
        </p>
        <p>
          Class Grade : {props.classes[`${id}`].grade}
        </p>
        <p>
          Class Size : {props.classes[`${id}`].size}
        </p>
        <p>
          Current Streak : {props.classes[`${id}`].streak}
        </p>
      </div>
    </div>
    <Button>Begin Safari!</Button>
  </div>
  )
}
export default Class
