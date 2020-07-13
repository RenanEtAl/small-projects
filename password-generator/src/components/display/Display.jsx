import React, { useState } from "react";
import "./Display.css";
import Button from "../container/button/Button";
import Container from "../container/Container";
import { generatePassword } from "../../utils/Helper";

const Display = () => {
  const [password, setPassword] = useState("");
  const [rangeValue, setRange] = useState();
  const [passwordProps, setPasswordProps] = useState();

  let pwdDescription = "";

  const setBackgroundColor = (password) => {
    // check pwd len
    if (password && password.length === 1 && password.length <= 6) {
      pwdDescription = "Weak Password";
      return "#cb473e";
    } else if (password && password.length >= 7 && password.length <= 15) {
      pwdDescription = "Good Password";
      return "#f07d58";
    } else if (password && password.length > 16) {
      pwdDescription = "Strong Password";
      return "#55a95d";
    } else {
      pwdDescription = "Weak Password";
      return "#cb473e";
    }
  };

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
        <div
          className="col-12 password-display-container"
          style={{ backgroundColor: setBackgroundColor(password) }}
        >
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
              {password && password.length > 16 ? (
                <>
                  <i className="fas fa-check-circle"></i> {pwdDescription}
                </>
              ) : (
                <>
                  <i className="fas fa-exclamation-circle"></i> {pwdDescription}
                </>
              )}
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
