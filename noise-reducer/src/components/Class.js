import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'


function Class (props) {
  props = props.teacher
  const [id, setID] = useState(0)
  console.log('classes', props.classes);
  function setClass1() {
    setID(0)
  }
  function setClass2() {
    setID(1)
  }
  function setClass3() {
    setID(2)
  }
  function setClass4() {
    setID(3)
  }

  const newClass = {
    'grade': 'Fourth',
    'size': 3,
    'streak': 7
  }
  function addClass() {
    props.classes.push(newClass);
    console.log(props.classes);
  }

  return (
  <div className="class-page">
    <Button onClick={setClass1}>Welcome!</Button>
    <Button onClick={setClass1}>Class 1</Button>
    <Button onClick={setClass2}>Class 2</Button>
    <Button onClick={setClass3}>Class 3</Button>
    <Button onClick={setClass4}>Class 4</Button>
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
    <Button onClick={addClass}>Add Class 4!</Button>
    <Button>Begin Safari!</Button>
  </div>
  )
}
export default Class
