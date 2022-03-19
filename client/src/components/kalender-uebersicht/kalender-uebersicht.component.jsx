import React from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import { KalenderContainer, KalenderTitle } from './kalender-uebersicht.styles';

const KalenderUebersicht = ({ dates }) => {

  const setClass = (date) => {
    let dateobj =
      dates.find((x) => {
        return (
          date.getDay() === new Date(x.date).getDay() &&
          date.getMonth() === new Date(x.date).getMonth() &&
          date.getDate() === new Date(x.date).getDate()
        );
      });
    return dateobj ? "highlightTraining" : "";
  }

  return (
    <KalenderContainer>
      <KalenderTitle>
        Bogensport-Dortmund Kalender
      </KalenderTitle>
      <div className="calendar">
        <main className="calendar-samp">
          <Calendar
            locale="de-DE"
            tileClassName={({ activeStartDate, date, view }) => setClass(date)}
          />
        </main>
      </div>
    </KalenderContainer>
  ); 
}

export default KalenderUebersicht;