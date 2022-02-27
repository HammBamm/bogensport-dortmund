import React, { useState } from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import { KalenderContainer, KalenderTitle } from './kalender-uebersicht.styles';

const KalenderUebersicht = ({ dates }) => {
  let nextTraining = dates[0].date.getDate() < dates[1].date.getDate() ? dates[0].date : dates[1].date;
  const [value, onChange] = useState(nextTraining);

    return (
      <KalenderContainer>
        <KalenderTitle>
          Bogensport Dortmund Kalender
        </KalenderTitle>
        <div className="calendar">
          <main className="calendar-samp">
            <Calendar
              locale="de-DE"
              onChange={onChange} value={value}
            />
          </main>
        </div>
      </KalenderContainer>
    ); 
}

export default KalenderUebersicht;