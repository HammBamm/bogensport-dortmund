import React from 'react';
import Toggle from 'react-toggle';

import { ReactComponent as MarkerWinter } from '../../assets/map/markerwinter.svg';
import { ReactComponent as MarkerSommer } from '../../assets/map/markersommer.svg';
import wieseDistImg from '../../assets/map/wiese_Distanzen.jpg';
import halleImg from '../../assets/map/Halle.jpeg';
import wieseImg from '../../assets/map/wiese.jpg';
import halleDistImg from '../../assets/map/Halle_Distanzen.jpg';

import {
  SportanlageContainer,
  LegendOptionContainer,
  MapContainer,
  CarouselImageContainer,
  ToggleContainer,
  ToggleLableContainer
} from './sportanlage-page.styles';
import './toggle.css';

import { CityMap } from '../../components/city-map/city-map.component';
import { KartenVisitenKarte } from '../../components/visitenkarte/visitenkarte.component';


class SportanlagePage extends React.Component {
  constructor() {
    super();

    this.state = {
      details: [
        {
          id: 1,
          season: "Winter",
          avatar: <MarkerWinter />,
          nameOfPlace: "Siegfried-Drupp-Schule",
          street: "Siegfried-Drupp-Straße 5",
          city: "44328 Dortmund",
          duration: "Oktober - März"
        },
        {
          id: 2,
          season: "Sommer",
          avatar: <MarkerSommer />,
          nameOfPlace: "TuS Scharnhorst Bogensport & Mehrzweckplatz",
          street: "Am Holzgraben 1A",
          city: "44328 Dortmund",
          duration: "April - September"
        }
      ],
      showDistances: false
    };
  }
  
  render() {
    return (
      <SportanlageContainer>
        <MapContainer>
          <LegendOptionContainer>
            {
              this.state.details.map(({ id, ...otherSectionProps }) => (
                  <KartenVisitenKarte key={id} { ...otherSectionProps }  />
              ))
            }
          </LegendOptionContainer>
          <LegendOptionContainer> 
            <CityMap />
          </LegendOptionContainer>
        </MapContainer>
        <ToggleContainer>
          <Toggle
            id='distance-status'
            defaultChecked={this.state.showDistances}
            onChange={() => this.setState({showDistances: !this.state.showDistances})} />
          <ToggleLableContainer htmlFor='distance-status'>Schussdistanzen anzeigen</ToggleLableContainer>
        </ToggleContainer>
        { this.state.showDistances === false ?
        <MapContainer>
          <LegendOptionContainer> 
            <CarouselImageContainer src={wieseImg} />
          </LegendOptionContainer>
          <LegendOptionContainer> 
            <CarouselImageContainer src={halleImg} />
          </LegendOptionContainer> 
        </MapContainer> : 
        <MapContainer>
        <LegendOptionContainer> 
          <CarouselImageContainer src={wieseDistImg} />
        </LegendOptionContainer>
        <LegendOptionContainer> 
          <CarouselImageContainer src={halleDistImg} />
        </LegendOptionContainer> 
      </MapContainer>
        } 
      </SportanlageContainer>
    );
}};

export default SportanlagePage;