import { Link } from "react-router-dom";
import styled from "styled-components";

export const LandingPageContainer = styled(Link)`
  position: absolute;
  height: 100%;
  width: 100%;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    height: unset;
    width: unset;
    display: flex;
    min-height: 80vh;
  }
`;

export const DivContainer = styled.div`
  cursor: pointer;
`

export const WelcomeContainer = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 14%;
  left: -5%;
  display: flex;
  padding: 1% 8%;
  max-width: 110%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
  border: white 1px;

&:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 110%;
  height: 100%;
  background: inherit;
  background-attachment: fixed;
  -webkit-filter: blur(12px);
  filter: blur(12px);
  transform: scale(2) translateY(20px);
}
h2 {
  color: white;
  z-index: 1;
  text-shadow: 0 1px 0 black;
  hyphens: auto; 
	text-align: justify;
  border-top:    1px solid white;
  border-bottom: 1px solid white;
}

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

export const BoxContainer = styled.div`

  height: 300px;
  width: 600px;
  margin: 50px auto;
  background-color: #DDD;
  position: relative;
  overflow: hidden;

&:after{
  content: '';
  display: block;
  border-width: 0px 75px 75px 0px;
  border-style: solid;
  border-color: #d7d7d7 transparent;
  position: absolute;
  top: 0;
  right: 0;
}
&:after{
  content: '';
  display: block;
  border-width: 0px 75px 75px 0px;
  border-style: solid;
  border-color: #d7d7d7 #FFF;
  box-shadow: -5px 6px 10px rgb(129, 127, 127);
  position: absolute;
  top: 0;
  right: 0;
}

h1{
  margin: 30px 210px;
  font-family: cursive;
}

p{
  padding: 0px 30px;
  font-size: 20px;
  font-family: cursive;
  color: #555;
}
`