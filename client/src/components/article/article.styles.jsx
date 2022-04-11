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
        font-size: large;
    }
`;

export const ArticleGridContainer = styled.div`
    hyphens: auto; 
    text-align: justify;
    word-wrap: break-word;
    overflow-wrap: break-word;

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
        display: flex;
        align-self: center;
    }
`;

export const ArticleImageContainerRight = styled.img`
    margin: 20px 0 0 30px;
    max-width: 250px;
    object-fit: contain;
    align-self: flex-end;
    /* border-radius: 15px 225px 15px 255px/255px 15px 225px 15px;
    border: 3px solid ${globalScheme.darkgreen}; */

    @media screen and (max-width: 800px) {
        align-self: center;
        display: flex;
        margin-left: 0%;
    }
`;

export const ArticleTextContainer = styled.div`
    flex: 1 1 auto;
    text-align: justify;
    justify-content: start;
    hyphens: auto; 
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
    display: grid;
    word-wrap: break-word;
    overflow-wrap: break-word;
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
        grid-template-columns: ${({ gridSpaceIndex, gridSpace1, gridSpace2 }) => (
            gridSpaceIndex === 0 ? `${gridSpace1} ${gridSpace2}` :
            `${gridSpaceIndex} ${gridSpace1} ${gridSpace2}` )};
        grid-template-areas: 
            'text1 text2'
            'text3 text3';
    }
`;

  
  