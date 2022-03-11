import styled from "styled-components";
import { globalScheme } from "../../global.styles";

export const HomePageContainer = styled.div`
    display: flex;
    min-height: 78vh;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;

    @media screen and (max-width: 800px) {
        min-height: 80vh;
    }
`;