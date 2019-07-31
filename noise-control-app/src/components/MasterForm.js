import React, { useState } from "react";
import OnboardingWelcome from "./OnboardingWelcome";
import OnboardingBasic from "./OnboardingBasic";
import OnboardingIntake from "./OnboardingIntake";
import OnboardingPreferences from "./OnboardingPreferences";



function MasterForm(props) {

  const [data, setData] = useState({
    step: 1,
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

const [steps, setSteps] = useState(0);

  function nextStep () {
    setSteps(steps => steps + 1)
  };

function prevStep() {
  setSteps(steps => steps -1)
};

  const [teacher, setTeacher] = useState("");

  const handleChange = event => {
    const updatedData = { ...data, [event.target.name]: event.target.value };
    setData(updatedData);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.setTeacher([...props.teacher, data]);
    console.log(data);
  };

  return (
    <div className="master-form">
      switch(step) {
              case 1:
                  return <OnboardingWelcome
                          nextStep={nextStep}
                          handleChange = {handleChange}
                          />
              case 2:
                  return <OnboardingBasic
                          nextStep={nextStep}
                          prevStep={prevStep}
                          handleChange = {handleChange}
                          firstName={firstName}
                          lastName={lastName}
                          userName={userName}
                          email={email}
                          password={password}
                          />
              case 3:
                  return <OnboardingIntake
                          nextStep={nextStep}
                          prevStep={prevStep}
                          nameOfClass={nameOfClass}
                          grade={grade}
                          numberKids={numberKids}
                          />
              case 4:
                  return <OnboardingPreferences
                    nextStep={nextStep}
                    prevStep={prevStep}
                    theme={theme} />
              }
    </div>
  );
}

export default MasterForm;
