import React from 'react';

import './contact-page.styles.scss';

const ContactPage = () => (
  <div className='contactPage'>
    <form>
    <label>
      Name:
      <input type="text" name="name" />
    </label>
    <input type="submit" value="Submit" />
  </form>
  </div>
)

export default ContactPage;