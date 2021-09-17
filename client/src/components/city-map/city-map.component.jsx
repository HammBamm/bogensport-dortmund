import React, { useState } from "react";
import { Map, Marker, Overlay } from "pigeon-maps";

import { CityMapsContainer } from "./city-map.styles";
import CustomButton from "../custom-button/custom-button.component";
import useMediaQuery from "../media-query/media-query.component";

export const CityMap = () => {
  const isMobile = useMediaQuery('(max-width: 800px)');
  const summerColor = `rgb(253,130,26)`;
  const winterColor = `rgb(123, 165, 248)`;
  const defaultCenter = [51.5430, 7.5290];
  const [center, setCenter] = useState(defaultCenter);
  const [zoom, setZoom] = useState(16);
  const markerWidth = isMobile ? 50 : 60;
  
  return (
    <CityMapsContainer>
        <Map      
          height={isMobile ? 600 : 750} 
          width={isMobile ? 320 : 1000} 
          center={center} 
          zoom={zoom} 
          minZoom={10}
          onBoundsChanged={({ center, zoom }) => { 
            setCenter(center) 
            setZoom(zoom) 
        }}>
          <Marker 
            width={markerWidth}
            anchor={[51.53999, 7.52707]}
            color={summerColor} 
            onClick={() => {
              setCenter([51.53999, 7.52707]);
              setZoom(17);
              }
            }
          />
          <Marker 
            width={markerWidth}
            anchor={[51.54476, 7.53156]}
            color={winterColor} 
            onClick={() => {
              setCenter([51.54476, 7.53156]);
              setZoom(17);
              }
            }
          />  
          <Overlay anchor={[51.54476, 7.53156]} offset={[120, 79]}>
            <span>Winter</span>
          </Overlay>
          <CustomButton onClick={() => {
              setCenter(defaultCenter)
              setZoom(16)
            }
          }>Karte zurücksetzen</CustomButton>
        </Map>
    </CityMapsContainer>
)};