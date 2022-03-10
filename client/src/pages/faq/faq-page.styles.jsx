import styled from "styled-components";
import { globalScheme } from "../../global.styles";

export const FAQPageContainer = styled.div`
margin-left: auto;
margin-right: auto;
width: 80%;
text-align: start;
min-height: 78vh;
font-size: large;

@media screen and (max-width: 800px) {
  min-height: 80vh;
  width: unset;
}
`;

export const FAQPageImgContainer = styled.div`
display: flex;
flex-direction: column;

@media screen and (max-width: 800px) {
  display: block;
}
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