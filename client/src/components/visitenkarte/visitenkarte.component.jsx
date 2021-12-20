import React from 'react';

import { 
  CardAboutContainer,
  CardAboutItemContainer,
  CardAvatarContainer,
  CardContainer,
  CardDetailsContainer,
  LabelContainer,
  SeasonContainer,
  NameContainer,
  ValueContainer, 
  } from "./visitenkarte.styles";

const VisitenKarte = ({ season, avatar, nameOfPlace, street, city, duration, hovered }) => {
  return (
    <CardContainer hovered={hovered}>
      <CardAvatarContainer>
       {avatar}
      </CardAvatarContainer>

      <CardDetailsContainer>
        <NameContainer>{nameOfPlace}</NameContainer>
        <SeasonContainer>{season}</SeasonContainer>
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
            <ValueContainer>{duration}</ValueContainer>
            <LabelContainer>Zeitraum</LabelContainer>
          </CardAboutItemContainer>
        </CardAboutContainer>
      </CardDetailsContainer>
    </CardContainer>
  )
};

export default VisitenKarte;

