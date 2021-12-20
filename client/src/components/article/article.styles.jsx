import styled from 'styled-components';

export const HeadlineContainer = styled.h1`
    font-size: 40px;
    text-align: center;
    margin-bottom: 0;
`;

export const ArticleContainer = styled.div`
    padding: 20px 40px 5px;
    display: flex;
    overflow: hidden;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

export const ArticleGridContainer = styled.div`
    padding: 20px 40px 5px;
    overflow: hidden;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

export const ArticleImageContainerLeft = styled.img`
    margin: 20px 30px 0 0;
    width: 250px;
    object-fit: contain;
    align-self: flex-start;

    @media screen and (max-width: 800px) {
        width: 150px;
        align-self: center;
    }
`;

export const ArticleImageContainerRight = styled.img`
    margin: 20px 0 0 30px;
    width: 250px;
    object-fit: contain;
    align-self: flex-end;

    @media screen and (max-width: 800px) {
        align-self: center;
        margin-left: 0%
    }
`;

export const ArticleTextContainer = styled.div`
    flex: 1 1 auto;
    text-align: justify;
    justify-content: start;
`;

export const ArticleTextGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 0.2fr;
    grid-gap: 4px;
`;

  
  