import React, { useReducer } from "react";

import AppReducer from "./appReducer";
import AppContext from "./appContext";
import { ADD_EVENT } from "../types";

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
  // add new event
  const addEvent = (event) => {
    let userEvents = [...state.events];
    userEvents.push(event);
    // persistence
    //setValue(userEvents);
    dispatch({ type: ADD_EVENT, payload: userEvents });
  };

  return (
    <AppContext.Provider
      value={{
        events: state.events,
        colors: state.colors,
        selectedEvent: state.selectedEvent,
        activeCalendarEvents: state.activeCalendarEvents,
        addEvent,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
