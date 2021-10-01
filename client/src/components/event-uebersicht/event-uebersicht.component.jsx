import React from 'react';

import 'react-calendar/dist/Calendar.css';
import { EventContainer, EventTitle } from './event-uebersicht.styles';

const EventUebersicht = () => {


  return (
    <EventContainer>
      <EventTitle>
        Bevorstehende Events
      </EventTitle>
    </EventContainer>
  );
}

export default EventUebersicht;