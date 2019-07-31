import React from "react";
import { Card, Button } from "semantic-ui-react";

const OnboardingPreferences = props => {
  const saveAndContinue = event => {
    event.preventDefault();
    props.nextStep();
  };

  const back = event => {
    event.preventDefault();
    props.prevStep();
  };

  return (
    <div>
      <Card className="onboarding-preferences">
        <h1>Last step - set your theme here.</h1>
        <p>
          Choose what theme you'd like to start with. You can change this from
          your account at any time.
        </p>
        <form
          className="onboarding-preferences-form"
          onSubmit={props.handleSubmit}
        >
          <button className="theme-choice-1">Jungle</button>
          <button className="theme-choice-2">Ocean</button>
          <button className="theme-choice-3">Safari</button>
          <button className="theme-choice-4">Mountains</button>

          <Button className="back-intake-button" onClick={back}>
            Back
          </Button>
          <Button
            className="onboarding-preferences-button"
            onClick={saveAndContinue}
          >
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default OnboardingPreferences;
