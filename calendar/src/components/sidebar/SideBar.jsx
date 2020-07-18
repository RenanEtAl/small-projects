import React, { useContext } from "react";
import AddEvent from "../modal/AddEvent";
import AppContext from "../../context/App/appContext";

const Sidebar = (props) => {
  const appContext = useContext(AppContext);

  const { events } = appContext;
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

        {events.length > 0
          ? events.map((event, index) => (
              <div
                className={`external-event bg-${event.bgColor}`}
                key={event.id + index}
              >
                {event.title}
              </div>
            ))
          : "There are no events for this date."}
      </div>
    </div>
  );
};

export default Sidebar;
