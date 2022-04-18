import React from 'react';
import {Headline, ArticleTextOnly} from '../../components/article/article.component';

import medaillenImg from '../../assets/verein/medaillen.jpeg';

import useMediaQuery from '../../components/media-query/media-query.component';
import { ImageContainer, TurnierePageContainer } from './turniere.styles';

const TurnierePage = () => 
    {
        const isMobile = useMediaQuery('(max-width: 800px)');
        if(!isMobile) {
            return (
                <TurnierePageContainer>
                    <Headline text="Turniere und Wettkämpfe"/>
                    <ArticleTextOnly
                        text="Selbstverständlich werden auch im Bogensport zahlreiche Turniere und Wettkämpfe bestritten. Jedoch sind längst nicht alle Veranstaltungen rekordberechtigt. Idealerweise sollen sich sämtliche Turniere dem ausgearbeiteten Reglement der World Archery (WA)/Fédération Internationale de Tir à l‘Arc (FITA) unterwerfen; für rekord- und meisterschaftsberechtigte Wettkämpfe sind die Richtlinien der im Jahre 1931 gegründeten französischen Föderation zwingend. Die meisten Mitgliedsverbände der FITA haben eine eigene Dachorganisation. Die deutschen Bogenschützen dagegen sind Mitglied im Deutschen Schützenbund, in dem alle weiteren Schießsportdisziplinen vereinigt sind. Geschossen wird im Freien auf einer Distanz bis zu 70 m (Damen) und 90 m (Herren). In der Wintersaison wird in den Hallen auf einer Distanz von 18 m geschossen. Von der WA „abgesegnete“ Zielscheiben haben im Gesamtbild und der Ringgröße eine entsprechende Größe einzuhalten. Im Bogenschießen finden nationale und internationale Meisterschaften statt."
                        text2="
                        Die Vereine messen ihre Leistungen in der Regional- und Bundesliga. Obwohl das Bogenschießen bereits von 1900 bis 1920 als Rahmenveranstaltung auf dem olympischen Programm stand, musste man bis 1972 warten, ehe das Bogenschießen in das offizielle Programm der Olympischen Spiele aufgenommen wurde."
                    />
                    <ImageContainer src={medaillenImg} />
                </TurnierePageContainer>
            )
        } else {
            return (
                <TurnierePageContainer>
                    <Headline text="Turniere und Wettkämpfe"/>
                    <ArticleTextOnly
                        text="Selbstverständlich werden auch im Bogensport zahlreiche Turniere und Wettkämpfe bestritten. Jedoch sind längst nicht alle Veranstaltungen rekordberechtigt. Idealerweise sollen sich sämtliche Turniere dem ausgearbeiteten Reglement der World Archery (WA)/Fédération Internationale de Tir à l‘Arc (FITA) unterwerfen; für rekord- und meisterschaftsberechtigte Wettkämpfe sind die Richtlinien der im Jahre 1931 gegründeten französischen Föderation zwingend. Die meisten Mitgliedsverbände der FITA haben eine eigene Dachorganisation. Die deutschen Bogenschützen dagegen sind Mitglied im Deutschen Schützenbund, in dem alle weiteren Schießsportdisziplinen vereinigt sind. Geschossen wird im Freien auf einer Distanz bis zu 70 m (Damen) und 90 m (Herren). In der Wintersaison wird in den Hallen auf einer Distanz von 18 m geschossen. Von der WA „abgesegnete“ Zielscheiben haben im Gesamtbild und der Ringgröße eine entsprechende Größe einzuhalten. Im Bogenschießen finden nationale und internationale Meisterschaften statt."
                        text2="
                        Die Vereine messen ihre Leistungen in der Regional- und Bundesliga. Obwohl das Bogenschießen bereits von 1900 bis 1920 als Rahmenveranstaltung auf dem olympischen Programm stand, musste man bis 1972 warten, ehe das Bogenschießen in das offizielle Programm der Olympischen Spiele aufgenommen wurde."
                    />
                    <ImageContainer src={medaillenImg} />
                </TurnierePageContainer>
            )
        }
    }

export default TurnierePage;