import React from 'react'
import { useState } from 'react'


function Class (props) {
  props = props.teacher
  const [id, setID] = useState(0)
  console.log('actual id', id);
  console.log(props.classes.length);
  function setClass1() {
    setID(0)
}
  function setClass2() {
    setID(1)
}
  function setClass3() {
    setID(2)
}

  return (
  <div>
    <button onClick={setClass1}>Class 1</button>
    <button onClick={setClass2}>Class 2</button>
    <button onClick={setClass3}>{`Class ${props.classes.length}`}</button>
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
    <button>Begin Safari!</button>
  </div>
  )
}
export default Class
