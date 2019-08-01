import React from "react";
import { Card, Button } from "semantic-ui-react";

const OnboardingIntake = props => {
  const saveAndContinue = event => {
    event.preventDefault();
    props.nextStep();
  };

  const back = event => {
    event.preventDefault();
    props.prevStep();
  };

  return (
    <Card className="onboarding-intake">
      <h1>Next, tell us about your classes.</h1>
      <p>Enter your class details and they'll show up in your dashboard.</p>
      <form className="onboarding-intake-form" onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="class-name"
          placeholder="Name of class."
          value={props.nameOfClass}
          onChange={props.handleChange}
        />

        <input
          type="text"
          name="grade"
          placeholder="Grade"
          value={props.grade}
          onChange={props.handleChange}
        />
        <input
          type="number"
          name="class-size"
          placeholder="Number of kids"
          value={props.numberKids}
          onChange={props.handleChange}
        />
        <Button className="back-basic-button" onClick={back}>
          Back
        </Button>
        <Button className="onboarding-intake-button" onClick={saveAndContinue}>
          Next up: preferences
        </Button>
      </form>
    </Card>
  );
};

export default OnboardingIntake;
