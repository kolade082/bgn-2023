import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

const events = [
  {
    title: "Meeting with us",
    start: "2023-10-03T10:00:00",
    end: "2023-10-03T12:00:00",
    location: "123 main street",
  },
];

function Calendar() {
  return (
    <div>
      <FullCalendar
        plugins={[timeGridPlugin, bootstrap5Plugin]}
        themeSystem="bootstrap5"
        initialView="timeGridWeek"
        weekends={true}
        events={events}
        eventContent={renderEventContent}
        slotDuration="00:30:00" 
        slotLabelInterval="01:00:00" 
        slotMinTime="00:00:00" 
        slotMaxTime="24:00:00" 
        allDaySlot={false}
      />
    </div>
  );
}
export default Calendar;

function renderEventContent(eventInfo) {
  return (
    <>
      <div>
        <i>{eventInfo.event.title}</i>
      </div>
      <div>
        <b>{eventInfo.timeText}</b>
      </div>
      <div>
        <b>{eventInfo.event.extendedProps.location}</b>
      </div>
    </>
  );
}
