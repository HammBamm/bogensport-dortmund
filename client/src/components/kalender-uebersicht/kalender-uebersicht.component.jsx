import React, { useState } from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import { KalenderContainer, KalenderTitle } from './kalender-uebersicht.styles';

const KalenderUebersicht = ({ dates, selection }) => {

  function selectDate() {
    return typeof selection == 'undefined' ? dates[0].date.getDate() < dates[1].date.getDate() ? dates[0].date : dates[1].date : dates[selection].date;
  }
 
  const [value, setValue] = useState(selectDate);

  return (
    <KalenderContainer>
      <KalenderTitle>
        Bogensport Dortmund Kalender
      </KalenderTitle>
      <div className="calendar">
        <main className="calendar-samp">
          <Calendar
            locale="de-DE"
            onChange={setValue} value={value}
          />
        </main>
      </div>
    </KalenderContainer>
  ); 
}

export default KalenderUebersicht;