import React, { useState } from "react";
import { useAlert } from "react-alert";
import axios from 'axios';
import { Form, Field } from 'react-final-form'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import CustomButton from "../custom-button/custom-button.component";
import { ClipboardButtonContainer, ClipboardContainer, DivWrapper, EmailContainer, FallbackContainer } from "./contact-form.styles";

import clipboardImg from '../../assets/contact/clipboard.png';

const ContactForm = () => {

  // const API_PATH = 'http://server.bogensport-dortmund.de';
  const API_PATH = 'http://localhost:5000/kontakt';
  const alert = useAlert();
  const [fallback, setFallback] = useState(false);
  const [status, setStatus] = useState("Senden");
  const [formVals, setFormVals] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });
  const [disabled, setDisabled] = useState(false);

/*   useEffect(() => {
    const timeout = setTimeout(() => { setDisabled(false) }, 3000);  
  },[]); */

  const onSubmit = values => {
    alert.info("Kontaktinformationen werden gesendet.")
    setStatus("Sende Nachricht...");
    setFormVals(values);
    console.log(values);
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: values
    })
    .then(response => {
      console.log(response);
      if(response.status!==200){
        alert.error("Kontaktinformationen konnten nicht gesendet werden.");
        setDisabled(false);
        setFallback(true);
      } else {
        console.log(response.status)
        alert.success("Kontaktinformationen wurden erfolgreich gesendet.");
        setStatus("Gesendet");
      }
      
    })
    .catch(error => {
      console.log(error);
      alert.error("Kontaktinformationen konnten nicht gesendet werden.");
      setDisabled(false);
      setFallback(true);
    });

  };

  return (
    <DivWrapper>
      <h1>Kontaktformular</h1>
      <Form onSubmit={onSubmit}>
      {({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Vorname</label>
              <Field           
                name='firstname'
                component="input"
                type='text'
                placeholder="Vorname"
                required
                />
            </div>
            <div>
              <label>Nachname</label>
              <Field           
                name='lastname'
                component="input"
                type='text'
                placeholder="Nachname"
                required
                />
            </div>
            <div>
              <label>E-Mail</label>
            <Field 
              name='email'
              type='email'
              component="input"
              placeholder="E-Mail"
              required
              />
            </div>
            <div>
              <label>Nachricht</label>
            <Field
              name='message'
              component="textarea"
              placeholder='Hallo, ich will Bogenschießen.'
              required />
            </div>
            <CustomButton id="submitButton" inverted type="submit" onClick={() => setDisabled(true) } disabled={disabled}>{status}</CustomButton>
          </form>
        )}
      </Form>
      {
      fallback ? <FallbackContainer><h2>&#128679; Aufgrund eines Fehlers auf dem Server konnte das Kontaktformular nicht gesendet werden.<br />
      Alternativ kann auch eine Nachricht an folgende E-Mail versendet werden: <EmailContainer id="email">kontakt@bogensport-dortmund.de</EmailContainer></h2>
      <CopyToClipboard text="kontakt@bogensport-dortmund.de" onCopy={() => alert.success("E-Mail-Adresse kopiert.")}>
        <ClipboardButtonContainer>
          <ClipboardContainer src={clipboardImg} alt="Copy to clipboard" />
        </ClipboardButtonContainer>
      </CopyToClipboard>
      </FallbackContainer>  : status==='Gesendet' ? 
        <FallbackContainer><h2>&#128235; Danke für deine Nachricht. Wir melden uns bei Dir über deine angebene E-Mail: <br /><br />
        <EmailContainer>{formVals.email}</EmailContainer></h2>
      </FallbackContainer> :
        <span />
      }
    </DivWrapper>
  );
};

export default ContactForm;