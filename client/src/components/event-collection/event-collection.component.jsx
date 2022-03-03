import React from 'react';

import EventUebersicht from '../event-uebersicht/event-uebersicht.component';
import KalenderUebersicht from '../kalender-uebersicht/kalender-uebersicht.component';
import {KalenderEventContainer} from './event-collection.styles';

function nextDay(weekday,addedWeekdays){
  let now = new Date();    
  now.setDate(now.getDate() + addedWeekdays + (weekday+(7-now.getDay())) % 7);
  return now;
}

function formatDate(now) {
  return new Intl.DateTimeFormat('de-DE', { month: 'long', day: '2-digit', year: 'numeric' }).format(now);
}

class EventCollection extends React.Component {
  constructor() {
    super();
    this.state = {
      dates: [
        {
          id: 0,
          date: nextDay(2,0),
          formattedDate: formatDate(nextDay(2,0)),
          time: '18:00 - 20:00 Uhr',
          description: "Training am Dienstag"
        },
        {
          id: 1,
          date: nextDay(4,0),
          formattedDate: formatDate(nextDay(4,0)),
          time: '18:00 - 20:00 Uhr',
          description: "Training am Donnerstag"
        },
        {
          id: 2,
          date: nextDay(2,7),
          formattedDate: formatDate(nextDay(2,7)),
          time: '18:00 - 20:00 Uhr',
          description: "Training am Dienstag"
        },
        {
          id: 3,
          date: nextDay(4,7),
          formattedDate: formatDate(nextDay(4,7)),
          time: '18:00 - 20:00 Uhr',
          description: "Training am Donnerstag"
        },
        {
          id: 4,
          date: nextDay(2,14),
          formattedDate: formatDate(nextDay(2,14)),
          time: '18:00 - 20:00 Uhr',
          description: "Training am Dienstag"
        },
        {
          id: 5,
          date: nextDay(4,14),
          formattedDate: formatDate(nextDay(4,14)),
          time: '18:00 - 20:00 Uhr',
          description: "Training am Donnerstag"
        }
      ],
    };
  }

  changeSelection = (id) => {
    this.setState({
      selection: id
    });
  }
  

  render() {
    return (
      <KalenderEventContainer>
        <KalenderUebersicht {...this.state} selected={this.state.selection} />
        <EventUebersicht {...this.state} changeSelection={id => this.changeSelection(id)}/>
      </KalenderEventContainer>
    )
  }
  
}
  
export default EventCollection;