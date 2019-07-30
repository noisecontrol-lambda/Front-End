import React from "react";
import { Card, Button } from "semantic-ui-react";

const OnboardingIntake = () => {
  return (
    <Card className="onboarding-intake">
      <h1>Next, tell us about your classes.</h1>
      <p>Enter your class details and they'll show up in your dashboard.</p>
      <form className="onboarding-intake-form">
        <input type="text" name="class-name" placeholder="Name of class." />

        <input type="text" name="grade" placeholder="Grade" />

        <Button className="onboarding-basic-button">
          Next up: preferences
        </Button>
      </form>
    </Card>
  );
};

export default OnboardingIntake;
