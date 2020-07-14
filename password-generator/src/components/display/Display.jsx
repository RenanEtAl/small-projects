import React, { useState, useRef } from "react";
import "./Display.css";
import Button from "../container/button/Button";
import { Container } from "../container/Container";
import { generatePassword, copyToClipBoard } from "../../utils/Helper";
import Tooltip from "../container/tooltip/Tooltip";

const selectTagStyle = {
  backgroundColor: "inherit",
  color: "#506175",
  width: "20%",
  height: "auto",
  marginLeft: "-4px",
};

const Display = () => {
  const [password, setPassword] = useState("");
  const [rangeValue, setRange] = useState();
  const [passwordProps, setPasswordProps] = useState();
  // copy to clipboard func
  const passwordRef = useRef(null);

  const [tooltip, setTooltip] = useState(false);
  const [type, setType] = useState("password");

  const copyClipBoard = (event) => {
    event.preventDefault();
    copyToClipBoard(passwordRef.current);
    setTooltip(true);
    setTimeout(() => {
      setTooltip(false);
    }, 2000);
  };

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

  const onSelectTag = (event) => {
    setType(event.target.value);
  };
  return (
    <>
      <div>
        <select
          name="type"
          value={type}
          onChange={onSelectTag}
          className="form-control form-control-sm "
          style={selectTagStyle}
        >
          <option value="password">Random Password</option>
          <option value="pin">PIN</option>
        </select>
      </div>
      <div className="row">
        <div
          className="col-12 password-display-container"
          style={{ backgroundColor: setBackgroundColor(password) }}
        >
          <div style={{ width: "100%" }}>
            <div className="password-display">
              <input
                className="password-display-input"
                ref={passwordRef}
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
              <Button
                className="copy-btn"
                iconClass="far fa-copy"
                handleClick={copyClipBoard}
              />

              <Button
                classname="generate-btn"
                iconClass="fas fa-sync-alt"
                handleClick={() => generateNewPassword()}
              />
              <Tooltip
                message="Copied"
                position="left"
                displayTooltip={tooltip}
              />
            </div>
          </div>
        </div>
      </div>
      <Container
        type={type}
        setPassword={setPassword}
        setRange={setRange}
        setPasswordProps={setPasswordProps}
        passwordRef={passwordRef}
      />
    </>
  );
};

export default Display;
