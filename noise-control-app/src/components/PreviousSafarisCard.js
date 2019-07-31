import React from "react";
import { Card } from 'semantic-ui-react'

const PreviousSafarisCard = (props) => {
  console.log('saf card', props);
  return (
    <div className="score-card">
      <p>Date: {props.date}</p>
      <p>Score: {props.score}</p>
      <p>Streak: {props.streak}</p>
    </div>
  );
};

export default PreviousSafarisCard;
