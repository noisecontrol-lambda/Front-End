import React, { useState } from "react";
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

  const [choice, setChoice] = useState();

  const handleChoice = event => {
    event.preventDefault();
    console.log(event.target.value);
    setChoice(event.target.value);
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
          <button name="theme" className="theme-choice-1" onClick={props.handleChange} value='1'>
            Jungle
          </button>
          <button name="theme" className="theme-choice-2" value='2' onClick={props.handleChange}>
            Ocean
          </button>
          <button name="theme" className="theme-choice-3" value='3' onClick={props.handleChange}>
            Safari
          </button>
          <button name="theme" className="theme-choice-4" value='4' onClick={props.handleChange}>
            Mountains
          </button>

          <Button className="onboarding-preferences-button" type="submit" onClick={props.handleSubmit}>
            Submit
          </Button>
          <Button className="back-intake-button" onClick={back}>
            Back
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default OnboardingPreferences;
