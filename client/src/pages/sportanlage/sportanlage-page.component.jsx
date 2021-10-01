import React from 'react';

import { ReactComponent as MarkerWinter } from '../../assets/map/markerwinter.svg';
import { ReactComponent as MarkerSommer } from '../../assets/map/markersommer.svg';

import {
  SportanlageContainer,
  LegendOptionContainer,
  MapContainer
} from './sportanlage-page.styles';

import { CityMap } from '../../components/city-map/city-map.component';
import VisitenKarte from '../../components/visitenkarte/visitenkarte.component';


class SportanlagePage extends React.Component {
  constructor(props) {
    super(props);

    this.setHovered = this.setHovered.bind(this);
    this.state = {
      details: [
        {
          id: 1,
          season: "Winter",
          avatar: <MarkerWinter />,
          nameOfPlace: "Siegfried-Drupp-Schule",
          street: "Siegfried-Drupp-Straße 5",
          city: "44328 Dortmund",
          duration: "Oktober - März",
          hovered: false
        },
        {
          id: 2,
          season: "Sommer",
          avatar: <MarkerSommer />,
          nameOfPlace: "TuS Scharnhorst Bogensport & Mehrzweckplatz",
          street: "Am Holzgraben 1A",
          city: "44328 Dortmund",
          duration: "April - September",
          hovered: false
        }
      ]
    };

  }
  
  setHovered() {
    let key = 1;
    this.setState( prevState => ({ 
      details: prevState.details.map(
        el => el.id === key ? { ...el, hovered: true } : el
      )}
    ));
  }


  render() {
    return (
      <SportanlageContainer>
        <MapContainer>
          <LegendOptionContainer>
            <CityMap setHovered={this.setHovered}/>
          </LegendOptionContainer>
          <LegendOptionContainer>
            {
              this.state.details.map(({ id, ...otherSectionProps }) => (
                  <VisitenKarte key={id} { ...otherSectionProps } ></VisitenKarte>
              ))
            }
          </LegendOptionContainer>
        </MapContainer>
      </SportanlageContainer>
    );
}};

export default SportanlagePage;