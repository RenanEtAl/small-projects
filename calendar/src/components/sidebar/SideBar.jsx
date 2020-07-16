import React from "react";
import AddEvent from "../modal/AddEvent";

const Sidebar = (props) => {
  return (
    <div className="col-lg-3">
      <button
        className="btn btn-primary btn-black"
        data-toggle="modal"
        data-target="#add-event"
      >
        Create New Event
      </button>

      <div className="m-t-20">
        <AddEvent />
        <br />
        <div className="external-event bg-primary">Watch Movies</div>
        <div className="external-event bg-success">call friends</div>
        <div className="external-event bg-danger">eat dinner</div>
      </div>
    </div>
  );
};

export default Sidebar;
