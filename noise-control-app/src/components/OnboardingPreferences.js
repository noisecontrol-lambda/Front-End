import React from "react";
import { Card, Button } from "semantic-ui-react";

const OnboardingPreferences = () => {
  return (
    <div>
      <Card className="onboarding-preferences">
        <h1>Last step - set your theme here.</h1>
        <p>
          Choose what theme you'd like to start with. You can change this from
          your account at any time.
        </p>
        <form className="onboarding-preferences-form">
          <button className="theme-choice-1">Jungle</button>
          <button className="theme-choice-2">Ocean</button>
          <button className="theme-choice-3">Safari</button>
          <button className="theme-choice-4">Mountains</button>

          <Button className="onboarding-preferences-button">Submit</Button>
        </form>
      </Card>
    </div>
  );
};

export default OnboardingPreferences;
