import styled from "styled-components";

export const SportanlageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 78vh;
  max-width: 80%;
  margin: auto auto;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  padding: 30px;

  @media screen and (max-width: 800px) {
    min-height: 80vh;
    max-width: unset;
    box-shadow: unset;
    border-radius: unset;
    padding: unset;
  }
`;

export const MapContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 800px) {
    padding-top: 10px;
    flex-direction: column;
    align-items: center;
    &:first-child {
      margin-bottom: 25px;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 800px) {
    padding-top: 10px;
    flex-direction: column;
    align-items: center;
  }
`;

export const CarouselImageContainer = styled.img`
  max-width: 45vw;
  max-height: 475px;

  @media screen and (max-width: 800px) {
    max-width: 90vw;
    max-height: unset;
  }
`;

export const CardContainer = styled.div`

  @media screen and (max-width: 800px) {
    max-width: 90vw;
  }
`;

export const LegendOptionContainer = styled.div`
  align-self: flex-end;

  @media screen and (max-width: 800px) {
    max-width: 90vw;
  }
`;

export const ToggleContainer = styled.div`
  padding-top: 10px;
`;

export const ToggleLableContainer = styled.label`
  padding-left: 10px;
`;