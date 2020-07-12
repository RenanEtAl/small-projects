import React from "react";
import "./Container.css";
import Button from "./button/Button";
import Slider from "./slider/Slider";

const Container = (props) => {
  const onChangeSlider = (event) => {
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
          <div className="row checkbox-container">checkbox component</div>
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
