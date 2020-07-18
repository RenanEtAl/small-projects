import React, { useReducer } from "react";

import AppReducer from "./appReducer";
import AppContext from "./appContext";
import { ADD_EVENT, GET_EVENTS, SELECT_EVENT } from "../types";
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
  const [selectedItem, setSelectedItem] = useLocalStorage("selectedEvent");

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

  return (
    <AppContext.Provider
      value={{
        events: state.events,
        colors: state.colors,
        selectedEvent: state.selectedEvent,
        activeCalendarEvents: state.activeCalendarEvents,
        addEvent,
        getEvents,
        selected,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
