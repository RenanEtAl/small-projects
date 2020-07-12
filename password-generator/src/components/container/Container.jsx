import React, { useState } from "react";
import "./Container.css";
import Button from "./button/Button";
import Slider from "./slider/Slider";
import Checkbox from "./checkbox/Checkbox";

const CHECKBOX_LIST = [
  {
    id: 0,
    name: "uppercase",
    label: "Uppercase",
    isChecked: true,
  },
  {
    id: 1,
    name: "lowercase",
    label: "Lowercase",
    isChecked: true,
  },
  {
    id: 2,
    name: "symbols",
    label: "Symbols",
    isChecked: true,
  },
  {
    id: 3,
    name: "numbers",
    label: "Numbers",
    isChecked: true,
  },
];

const Container = (props) => {
  const [rangeValue, setRangeValue] = useState(12);
  const [checkbox, setCheckBox] = useState({
    uppercase: true,
    lowercase: true,
    symbols: true,
    numbers: true,
  });
  const onChangeSlider = (event) => {
    //console.log(event.target.value);
    setRangeValue(event.target.value);
  };

  const onChangeCheckBox = (event) => {
    //console.log(event.target.value);
    let { name, checked } = event.target;

    CHECKBOX_LIST.map((checkbox) => {
      if (checkbox.name === name) {
        checkbox.isChecked = checked;
        setCheckBox({ [name]: checkbox.isChecked })
      }

      return "";
    });
    console.log(CHECKBOX_LIST);
  };
  return (
    <div className="password-settings">
      <h3 className="h3">Use the slider and select from the options</h3>
      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <Slider
              min={1}
              max={100}
              step={1}
              value={parseInt(rangeValue, 10)}
              defaultLength={parseInt(rangeValue, 10)}
              onChangeValue={onChangeSlider}
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="row checkbox-container">
            {CHECKBOX_LIST.map((checkbox) => (
              <Checkbox
                key={checkbox.id}
                name={checkbox.name}
                checked={checkbox.isChecked}
                label={checkbox.label}
                value={checkbox.isChecked}
                onChange={onChangeCheckBox}
                disabled={false}
              />
            ))}
          </div>
        </div>
      </div>
      <br />

      <div className="text-center">
        <div className="row">
          <div className="col-md-12">
            <Button className="btn password-btn" label="Copy Password" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
