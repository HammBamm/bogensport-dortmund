import styled from 'styled-components';

export const KalenderEventContainer = styled.div`
width: 1100px;
display: flex;
justify-content: space-between;
margin: 30px auto;

@media screen and (max-width: 800px) {
  margin: auto;
  flex-direction: column;
  width: unset;
  align-items: center;
  
}
`;