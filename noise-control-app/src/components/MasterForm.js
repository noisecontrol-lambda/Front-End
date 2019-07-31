import React, { useState } from "react";
import OnboardingWelcome from "./OnboardingWelcome";
import OnboardingBasic from "./OnboardingBasic";
import OnboardingIntake from "./OnboardingIntake";
import OnboardingPreferences from "./OnboardingPreferences";

function MasterForm(props) {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    className: "",
    grade: "",
    numberKids: "",
    theme: ""
  });

  const [steps, setSteps] = useState(1);

  function nextStep() {
    setSteps(steps => steps + 1);
  }

  function prevStep() {
    setSteps(steps => steps - 1);
  }

  const handleChange = event => {
    const updatedData = { ...data, [event.target.name]: event.target.value };
    setData(updatedData);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.setTeacher([...props.teacher, data]);
    console.log(data);
  };

  function wizard() {
    switch (steps) {
      case 1:
        return (
          <OnboardingWelcome nextStep={nextStep} handleChange={handleChange} />
        );
      case 2:
        return (
          <OnboardingBasic
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            firstName={data.firstName}
            lastName={data.lastName}
            userName={data.userName}
            email={data.email}
            password={data.password}
          />
        );
      case 3:
        return (
          <OnboardingIntake
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            nameOfClass={data.nameOfClass}
            grade={data.grade}
            numberKids={data.numberKids}
          />
        );
      case 4:
        return (
          <OnboardingPreferences
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            theme={data.theme}
          />
        );
      default:
        return (
          <OnboardingWelcome nextStep={nextStep} handleChange={handleChange} />
        );
    }
  }

  return <div className="master-form">{wizard()}</div>;
}

export default MasterForm;
