import { Link } from "react-router-dom";
import styled from "styled-components";

export const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 78vh;

  @media screen and (max-width: 800px) {
    min-height: 80vh;
  }
`;

export const WelcomeContainer = styled.div`
  display: flex;
  max-width: 60%;
  margin: auto;
  flex-direction: column;
  text-align: center;

  @media screen and (max-width: 800px) {
    max-width: unset;
  }
`

export const LogoContainer = styled(Link)`
  display: flex;
  max-width: 60%;
  margin: auto;

  &:hover {
  }

  @media screen and (max-width: 800px) {
    max-width: 70%;
  }
`;

export const ButtonContainer = styled(Link)`
  display: flex;
  max-width: 30%;
  max-height: 140px;
  margin: 10% auto;

  @media screen and (max-width: 800px) {
    max-width: 80%;
    max-height: 100px;
    justify-content: space-between;
  }
`;

export const CustomButtonLandingPageContainer = styled.button`
    min-width: 165px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 15px 0 15px;
    font-size: 30px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: space-between;

    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: #FFD700;
        border: none;
    }
`;

export const LandingPageTextContainer = styled.div`
  margin: auto;
  text-align: center;

  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
`;

export const TargetContainer = styled.div`
  width: 100px;
  height: 100px;
  padding: 5px;
  display: flex;
  margin: auto;

  @media screen and (max-width: 800px) {
    max-width: 70px;
    max-height: 70px;
  }
`;
