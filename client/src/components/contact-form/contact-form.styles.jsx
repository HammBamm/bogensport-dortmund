import styled from 'styled-components';

const mainColor = 'black';

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
  font-size: 12px;
  color: ${mainColor};
  font-weight: normal;
  pointer-events: none;
  margin-left: 5px;
  margin-top: 5px;
`;