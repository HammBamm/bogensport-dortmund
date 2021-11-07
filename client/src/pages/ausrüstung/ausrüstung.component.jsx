import React from 'react';
import {ArticleLeft, ArticleRight} from '../../components/article/article.component';

import archeryImg from '../../assets/directory/archery.jpg';
import { AusrüstungPageContainer } from './ausrüstung.styles';

const AusrüstungPage = () => (
    <AusrüstungPageContainer>
        <ArticleLeft
            img={archeryImg}
            title="Recurvebogen"
            text='Der zerlegbare Recurvebogen hat eine Länge von 66" bis 70". Die Wurfarme können zum leichtern Transport abgenommen werden und sind in verleimtem Holz, Glasfiber oder Carbon erhältlich. Das Mittelstück wird beim klassischen Anfängerbogen aus schichtweise verleimtem Holz gefertigt. Turnierbögen besitzen Mittelstücke aus gegossenen oder gefrästen Leichtmetalllegierungen. Gezielt wird mit einem Visier und der Sehne. Schwingungen beim Abschuss werden von Stabilisatoren gedämpft. Die Zuggewichte gehen von 18 lbs. bis 55 lbs. Die Bögen sind als Turnierbogen auf allen Wettkämpfen, einschließlich der Olympischen Spiele, zugelassen.' 
        />
        <ArticleRight
            img={archeryImg}
            title="Compundbogen"
            text='Der Compoundbogen ist das hochentwickelte Prunkstück im Bogensport. Auffällig sind seine kurzen Bauweise und die an den Wurfarmen angebrachten Rollen und Exzenter. Ein weiteres Kabel parallel zur Sehne wickelt sich beim Auszug um die Exzenter und übernimmt so einen Teil der Zugkraft. Mit diesem Flaschenzugsystem erreicht der Schütze eine Gewichtsreduzierung von 60-80%. Das Mittelstück ist aus Leichtmetall gefräst, die Wurfarme aus Carbon gefertigt. Der Schütze löst den Pfeil mit einer Auslösehilfe, dem Release. Schwingungen beim Abschuss werden mit Stabilisatoren gedämpft. Für das Zuggewicht gibt es eine Beschränkung auf 60 lbs. Der Bogen ist mit Ausnahme der Olympischen Spiele auf allen Turnieren zugelassen.' 
        />
        <ArticleLeft
            img={archeryImg}
            title="Langbogen"
            text='Für viele Laien ist der Longbow der Inbegriff des Bogens. Nicht ohne Grund nennt man Wettkämpfe mit dem Langbogen "Traditionelles Schießen". Ein Langbogen besteht aus einem Stück Holz. Moderne Langbögen werden auch aus mehreren, zusammengeleimten Holzschichten gefertigt. Zieleinrichtungen sind nicht erlaubt, man schießt "instinktiv", d. h. das Ziel kommt ins Blickfeld, der Schütze spannt den Bogen in Richtung des Ziels und schießt ohne lange zu zielen. Langbogenschützen sind vorwiegend an Jagd - und Feldturnieren anzutreffen. Mit ihren oft selbstgemachten Lederköchern und den Holzpfeilen wirken sie wie Besucher aus einer vergangenen Welt. Besonders asiatische Langbögen tragen auffällige wunderschöne Schnitzereien und erinnern an antike Stücke.' 
        />
        <ArticleRight
            img={archeryImg}
            title="Pfeile"
            text='Die heutigen Pfeile sind wider Erwarten nicht im Komplettset „Kaufen & Schießen“ erhältlich, sondern werden auf die individuellen Eigenschaften von Schütze und Bogen abgestimmt. Sämtliche Einzelstücke, d.h. Schaft, Spitze, Nocke und Fahnen, werden sorgfältig zusammengestellt. Die Länge und Beschaffenheit des Pfeiles wird sowohl von der Auszugsstärke des Schützen und der Sehnenstärke des eigenen Bogens als auch von der beabsichtigten Distanz, auf die geschossen werden soll, abhängig gemacht. Auch hier sind die Gesamtpreise eines Pfeils äußerst differenziert und liegen in der Regel zwischen 10 und 50 €. Im traditionellen Schützensport werden spezielle aus Holzschaft und Naturfedern gefertigte Pfeile verwendet.' 
        />
        <ArticleLeft
            img={archeryImg}
            title="Schutzkleidung"
            text='Jeder noch so professionelle Schütze muss ausreichend Schutzkleidung an sich tragen, um eventuellen Patzern und daraus resultierenden schmerzhaften Erfahrungen größtmöglich aus dem Wege zu gehen. Grundsätzlich trägt ein Schütze einen kurzen oder langen Armschutz am ausgestreckten Bogenarm, einen Fingerschutz (Fingertab) für die an der Sehne einhakenden Finger sowie einen Streifschutz über der Brusthälfte, an der die Sehne nach Abschuss vorbeischnellt. Eine falsche Haltung sowie einen zu weit nach innen ausgestreckter Bogenarm werden schnell durch einen Schlag der Sehne gegen die Brust oder gegen den Arm bestraft. Aus letzterem resultiert sodann ein kleiner Bluterguss, der nach wenigen Tagen wieder verschwindet.' 
        />
    </AusrüstungPageContainer>
)

export default AusrüstungPage;