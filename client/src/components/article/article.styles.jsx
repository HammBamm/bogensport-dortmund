import styled from 'styled-components';

export const ArticleContainer = styled.div`
    border: 3px solid blue;
    padding: 20px 40px 40px;
    max-width: 640px;
    display: flex;
    &__image {
        margin: 20px 30px 0 0;
        width: 200px;
        object-fit: contain;
        align-self: flex-start;
    }
    &__text {
        flex: 1 1 auto;
    }
`;

export const ArticleImageContainer = styled.img`
    margin: 20px 30px 0 0;
    width: 200px;
    object-fit: contain;
    align-self: flex-start;
`;

export const ArticleTextContainer = styled.div`
    flex: 1 1 auto;
`;
  
  