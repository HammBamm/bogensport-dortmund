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
  ValueContainer } from "./visitenkarte.styles";

const VisitenKarte = ({ id, avatar, nameOfPlace, street, city, duration }) => {
  return (
    <CardContainer>
      <CardAvatarContainer >
        <avatar></avatar>
      </CardAvatarContainer>
      <CardDetailsContainer>
        <NameContainer>{nameOfPlace}</NameContainer>
        <SeasonContainer>{id}</SeasonContainer>
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

