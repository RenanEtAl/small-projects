import React from "react";
import FormInput from "./form-input.components";

const BMICalculator = () => {
  const onChangeInput = () => {};
  return (
    <>
      <div className="bmi-inputs">
        <div className="inputs-fields">
          <div>
            <span className="label-unit">Unit</span>
            <div className="unit">
              <select
                name="unit"
                vlaue=""
                className="form-control form-control-sm"
              >
                <option value="metric">metric</option>
                <option value="imperial">imperial</option>
              </select>
            </div>
          </div>
          <FormInput
            type="text"
            name="heightCount"
            title={`Height (cm)`}
            value=""
            onChange={onChangeInput}
          />
          <FormInput
            type="text"
            name="heightCount"
            title={` (in)`}
            value=""
            onChange={onChangeInput}
          />
          <FormInput
            type="text"
            name="weightCount"
            title={`Weight (kg)`}
            value=""
            onChange={onChangeInput}
          />
        </div>
        <button className="button" type="submit">
          reset
        </button>
      </div>
    </>
  );
};

export default BMICalculator;
