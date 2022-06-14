import React, {lazy, Suspense} from 'react';
import { Switch, Route, withRouter } from 'react-router';
import { BrowserRouter, Redirect } from 'react-router-dom';

import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import { GlobalStyle } from './global.styles';

import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import ContactPage from './pages/contact/contact-page.component';
import FAQPage from './pages/faq/faq-page.component';
import KalenderPage from './pages/kalender/kalender-page.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import ImpressumPage from './pages/impressum/impressum.component';
import BeiträgePage from './pages/beiträge/beiträge-page.component';
import MentalitätPage from './pages/mentalität/mentalität.component';
import MissingPage from './components/error-boundary/404.component';
import TurnierePage from './pages/turniere/turniere-page.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const VereinPage = lazy(() => import('./pages/verein/verein-page.component'));
const AusrüstungPage = lazy(() => import('./pages/ausrüstung/ausrüstung.component'));
const EinstiegPage = lazy(() => import('./pages/einstieg/einstieg-page.component'));
const SportanlagePage = lazy(() => import('./pages/sportanlage/sportanlage-page.component'));
const BogenschiessenPage = lazy(() => import('./pages/bogenschiessen/bogenschiessen-page.component'));
// const LandingPage = lazy(() => import('./pages/landing/landing-page.component'));

const alterOptions = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};

const App = () => {
  return (
    <BrowserRouter >
      <GlobalStyle />
      <Provider template={AlertTemplate} {...alterOptions}>
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={ <Spinner /> }>
              <Route exact path='/start' component={HomePage}></Route>
              <Route exact path='/start/kontakt' component={ContactPage}></Route>
              <Route exact path='/start/bogenschiessen' component={BogenschiessenPage}></Route>
              <Route exact path='/start/verein' render={() => <VereinPage />}></Route>
              <Route exact path='/start/verein/beitraege' component={BeiträgePage}></Route>
              <Route exact path='/start/verein/mentalitaet' component={MentalitätPage}></Route>
              <Route exact path='/faq' component={FAQPage}></Route>
              <Route exact path='/start/verein/sportanlage' component={SportanlagePage}></Route>
              {/* { <Route exact path='/anmelden' component={AnmeldungRegistrierungPage}></Route>} */}
              <Route exact path='/start/kalender' component={KalenderPage}></Route>
              <Route exact path='/start/bogenschiessen/ausruestung' component={AusrüstungPage}></Route>
              <Route exact path='/impressum' component={ImpressumPage}></Route>
              <Route exact path='/start/bogenschiessen/einstieg' component={EinstiegPage}></Route>
              <Route exact path='/start/bogenschiessen/turniere' component={TurnierePage}></Route>
              <Route exact path='/404' component={MissingPage}></Route>
              <Route exact path='/'></Route>
              <Redirect to="/start" />
            </Suspense>
          </ErrorBoundary>
        </Switch>
        <Footer />
      </Provider>
    </BrowserRouter>
  )
}

export default withRouter(App);
