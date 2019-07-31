import React from "react";
import { Card, Button } from "semantic-ui-react";
import MasterForm from "./MasterForm";

const OnboardingWelcome = props => {
  const saveAndContinue = event => {
    event.preventDefault();
    props.nextStep();
  };

  return (
    <Card className="welcome">
      <h1>Welcome to Noise Control</h1>
      <p>
        We help managing your class a breeze so you can focus on keeping their
        attention.
      </p>
      <Button className="welcome-button" onClick={saveAndContinue}>
        Let's Go!
      </Button>
    </Card>
  );
};

export default OnboardingWelcome;
