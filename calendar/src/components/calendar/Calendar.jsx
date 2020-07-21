import React, { useContext, useEffect } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import AppContext from "../../context/App/appContext";
import Toast from "../toast/Toast";

const Calendar = (props) => {
  const appContext = useContext(AppContext);
  const {
    events,
    getEvents,
    selected,
    getActiveEvents,
    activeCalendarEvents,
  } = appContext;

  useEffect(() => {
    getEvents();
    // eslisnt-disable-next-line
  }, [events]);
  // toast message 
  useEffect(() => {
    getActiveEvents();
    // eslisnt-disable-next-line
  }, [activeCalendarEvents]);

  const handleEventClick = (info) => {
    //console.log(info)
    // find the selected event from the events array in appContext
    const event = events.find((e) => e.id === parseInt(info.event.id, 10));
    selected(event);
    info.el.setAttribute("data-toggle", "modal");
    info.el.setAttribute("data-target", "#selection-modal");
  };
  return (
    <div className="col-lg-9">
      <div>
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          header={{
            left: "prev,next,today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,",
          }}
          events={events}
          eventClick={handleEventClick}
          eventLimit="true"
        />
      </div>

      <Toast />
    </div>
  );
};

export default Calendar;
