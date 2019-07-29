import React from 'react'


function Class (props) {

  console.log('class props', props);
  props = props.teacher

  return (
  <div>
    <p>
      Class Name: {props.title} {props.lastName}
    </p>
    <p>
      Class Grade : {props.classes[0].grade}
    </p>
    <p>
      Class Size : {props.classes[0].size}
    </p>
    <p>
      Current Size : {props.classes[0].streak}      
    </p>
  </div>
  )
}
export default Class
