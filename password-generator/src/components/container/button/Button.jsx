import React from "react";
import PropTypes from "prop-types";
const Button = (props) => {
  const { label, classname, iconClass, handleClick } = props;
  return (
    <>
      <button className={classname} label={label} onClick={handleClick}>
        <i className={iconClass}></i> label={label}
      </button>
    </>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  classname: PropTypes.string,
  iconClass: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
