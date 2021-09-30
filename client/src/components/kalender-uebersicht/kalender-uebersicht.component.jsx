import React, { useState } from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import { KalenderContainer, KalenderTitle } from './kalender-uebersicht.styles';

const KalenderUebersicht = () => {

  const [value, onChange] = useState(new Date());

  return (
    <KalenderContainer>
      <KalenderTitle>
        Bogensport Dortmund Kalender
      </KalenderTitle>
      <div className="calendar">
        <main className="calendar-samp">
          <Calendar
            onChange={onChange}
            showWeekNumbers
            value={value}
          />
        </main>
      </div>
    </KalenderContainer>
  );
}

export default KalenderUebersicht;