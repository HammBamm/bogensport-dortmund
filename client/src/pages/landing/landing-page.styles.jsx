import { Link } from "react-router-dom";
import styled from "styled-components";

import { globalScheme } from "../../global.styles";

export const LandingPageContainer = styled.div`
  min-height: 78vh;

  @media screen and (max-width: 800px) {
    height: 80vh;
  }
`;

export const LogoContainer = styled(Link)`
    display: flex;

    &:hover {
        fill: ${globalScheme.darkgreen};
    }

    @media screen and (max-width: 800px) {
        width: 100px;
    }
`;