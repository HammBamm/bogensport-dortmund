import styled from 'styled-components';
import { globalScheme } from '../../global.styles';

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
        padding: 0;
    }
`;

export const ArticleImageContainerLeft = styled.img`
    margin: 20px 30px 0 0;
    width: 250px;
    object-fit: contain;
    align-self: flex-start;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    border: 3px dashed ${globalScheme.darkgreen};

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
    border-radius: 15px 225px 15px 255px/255px 15px 225px 15px;
    border: 3px dashed ${globalScheme.darkgreen};

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
    grid-template-columns: ${({ gridSpaceIndex, gridSpace1, gridSpace2 }) => (
    gridSpaceIndex === 0 ? `${gridSpace1} ${gridSpace2}` :
    `${gridSpaceIndex} ${gridSpace1} ${gridSpace2}`
    )};
    grid-gap: ${({ gridGap }) => `${gridGap}`};

    @media screen and (max-width: 800px) {
    
    }
`;

  
  