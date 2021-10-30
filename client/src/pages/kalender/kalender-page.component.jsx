import React from 'react';

import EventCollection from '../../components/event-collection/event-collection.component';
import { KalenderPageContainer } from './kalender-page.styles';

const KalenderPage = () => {
  return (
    <KalenderPageContainer>
      <EventCollection />
    </KalenderPageContainer>
  );
}

export default KalenderPage;