import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";

interface Events {
  title?: string;
}

const Appointment = () => {
  return (
    <div className="FullCalendar">
      <FullCalendar
        height="75vh"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
        }}
        initialView="timeGridWeek"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        /*       select={handleDateClick}
      eventClick={handleEventClick} */
        /*     eventsSet={(events) => setCurrentEvents(events)} */
        initialEvents={[
          {
            id: "12315",
            title: "All-day event",
            date: "2022-09-14",
          },
          {
            id: "5123",
            title: "Timed event",
            date: "2022-09-28",
          },
        ]}
        /*     plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"timeGridWeek"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }} */
      />
    </div>
  );
};

export default Appointment;

function renderEventContent() {
  return (
    <>
      <b>{"events.title"}</b>
      <img
        src="https://i.pinimg.com/originals/aa/7c/82/aa7c829eb316ab1d077a5768188ee622.jpg"
        alt="dg"
        style={{ width: 40, height: 40, borderRadius: "50%" }}
      />
    </>
  );
}
