import React from 'react';
import {ArticleLeft, Headline, ArticleRight} from '../../components/article/article.component';

import recurvebowImg from '../../assets/directory/Bogenreihe.jpeg';
import grillImg from '../../assets/directory/grill.jpg';
import medaillenImg from '../../assets/verein/medaillen.jpeg';

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
                        text='Unser Verein besteht aus einer kleinen Gemeinschaft, die sich weder unter Erfolgs- noch Leistungsdruck setzt und mit viel Freude an ihrem Hobby sich gegenseitig unter die Arme greift. Einige trainieren für Meisterschaften, andere für ihre Gesundheit, wieder andere aus Spaß am Bogenschießen, die nächste Gruppe bevorzugt das Spaßschießen und wieder andere kombinieren alles. Doch auf alle Aktiven hat der Trainer, sowie alle anderen Mitglieder, ein waches Auge und achtet auf Haltung, Technik, gibt Tipps oder erteilt Rat ohne dabei die Einhaltung der Sicherheitsregeln zu vernachlässigen. Alle zusammen achten darauf, dass die neusten Nachrichten auch verbreitet werden, die Raucher keine Entzugserscheinungen bekommen und die Geselligkeit nicht verloren geht. 
                        Wer in unserem Verein Mitglied wird, bestimmt selbst welche Richtung des Bogenschießens er einschlägt, ob Recurve, Compound, Blank oder Langbogen.' 
                    />
                    <ArticleRight
                        img={medaillenImg}
                        title="Turniere"
                        text="Sportlich orientierte Schützen können mit uns die Meisterschaften des Westfälischen und Deutschen Schützenbundes, sowie freie FITA/WA-, 3D- und Feldtuniere bestreiten."
                    />
                    <ArticleLeft
                        img={grillImg}
                        title="Aktionen"
                        text='Zeit für Abwechslung wird sich ebenfalls genommen. Ob bei der gemeinsamen Platzpflege, einem Spaßturnier mit Grillen oder einem Ausflug zum Weihnachtsmarkt.' 
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
                        text='Unser Verein besteht aus einer kleinen Gemeinschaft, die sich weder unter Erfolgs- noch Leistungsdruck setzt und mit viel Freude an ihrem Hobby sich gegenseitig unter die Arme greift. Einige trainieren für Meisterschaften, andere für ihre Gesundheit, wieder andere aus Spaß am Bogenschießen, die nächste Gruppe bevorzugt das Spaßschießen und wieder andere kombinieren alles. Doch auf alle Aktiven hat der Trainer, sowie alle anderen Mitglieder, ein waches Auge und achtet auf Haltung, Technik, gibt Tipps oder erteilt Rat ohne dabei die Einhaltung der Sicherheitsregeln zu vernachlässigen. Alle zusammen achten darauf, dass die neusten Nachrichten auch verbreitet werden, die Raucher keine Entzugserscheinungen bekommen und die Geselligkeit nicht verloren geht. 
                        Wer in unserem Verein Mitglied wird, bestimmt selbst welche Richtung des Bogenschießens er einschlägt, ob Recurve, Compound, Blank oder Langbogen.' 
                    />
                    <ArticleRight
                        img={medaillenImg}
                        title="Turniere"
                        text="Sportlich orientierte Schützen können mit uns die Meisterschaften des Westfälischen und Deutschen Schützenbundes, sowie freie FITA/WA-, 3D- und Feldtuniere bestreiten."
                    />
                    <ArticleRight
                        img={grillImg}
                        title="Aktionen"
                        text='Zeit für Abwechslung wird sich ebenfalls genommen. Ob bei der gemeinsamen Platzpflege, einem Spaßturnier mit Grillen oder einem Ausflug zum Weihnachtsmarkt.' 
                    />
                </MentalitätPageContainer>
            )
        }
    }

export default MentalitätPage;