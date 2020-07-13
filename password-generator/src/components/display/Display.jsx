import React, { useState } from "react";
import "./Display.css";
import Button from "../container/button/Button";
import Container from "../container/Container";
import { generatePassword } from "../../utils/Helper";

const Display = () => {
  const [password, setPassword] = useState("");
  const [rangeValue, setRange] = useState();
  const [passwordProps, setPasswordProps] = useState();

  const generateNewPassword = () => {
    const pwd =
      rangeValue > 3
        ? generatePassword(passwordProps, rangeValue)
        : generatePassword(passwordProps, 3);
    setPassword(pwd);
  };
  return (
    <>
      <div className="row">
        <div className="col-12 password-display-container">
          <div style={{ width: "100%" }}>
            <div className="password-display">
              <input
                className="password-display-input"
                type="text"
                value={password}
                readOnly
              />
            </div>

            <div className="password-description">
              <i className="fas fa-check-circle"></i> Strong Password
            </div>

            <div className="password-display-icons">
              <Button className="copy-btn" iconClass="far fa-copy" />

              <Button
                classname="generate-btn"
                iconClass="fas fa-sync-alt"
                handleClick={() => generateNewPassword()}
              />
            </div>
          </div>
        </div>
      </div>
      <Container
        setPassword={setPassword}
        setRange={setRange}
        setPasswordProps={setPasswordProps}
      />
    </>
  );
};

export default Display;
