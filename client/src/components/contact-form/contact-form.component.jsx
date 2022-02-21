import React, { useState } from "react";
import { useAlert } from "react-alert";
import { Headline } from "../article/article.component";
import CustomButton from "../custom-button/custom-button.component";
import { FormInput } from "../form-input/form-input.component";
import { FormTextarea } from "../form-input/form-input.styles";
import { ContactFormContainer, FormWrapperContainer, TextareaLabelContainer } from "./contact-form.styles";

const ContactForm = () => {

  const alert = useAlert();
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
      alert.success("Kontaktinformationen erfolgreich gesendet.");
      setStatus("Gesendet");
    })
    .catch(error => {
      console.log(error);
      alert.error("Kontaktinformationen konnten nicht gesendet werden, bitte später erneut versuchen");
      setDisabled(false);
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
      </FormWrapperContainer>
    </ContactFormContainer>
  );
};

export default ContactForm;