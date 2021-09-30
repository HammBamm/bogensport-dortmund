import React from 'react';
import EventUebersicht from '../../components/event-uebersicht/event-uebersicht.component';
import KalenderUebersicht from '../../components/kalender-uebersicht/kalender-uebersicht.component';
import { KalenderEventContainer } from './kalender.styles';

const KalenderPage = () => {
  return (
    <KalenderEventContainer>
      <KalenderUebersicht />
      <EventUebersicht />
    </KalenderEventContainer>
  );
}

export default KalenderPage;