import React, { useState } from "react";
import OnboardingWelcome from "./OnboardingWelcome";
import OnboardingBasic from "./OnboardingBasic";
import OnboardingIntake from "./OnboardingIntake";
import OnboardingPreferences from "./OnboardingPreferences";

// import useForm from "./hooks/useForm";

function MasterForm(props) {
  // const { values, handleChange, handleSubmit } = useForm();
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

  const nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  const prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
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
      <OnboardingWelcome />
      <OnboardingBasic />
      <OnboardingIntake />
      <OnboardingPreferences />
    </div>
  );
}

export default MasterForm;
