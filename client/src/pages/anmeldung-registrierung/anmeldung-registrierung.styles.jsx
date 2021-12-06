import styled from 'styled-components';

export const AnmeldungRegistrierungContainer = styled.div`
width: 850px;
height: 80vh;
display: flex;
justify-content: space-between;
margin: 30px auto;
@media screen and (max-width: 800px) {
  flex-direction: column;
  width: unset;
  align-items: center;
  > *:first-child {
    margin-bottom: 20px;
  }
}
`;