import React from 'react';
import Anmelden from '../../components/anmelden/anmelden.component';

import Registrierung from '../../components/registrierung/registrierung.component';

import { AnmeldungRegistrierungContainer } from './anmeldung-registrierung.styles';

const AnmeldungRegistrierungPage = () => {
    return (
        <AnmeldungRegistrierungContainer>
            <Anmelden />
            <Registrierung />
        </AnmeldungRegistrierungContainer>
    );
}

export default AnmeldungRegistrierungPage;