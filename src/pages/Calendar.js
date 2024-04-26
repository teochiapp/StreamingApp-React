import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import { CgClose } from "react-icons/cg";
import { v4 as uuidv4 } from 'uuid';

function CalendarComp() {
  const [events, setEvents] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState(null); // Para saber cuál evento está seleccionado

  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    if (storedEvents) {
      const parsedEvents = JSON.parse(storedEvents).map((event) => ({
        id: event.id || uuidv4(),
        title: event.titulo,
        start: new Date(event.startDate),
        end: new Date(event.endDate),
      }));
      setEvents(parsedEvents);
    }
  }, []);

  const localizer = dayjsLocalizer(dayjs);

  const handleDeleteEvent = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    setEvents(updatedEvents);
  };

  return (
    <CalendarContainer>
       <Header />
      <Calendar
        localizer={localizer}
        events={events}
        views={["month", "agenda"]}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "80vh", width: "85vw" }}
        components={{
          event: ({ event }) => (
            <EventContainer onClick={() => setSelectedEventId(event.id)}> 
              {event.title}
              {selectedEventId === event.id && ( // Muestra el botón solo si el evento está seleccionado
                <DeleteButton onClick={() => handleDeleteEvent(event.id)}>
                  <CgClose />
                </DeleteButton>
              )}
            </EventContainer>
          ),
        }}
      />
    </CalendarContainer>
  );
}

export default CalendarComp;

const CalendarContainer = styled.div`
  margin: 20px;

  .rbc-today {
    background-color: #34d399;
  }

  .rbc-off-range-bg {
    background: #1b1a27;
  }

  .rbc-toolbar button {
    color: white;
  }

  .rbc-toolbar button:active,
  .rbc-toolbar button.rbc-active {
    background-color: #7b5bf5;
  }

  .rbc-event,
  .rbc-day-slot .rbc-background-event {
    background-color: #7b5bf5;
  }
`;

const EventContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeleteButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0;
`;