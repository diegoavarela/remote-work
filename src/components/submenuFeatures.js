import React from "react";
import imgToDo from "./images/icon-todo.svg";
import imgCalendar from "./images/icon-calendar.svg";
import imgReminders from "./images/icon-reminders.svg";
import imgPlanning from "./images/icon-planning.svg";

function SubmenuFeatures() {
  return (
    <nav className="ml-4 mt-4">
      <ul>
        <div className="flex flex-row items-center mt-2">
          <img className="h-4 w-4 " src={imgToDo} alt="" />
          <li className="pl-2">Todo List</li>
        </div>
        <div className="flex flex-row items-center mt-2">
          <img className="h-4 w-4 " src={imgCalendar} alt="" />
          <li className="pl-2">Calendar</li>
        </div>
        <div className="flex flex-row items-center mt-2">
          <img className="h-4 w-4 " src={imgReminders} alt="" />
          <li className="pl-2">Reminders</li>
        </div>
        <div className="flex flex-row items-center mt-2">
          <img className="h-4 w-4 " src={imgPlanning} alt="" />
          <li className="pl-2">Planning</li>
        </div>
      </ul>
    </nav>
  );
}

export default SubmenuFeatures;
