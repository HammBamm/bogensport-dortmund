import React from 'react';

import { ReactComponent as MarkerWinter } from '../../assets/map/markerwinter.svg';
import { ReactComponent as MarkerSommer } from '../../assets/map/markersommer.svg';

import {
  SportanlageContainer,
  LegendOptionContainer,
  MapContainer
} from './sportanlage-page.styles';

import { CityMap } from '../../components/city-map/city-map.component';

const SportanlagePage = () => (
  <SportanlageContainer>
    <MapContainer>
      <LegendOptionContainer>
        <CityMap />
      </LegendOptionContainer>
      <LegendOptionContainer>
        <MarkerSommer />
      </LegendOptionContainer>
      <LegendOptionContainer>
        <MarkerWinter />
      </LegendOptionContainer>
    </MapContainer>
  </SportanlageContainer>
);

export default SportanlagePage;