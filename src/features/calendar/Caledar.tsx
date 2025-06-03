import React from "react";
import Calendar from "color-calendar";
import "color-calendar/dist/css/theme-basic.css";
import styles from "./Calendar.module.scss"

class CalendarComponent extends React.Component {
  componentDidMount() {
    new Calendar({
      id: "#myCal",
      theme: "basic",
      color: "blue",
      weekdayType: "long-upper",
      monthDisplayType: "long",
      calendarSize: "huge",
      layoutModifiers: ["month-center-align"],
      eventsData: [
        {
          id: 1,
          name: "French class",
          start: "2020-08-17T06:00:00",
          end: "2020-08-18T20:30:00"
        },
        {
          id: 2,
          name: "Blockchain 101",
          start: "2020-08-20T10:00:00",
          end: "2020-08-20T11:30:00"
        }
      ]
    });
  }

  render() {
    return <div id="myCal" className={styles.calendar}></div>;
  }
}

export default CalendarComponent;