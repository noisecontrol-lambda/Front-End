import React from "react";

const OnboardingBasic = () => {
  return (
    <div className="onboarding-basic">
      <h1>Let's Get Started.</h1>
      <p>First, tell us who you are and create your login info.</p>
      <form className="onboarding-basic-form">
        <input type="fname" name="fname" placeholder="First name." />

        <input type="lname" name="lname" placeholder="Last name." />

        <input type="email" name="email" placeholder="Email." />

        <input type="password" name="password" placeholder="Set password." />
        <button className="onboarding-basic-button">Submit</button>
      </form>
    </div>
  );
};

export default OnboardingBasic;
