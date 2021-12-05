import React from 'react';

import { ArticleContainer, ArticleTextContainer, ArticleImageContainerLeft, ArticleImageContainerRight, HeadlineContainer } from './article.styles';

export const Headline = ({text}) => (
    <HeadlineContainer>{text}</HeadlineContainer>
)

export const ArticleLeft = ({img, title, text}) => (
    <ArticleContainer>
        <ArticleImageContainerLeft src={img} />
        <ArticleTextContainer>
            <h2>{title}</h2>
            <p>{text}</p>
        </ArticleTextContainer>
    </ArticleContainer>
);

export const ArticleEnumeration = ({img, title, textArr}) => (
    <ArticleContainer>
        <ArticleTextContainer>
            <h2>{title}</h2>
            {
                textArr.map(({ id, text }) => (
                    <span key={id} >{text}<br /></span>
                ))
            }
        </ArticleTextContainer>
    </ArticleContainer>
)

export const ArticleEnumerationWithImg = ({img, title, textArr}) => (
    <ArticleContainer>
        <ArticleTextContainer>
            <h2>{title}</h2>
            {
                textArr.map(({ id, text }) => (
                    <span key={id} >{text}<br /></span>
                ))
            }
        </ArticleTextContainer>
        <ArticleImageContainerRight src={img} />
    </ArticleContainer>
)

export const ArticleTextOnly = ({title, text}) => (
    <ArticleContainer>
        <ArticleTextContainer>
            <h2>{title}</h2>
            <p>{text}</p>
        </ArticleTextContainer>
    </ArticleContainer>
);

export const ArticleRight = ({img, title, text}) => (
    <ArticleContainer>
        <ArticleTextContainer>
            <h2>{title}</h2>
            <p>{text}</p>
        </ArticleTextContainer>
        <ArticleImageContainerRight src={img} />
    </ArticleContainer>
);