import { Link } from "react-router-dom";
import styled from "styled-components";

export const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 78vh;

  @media screen and (max-width: 800px) {
    height: 80vh;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 50%;
  margin: -20px auto 0;

  &:hover {
  }

  @media screen and (max-width: 800px) {
  }
`;

export const ButtonContainer = styled(Link)`
  display: flex;
  width: 30%;
  height: 120px;
  margin: auto;

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
  }
`;