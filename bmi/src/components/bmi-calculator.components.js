import React from "react";

const BMICalculator = () => {
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
          <input type="test" />
        </div>
        <button className="button" type="submit">
          reset
        </button>
      </div>
    </>
  );
};

export default BMICalculator;
