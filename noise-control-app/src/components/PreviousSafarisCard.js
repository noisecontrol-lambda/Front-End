import React from "react";

const PreviousSafarisCard = (props) => {

  return (
    <div className="score-card">
      <p>Date: {props.date}</p>
      <p>Score: {props.score}</p>
      <p>Streak: {props.streak}</p>
    </div>
  );
};

export default PreviousSafarisCard;
