import styled from 'styled-components';
import { globalScheme } from '../../global.styles';

export const HeadlineContainer = styled.h2`
    font-size: 40px;
    text-align: center;
    margin-bottom: 0;
`;

export const ArticleContainer = styled.div`
    display: flex;
    overflow: hidden;
    
    span {
        word-wrap: break-word;
        overflow-wrap: break-word;
    }

    h2 {
        font-weight: 600;
    }

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

export const ArticleGridContainer = styled.div`

    h2 {
        font-size: 25px;
    }

    @media screen and (max-width: 800px) {
        flex-direction: column;
        padding: 0;
        h2 {
            font-size: 20px;
        }
    }
`;

export const ArticleImageContainerLeft = styled.img`
    margin: 20px 30px 0 0;
    width: 250px;
    object-fit: contain;
    align-self: flex-start;
    /* border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    border: 3px solid ${globalScheme.darkgreen}; */
    background: white;

    @media screen and (max-width: 800px) {
        width: unset;
        align-self: center;
    }
`;

export const ArticleImageContainerRight = styled.img`
    margin: 20px 0 0 30px;
    width: 250px;
    object-fit: contain;
    align-self: flex-end;
    /* border-radius: 15px 225px 15px 255px/255px 15px 225px 15px;
    border: 3px solid ${globalScheme.darkgreen}; */

    @media screen and (max-width: 800px) {
        align-self: center;
        width: unset;
        margin-left: 0%
    }
`;

export const ArticleTextContainer = styled.div`
    flex: 1 1 auto;
    text-align: justify;
    justify-content: start;

    h2 {
        font-size: 25px;
    }

    @media screen and (max-width: 800px) {
        h2 {
            font-size: 20px;
        }
    }
`;

export const ArticleTextGridContainer = styled.div`
    margin: 0;
    display: grid;
    p {
        padding : 0;
        margin : 0;
    }
    grid-template-columns: ${({ gridSpaceIndex, gridSpace1, gridSpace2 }) => (
    gridSpaceIndex === 0 ? `${gridSpace1} ${gridSpace2}` :
    `${gridSpaceIndex} ${gridSpace1} ${gridSpace2}`
    )};
    column-gap: ${({ gridGap }) => `${gridGap}`};

    @media screen and (max-width: 800px) {
    }
`;

  
  