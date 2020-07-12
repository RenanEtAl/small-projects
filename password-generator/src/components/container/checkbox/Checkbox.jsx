import React from "react";
import PropTypes from "prop-types";

const Checkbox = (props) => {
  const { label, value, checked, name, onChange, disabled } = props;
  return (
    <>
      <div className="col-md-3">
        <label className="container">
          <h2>{label}</h2>

          <input
            className="checkbox-input"
            type="checkbox"
            name={name}
            checked={checked}
            value={value}
            onChange={onChange}
            disabled={disabled}
          />
          <span
            className="checkmark"
            style={{ opacity: disabled ? "0.7" : "" }}
          ></span>
        </label>
      </div>
    </>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
