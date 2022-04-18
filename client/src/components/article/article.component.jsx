import React from 'react';

import { 
    ArticleContainer,
    ArticleTextContainer,
    ArticleImageContainerLeft,
    ArticleImageContainerRight,
    HeadlineContainer,
    ArticleTextGridContainer,
    ArticleGridContainer, 
    GridAreaContainer} from './article.styles';

export const Headline = ({text}) => (
    <HeadlineContainer>{text}</HeadlineContainer>
)

export const ArticleLeft = ({img, title, text, text2, text3}) => (
    <ArticleContainer>
        <ArticleImageContainerLeft src={img} />
        <ArticleTextContainer>
            <h2>{title}</h2>
            <span>{text}<br/></span>
            <span>{text2}<br/></span>
            <span>{text3}</span>
        </ArticleTextContainer>
    </ArticleContainer>
);

export const ArticleEnumeration = ({title, textArr}) => (
    <ArticleContainer>
        <ArticleTextContainer>
            <h2>{title}</h2>
            {
                textArr.map(({ id, text }) => (
                    <span key={id} ><p>{text}<br /></p></span>
                ))
            }
        </ArticleTextContainer>
    </ArticleContainer>
)

export const ArticleGridWrapper = ({ title, textArr, gridSpaceIndex, gridSpace1, gridSpace2, gridGap }) => (
    <ArticleGridContainer>
        <h2>{title}</h2>
        <ArticleTextGridContainer gridSpaceIndex={gridSpaceIndex} gridSpace1={gridSpace1} gridSpace2={gridSpace2} gridGap={gridGap} >
            {
                textArr.map(({ id, text }) => (
                    <GridAreaContainer gridSpaceIndex={gridSpaceIndex} textId={id} key={id} ><p>{text}<br /></p></GridAreaContainer>
                ))
            }
        </ArticleTextGridContainer>
    </ArticleGridContainer>
)

export const ArticleEnumerationWithImg = ({img, title, textArr}) => (
    <ArticleContainer>
        <ArticleTextContainer>
            <h2>{title}</h2>
            {
                textArr.map(({ id, text }) => (
                    <span key={id} ><p>{text}<br /></p><br /></span>
                ))
            }
        </ArticleTextContainer>
        <ArticleImageContainerRight src={img} />
    </ArticleContainer>
)

export const ArticleTextOnly = ({title, text, text2, text3}) => (
    <ArticleContainer>
        <ArticleTextContainer>
            <h2>{title}</h2>
            <span>{text}<br/></span>
            <span>{text2}<br/></span>
            <span>{text3}</span>
        </ArticleTextContainer>
    </ArticleContainer>
);

export const ArticleRight = ({img, title, text, text2, text3}) => (
    <ArticleContainer>
        <ArticleTextContainer>
            <h2>{title}</h2>
            <span>{text}<br/></span>
            <span>{text2}<br/></span>
            <span>{text3}</span>
        </ArticleTextContainer>
        <ArticleImageContainerRight src={img} />
    </ArticleContainer>
);