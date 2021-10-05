import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const ContactFormContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;
    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;

export const TextareaLabelContainer = styled.label`
  color: ${subColor};
  font-size: 16px;
  padding: 10px 10px 10px 5px;
  font-weight: normal;
  pointer-events: none;
  transition: 300ms ease all;
  &.shrink {
    ${shrinkLabelStyles}
  }
`;