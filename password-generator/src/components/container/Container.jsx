import React from "react";
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
  const onChangeSlider = (event) => {
    console.log(event.target.value);
  };

  const onChangeCheckBox = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="password-settings">
      <h3 className="h3">Use the slider and select from the options</h3>
      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <Slider
              min={parseInt(10)}
              max={parseInt(10)}
              step={1}
              value={10}
              defaultLength={10}
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
                disabled={
                 false
                }
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
