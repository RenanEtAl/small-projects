import React, { useContext, useEffect } from "react";

import "./Toast.css";
import AppContext from "../../context/App/appContext";
import moment from "moment";
import { useLocalStorage } from "../../hooks/storage";

import UIfx from "uifx";
import notificationSound from "../../assets/piece-of-cake.mp3";

const sound = new UIfx(notificationSound);

const Toast = () => {
  const appContext = useContext(AppContext);
  const {
    events,
    selected,
    deleteSelectedEvent,
    activeEvents,
    activeCalendarEvents,
  } = appContext;
  // notification sound
  const [getActiveEvent, setActiveEvent] = useLocalStorage("eventActive");

  useEffect(() => {
    const interval = setInterval(() => {
      addEvent();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    if (getActiveEvent && Object.keys(getActiveEvent).length) {
      sound.play();
    }
    
  }, [getActiveEvent, sound]);

  const addEvent = () => {
    if (events.length) {
      for (const event of events) {
        const startEventDate = `${moment(new Date(event.start)).format(
          "YYYY-MM-DDTHH:mm"
        )}`;
        const now = moment(new Date()).format("YYYY-MM-DDTHH:mm");
        if (now === startEventDate) {
          activeEvents(event);
          setActiveEvent(event); // notification
        }
      }
    }
  };

  const deleteEvent = (event) => {
    deleteSelectedEvent(event);
    selected({}); // clear and set it to default
  };
  return (
    <>
      <div className="notification-container notification-bottom-right">
        {activeCalendarEvents.map((e, i) => (
          <div
            key={i}
            className="notification toast"
            style={{ backgroundColor: e.backgroundColor }}
          >
            <button onClick={() => deleteEvent(e)}>X</button>
            <p className="notification-title">{e.title}</p>
            <p className="notification-subtitle">
              Overdue {moment(e.start).fromNow()}
            </p>
            <p className="notification-message">{e.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Toast;
