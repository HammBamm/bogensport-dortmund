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

const EventUebersicht = ({ today, dates }) => {
  console.log(dates)
  return (
    <EventContainer>
      <EventContainerTitle>Bevorstehende Events</EventContainerTitle>
      <EventDetailsContainer>
      {
        dates.map(({ id, date, description}) => (
          <EventItemContainer key={id}>
            <EventTargetContainer>
              <TargetImg/> 
            </EventTargetContainer>
            <DateContainer> {date.toDateString()} </DateContainer>
            <DescriptionContainer> {description} </DescriptionContainer>
          </EventItemContainer>
        ))
      }
      </EventDetailsContainer>
    </EventContainer>
  );
}

export default EventUebersicht;