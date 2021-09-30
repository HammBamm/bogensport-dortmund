import React, { useState } from 'react';

import 'react-calendar/dist/Calendar.css';
import { EventContainer, EventTitle } from './event-uebersicht.styles';

const EventUebersicht = () => {

  const [value, onChange] = useState(new Date());

  return (
    <EventContainer>
      <EventTitle>
        Bevorstehende Events
      </EventTitle>
    </EventContainer>
  );
}

export default EventUebersicht;