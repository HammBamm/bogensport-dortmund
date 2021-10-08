import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    flex-wrap: wrap;

    @media screen and (max-width: 800px) {
        height: 70px;
        margin-bottom: 20px;
    }
`;

export const LogosContainer = styled.div`
    width: 15%;
    display: flex;
    justify-content: space-between;
    margin: 0 7.5px 15px;

    @media screen and (max-width: 800px) {
        width: 15%;
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;

    @media screen and (max-width: 800px) {
        width: 57px;
        display: none;
    }
`;
export const LogoContainer2 = styled(Link)`
    height: 70px;
    width: 135px;
    display: flex;

    @media screen and (max-width: 800px) {
        width: 70px;
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
