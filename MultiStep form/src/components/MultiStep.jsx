import React, { useState } from "react";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import ProgressBar from "./ProgressBar";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem("formData")) || {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    date_of_birth: "",
    gender:"",
    phone_number:"",
    address:"",
    education_lvl:"",
    employment_status:"",
    annual_income:"",
    marital_status:"",
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    localStorage.setItem("formData" , JSON.stringify(formData))
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    // console.log(formData)
    for (const property in formData) {
      if (!formData[property]) {
        alert(`Please fill in all the required fields`);
        return;
      }
    }
    
    localStorage.removeItem("formData");
    alert("form filled successfully")
  };

  const nextStep = () => {
    setStep(step + 1);
  };
  const setPage = (num)=>{
    setStep(num)
  }

  const prevStep = () => {
    setStep(step - 1);
  };

  switch (step) {
    case 1:
      return (
        <>
        <ProgressBar setPage={setPage}/>
        <Step1
          handleInputChange={handleInputChange}
          nextStep={nextStep}
          formData={formData}
        />
        </>
      );
    case 2:
      return (
       <>
       <ProgressBar  setPage={setPage}/>
       <Step2
          handleInputChange={handleInputChange}
          prevStep={prevStep}
          nextStep={nextStep}
          formData={formData}
        /></>
      );
    case 3:
      return (<>
        <ProgressBar  setPage={setPage}/>
        <Step3
          handleInputChange={handleInputChange}
          prevStep={prevStep}
          nextStep={nextStep}
          formData={formData}
        />
        </>
      );
    case 4:
      return (<>
        <ProgressBar setPage={setPage
        }/>
        <Step4
         prevStep={prevStep}
         handleSubmit={handleSubmit}
         formData={formData}
        />
        </>
      )
    default:
      return null;
  }
};
export default MultiStepForm