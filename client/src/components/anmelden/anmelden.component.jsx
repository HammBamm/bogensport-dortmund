import React, { useState } from 'react';

import { FormInput } from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { AnmeldenContainer, AnmeldenTitle } from './anmelden.styles';

const Anmelden = () => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    //emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <AnmeldenContainer>
      <AnmeldenTitle>Ich habe bereits einen Account</AnmeldenTitle>
      <span>Bitte mit E-Mail und Passwort anmelden</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='E-Mail'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='Passwort'
          required
        />
        <CustomButton isSignIn type='submit'> Anmelden </CustomButton>
      </form>
    </AnmeldenContainer>
  );
};

export default Anmelden;

