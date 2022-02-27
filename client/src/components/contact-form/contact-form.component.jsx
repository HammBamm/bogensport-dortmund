import React, { useState } from "react";
import { useAlert } from "react-alert";
import { Headline } from "../article/article.component";
import CustomButton from "../custom-button/custom-button.component";
import { FormInput } from "../form-input/form-input.component";
import { FormTextarea } from "../form-input/form-input.styles";
import { ContactFormContainer, EmailContainer, FallbackContainer, FormWrapperContainer, TextareaLabelContainer } from "./contact-form.styles";

const ContactForm = () => {

  const alert = useAlert();
  const [fallback, setFallback] = useState(false);
  const [status, setStatus] = useState("Senden");
  const [formVals, setFormVals] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [disabled, setDisabled] = useState(false);

/*   useEffect(() => {
    const timeout = setTimeout(() => { setDisabled(false) }, 3000);  
  },[]); */

  const { name, email, message } = formVals;

  const handleSubmit = async event => {
    event.preventDefault();
    alert.info("Kontaktinformationen werden gesendet.")
    setStatus("Sende Nachricht...");
    const { name, email, message } = event.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    await fetch("http://localhost:5000/kontakt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
    .then(response => {
      console.log(response);
      if(response.status===404){
        alert.error("Kontaktinformationen konnten nicht gesendet werden. Bitte versuche es später erneut.");
        setDisabled(false);
        setFallback(true);
      } else {
        alert.success("Kontaktinformationen wurden erfolgreich gesendet.");
        setStatus("Gesendet");
      }
      
    })
    .catch(error => {
      console.log(error);
      alert.error("Kontaktinformationen konnten nicht gesendet werden. Bitte versuche es später erneut.");
      setDisabled(false);
      setFallback(true);
    });
    
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setFormVals({ ...formVals, [name]: value });
  };

  return (
    <ContactFormContainer>
      <Headline text="Kontakt"/>
      <FormWrapperContainer>
        <form id= 'contactFormId' onSubmit={handleSubmit}>
          <FormInput
            name='name'
            type='text'
            value={name}
            handleChange={handleChange}
            label='Vor- und Nachname'
            required
            />
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={email}
            label='E-Mail'
            maxlength="256"
            required
          />
          <TextareaLabelContainer className={message.length ? 'shrink' : ''}>Nachricht</TextareaLabelContainer>
          <FormTextarea
            name='message'
            onChange={(event) => {handleChange(event)}}
            form='contactFormId'
            id= "msgbox"
            placeholder='Hallo, ich will Bogenschießen.'
            rows="10"
            value={message}
            required
          ></FormTextarea>
          <CustomButton id="submitButton" inverted type="submit" onClick={() => setDisabled(true) } disabled={disabled}>{status}</CustomButton>
        </form>
        {
        fallback ? <FallbackContainer><h2>&#128679;Aufgrund eines Fehlers auf dem Server konnte das Kontaktformular nicht gesendet werden.<br />
        Alternativ kann auch eine Nachricht an folgende E-Mail versendet werden: <EmailContainer>kontakt@bogensport-dortmund.de</EmailContainer></h2>
        </FallbackContainer>  : status==='Gesendet' ? 
          <FallbackContainer><h2>&#128235; Danke für deine Nachricht. Wir melden uns bei Dir über deine angebene E-Mail: <br /><br />
          <EmailContainer>{formVals.email}</EmailContainer></h2>
          </FallbackContainer> :
          <span></span>
        }
      </FormWrapperContainer>
      
    </ContactFormContainer>
  );
};

export default ContactForm;