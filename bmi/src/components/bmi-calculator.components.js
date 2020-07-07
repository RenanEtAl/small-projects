import React, { useState, useEffect } from "react";
import FormInput from "./form-input.components";
import PropTypes from "prop-types";

const BMICalculator = (props) => {
  const { getBmiValue } = props;
  const [heightUnit, setHeightUnit] = useState("cm");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [unit, setUnit] = useState("Metric");
  const [count, setCount] = useState({
    heightCount: "0",
    inchesCount: "0",
    weightCount: "0",
  });
  //   const [count, setCount] = useState({
  //     data: {
  //       heightCount: "0",
  //       inchesCount: "0",
  //       weightCount: "0",
  //     },
  //   });
  const { heightCount, inchesCount, weightCount } = count;
  //const { heightCount, inchesCount, weightCount } = count.data;

  useEffect(() => {
    //console.log(unit);
    metricBMI(heightCount, weightCount);

    // eslint-disable-next-line
  }, [heightCount, weightCount]);
  const onChangeInput = (event) => {
    const { name, value } = event.target;
    // controlled to uncontrolled err
    //const { data } = count;
    // setCount({
    //   //   [name]: value,
    //   data: {
    //     ...data,
    //     [name]: value,
    //   },
    // });

    setCount((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const onSelectTag = (event) => {
    setUnit(event.target.value);
    if (event.target.value === "Metric") {
      setHeightUnit("cm");
      setWeightUnit("kg");
    } else {
      setHeightUnit("ft");
      setWeightUnit("lbs");
    }
  };

  const resetData = (event) => {
    event.preventDefault();
    setUnit("Metric");
    setCount({
      heightCount: "0",
      inchesCount: "0",
      weightCount: "0",
    });
    setHeightUnit("cm");
    setWeightUnit("kg");
    getBmiValue(0);
  };

  const metricBMI = (height, weight) => {
    if (height > 0 && weight > 0) {
      const heightInMeters = height / 100;
      const bmi = weight / Math.pow(heightInMeters, 2);
      console.log(bmi);
      getBmiValue(Math.round(bmi));
    }
  };
  return (
    <>
      <div className="bmi-inputs">
        <div className="inputs-fields">
          <div>
            <span className="label-unit">Unit</span>
            <div className="unit">
              <select
                name="unit"
                value={unit}
                onChange={onSelectTag}
                className="form-control form-control-sm"
              >
                <option value="Metric">metric</option>
                <option value="Imperial">imperial</option>
              </select>
            </div>
          </div>
          <FormInput
            type="text"
            name="heightCount"
            title={`Height (${heightUnit})`}
            value={heightCount}
            onChange={onChangeInput}
          />
          {unit === "Imperial" ? (
            <FormInput
              type="text"
              name="heightCount"
              title={` (in)`}
              value={inchesCount}
              onChange={onChangeInput}
            />
          ) : (
            ""
          )}
          <FormInput
            type="text"
            name="weightCount"
            title={`Weight (${weightUnit})`}
            value={weightCount}
            onChange={onChangeInput}
          />
        </div>
        <button className="button" type="submit" onClick={resetData}>
          reset
        </button>
      </div>
    </>
  );
};

BMICalculator.propTypes = {
  getBmiValue: PropTypes.func.isRequired,
};
export default BMICalculator;
