import React from 'react';

import EventUebersicht from '../event-uebersicht/event-uebersicht.component';
import KalenderUebersicht from '../kalender-uebersicht/kalender-uebersicht.component';
import {KalenderEventContainer} from './event-collection.styles';

class EventCollection extends React.Component {
  constructor() {
    super();
    this.state = {
        today: new Date(),
        dates: [
            {
              id: 1,
              date: new Date(2021,9,12),
              description: "Training am Dienstag"
            },
            {
              id: 2,
              date: new Date(2021,9,14),
              description: "Training am Donnerstag"
            }
        ]
    };
  }

  render() {
    return (
      <KalenderEventContainer>
        <KalenderUebersicht {...this.state}/>
        <EventUebersicht {...this.state}/>
      </KalenderEventContainer>
    )
  }
  
}
  
export default EventCollection;