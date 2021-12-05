import styled from "styled-components";
import { Link } from "react-router-dom";

export const ImpressumPageContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  text-align: start;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const ImpressumPageImgContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: block;
  }
`;

export const ImpressumLogoContainer = styled(Link)`
    padding: 20px 40px 0;
    width: 22%;
    display: flex;
    justify-content: flex-end;
    &:hover {
      transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    

    @media screen and (max-width: 800px) {
      display: block;
      width: 100%;
      margin: auto 0;
    }
`;