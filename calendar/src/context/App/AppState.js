import React, { useReducer } from "react";

import _ from "lodash";
import AppReducer from "./appReducer";
import AppContext from "./appContext";
import {
  ADD_EVENT,
  GET_EVENTS,
  SELECT_EVENT,
  EDIT_EVENT,
  DELETE_EVENT,
  ACTIVE_EVENTS,
  GET_ACTIVE_EVENTS,
} from "../types";
import { useLocalStorage } from "../../hooks/storage";

const AppState = (props) => {
  const initialState = {
    events: [],
    colors: ["Primary", "Success", "Info", "Warning", "Danger"],
    selectedEvent: {},
    activeCalendarEvents: [],
    colorObj: {
      primary: "#0275d8",
      success: "#5cb85c",
      info: "#5bc0de",
      warning: "#f0ad4e",
      danger: "#d9534f",
    },
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  // custom storage hook
  const [item, setValue] = useLocalStorage("events"); // events as key
  const [, setSelectedItem] = useLocalStorage("selectedEvent");
  // active events
  const [active, setActiveEvents] = useLocalStorage("activeCalendarEvents");
  const [, setActiveEvent] = useLocalStorage("eventActive");

  // add new event
  const addEvent = (event) => {
    let userEvents = [...state.events];
    userEvents.push(event);
    // persistence
    setValue(userEvents);
    dispatch({ type: ADD_EVENT, payload: userEvents });
  };

  // get all events from local storage
  const getEvents = () => {
    if (item) {
      dispatch({ type: GET_EVENTS, payload: item });
    }
  };
  // set selected events
  const selected = (event) => {
    setSelectedItem(event);
    dispatch({ type: SELECT_EVENT, payload: event });
  };
  // edit event
  const editSelectedEvent = (event) => {
    const newEvents = item.map((e) => {
      //map through item array from useLocalStorage
      // if the id in useLocalStorage matches with the event id that is being edited
      // then replace it with the new event
      return e.id === event.id ? event : e;
    });
    setValue(newEvents);
    dispatch({ type: EDIT_EVENT, payload: newEvents });
  };
  // delete selected event
  const deleteSelectedEvent = (event) => {
    // normal delete
    const newEventsArray = item.filter((e) => e.id !== event.id);
    setValue(newEventsArray);
    dispatch({ type: DELETE_EVENT, payload: newEventsArray });
    // delete toast active calendar event
    const activeEventsArray = active.filter((e) => e.id !== event.id);
    setActiveEvents(activeEventsArray);
    dispatch({ type: ACTIVE_EVENTS, payload: activeEventsArray });

    setActiveEvent({}); // notification sound
  };

  // set due events
  const activeEvents = (event) => {
    let calendarEvents = [...state.activeCalendarEvents];
    calendarEvents.push(event);
    // check to make sure there's no duplicate
    const activeEventsArray = _.uniqBy(calendarEvents, "id");
    setActiveEvents(activeEventsArray);
    dispatch({ type: ACTIVE_EVENTS, payload: activeEventsArray });
  };
  // get the active calendar events 
  // persist toast message
  const getActiveEvents = () => {
    if (active) {
      dispatch({ type: GET_ACTIVE_EVENTS, payload: active });
    }
  };
  return (
    <AppContext.Provider
      value={{
        events: state.events,
        colors: state.colors,
        selectedEvent: state.selectedEvent,
        activeCalendarEvents: state.activeCalendarEvents,
        colorObj: state.colorObj,
        addEvent,
        getEvents,
        selected,
        editSelectedEvent,
        deleteSelectedEvent,
        activeEvents,
        getActiveEvents,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
