import React from 'react';

import { ReactComponent as TargetImg } from '../../assets/calendar/target.svg';

import 'react-calendar/dist/Calendar.css';
import { 
  EventContainer,
  EventContainerTitle,
  EventDetailsContainer,
  EventTargetContainer, } from './event-uebersicht.styles';
import { EventVisitenKarte } from '../visitenkarte/visitenkarte.component';

const EventUebersicht = ({ dates }) => {

  return (
    <EventContainer>
      <EventContainerTitle>Bevorstehende Events</EventContainerTitle>
      <EventDetailsContainer>
      {
        dates.map(({ id, title, formattedDate, time, description }) => (
          <EventVisitenKarte key={id} title={title} avatar={<EventTargetContainer><svg><TargetImg /></svg></EventTargetContainer>}
           date={formattedDate} time={time} description={description} />
        ))
      }
      </EventDetailsContainer>
    </EventContainer>
  );
}

export default EventUebersicht;