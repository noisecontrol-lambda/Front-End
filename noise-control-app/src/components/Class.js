import React, { useEffect, useState } from "react";
// import axios from "axios";
import axiosWithAuth from '../axiosWithAuth';
import { Button } from 'semantic-ui-react'
import ClassButton from './ClassButton'
import { Link } from 'react-router-dom';

function Class (props) {
  // console.log('props', props.teachers);
  const currentTeacher = props.teachers[0]
  // console.log('currentTeacher', currentTeacher.classes);
  const [id, setID] = useState(0)
  const [classInfo, setClassInfo] = useState([0])
  const [classes, setClasses] = useState([])
  const [currentClass, setCurrentClass] = useState()
  const classSelector = event => {
    setID(event.target.value)
  }

  if (currentTeacher === undefined) {
    return null
  }
  // if (currentTeacher.classes === undefined) {return null}

  function DataBuffer() {
    setTimeout(function(){
      if (currentTeacher.classes === undefined) {return null} }, 2000);}
  DataBuffer();

  function DataBuffer2() {
  setTimeout(function(){ setClasses(currentTeacher.classes) }, 3000);}
  DataBuffer2();

  function DataBuffer3() {
  setTimeout(function(){ console.log('class 1', classes[0]); }, 4000);}
  DataBuffer3();

  function DataBuffer4() {
  setTimeout(function(){ setCurrentClass(classes[`${id}`]); }, 4000);}
  DataBuffer4();

  function DataBuffer5() {
  setTimeout(function(){  console.log('id', id);  }, 5000);}
  DataBuffer5();



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
            <p>Class : {currentClass.name}</p>
            <p>Class Grade : {currentClass.grade}</p>
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
