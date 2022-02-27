import React from 'react';

import { ReactComponent as TargetImg } from '../../assets/calendar/target.svg';

import 'react-calendar/dist/Calendar.css';
import { 
  EventContainer,
  EventContainerTitle,
  EventDetailsContainer,
  EventTargetContainer,
  EventItemContainer,
  DateContainer,
  DescriptionContainer } from './event-uebersicht.styles';

const EventUebersicht = ({ dates, changeSelected }) => {
  return (
    <EventContainer>
      <EventContainerTitle>Bevorstehende Events</EventContainerTitle>
      <EventDetailsContainer>
      {
        dates.map(({ id, formattedDate, time, description}) => (
          <EventItemContainer key={id}>
            <EventTargetContainer>
              <TargetImg/> 
            </EventTargetContainer>
            <DateContainer> {formattedDate} von {time} </DateContainer>
            <DescriptionContainer> {description} </DescriptionContainer>
          </EventItemContainer>
        ))
      }
      </EventDetailsContainer>
    </EventContainer>
  );
}

export default EventUebersicht;