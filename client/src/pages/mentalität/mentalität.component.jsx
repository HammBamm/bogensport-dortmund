import React from 'react';
import { Headline, ArticleRight, ArticleTextOnly} from '../../components/article/article.component';

import feurstelleImg from '../../assets/verein/Feuerstelle.JPEG';

import { ImageContainer, MentalitätPageContainer } from './mentalität.styles';
import useMediaQuery from '../../components/media-query/media-query.component';

const MentalitätPage = () => 
    {
        const isMobile = useMediaQuery('(max-width: 800px)');
        if(!isMobile) {
            return (
                <MentalitätPageContainer>
                    <Headline text="Vereinsmentalität"/>
                    <ArticleTextOnly
                        text='Unser Verein besteht aus einer Gemeinschaft, die sich weder unter Erfolgs- noch Leistungsdruck setzt und mit viel Freude an ihrem Hobby sich gegenseitig unter die Arme greift. Einige trainieren für Meisterschaften, andere für ihre Gesundheit, wieder andere aus Spaß am Bogenschießen, die nächste Gruppe bevorzugt das Spaßschießen und wieder andere kombinieren alles.'
                        text2='Wer in unserem Verein Mitglied wird, bestimmt selbst welche Richtung des Bogenschießens er einschlägt, ob Recurve-, Compound-, Blank- oder Langbogen.'
                        text3='Umfassende Informationen, Termine, Kosten und Antworten auf eure Fragen werden gerne beim „Besuchertermin für Interessenten“ besprochen!' 
                    />
                    <ImageContainer src={feurstelleImg} />
                </MentalitätPageContainer>
            )
        } else {
            return (
                <MentalitätPageContainer>
                    <Headline text="Vereinsmentalität"/>
                    <ArticleRight
                        img={feurstelleImg}
                        text='Unser Verein besteht aus einer Gemeinschaft, die sich weder unter Erfolgs- noch Leistungsdruck setzt und mit viel Freude an ihrem Hobby sich gegenseitig unter die Arme greift. Einige trainieren für Meisterschaften, andere für ihre Gesundheit, wieder andere aus Spaß am Bogenschießen, die nächste Gruppe bevorzugt das Spaßschießen und wieder andere kombinieren alles.'
                        text2='Wer in unserem Verein Mitglied wird, bestimmt selbst welche Richtung des Bogenschießens er einschlägt, ob Recurve-, Compound-, Blank- oder Langbogen.'
                        text3='Umfassende Informationen, Termine, Kosten und Antworten auf eure Fragen werden gerne beim „Besuchertermin für Interessenten“ besprochen!' 
                    />
                </MentalitätPageContainer>
            )
        }
    }

export default MentalitätPage;