import React from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import { KalenderContainer, KalenderTitle } from './kalender-uebersicht.styles';

const KalenderUebersicht = ({ today, dates }) => {
  console.log([today].concat(dates.map(t => t.date)))
    return (
      <KalenderContainer>
        <KalenderTitle>
          Bogensport Dortmund Kalender
        </KalenderTitle>
        <div className="calendar">
          <main className="calendar-samp">
            <Calendar
              onChange={dates.date}
              locale="de-DE"
              value={today}
            />
          </main>
        </div>
      </KalenderContainer>
    ); 
}

export default KalenderUebersicht;