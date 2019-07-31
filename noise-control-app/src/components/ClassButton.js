import React from "react";
import { Button } from 'semantic-ui-react'

const ClassButton = (props) => {

  return (
    <div>
      <Button onClick={props.onClick} value={props.value}>
        {props.name}
      </Button>
    </div>
  );
};

export default ClassButton;
