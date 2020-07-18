import {
  ACTIVE_EVENTS,
  ADD_EVENT,
  GET_EVENTS,
  DELETE_EVENT,
  EDIT_EVENT,
  SELECT_EVENT,
  GET_ACTIVE_EVENTS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ACTIVE_EVENTS:
      return { ...state, activeCalendarEvents: action.payload };
    case ADD_EVENT:
      return { ...state, events: action.payload };
    case GET_EVENTS:
      return { ...state, events: action.payload };
    case GET_ACTIVE_EVENTS:
      return { ...state, activeCalendarEvents: action.payload };
    case DELETE_EVENT:
      return { ...state, events: action.payload };
    case EDIT_EVENT:
      return { ...state, events: action.payload };
    case SELECT_EVENT:
      return { ...state, events: action.payload };
    default:
      return state;
  }
};
