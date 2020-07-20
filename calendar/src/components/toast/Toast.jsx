import React, { useContext, useEffect } from "react";

import "./Toast.css";
import AppContext from "../../context/App/appContext";
import moment from "moment";

const Toast = () => {
  const appContext = useContext(AppContext);
  const { events, selected, deleteSelectedEvent } = appContext;

  return (
    <>
      <div className="notification-container notification-top-right">
        <div className="notification toast">
          <button>X</button>
          <p className="notification-title">Notification</p>
          <p className="notification-subtitle">overdue 5 mins ago</p>
          <p className="notification-message">
            this is a description that elskjfla
          </p>
        </div>
      </div>
    </>
  );
};

export default Toast;
