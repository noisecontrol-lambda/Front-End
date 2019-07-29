import React from "react";

const OnboardingBasic = () => {
  return (
    <div className="onboarding-basic">
      <h1>Let's Get Started.</h1>
      <p>Tell us a bit about yourself</p>
      <form className="onboarding-basic-form">
        <input type="fname" name="fname" placeholder="First name goes here." />

        <input type="lname" name="lname" placeholder="Last name goes here." />

        <input type="email" name="email" placeholder="Email goes here." />
      </form>
    </div>
  );
};

export default OnboardingBasic;
