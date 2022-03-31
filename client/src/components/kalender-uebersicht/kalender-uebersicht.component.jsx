import React from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';

import 'react-calendar/dist/Calendar.css';
import { KalenderContainer, KalenderTitle } from './kalender-uebersicht.styles';

const KalenderUebersicht = ({ dates }) => {

  const setClass = (date) => {
    let dateobj =
      dates.find((x) => {
        return (
          date.getDay() === new Date(x.date).getDay() &&
          date.getMonth() === new Date(x.date).getMonth() &&
          date.getDate() === new Date(x.date).getDate()
        );
      });
    return dateobj ? "highlightTraining" : "";
  }

  const getCalendarData = () => {
    axios({
      method: 'post',
      url: "localhost/",
      headers: { 'content-type': 'application/json' },
      data: "values"
    })
    .then(response => {
      if(response.status!==200){
      } else {
        console.log(response)
      }
    })
    .catch(error => {
      console.log(error);
    });
  }
  

  return (
    <KalenderContainer>
      <KalenderTitle>
        Bogensport-Dortmund Kalender
      </KalenderTitle>
      <div className="calendar">
        <main className="calendar-samp">
          <Calendar
            locale="de-DE"
            tileClassName={({ activeStartDate, date, view }) => setClass(date)}
          />
        </main>
      </div>
    </KalenderContainer>
  ); 
}

export default KalenderUebersicht;