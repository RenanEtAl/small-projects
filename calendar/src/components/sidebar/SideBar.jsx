import React from "react";

const Sidebar = (props) => {
  return (
    <div className="col-lg-3">
      <button className="btn btn-primary btn-black">Create New Event</button>

      <div className="m-t-20">
        <br />
        <div className="external-event bg-primary">Watch Movies</div>
        <div className="external-event bg-success">call friends</div>
        <div className="external-event bg-danger">eat dinner</div>
      </div>
    </div>
  );
};

export default Sidebar;
