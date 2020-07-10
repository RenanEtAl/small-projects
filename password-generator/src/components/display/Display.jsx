import React from "react";
import "./Display.css";
const Display = () => {
  return (
    <>
      <div className="row">
        <div className='"col-12 password-display-container"'>
          <div>
            <div className="password-display">
              <input className="password-display-input" type="text"></input>
            </div>

            <div className="password-description">
              <i className="fas fa-check-circle"> Strong Password</i>
            </div>

            <div className="password-display-icons"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Display;
