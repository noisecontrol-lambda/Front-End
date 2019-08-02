import React, { useState } from "react";
import OnboardingWelcome from "./OnboardingWelcome";
import OnboardingBasic from "./OnboardingBasic";
import OnboardingIntake from "./OnboardingIntake";
import OnboardingPreferences from "./OnboardingPreferences";
import auth from "../authentication";

function MasterForm(props) {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    nameOfClass: "",
    grade: "",
    numberOfKids: "",
    theme: "",
    choice: ""
  });

  const [errorMsg, setErrorMsg] = useState('');

  const [steps, setSteps] = useState(1);

  function nextStep() {
    setSteps(steps => steps + 1);
  }

  function prevStep() {
    setSteps(steps => steps - 1);
  }

  const handleChange = event => {
    event.preventDefault();
    const updatedData = { ...data, [event.target.name]: event.target.value };
    console.log(
      "handle change",
      event.target.name,
      event.target.value,
      "updated data",
      updatedData
    )
    setData(updatedData);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.setTeachers([...props.teachers, data]);
    console.log('data', data);
    if (steps === 4) handleRegistration();
  };

  const handleRegistration = async () => {
    console.log('Submitting registration');
    const user = {
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      theme: data.theme
    }
    const classRoom = {
      name: data.nameOfClass,
      grade: data.grade,
      numberOfKids: Number(data.numberOfKids),
      theme: data.theme
    }
    props.register({user, classRoom })
      .then(response => {
        if (!localStorage.getItem('userToken')) {
          setErrorMsg('Registration error. Please check your info and try again.');
        } else {
          props.history.push('/class')
        }
      })
      .catch(error => {
        setErrorMsg(error);
      });
  }

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
            numberOfKids={data.numberOfKids}
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
            data={data}
            setData={setData}
            choice={data.choice}
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
