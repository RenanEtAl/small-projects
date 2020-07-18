import React, { useContext } from "react";
import EventForm from "./EventForm";
import AppContext from "../../context/App/appContext";


const EditEvent = () => {
  const appContext = useContext(AppContext);
  const {events, colors, selectedEvent, colorObj, editSelectedEvent} = appContext;

  const onInputChange =() => {

  }

  const handleChange =() => {

  }

  const editEvent = () => {
      
  }
  return (
    <div>
      <EventForm
        modalId="edit-event"
        title="Edit Event"
        description={description}
        closeModal={closeModal}
        eventname={eventname}
        inputChange={inputChange}
        checkbox={checkbox}
        onCheckBoxChange={onCheckBoxChange}
        showtime={showtime}
        startDate={startDate}
        endDate={endDate}
        onInputChange={onInputChange}
        color={color}
        colors={colors}
        handleChange={handleChange}
        eventType={editEvent}
        colorObj={colorObj}
        buttonText="Update"
      />
    </div>
  );
};

export default EditEvent;
