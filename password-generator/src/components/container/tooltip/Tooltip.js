import React from "react";
import PropTypes from "prop-types";

const Tooltip = (props) => {
  const { message, position, displayTooltip } = props;
  return (
    <>
      {displayTooltip ? (
        <div className={`tooltip-bubble tooltip-${position}`}>
          <div className="tooltip-message">{message}</div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

Tooltip.propTypes = {
  message: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  displayTool: PropTypes.bool.isRequired,
};

export default Tooltip;
