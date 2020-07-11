import React from "react";
import "./Display.css";
import Button from "../container/button/Button";
import Container from "../container/Container";

const Display = () => {
  return (
    <>
      <div className="row">
        <div className='"col-12 password-display-container"'>
          <div style={{ width: "100%" }}>
            <div className="password-display">
              <input
                className="password-display-input"
                type="text"
                value="fweafjwlakjefwalk"
                readOnly
              />
            </div>

            <div className="password-description">
              <i className="fas fa-check-circle"></i> Strong Password
            </div>

            <div className="password-display-icons">
              <Button className="copy-btn" iconClass="far fa-copy" />

              <Button classname="generate-btn" iconClass="fas fa-sync-alt" />
            </div>
          </div>
        </div>
      </div>
      <Container />
    </>
  );
};

export default Display;
