import styled from "styled-components";
import { Link } from "react-router-dom";
import { globalScheme } from "../../global.styles";

export const HeaderContainer = styled.div`
    height: 75px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 22px;
    //clip-path: polygon(50% 100%, 0 65%, 0% 0%, 100% 0, 100% 65%);
    border-bottom: 3px solid ${globalScheme.darkgreen};

    @media screen and (max-width: 800px) {
        height: 60px;
        margin-bottom: 10px;
    }
`;

export const HeaderLandingPageContainer = styled.div`
    height: 100px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 22px;

    @media screen and (max-width: 800px) {
        height: 60px;
        margin-bottom: 10px;
    }
`;

export const WelcomeContainer = styled.div`
  margin: auto;
  max-height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 3.5vw;
  text-align: center;

  @media screen and (max-width: 800px) {
    display: none;
  }
`

export const H1Container = styled.span`
    color: black;
`;

export const H1Container2 = styled.span`
    padding-left: 20px;
    color: ${globalScheme.darkgreen};
`;

export const H2Container = styled.span`
  font-size: large;
`;

export const LogoWrapper1 = styled.div`
    display: flex;
    max-height: 70px;
    max-width: 200px;

    @media screen and (max-width: 800px) {
        max-height: 55px;
        max-width: 160px;
    }
`;

export const LogoContainer1 = styled(Link)`
    display: flex;
    max-height: 70px;
    max-width: 200px;
    margin: auto;

    &:hover {
        fill: ${globalScheme.darkgreen};
    }

    @media screen and (max-width: 800px) {
        max-height: 55px;
        max-width: 160px;
        justify-content: flex-start;
    }
`;

export const LogoWrapper2 = styled.div`
    display: flex;
    max-height: 100px;
    max-width: 450px;
    margin-top: -20px;
`;

export const LogoContainer2 = styled(Link)`
    max-width: 450px;
    max-height: 85px;   
    display: flex;
    
    &:hover {
        fill: ${globalScheme.darkgreen};
    }

    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const OptionsContainer = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 800px) {
    }
`;

export const OptionLink = styled(Link)`
    padding: 10px 10px;
    max-width: 70px;
    display: flex;
    cursor: pointer;
    &:hover {
        fill: ${globalScheme.darkgreen};
    }
    @media screen and (max-width: 800px) {
        padding: 0;
        max-width: 50px;
        padding-right: 10px;
    }
`;

export const BackButtonContainer = styled.div`
    padding: 10px 10px;
    display: flex;
    max-width: 70px;
    cursor: pointer;
    &:hover {
        fill: ${globalScheme.darkgreen};
    }

    @media screen and (max-width: 800px) {
        width: unset;
        display: flex;
        align-self: center;
        max-width: 50px;
        padding: 0;
        padding-right: 10px;
    }
`;