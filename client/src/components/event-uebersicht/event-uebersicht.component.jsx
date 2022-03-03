import React, { useEffect, useState } from 'react';

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
import { CustomNoButtonContainer } from '../custom-button/custom-button.styles';

const EventUebersicht = ({ dates, selection, changeSelection }) => {

  const [sel, setSelection] = useState(selection);

  useEffect(() => {
    if (sel !== selection) changeSelection(sel);
  })

  return (
    <EventContainer>
      <EventContainerTitle>Bevorstehende Events</EventContainerTitle>
      <EventDetailsContainer>
      {
        dates.map(({ id, formattedDate, time, description }) => (
          <CustomNoButtonContainer key={id} onClick={() => setSelection(id)}>
            <EventItemContainer >
              <EventTargetContainer>
                <TargetImg/> 
              </EventTargetContainer>
              <DateContainer> {formattedDate} von {time} </DateContainer>
              <DescriptionContainer> {description} </DescriptionContainer>
            </EventItemContainer>
          </CustomNoButtonContainer>
        ))
      }
      </EventDetailsContainer>
    </EventContainer>
  );
}

export default EventUebersicht;