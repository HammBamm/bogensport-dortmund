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

export const KartenVisitenKarte = ({ season, avatar, nameOfPlace, street, city, duration, hovered }) => {
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

export const EventVisitenKarte = ({ title, avatar, date, time, description, hovered }) => {
  return (
    <CardContainer hovered={hovered}>
      <CardAvatarContainer>
       {avatar}
      </CardAvatarContainer>

      <CardDetailsContainer>
        <NameContainer>{title}</NameContainer>
        <SeasonContainer>{date}</SeasonContainer>
        <CardAboutContainer>
          <CardAboutItemContainer>
            <ValueContainer>{time}</ValueContainer>
            <LabelContainer>Uhrzeit</LabelContainer>
          </CardAboutItemContainer>
          <CardAboutItemContainer>
            <ValueContainer>{description}</ValueContainer>
            <LabelContainer>Beschreibung</LabelContainer>
          </CardAboutItemContainer>
        </CardAboutContainer>
      </CardDetailsContainer>
    </CardContainer>
  )
};

