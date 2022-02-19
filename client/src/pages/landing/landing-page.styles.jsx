import { Link } from "react-router-dom";
import styled from "styled-components";

import { globalScheme } from "../../global.styles";

export const LandingPageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 78vh;

  @media screen and (max-width: 800px) {
    height: 80vh;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  width: 80%;
  margin: auto;

  &:hover {
      fill: ${globalScheme.darkgreen};
  }

  @media screen and (max-width: 800px) {
  }
`;

export const ButtonContainer = styled(Link)`
  display: flex;
  padding-top: 20px;
  width: 50%;
  height: 120px;
  margin: auto;

  &:hover {
      fill: ${globalScheme.darkgreen};
  }

  @media screen and (max-width: 800px) {
  }
`;

export const CustomButtonLandingPageContainer = styled.button`
    min-width: 165px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 30px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;

    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: #FFD700;
        border: none;
    }
`;