import styled from "styled-components";
import { Link } from "react-router-dom";
import { globalScheme } from "../../global.styles";

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    flex-wrap: wrap;
    //clip-path: polygon(50% 100%, 0 65%, 0% 0%, 100% 0, 100% 65%);
    border-bottom: 3px solid ${globalScheme.darkgreen};

    @media screen and (max-width: 800px) {
        height: 50px;
        margin-bottom: 10px;
    }
`;

export const LogosContainer = styled.div`
    width: 15%;
    display: flex;
    margin: 0 7.5px 15px;

    @media screen and (max-width: 800px) {
        width: 35%;
        margin: auto;
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 60px;

    @media screen and (max-width: 800px) {
        width: 50px;
        display: none;
    }
`;
export const LogoContainer2 = styled(Link)`
    display: flex;
    width: 180px;

    @media screen and (max-width: 800px) {
        width: 100px;
    }
`;

export const OptionsContainer = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px) {
        padding: 0;
    }
`;

export const OptionLink = styled(Link)`
    padding: 10px 10px;
    cursor: pointer;
    @media screen and (max-width: 800px) {
        padding: 0;
        padding-right: 10px;
    }
`;

export const BackButtonContainer = styled.div`
    padding: 10px 10px;
    width: 70px;
    cursor: pointer;
    @media screen and (max-width: 800px) {
        width: 55px;
        padding: 0;
        padding-right: 10px;
    }
`;
