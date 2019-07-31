import React, { useEffect, useState } from "react";
import axiosWithAuth from '../axiosWithAuth';
import PreviousSafarisCard from "./PreviousSafarisCard"

function PreviousSafaris (props) {
  console.log('prevsaf props', props);

  const [pastSessions, setPastSessions] = useState([])
  console.log('pastSessions', pastSessions);
  const [className, setClassName] = useState()

  useEffect (() => {
    axiosWithAuth
    .get('https://noise-controller-backend.herokuapp.com/api/teachers/')
    .then(res => {
      setPastSessions(res.data[0].classes[0].scores)
      setClassName(res.data[0].classes[0].name);
    })
  },[])

  return (
    <div className="class-page">
      <p>Previous Safaris for {className}!</p>
      <div className="class-stats-wrapper">
        <div className="class-stats">
          { pastSessions.map((session, i) =>
            <PreviousSafarisCard
              safaris={pastSessions}
              date={pastSessions[i].createdAt}
              score={pastSessions[i].score}
              streak={pastSessions[i].streak}
              key={i}
             />
          )}
        </div>
      </div>
    </div>
  )
}

export default PreviousSafaris
