import React from 'react';
import {ArticleLeft, ArticleRight, Headline} from '../../components/article/article.component';

import mouseArcherImg from '../../assets/einstieg/mouseArcher.jpg';
import recurvebowImg from '../../assets/directory/Bogenreihe.jpeg';

import { EinstiegPageContainer } from './einstieg.styles';
import useMediaQuery from "../../components/media-query/media-query.component";

const EinstiegPage = () => 
    {
        const isMobile = useMediaQuery('(max-width: 800px)');
        if(!isMobile) {
            return (

                <EinstiegPageContainer>
                    <Headline text="Der Einstieg"/>
                    <ArticleRight
                        img={mouseArcherImg}
                        title="Körperliche Voraussetzungen"
                        text='Interessenten müssen keine körperlichen Voraussetzungen mitbringen, um dem Kreis der Bogenschützen beizutreten. Der Bogensport ist eine der wenigen Sportarten, bei dem sowohl behinderte als auch körperlich gesunde Schützen sich aneinander messen können. Wichtige Voraussetzungen sind jedoch ein gesundes Maß an Konzentration, innerer Ruhe und Geduld. Die richtige Technik und Zielgenauigkeit sind – in der Regel auch abhängig vom Talent des Schützen – binnen weniger Monate erreichbar. Besonders aufgrund des sich ständig wiederholenden Verlaufs von Haltung und Abschuss ist weniger die körperliche als geistige Fitness gefragt.'
                        test2='Im Bogensport wird kein Mindestalter empfohlen, in dem ein Interessent anfangen sollte – wie beispielsweise in der Leichtathletik. Sowohl als Leistungs- als Freizeitsport ist Bogenschießen bis ins hohe Alter möglich. Ein Einstieg von unter 10 Jahren ist jedoch nicht unbedingt geeignet, da in diesem Alter noch ohnehin die nötige Konzentration und Geduld fehlt. Zahlreiche Schützen haben in weniger als vier Jahren weltbeste Leistungen erzielt; einem späten Einstieg als zukünftiger Leistungssportler steht daher nichts entgegen.'
                    />
                    <ArticleLeft
                        img={recurvebowImg}
                        title="Bogenschießen ist Leistungssport"
                        text='Ohne Frage ist der Bogensport in Europa kein populärer Volkssport, auch wenn er durch das größer gewordene Interesse derzeit einen Aufschwung erlebt. Aus Unwissen wird oft resultiert, gegenwärtiges Bogenschießen sei lediglich ein Zeitvertreib, welchem man sich entweder jeden Sommer im Freien oder auch zu besonderen Gelegenheiten annimmt.'
                        text2='Tatsächlich gehört Bogenschießen auch zu den Leistungssportarten und wird u.a. in Korea bereits im Schulalter professionell trainiert und finanziell unterstützt. Durch die frühzeitige Einweisung in Konzentration, Geduld und Automation hat hierdurch die koreanische Nationalmannschaft auch in sämtlichen olympischen Spielen ununterbrochen großartige Leistungen vollbracht.' 
                        text3='Wenn ein Schütze sich entschlossen hat, für einen hohen Preis eine komplette Ausrüstung zu kaufen, nimmt er ein ganzjähriges Training in Kauf und übt sich ständig in Geduld und Technik. Schützen, die sich im Winter zurückziehen, bemerken bereits im kommenden Sommer, dass sich durch das fehlende Training die wichtige Haltung verschlechtert und so die Schüsse unter dem üblichen Standard liegen. Auch wird eine Passé im Turnier unterschätzt, in dem eine bestimmte Anzahl von Pfeilen innerhalb einer bestimmten Zeitspanne geschossen werden müssen. Die Teilnahme an solchen Turnieren erfordern Kondition und Konzentration.'
                    />
                </EinstiegPageContainer>
            )
        } else {
            return (
                <EinstiegPageContainer>
                    <Headline text="Die Ausrüstung"/>
                    <ArticleRight
                        img={mouseArcherImg}
                        title="Körperliche Voraussetzungen"
                        text='Interessenten müssen keine körperlichen Voraussetzungen mitbringen, um dem Kreis der Bogenschützen beizutreten. Der Bogensport ist eine der wenigen Sportarten, bei dem sowohl behinderte als auch körperlich gesunde Schützen sich aneinander messen können. Wichtige Voraussetzungen sind jedoch ein gesundes Maß an Konzentration, innerer Ruhe und Geduld. Die richtige Technik und Zielgenauigkeit sind – in der Regel auch abhängig vom Talent des Schützen – binnen weniger Monate erreichbar. Besonders aufgrund des sich ständig wiederholenden Verlaufs von Haltung und Abschuss ist weniger die körperliche als geistige Fitness gefragt.'
                        test2='Im Bogensport wird kein Mindestalter empfohlen, in dem ein Interessent anfangen sollte – wie beispielsweise in der Leichtathletik. Sowohl als Leistungs- als Freizeitsport ist Bogenschießen bis ins hohe Alter möglich. Ein Einstieg von unter 10 Jahren ist jedoch nicht unbedingt geeignet, da in diesem Alter noch ohnehin die nötige Konzentration und Geduld fehlt. Zahlreiche Schützen haben in weniger als vier Jahren weltbeste Leistungen erzielt; einem späten Einstieg als zukünftiger Leistungssportler steht daher nichts entgegen.'
                    />
                    <ArticleRight
                        img={recurvebowImg}
                        title="Bogenschießen ist Leistungssport"
                        text='Ohne Frage ist der Bogensport in Europa kein populärer Volkssport, auch wenn er durch das größer gewordene Interesse derzeit einen Aufschwung erlebt. Aus Unwissen wird oft resultiert, gegenwärtiges Bogenschießen sei lediglich ein Zeitvertreib, welchem man sich entweder jeden Sommer im Freien oder auch zu besonderen Gelegenheiten annimmt.'
                        text2='Tatsächlich gehört Bogenschießen auch zu den Leistungssportarten und wird u.a. in Korea bereits im Schulalter professionell trainiert und finanziell unterstützt. Durch die frühzeitige Einweisung in Konzentration, Geduld und Automation hat hierdurch die koreanische Nationalmannschaft auch in sämtlichen olympischen Spielen ununterbrochen großartige Leistungen vollbracht.'
                        text3='Wenn ein Schütze sich entschlossen hat, für einen hohen Preis eine komplette Ausrüstung zu kaufen, nimmt er ein ganzjähriges Training in Kauf und übt sich ständig in Geduld und Technik. Schützen, die sich im Winter zurückziehen, bemerken bereits im kommenden Sommer, dass sich durch das fehlende Training die wichtige Haltung verschlechtert und so die Schüsse unter dem üblichen Standard liegen. Auch wird eine Passé im Turnier unterschätzt, in dem eine bestimmte Anzahl von Pfeilen innerhalb einer bestimmten Zeitspanne geschossen werden müssen. Die Teilnahme an solchen Turnieren erfordern Kondition und Konzentration.' 
                    />
                </EinstiegPageContainer>
            )
        }
    }

export default EinstiegPage;