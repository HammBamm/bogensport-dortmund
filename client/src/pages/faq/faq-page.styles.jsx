import styled from "styled-components";

export const FAQPageContainer = styled.div`
margin-left: auto;
margin-right: auto;
width: 60%;
text-align: start;
min-height: 78vh;

@media screen and (max-width: 800px) {
  width: 100%;
}
`;

export const FAQPageImgContainer = styled.div`
display: flex;
flex-direction: column;

@media screen and (max-width: 800px) {
  display: block;
}
`;