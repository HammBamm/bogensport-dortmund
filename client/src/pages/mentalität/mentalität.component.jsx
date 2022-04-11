import React from 'react';
import {ArticleLeft, Headline, ArticleRight} from '../../components/article/article.component';

import recurvebowImg from '../../assets/directory/Bogenreihe.jpeg';

import { MentalitätPageContainer } from './mentalität.styles';
import useMediaQuery from '../../components/media-query/media-query.component';

const MentalitätPage = () => 
    {
        const isMobile = useMediaQuery('(max-width: 800px)');
        if(!isMobile) {
            return (
                <MentalitätPageContainer>
                    <Headline text="Vereinsmentalität"/>
                    <ArticleLeft
                        img={recurvebowImg}
                        title="Wir sind ein lebendiger Verein"
                        text='Unser Verein besteht aus einer kleinen Gemeinschaft, die sich weder unter Erfolgs- noch Leistungsdruck setzt und mit viel Freude an ihrem Hobby sich gegenseitig unter die Arme greift. Einige trainieren für Meisterschaften, andere für ihre Gesundheit, wieder andere aus Spaß am Bogenschießen, die nächste Gruppe bevorzugt das Spaßschießen und wieder andere kombinieren alles.'
                        text2='Wer in unserem Verein Mitglied wird, bestimmt selbst welche Richtung des Bogenschießens er einschlägt, ob Recurve-, Compound-, Blank- oder Langbogen.'
                        text3='Umfassende Informationen, Termine, Kosten und Antworten auf eure Fragen werden gerne beim „Besuchertermin für Interessenten“ besprochen!' 
                    />
                </MentalitätPageContainer>
            )
        } else {
            return (
                <MentalitätPageContainer>
                    <Headline text="Vereinsmentalität"/>
                    <ArticleRight
                        img={recurvebowImg}
                        title="Wir sind ein lebendiger Verein"
                        text='Unser Verein besteht aus einer kleinen Gemeinschaft, die sich weder unter Erfolgs- noch Leistungsdruck setzt und mit viel Freude an ihrem Hobby sich gegenseitig unter die Arme greift. Einige trainieren für Meisterschaften, andere für ihre Gesundheit, wieder andere aus Spaß am Bogenschießen, die nächste Gruppe bevorzugt das Spaßschießen und wieder andere kombinieren alles.'
                        text2='Wer in unserem Verein Mitglied wird, bestimmt selbst welche Richtung des Bogenschießens er einschlägt, ob Recurve-, Compound-, Blank- oder Langbogen.'
                        text3='Umfassende Informationen, Termine, Kosten und Antworten auf eure Fragen werden gerne beim „Besuchertermin für Interessenten“ besprochen!' 
                    />
                </MentalitätPageContainer>
            )
        }
    }

export default MentalitätPage;