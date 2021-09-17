import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignUpContainer, TitleContainer } from './registrierung.styles';

const Registrierung = () => {

    const [ emailAndPassword, setCredentials ] = useState({ displayName: '', email: '', password: '', confirmPassword: ''});
    const { displayName, email, password, confirmPassword } = emailAndPassword;

    const handleSubmit = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("password don't match!");
            return;
        }

        //signUpStart({email,password,displayName});
            
    }

    const handleChange = event => {
        const {name, value} = event.target;
        setCredentials({ ...emailAndPassword, [name]: value });
    }

    return (
    <SignUpContainer>
        <TitleContainer>Ich habe noch keinen Account</TitleContainer>
        <span>Bitte mit E-Mail und Passwort registrieren</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
            <FormInput type='text' name='displayName' value={displayName} onChange={handleChange} label='Name' required></FormInput>
            <FormInput type='email' name='email' value={email} onChange={handleChange} label='E-Mail' required></FormInput>
            <FormInput type='password' name='password' value={password} onChange={handleChange} label='Passwort' required></FormInput>
            <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={handleChange} label='Passwort bestätigen' required></FormInput>
            <CustomButton type='submit'>Registrieren</CustomButton>
        </form>
    </SignUpContainer>
    );
}

export default Registrierung;