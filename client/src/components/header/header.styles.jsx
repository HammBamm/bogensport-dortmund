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
    width: 22%;
    display: flex;

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
    width: 22%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px) {
        width: 60%;
    }
`;

export const OptionLink = styled(Link)`
    padding: 10px 10px;
    cursor: pointer;
    &:hover {
        color: ${globalScheme.darkgreen};
        fill: ${globalScheme.darkgreen};
    }
    @media screen and (max-width: 800px) {
        padding: 0;
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

export const HeadlineContainer = styled.div`
    display: flex;
    margin: 5px;
    justify-content: center;
    font-size: 45px;
    color: ${globalScheme.darkgreen};
    text-shadow: 0 2px 1px #79a06d, 
    -1px 3px 1px #82ad75, 
    -2px 5px 1px #8ebf80;
    font-family: 'Rubik Mono One', sans-serif;
    text-align: center;

    @media screen and (max-width: 800px) {
        display: none;
    }
`;
