import styled from "styled-components";
import { Link } from "react-router-dom";
import { globalScheme } from "../../global.styles";

export const HeaderContainer = styled.div`
    height: 75px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 22px;
    //clip-path: polygon(50% 100%, 0 65%, 0% 0%, 100% 0, 100% 65%);
    border-bottom: 3px solid ${globalScheme.darkgreen};

    @media screen and (max-width: 800px) {
        height: 50px;
        margin-bottom: 10px;
    }
`;

export const LogoWrapper1 = styled.div`
    width: 180px;

    @media screen and (max-width: 800px) {
        justify-content: flex-start;
        margin: auto;
    }
`;

export const LogoWrapper2 = styled.div`
    max-width: 250px;
    margin-top: -26px;

    @media screen and (max-width: 800px) {
        justify-content: flex-end;
        margin: auto;
    }
`;

export const LogoContainer1 = styled(Link)`
    display: flex;

    &:hover {
        fill: ${globalScheme.darkgreen};
    }

    @media screen and (max-width: 800px) {
        width: 100px;
    }
`;

export const LogoContainer2 = styled(Link)`
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
    width: 60px;
    cursor: pointer;
    &:hover {
        fill: ${globalScheme.darkgreen};
    }
    @media screen and (max-width: 800px) {
        padding: 0;
        width: 50px;
        padding-right: 10px;
    }
`;

export const BackButtonContainer = styled.div`
    padding: 10px 10px;
    width: 70px;
    cursor: pointer;
    &:hover {
        fill: ${globalScheme.darkgreen};
    }

    @media screen and (max-width: 800px) {
        width: 50px;
        padding: 0;
        padding-right: 10px;
    }
`;