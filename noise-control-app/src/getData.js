import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetData () {

  const [data, setData] = useState([])
  const [teacher, setTeacher] = useState()
  const [currentClass, setCurrentClass] = useState()

  useEffect(() => {
    axios.get(`https://noise-controller-backend.herokuapp.com/api/teachers`)
      .then(res => {
        console.log(res.data[0]);
      })
  },[])

  return (
    <div></div>
  )
}
