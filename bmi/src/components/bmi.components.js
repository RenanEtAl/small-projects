import React , {useState} from "react";
import BMICalculator from "./bmi-calculator.components";

const BMI = () => {
    const [bmiValue, setBmiValue] = useState('0')
  return (
    <>
      <div className="calculator">
        <h3>Body Mass Index Calculator</h3>
        <div className="bmi-result-container">
          <div className="bmi-result">
            <div className="bmi-result-number">
              Body Mass Index (BMI) = {bmiValue}
            </div>
            <div className={`bmi-category`}>Underweight</div>
          </div>
        </div>
        <BMICalculator getBmiValue={setBmiValue}/>
      </div>
    </>
  );
};

export default BMI;
