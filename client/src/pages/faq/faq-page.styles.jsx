import styled from "styled-components";
import { globalScheme } from "../../global.styles";

export const FAQPageContainer = styled.div`
margin-left: auto;
margin-right: auto;
width: 50%;
min-height: 78vh;
box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
border-radius: 3px;
padding: 10px;

@media screen and (max-width: 800px) {
  min-height: 80vh;
  width: unset;
  box-shadow: unset;
  border-radius: unset;
  padding: unset;
}
`;

export const FAQPageImgContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkTextContainer = styled.span`
  font-weight: bold;
  text-decoration: underline;

  &:visited {
    color: ${globalScheme.darkgreen};
  }

  &:hover {
    color: ${globalScheme.darkgreen};
  }
`;