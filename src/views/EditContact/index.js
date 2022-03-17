import React from 'react';
import { Typography } from '@mui/material';
import ContactForm from 'components/ContactForm';

const EditContact = () => (
  <div>
    <Typography variant="h1">Edit Contact</Typography>
    <ContactForm mode="Edit" />
  </div>
);

export default EditContact;
