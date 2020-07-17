import React, { useState, useContext } from "react";
import EventForm from "./EventForm";

const AddEvent = () => {
  const [color, setColor] = useState("");
  const [eventname, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [showtime, setShowtime] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const closeModal = () => {
    reset();
  };

  const reset = () => {
    setColor("");
    setEventName("");
    setDescription("");
    setCheckbox(false);
    setShowtime(false);
    setStartDate(new Date());
    setEndDate(new Date());
  };
  const createEvent = () => {
    
  };

  const onInputChange = (propertyName) => (event) => {
    if (propertyName === "startdate") {
      setStartDate(event);
    }
    if (propertyName === "enddate") {
      setEndDate(event);
    }
  };
  // input field
  const inputChange = (event) => {
    //console.log(event.target.value)
    setEventName(event.target.value);
  };
  // all day event input
  const onCheckBoxChange = (event) => {
    if (event.target.checked === true) {
      setShowtime(true);
      setCheckbox(true);
    } else {
      setShowtime(false);
      setCheckbox(false);
    }
  };
  // color selection
  const handleChange = (event) => {
    if (event.target.value !== "Select color") {
      setColor(event.target.value);
    } else {
      setColor("");
    }
  };

  

  return (
    <div>
      <EventForm
        modalId="add-even"
        title="Add Event"
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
        eventType={createEvent}
        colorObj={colorObj}
        buttonText="Save"
      />
    </div>
  );
};

export default AddEvent;
