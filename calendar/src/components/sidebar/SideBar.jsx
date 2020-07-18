import React, { useContext } from "react";
import AddEvent from "../modal/AddEvent";
import AppContext from "../../context/App/appContext";
import EditEvent from "../modal/EditEvent";
import SelectModal from "../modal/SelectModal";

const Sidebar = (props) => {
  const appContext = useContext(AppContext);

  const { events, selected } = appContext;
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
        <br />
        {events.length > 0
          ? events.map((event) => (
              <div
                className={`external-event bg-${event.bgColor}`}
                key={event.id}
                onClick={() => selected(event)}
                data-toggle="modal"
                data-target="#selection-modal"
              >
                {event.title}
              </div>
            ))
          : "There are no events for this date"}
      </div>
      <AddEvent />
      <EditEvent />
      <SelectModal />
    </div>
  );
};

export default Sidebar;
