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
          name="nameOfClass"
          placeholder="Name of class."
          value={props.nameOfClass}
          onChange={props.handleChange}
          autoFocus
          required
        />

        <input
          type="text"
          name="grade"
          placeholder="Grade"
          value={props.grade}
          onChange={props.handleChange}
          required
        />
        <input
          type="number"
          name="numberOfKids"
          placeholder="Number of kids"
          value={Number(props.numberOfKids) || ''}
          onChange={props.handleChange}
          required
        />

        <Button className="onboarding-intake-button" onClick={saveAndContinue}>
          Next up: preferences
        </Button>
        <Button className="back-basic-button" onClick={back}>
          Back
        </Button>
      </form>
    </Card>
  );
};

export default OnboardingIntake;
