import React from 'react';

import { 
  CardAboutContainer,
  CardAboutItemContainer,
  CardAvatarContainer,
  CardContainer,
  CardDetailsContainer,
  LabelContainer,
  LocationContainer,
  NameContainer,
  SVGContainer,
  ValueContainer } from "./visitenkarte.styles";

const VisitenKarte = ({ id, avatar, name, street, city, duration }) => {
  return (
    <CardContainer>
      <CardAvatarContainer imageUrl={avatar}>
      </CardAvatarContainer>
      <CardDetailsContainer>
        <NameContainer>{name}</NameContainer>
        <LocationContainer>{id}</LocationContainer>
      
        <CardAboutContainer>
          <CardAboutItemContainer>
            <ValueContainer>{street}</ValueContainer>
            <LabelContainer>Straße</LabelContainer>
          </CardAboutItemContainer>
          <CardAboutItemContainer>
            <ValueContainer>{city}</ValueContainer>
            <LabelContainer>Stadt</LabelContainer>
          </CardAboutItemContainer>
          <CardAboutItemContainer>
            <LabelContainer>{duration}</LabelContainer>
            <LabelContainer>Zeitraum</LabelContainer>
          </CardAboutItemContainer>
        </CardAboutContainer>
      </CardDetailsContainer>
    </CardContainer>
  )
};

export default VisitenKarte;

