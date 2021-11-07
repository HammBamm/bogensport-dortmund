import styled from 'styled-components';

export const ArticleContainer = styled.div`
    padding: 20px 40px 20px;
    display: flex;
    overflow: hidden;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

export const ArticleImageContainerLeft = styled.img`
    margin: 20px 30px 0 0;
    width: 200px;
    object-fit: contain;
    align-self: flex-start;

    @media screen and (max-width: 800px) {
        align-self: center;
    }
`;

export const ArticleImageContainerRight = styled.img`
    margin: 20px 0 0 30px;
    width: 200px;
    object-fit: contain;
    align-self: flex-end;

    @media screen and (max-width: 800px) {
        align-self: center;
    }
`;

export const ArticleTextContainer = styled.div`
    flex: 1 1 auto;
    text-align: justify;

    @media screen and (max-width: 800px) {
        align-self: center;
        
    }
`;
  
  