import React, { useState } from "react";
import BMICalculator from "./bmi-calculator.components";

const BMI = () => {
  const [bmiValue, setBmiValue] = useState("0");

  const getBmiClass = (bmi) => {
    if (bmi >= 1 && bmi <= 18.5) return "Underweight";
    if (bmi >= 18.6 && bmi <= 24.9) return "Normal Weight";
    if (bmi >= 25 && bmi <= 29.9) return "Overweight";
    if (bmi >= 30) return "Obese";
  };

  const bmiCategory = getBmiClass(bmiValue);

  const bmiBackgroundColor = bmi => {
    if (bmi >= 1 && bmi <= 18.5) return "#FED88B";
    if (bmi >= 18.6 && bmi <= 24.9) return "#80ff80";
    if (bmi >= 25 && bmi <= 29.9) return "#FF7F50";
    if (bmi >= 30) return "#FF5411";
  };
  
  let bmiClass = ''
  if(bmiValue > 0 && bmiCategory) {
      bmiClass = bmiCategory.split(' ')[0].toLowerCase() // match the category to app.css class names

  }



  return (
    <>
      <div className="calculator"
      style={{backgroundColor:bmiBackgroundColor(bmiValue)}}>
        <h3>Body Mass Index Calculator</h3>
        <div className="bmi-result-container">
          <div className="bmi-result">
            <div className="bmi-result-number">
              Body Mass Index (BMI) = {bmiValue}
            </div>
            <div className={`bmi-category ${bmiClass}`}>{bmiCategory}</div>
          </div>
        </div>
        <BMICalculator getBmiValue={setBmiValue} />
      </div>
    </>
  );
};

export default BMI;
