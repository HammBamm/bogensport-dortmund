import styled from "styled-components";

export const SportanlageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 78vh;
  margin: auto auto;

  @media screen and (max-width: 800px) {
    min-height: 80vh;
  }
`;

export const MapContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    padding-top: 10px;
    flex-direction: column;
    max-width: 90vw;
    align-items: center;
    > *:first-child {
      margin-bottom: 25px;
    }
  }
`;

export const CarouselImageContainer = styled.img`
  max-width: 45vw;
  max-height: 550px;

  @media screen and (max-width: 800px) {
    max-width: 90vw;
    max-height: unset;
  }
`;

export const LegendOptionContainer = styled.div`
  @media screen and (max-width: 800px) {
    max-width: 90vw;
  }
`;

export const ToggleContainer = styled.div`
  padding-top: 10px;

  @media screen and (max-width: 800px) {
    padding-top: 20px;
  }
`;

export const ToggleLableContainer = styled.label`
  padding-left: 10px;
`;